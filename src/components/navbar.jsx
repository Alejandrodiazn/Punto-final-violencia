import React, {useState} from 'react';

import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import Backdrop from './Backdrop';

const Navbar = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
      <SideDrawer show = {drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='mainNavDraw'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Resources</li>
            <li>Exit</li>
          </ul>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='mainNavMenu'onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
      </MainHeader>

    </React.Fragment>
  );

}

export default Navbar;
