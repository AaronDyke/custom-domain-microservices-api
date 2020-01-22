import cdk = require('@aws-cdk/core');
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';
import { Function, Runtime, Code } from '@aws-cdk/aws-lambda';
import path = require('path');
import { MicroServiceBasePathMapping } from '../customConstructs/micro_service_base_path_mapping';

interface MicroServiceStackProps extends cdk.StackProps {
  DOMAIN_NAME: string,
  BASE_PATH: string,
  DOMAIN_NAME_ALIAS_HOSTED_ZONE_ID: string,
  DOMAIN_NAME_ALIAS_TARGET: string
}

export class ServiceStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props?: MicroServiceStackProps) {
    super(scope, id, props);

    const serviceApi = new RestApi(this, `${id}Api`);

    // TODO: add your lambda functions
    const getLambda = new Function(this, `${id}Get`, {
      runtime: Runtime.NODEJS_12_X,
      handler: 'testFunction.handler',
      code: Code.fromAsset(path.join(__dirname, '../lambda')),
    })

    // TODO: create your lambda integrations
    const getLambdaIntegration = new LambdaIntegration(getLambda);
    
    // TODO: add resources to your api
    const myResource = serviceApi.root.addResource('resource');

    // TODO: add methods to resources
    serviceApi.root.addMethod('GET', getLambdaIntegration);
    myResource.addMethod('GET', getLambdaIntegration);

    // if MicroServiceStackProps exist then the custom domain is created
    if (props) {
      new MicroServiceBasePathMapping(this, `${props.BASE_PATH}BasePathMapping`,
        {
          path: props.BASE_PATH,
          api: serviceApi,
          domainName: props.DOMAIN_NAME,
          domainNameAliasHostedZoneId: props.DOMAIN_NAME_ALIAS_HOSTED_ZONE_ID,
          domainNameAliasTarget: props.DOMAIN_NAME_ALIAS_TARGET
        }
      )
    }
  }
}
