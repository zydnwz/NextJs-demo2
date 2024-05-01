import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

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

function HomePage() {
  return (
  <Layout>
     <MeetupList meetups={DUMMY_MEETUPS} />
  </Layout>
   
  );
}

export default HomePage;
