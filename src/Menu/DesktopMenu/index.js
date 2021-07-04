import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import "./index.css"
import { Button, Link } from '@material-ui/core';

const DesktopMenu = props => {

    const { items } = props
    const trigger = useScrollTrigger({disableHysteresis: true})
    const backgroundClass = trigger ? "background-on-scroll" : "background-on-top"

    return <AppBar position="fixed" className={`${backgroundClass} desktop-menu`}>
        <Toolbar>
            <Typography variant="h3" className="logo">
                AmeyKamat
            </Typography>
            {
                items.map(item => <Link 
                        href={item.url} underline="none" className="menu-item"
                        rel={`${item.external ? "noreferrer": ""}`}
                        target={`${item.external ? "_blank": ""}`}>
                    <Button size="large" color="inherit" className="menuButton">{item.text}</Button>
                </Link>)
            }
        </Toolbar>
    </AppBar>
}
  
export default DesktopMenu;