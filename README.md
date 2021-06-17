# cdk-ses-managed-domain

CDK construct to create managed identity of Amazon SES via Amazon WorkMail 

## ManagedIdentity

```ts
import { ManagedIdentity } from 'cdk-ses-managed-domain';

const identity = new ManagedIdentity(stack, 'ManagedDomain');
const domainName = identity.domainName;
```
