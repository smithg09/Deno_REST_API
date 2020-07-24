/**
 * @author  Smith Gajjar
 * @title   A Rest API made using Deno with mongodb integration.
 * @version 1.0.0
 * @date    17/05/2020
 * @description    starting server and @entry point for the application.
 * @commands
 *   @startApp : deno run --allow-env --allow-write --allow-read --allow-plugin --allow-net --unstable index.ts
 *   @reloadPuglins : deno run --allow-env --reload --allow-write --allow-read --allow-plugin --allow-net --unstable index.ts
 * 
 */

import app from "./app.ts";	
import { PORT } from './config/enviroments.ts';

async function start() {
  await app.listen({ port: PORT});
}

start();


console.log(`Listening on port ${PORT} ...`);
