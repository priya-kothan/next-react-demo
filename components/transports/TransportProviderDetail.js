import classes from './TransportProviderDetail.module.css';

function TransportProviderDetail(props) {
  return (
    <section className={classes.detail}>
      <div>
           <div> Owner Name: </div>
          <div>{props.data.owner_name}</div>
          <div> Vehicle No: </div>
          <div>{props.data.vehicle_no}</div>
          <div> Driver Name: </div>
          <div>{props.data.driver_name}</div>
          <div> Phone: </div>
          <div>{props.data.phone_no}</div>
          <div> Licence No: </div>
          <div>{props.data.licence_no}</div>
          <div> Service Type: </div>
          <div>{props.data.service_type}</div>
          <div> Description: </div>
          <div>{props.data.description}</div>
          <div> Address: </div>
      <address>{props.data.address}</address>
      </div>
     
    </section>
  );
}


export default TransportProviderDetail;


