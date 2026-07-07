import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

try {
    await client.connect();
    console.log("Connected!");
} catch (err) {
    console.error(err);
}

await client.close();