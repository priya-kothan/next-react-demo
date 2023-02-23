import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://priya:8WkZP0UN2RgWgGNW@cluster0.cgwklk9.mongodb.net/transportprovider?retryWrites=true&w=majority'
    );
    const db = client.db();

    const transportproviderCollection = db.collection('transportprovider');

    const result = await transportproviderCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'transportprovider inserted!' });
  }
}

export default handler;
