import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Transports Blog</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Transports</Link>
          </li>
          <li>
            <Link href='/new-transport'>Add Transport Provider</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
