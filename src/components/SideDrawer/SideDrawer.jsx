import React, {useRef} from 'react'
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const menu = useRef(null);
  const content = (
    <CSSTransition
      nodeRef={menu}
      in={props.show}
      timeout={5000}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside ref={menu} className='side-drawer' onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return content;
};

export default SideDrawer;