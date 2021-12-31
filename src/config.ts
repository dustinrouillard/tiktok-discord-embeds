import { config } from 'dotenv';
config();

export const DiscordToken = process.env.BOT_TOKEN as string;
export const WorkerHost = process.env.WORKER_HOST || 'https://vm.dstn.to';

export const TiktokRegex = /http[s]:\/\/(?:vm\.|www\.)?tiktok\.com\/(?:@[a-zA-Z0-9_.]{1,}\/video\/([0-9]{1,})|([a-zA-Z0-9_.]{1,}))/i;

export const GuildBlacklist = process.env.GUILD_BLACKLIST?.split(',') || [];
