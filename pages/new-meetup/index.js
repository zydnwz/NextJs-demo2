import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return;
    }

    router.push('/');
  }

  return (
    <Fragment>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
