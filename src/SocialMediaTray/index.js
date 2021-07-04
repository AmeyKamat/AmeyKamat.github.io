import React from 'react'
import { Grid } from "@material-ui/core"

import "./index.css"
import SocialMedialLink from '../SocialMediaLink'

import socialMedia from './socialMedia'



const SocialMediaTray = props => {

    return <Grid container spacing={1} { ...props }>
        {
            socialMedia.map(medium => <Grid item>
                <SocialMedialLink type={medium.type} url={medium.url} tooltip={medium.tooltip} />
            </Grid>)
        }
    </Grid>
}
  
export default SocialMediaTray;