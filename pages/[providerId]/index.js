import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import TransportProviderDetail from '../../components/transports/TransportProviderDetail';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        {/* <title>{props.meetupData.title}</title> */}
        <meta name='description' content={props.TransportData.description} />
      </Head>
      <TransportProviderDetail
       data={props.TransportData}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://priya:8WkZP0UN2RgWgGNW@cluster0.cgwklk9.mongodb.net/transportprovider?retryWrites=true&w=majority'
  );
  const db = client.db();

  const transportproviderCollection = db.collection('transportprovider');

  const transports = await transportproviderCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: transports.map((trans) => ({
      params: { providerId: trans._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const providerId = context.params.providerId;

  const client = await MongoClient.connect(
    'mongodb+srv://priya:8WkZP0UN2RgWgGNW@cluster0.cgwklk9.mongodb.net/transportprovider?retryWrites=true&w=majority'
  );
  const db = client.db();

  const transportproviderCollection = db.collection('transportprovider');

  const selectedProvider = await transportproviderCollection.findOne({
    _id: ObjectId(providerId),
  });

  client.close();

  return {
    props: {
      TransportData: {
          id: selectedProvider._id.toString(),
          owner_name: selectedProvider.owner_name,
          vehicle_no: selectedProvider.vehicle_no,
          driver_name: selectedProvider.driver_name,
          phone_no: selectedProvider.phone_no,
          licence_no: selectedProvider.licence_no,
          service_type: selectedProvider.service_type,
          address: selectedProvider.address,
          description: selectedProvider.description,
      },
    },
  };
}

export default MeetupDetails;
