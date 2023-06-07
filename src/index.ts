import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv';

dotenv.config({path: "./.env"});

// console.log("env", dotenv.config({path: "./.env", override: true}));

//@ts-ignore
const tgBot = new Telegraf(process.env.API_TOKEN);

tgBot.start(async (ctx: any) => await ctx.reply("Hi!"))
tgBot.hears('/hey', async (ctx: any) => await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello Baby!`));
tgBot.hears('/createshop', async (ctx: any) => await ctx.telegram.sendMessage(ctx.message.chat.id, `createshop`));
tgBot.hears('/showmyshops', async (ctx: any) => await ctx.telegram.sendMessage(ctx.message.chat.id, `showmyshops`));

tgBot.launch();

// Enable graceful stop
process.once('SIGINT', () => tgBot.stop('SIGINT'));
process.once('SIGTERM', () => tgBot.stop('SIGTERM'));
