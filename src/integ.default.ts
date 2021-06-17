import * as cdk from '@aws-cdk/core';
import { ManagedIdentity } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'MyStack');

new ManagedIdentity(stack, 'ManagedDomain');