import React from 'react';
import { Container } from '@material-ui/core';

import "./index.css"
import SocialMediaTray from '../SocialMediaTray';


const LandingScreen = () => {

    return <Container maxWidth={false} className="landing-screen">
        <div className="intro-title">
            Amey Kamat
        </div>
        <div className="intro-description">
            Fullstack Software Developer
        </div>
        <SocialMediaTray  justify="center" className="social-icons" />
    </Container>
}
  
export default LandingScreen;