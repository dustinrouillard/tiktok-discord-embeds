import { config } from 'dotenv';
config();

export const DiscordToken = process.env.BOT_TOKEN as string;
export const WorkerHost = process.env.WORKER_HOST || 'https://vm.dstn.to';

export const URLRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export const GuildBlacklist = process.env.GUILD_BLACKLIST?.split(',') || [];
