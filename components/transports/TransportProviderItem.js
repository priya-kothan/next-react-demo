import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './TransportProviderItem.module.css';

function TransportProviderItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
       
        <div className={classes.content}>
          <div>Owner Name   : {props.owner_name}</div>
          <div>Phone No     : {props.phone_no}</div>
          <div>Service Type :{props.service_type}</div>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default TransportProviderItem;
