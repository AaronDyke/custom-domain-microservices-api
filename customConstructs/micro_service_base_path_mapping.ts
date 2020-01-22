import cdk = require('@aws-cdk/core');
import { Construct } from '@aws-cdk/core';
import { DomainName, BasePathMapping, IRestApi } from '@aws-cdk/aws-apigateway';

interface MicroServiceBasePathMappingProps {
    path: string,
    api: IRestApi,
    domainName: string,
    domainNameAliasHostedZoneId: string,
    domainNameAliasTarget: string
}

export class MicroServiceBasePathMapping extends cdk.Construct {
  constructor(scope: Construct, id: string, props: MicroServiceBasePathMappingProps) {
      super(scope, id);
      const domainName = DomainName.fromDomainNameAttributes(this, "api-domain", {
          domainName: props.domainName,
          domainNameAliasHostedZoneId: props.domainNameAliasHostedZoneId,
          domainNameAliasTarget: props.domainNameAliasTarget
      });
      new BasePathMapping(this, props.path, {
          basePath: props.path,
          domainName: domainName,
          restApi: props.api
      });
  }
}