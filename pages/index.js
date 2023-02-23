import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import TransportProviderList from '../components/transports/TransportProviderList';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      
      <TransportProviderList transports={props.transports} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
  
    'mongodb+srv://priya:8WkZP0UN2RgWgGNW@cluster0.cgwklk9.mongodb.net/transportprovider?retryWrites=true&w=majority'
  );
  const db = client.db();

  const transportproviderCollection = db.collection('transportprovider');

  const transports = await transportproviderCollection.find().toArray();

  client.close();

  return {
    props: {
      transports: transports.map((trans) => ({
       id: trans._id.toString(),
        owner_name: trans.owner_name,
        vehicle_no: trans.vehicle_no,
        driver_name: trans.driver_name,
        phone_no: trans.phone_no,
        licence_no: trans.licence_no,
        service_type: trans.service_type,
        address: trans.address,
        description: trans.description,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
