import MeetupItem from './MeetupItem';

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