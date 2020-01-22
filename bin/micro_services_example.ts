#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { ServiceStack } from '../lib/service_stack';

const DOMAIN_NAME = ''; // TODO: fill in your api's custom domain (api.example.com)
const DOMAIN_NAME_ALIAS_HOSTED_ZONE_ID = ""; // TODO: fill in your domain name alias's hosted zone
const DOMAIN_NAME_ALIAS_TARGET = ""; // TODO: fill in your domain name alias's target (*.cloudfront.net)

const app = new cdk.App();
new ServiceStack(app, 'Service1', {
  DOMAIN_NAME,
  BASE_PATH: 'service1',
  DOMAIN_NAME_ALIAS_HOSTED_ZONE_ID,
  DOMAIN_NAME_ALIAS_TARGET
});
new ServiceStack(app, 'Service2', {
  DOMAIN_NAME,
  BASE_PATH: 'service2',
  DOMAIN_NAME_ALIAS_HOSTED_ZONE_ID,
  DOMAIN_NAME_ALIAS_TARGET
});