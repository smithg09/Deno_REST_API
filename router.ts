/**
 * @author  Smith Gajjar
 * @version 1.0.0
 * @date    17/05/2020
 * @description    User Routes for api calls.
 */


import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  ping
} from "./controllers/UserController.ts";

const router = new Router();

router.get("/users", getUsers)
  .post("/user", createUser)
  .get("/user/:id", getUser)
  .put("/user/:id", updateUser)
  .delete("/user/:id", deleteUser)
  .get("/ping", ping);

export default router;
