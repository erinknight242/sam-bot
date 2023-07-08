import { App, AwsLambdaReceiver } from '@slack/bolt';
import hello from './scripts/hello';

// Initialize your custom receiver
const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET || '',
});

// Initializes your app with your bot token and app token
const app = new App({
  token: process.env.SLACK_BOT_TOKEN || '',
  receiver: awsLambdaReceiver,
});

// Initialize scripts
hello(app);

// Handle the Lambda function event
export const lambdaHandler = async (event: any, context: any, callback: any) => {
  try {
    const handler = await awsLambdaReceiver.start();
    return handler(event, context, callback);
  } catch (err) {
    console.log(err);
    return err;
  }
};
