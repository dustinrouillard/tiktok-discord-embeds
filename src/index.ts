import Discord from 'discord.js';

import { SetConfig, Log } from '@dustinrouillard/fastify-utilities/modules/logger';
SetConfig({ disableTimestamp: true, logColor: 'reset', debugColor: 'yellow' });

import { DiscordToken, TiktokRegex, WorkerHost } from './config';

const client = new Discord.Client();

client.on('ready', () => Log(`Connected as ${client.user?.tag}`));

client.on('message', (msg) => {
  if (msg.author.id == client.user?.id) return;

  const matched = TiktokRegex.exec(msg.content);
  if (matched && matched[0]) {
    const url = new URL(matched[0].split(' ')[0].trim());
    msg.channel.send(`TikTok shared by ${msg.author.tag}\n${WorkerHost}${url.pathname}`);
  }
});

client.login(DiscordToken);