# TikTok Discord Embeds

This discord bot listens in all chats it can see for Tiktok links of the following format and will send a new message containing an OpenGraph decorated embed for viewing the tiktok with the video right in discord chat.

- `https://vm.tiktok.com/ZMRjsP94a`
- `https://tiktok.com/@momma_mandy_plus7/video/6992363023767850246`

Of course these work with query params as well which will get ignored

Right now this only has auto embedding when it detects a link, but I'll add interactions soon and a way to disable the auto embeddding in certain places.

## Demo

![Discord Usage GIF](https://files.dstn.to/2c0f5c0bec98589e.gif)

## Environment

These are the required environment variables for the bot

```env
BOT_TOKEN="DISCORD_BOT_TOKEN"
WORKER_HOST="https://vm.dstn.to"
```

## Powered by

The Tiktok links are fetched and the OpenGraph embeds are created using the the Cloudflare Worker I created [here](https://dstn.to/tt-embeds)
