import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;

    const client = await MongoClient.connect('mongodb+srv://allforfre1:zaid@1999@cluster0.wnhgn5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne({
      title,
      image,
      address,
      description,
    });

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}
