import React from 'react'
import { Grid, Container, Link } from "@material-ui/core"

import "./index.css"
import SocialMediaTray from '../SocialMediaTray'



const Footer = () => {

    return <Container maxWidth={false} className="footer">
        <Grid container alignItems="flex-start" >
            <Grid item xs={12} sm={4} className="footer-brand">
                AmeyKamat
            </Grid>
            <Grid item xs={12} sm={8} className="footer-contact">
                <div className="footer-contact-title">
                    Get In Touch
                </div>
                <div className="footer-contact-line">I am open to all kinds of queries, questions and suggestions.</div>
                <div className="footer-contact-line">If you want to get in touch with me, you can write to me at <strong>amey@ameykamat.in</strong>.</div>
                <div className="footer-contact-line">You can also connect with me on:</div>
                <SocialMediaTray justify="flex-end" className="footer-contact-social-icons" />
            </Grid>
        </Grid>
        <Grid container alignItems="flex-end" justify="center" className="copyright-notice">
            {
                `© 2021, Amey Kamat. ALL RIGHTS RESERVED`
            }
        </Grid>
    </Container>
}
  
export default Footer;