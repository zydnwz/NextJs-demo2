import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/13-08-08-hongkong-by-RalfR-088.jpg',
    address: '123 Main St, New York, NY',
    description: 'This is our first meetup.',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/13-08-08-hongkong-by-RalfR-088.jpg',
    address: '456 Broadway, New York, NY',
    description: 'This is our second meetup.',
  },
];

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://allforfre1:zaid@1999@cluster0.wnhgn5z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 10 
  };
}



