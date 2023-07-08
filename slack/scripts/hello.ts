import { MessageProps } from '../utils/types';
import { random } from '../utils/utils';

export const helloRegex = /hello/i;
export const whoRegex = /who are you?/i;

export default (app: any) => {
  app.message(helloRegex, async ({ message, say }: MessageProps) => {
    const greetings = [
      `Hey there <@${message.user}>!`,
      'Howdy!',
      `Hola, <@${message.user}>!`,
      `Hello <@${message.user}>!`,
    ];

    await say(greetings[random(greetings.length)]);
  });

  app.message(whoRegex, async ({ say }: any) => {
    const botType = process.env.NODE_ENV !== 'development' ? 'AWS bot' : 'local bot';
    await say(botType);
  });

  app.message('ping', async ({ say }: any) => {
    await say('Pong!');
  });
};
