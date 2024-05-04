import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

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

export default function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetups website</title>
        <meta
          name="description"
          content="Explore a wide range of meetups happening near you. Join interesting communities and connect with like-minded individuals."
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}
