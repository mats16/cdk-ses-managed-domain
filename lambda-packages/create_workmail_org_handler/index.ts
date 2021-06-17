import { CloudFormationCustomResourceHandler, CloudFormationCustomResourceResponse } from 'aws-lambda'
import { WorkMailClient, CreateOrganizationCommand, DeleteOrganizationCommand } from "@aws-sdk/client-workmail";
import axios from "axios";

const createOrg = async (region: string, alias: string) => {
  const client = new WorkMailClient({ region });
  const cmd = new CreateOrganizationCommand({ Alias: alias });
  const req = await client.send(cmd);
  return req.OrganizationId
};

const deleteOrg = async (region: string, organizationId: string) => {
  const client = new WorkMailClient({ region });
  const cmd = new DeleteOrganizationCommand({ OrganizationId: organizationId, DeleteDirectory: true });
  const req = await client.send(cmd);
  return req.OrganizationId
};

export const handler: CloudFormationCustomResourceHandler = async (event) => {
  const region: string = event.ResourceProperties.Region;
  const alias: string = event.ResourceProperties.Alias || event.RequestId.replace(/-/g, '');

  const organizationId = async () => {
    if (event.RequestType === 'Create') {
      const organizationId = await createOrg(region, alias);
      return organizationId
    } else if (event.RequestType === 'Update' ) {
      const oldOrganizationId = event.PhysicalResourceId
      const organizationId = await createOrg(region, alias)
      await deleteOrg(region, oldOrganizationId)
      return organizationId
    } else if (event.RequestType === 'Delete' ) {
      const oldOrganizationId = event.PhysicalResourceId
      try {
        await deleteOrg(region, oldOrganizationId)
      } finally {
        return oldOrganizationId
      }
    } else {
      return ''
    }
  };

  const response: CloudFormationCustomResourceResponse = {
    Status: 'SUCCESS',
    RequestId: event.RequestId,
    StackId: event.StackId,
    LogicalResourceId: event.LogicalResourceId,
    PhysicalResourceId: await organizationId(),
    Data: { Alias: alias }
  }
  await axios.put(event.ResponseURL, response, { headers: { "Content-Type": "application/json" } });
};