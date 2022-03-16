import Discord from 'discord.js';

import { SetConfig, Log } from '@dustinrouillard/fastify-utilities/modules/logger';
SetConfig({ disableTimestamp: true, logColor: 'reset', debugColor: 'yellow' });

import { DiscordToken, GuildBlacklist, URLRegex, WorkerHost } from './config';

const client = new Discord.Client();

client.on('ready', () => Log(`Connected as ${client.user?.tag}`));

client.on('message', (msg) => {
  if (msg.author.id == client.user?.id) return;
  if (msg.guild && GuildBlacklist.includes(msg.guild.id)) return;

  const matched = URLRegex.exec(msg.content);

  if (matched && matched[0]) {
    const url = new URL(matched[0]);
    if (!['vm.tiktok.com', 'tiktok.com'].includes(url.host)) return;

    if (url.host == 'tiktok.com' && !url.pathname.includes('@') && !url.pathname.includes('/video/')) return;

    if (msg.content == matched[0] && msg.deletable) msg.delete();

    msg.channel.send(`TikTok shared by ${msg.author.tag}\n${WorkerHost}${url.pathname}`);
  }
});

client.login(DiscordToken);
