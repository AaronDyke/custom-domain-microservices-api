# Microservice API with Custom Domain using AWS CDK

## What/Why is this repository?
This repository shows an example of a micro service backed api that uses a custom domain. The tools used to create the api are the AWS CDK, Lambda, Api Gateway, Route53, Certificate Manager, and CloudFormation. I searched for a good example of an AWS microservices api with a custom domain and could not find any examples so I decided to be the one to create that example.

## Steps to make this work on your machine
1. Cone this repository
2. Install and setup the AWS CDK. [Instructions](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)
3. Run `npm install` in the cloned repo
4. Create your custom domain [Video reference](https://www.youtube.com/watch?v=gd-Qa-HQHMs)
5. Fill in the variables in the `/bin/micro_services_example.ts` file
6. Run `npm run build`
7. Run `cdk deploy '*'` to deploy both services attached to your custom domain

# Questions you may be asking yourself
## What is the AWS CDK?
Simply put the AWS CDK is infrastructure as code, actual code. The AWS CDK allows you to write code in your favorite coding language (TypeScript, JavaScript, Python, Java, or C#/.Net) and it will transpile that code into a CloudFormation template. To learn more about the AWS CDK I highly recommend:
 * [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
 * [CDK Workshop](https://cdkworkshop.com/)
 * [The CDK API Reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)

## How do I create a custom domain?
Do you wanna learn from me or from AWS themselves? Pallavi, an AWS Cloud Support Engineer, has a great [video](https://www.youtube.com/watch?v=gd-Qa-HQHMs) explaining the setup of a custom domain with api gateway. If you follow her video she will help you setup everything you need to use this repository to create base path mappings from your custom domain to your microservices.

## How do I link that domain to my API's?
Here is where this repository comes into play. Once you have followed Pallavi's steps and   created a custom domain you should be able to find the three variables associated with your api's custom domain:
1. Your domain name (ex. api.example.com)
2. Your domain name's hosted zone id
3. Your domain name's alias target

These three variables are used in /bin/micro_services_example.ts to pass information to your service stacks. Each service stack should then create it's own API and then implement the MicroServiceBasePathMapping custom construct to attach each service api to a base path on the custom domain

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk destroy '*'` removes all the stacks created by this repository
