import { config } from 'dotenv';
config();

export const DiscordToken = process.env.BOT_TOKEN as string;
export const WorkerHost = process.env.WORKER_HOST || 'https://vm.dstn.to';

export const TiktokRegex = /http[s]:\/\/(?:(vm\.)|(www\.))?tiktok\.com\/(?:(.*)|(.*)\/video\/(.*))/i;