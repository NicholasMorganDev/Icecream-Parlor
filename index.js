import { MongoClient } from "mongodb";
import { get } from 'http';

import { credentials } from './credentials.js'

const mongoURI = credentials
export const client = new MongoClient(mongoURI)
const database = client.db('products')

export const icecreamCollection = database.collection('')