import * as cdk from '@aws-cdk/core';
import { ManagedIdentity } from '../src';
import '@aws-cdk/assert/jest';

test('create secret', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app);
  new ManagedIdentity(stack, 'TestDomain', { sesRegion: 'us-west-2' });
  expect(stack).toHaveResource('AWS::Lambda::Function');
});