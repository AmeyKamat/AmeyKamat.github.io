import React from 'react';

import "./index.css"
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import menuItems from "./menuItems"

const Menu = () => {
    return <>
        <DesktopMenu items={menuItems} />
        <MobileMenu items={menuItems} />
    </>
}
  
export default Menu;