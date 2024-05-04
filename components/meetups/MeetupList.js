import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({ meetups }) {
  return (
    <ul>
      {meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;