export * from './lib/async';
export * from './lib/number';

const path = require('path')
 require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

 console.log("dagmar äger");

// Require the Bolt package (github.com/slackapi/bolt)
const { App } = require("@slack/bolt");
const app = new App({
    token: 'xoxb-2262518295655-2278755172451-PGkeC3Qsgc5JasW2AnzvgBpF',
    signingSecret: 'eaf51c216db5eb883a6de821e2ae0840'
  });

  //@ts-ignore
  app.event('app_home_opened', async ({ event, client, context }: {event:any, client:any, context:any}) => {
    try {
      /* view.publish is the method that your app uses to push a view to the Home tab */
      //@ts-ignore
      const result = await client.views.publish({      /* the user that opened your app's app home */
        user_id: event.user,      /* the view object that appears in the app home*/
        view: {
          type: 'home',
          callback_id: 'home_view',        /* body of the view */
          blocks: [
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "*Welcome to your _App's Home_* :tada:"
              }
            },
            {
              "type": "divider"
            },
            {
              "type": "section",
              "text": {
                "type": "mrkdwn",
                "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
              }
            },
            {
              "type": "actions",
              "elements": [
                {
                  "type": "button",
                  "text": {
                    "type": "plain_text",
                    "text": "Click me!"
                  }
                }
              ]
            }
          ]
        }
      });
      //console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  });


  (async () => {
    
  // Start your app
    await app.start(process.env.PORT || 3000);  console.log('⚡️ Bolt app is running!');
  })();