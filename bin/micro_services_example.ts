#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { MicroServicesExampleStack } from '../lib/micro_services_example-stack';

const app = new cdk.App();
new MicroServicesExampleStack(app, 'MicroServicesExampleStack');
