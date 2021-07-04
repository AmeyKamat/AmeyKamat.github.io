import React from 'react';
import { Container, Divider, Grid } from '@material-ui/core';

import "./index.css"


const Section = props => {
    const { 
        children, 
        fullScreen = false, 
        divide = true 
    } = props;

    return <Container maxWidth={false} className={fullScreen ? "full-screen-container" : "container"}>
        <Grid container className="innerGrid">
            { children }
        </Grid>
        { divide && <Divider variant="middle" /> }
    </Container>
}
  
export default Section;