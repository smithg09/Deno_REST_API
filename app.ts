/**
 * @author  Smith Gajjar
 * @version 1.0.0
 * @date    17/05/2020
 * @description    Server & Router Initialization.
 */

import { Application } from 'https://deno.land/x/oak/mod.ts';
import router from "./router.ts";


const app = new Application();

// routes
app.use(router.routes())
app.use(router.allowedMethods())


export default app;
