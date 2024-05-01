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

export default MeetupDetailPage;
