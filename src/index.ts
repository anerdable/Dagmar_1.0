export * from './lib/async';
export * from './lib/number';

const path = require('path')
 require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

 console.log("dagmar äger");

// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const app = new App({
    token: 'xoxb-2262518295655-2262705096423-Hj5dLKN4gFDOgRVDOUpTo3WN',
    signingSecret: 'eaf51c216db5eb883a6de821e2ae0840'
  });
  // All the room in the world for your code
  (async () => {
    
  // Start your app
    await app.start(process.env.PORT || 3000);  console.log('⚡️ Bolt app is running!');
  })();