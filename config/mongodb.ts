/**
 * @author  Smith Gajjar
 * @version 1.0.0
 * @date    17/05/2020 
 * @description    MONGODB Database Connection.
 */

import { init, MongoClient, Database } from "https://deno.land/x/mongo@v0.6.0/mod.ts";

// Initialize the plugin
await init();

class databaseConfig {
  private client: MongoClient;
  
  constructor(private dbName: string, private url: string) {
    this.client = {} as MongoClient;
  }

  // Database connection with local server
  connect(): void {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }

  get getDatabase(): Database {
    return this.client.database(this.dbName);
  }
}

const mongodb = new databaseConfig("deno-api-rest", "mongodb://localhost:27017");
mongodb.connect();

export default mongodb;
