// our-domain.com/new-meetup
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import NewTransportProvider from '../../components/transports/NewTransportProvider';

function TransportProviderPage() {
  const router = useRouter();

  async function addHandler(enteredMeetupData) {
    const response = await fetch('/api/new-transportprovider', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewTransportProvider onAddProvider={addHandler} />
    </Fragment>
  );
}

export default TransportProviderPage;
