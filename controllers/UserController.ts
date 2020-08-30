/**
 * @author  Smith Gajjar
 * @version 1.0.5
 * @date    20/05/2020
 * @description  Route callbacks for user controller.
 * @interface (UserModel)
 * @exports {getUsers, getUser, createUser, updateUser, deleteUser }
 */

import { Context } from "https://deno.land/x/oak/mod.ts";
import mongodb from "../config/mongodb.ts";
import UserModel from "../models/UserModel.ts";

const db: any = mongodb.getDatabase;
const usersCollection: any = db.collection("users");

export const getUsers = async ({ response }: Context) => {
  try {
    const users: UserModel[] = await usersCollection.find();
    response.status = 200;
    response.body = users;
  } catch (error) {
    response.status = 404;
    response.body = {
      error,
      message: `users not found.`,
    };
  }
};

export const getUser = async ({ response, params: {id} }: Context | any) => {
  try {
    const user: UserModel = await usersCollection.findOne(
      { _id: { "$oid": id } },
    );

    if (user) {
      response.status = 200;
      response.body = user;
      return;
    }

    response.status = 404;
    response.body = { message: `user not found` };
  } catch (error) {
    response.status = 404;
    response.body = {
      error,
      message: `user not found.`,
    };
  }
};

export const createUser = async ({ request, response }: Context) => {
  try {
    const { value: {username, password} } = await request.body();
    console.log(username, password);
    const user = await usersCollection.insertOne({
      username,
      password,
    });

    response.body = { message: "OK", user };
    response.status = 201;
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};

export const updateUser = async ({ request, response, params: {id} }: Context | any) => {
  try {
    const body = await request.body();

    const user: UserModel = await usersCollection.findOne(
      { _id: { "$oid": id } },
    );

    if (user) {
      const { matchedCount } = await usersCollection.updateOne(
        { _id: { "$oid": id } },
        { $set: body.value },
      );

      response.status = 204;
      response.body = { message: "OK", matchedCount };
      return;
    }

    response.status = 404;
    response.body = { message: `user not found` };
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};

export const deleteUser = async ({response, params: {id}}: Context | any) => {
  try {
    const user: UserModel = await usersCollection.findOne(
      { _id: { "$oid": id } },
    );

    if (user) {
      const deleteCount = await usersCollection.deleteOne({ _id: { "$oid": id } });
      response.status = 200;
      response.body = { message: "OK", deleteCount };
      return;
    }
    response.status = 404;
    response.body = { message: `user not found` };
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};

export const ping = async ({response}: Context | any) => {
  try {
      response.status = 200;
      response.body = {message: "Server Running"};
      return;
  } catch (error) {
    response.status = 500;
    response.body = {
      error,
      message: `Internal server error.`,
    };
  }
};
