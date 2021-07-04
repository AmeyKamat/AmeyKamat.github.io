import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import "./index.css"
import { Drawer, IconButton, Link, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const MobileMenu = props => {

    const { items } = props

    const trigger = useScrollTrigger({disableHysteresis: true})
    const [ open, setOpen ] = useState(false)
    const backgroundClass = trigger ? "background-on-scroll" : "background-on-top"

    return <AppBar position="fixed" className={`${backgroundClass} mobile-menu`}>
        <Toolbar>
            <Typography variant="h4" className="logo">
                AmeyKamat
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
                <List className="mobile-menu-list">
                    {
                        items.map(item => <Link 
                                href={item.url} underline="none" className="menu-item" 
                                rel={`${item.external ? "noreferrer": ""}`}
                                target={`${item.external ? "_blank": ""}`}>
                            <ListItem button onClick={() => setOpen(false)}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        </Link>)
                    }
                </List>
            </Drawer>
        </Toolbar>
    </AppBar>
}
  
export default MobileMenu;