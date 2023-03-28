import React, {useState} from 'react';

import SideDrawer from './SideDrawer';
import MainHeader from './MainHeader';
import Backdrop from './Backdrop';
import NavLinks from './NavLinks';
import './Navbar.css'

const Navbar = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    console.log("ABRIENDO")
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    console.log("CERRANDO")
    setDrawerIsOpen(false);
  }
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
      {drawerIsOpen && (
        <SideDrawer show = {drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='mainNavDraw'>
            <NavLinks/>
        </nav>
      </SideDrawer>
      )}
      
      <MainHeader>
        <button className='mainNavMenu-btn'onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <nav className="mainNavHeader-nav">
          <ul>
            <NavLinks/>
          </ul>
        </nav>
      </MainHeader>

    </React.Fragment>
  );

}

export default Navbar;
