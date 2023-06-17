import { Collection, Db, ObjectId } from 'mongodb';
import clientPromise from '../api/auth/lib/mongodb';

export interface Book {
    _id: ObjectId;
    title: string;
    description: string;
}

let client;
let db: Db;
let bookDocuments: Collection<Document>;

async function init() {
  if (db) return;
    
  try {
    client = await clientPromise;
    db = await client.db('webclient');
    bookDocuments = await db.collection('books');
  } catch (error) {
    throw new Error('Failed to stablish connection to database');
  }
}

export async function getBooks(): Promise<Book[]>{
  try {
    if (!bookDocuments) await init();

    const result = await bookDocuments
      .find()
      .toArray();

    console.log('connect');
    console.log(result);


    const books: Book[] = JSON.parse(JSON.stringify(result));
        
    return books;
  } catch (error) {
    return [];
  }
}