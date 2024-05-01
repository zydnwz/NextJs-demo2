import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailPage() {
  return (
    <Fragment>
      <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/2/21/13-08-08-hongkong-by-RalfR-088.jpg"
        title="First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup."
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
    return {

      fallback: false,
      paths: [
        { params: { meetupId: 'm1' } },
        { params: { meetupId: 'm2' } },
        { params: { meetupId: 'm3' } } 
      ]
    };
  }

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
      props: {
        meetupData:{
            image:'https://upload.wikimedia.org/wikipedia/commons/2/21/13-08-08-hongkong-by-RalfR-088.jpg',
            id: 'm1',
            title: 'First Meetup',
            address: '123 Main St, New York, NY',
            description: 'This is our first meetup.',
        }
      },
      revalidate: 10 
    };
  }

export default MeetupDetailPage;
