import React from 'react'
import { Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from "@material-ui/core"

import Heading from '../Heading'
import Section from '../Section'
import ExternalLink from '../ExternalLink'

import "./index.css"
import { Brightness7, Description, EmojiObjects, VolumeUp } from '@material-ui/icons'



const Achievements = () => {

    return <Section>
        <Grid container spacing={2} alignItems="flex-start" width="2rem">
            <Grid item xs={12}>
                <Heading text="Things I am Proud of..." align="right" />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                    Publications
                </Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText
                                primary="Automating toolpath generation for 3-Axis CNC"
                                secondary={
                                    <>
                                        {`Tanay Gahlot, Amey Kamat and Dr. Pravati Swain, 2016 IEEE International Conference 
                                        on Industrial Technology (ICIT), Taipei, Taiwan, 2016, pp. 836-841. 
                                        doi: 10.1109/ICIT.2016.7474860`}
                                        <ExternalLink 
                                            url="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7474860&isnumber=7474713"
                                            tooltip="Conference Paper Listing"
                                        />
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                    Awards
                </Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><EmojiObjects /></ListItemIcon>
                            <ListItemText
                                primary="Pitch In Idea Award from Barclays"
                                secondary={
                                    <>
                                        {`Awarded Pitch In Idea award in Barclays for innovation`}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Brightness7 /></ListItemIcon>
                            <ListItemText
                                primary="Bronze Badges By EY"
                                secondary={
                                    <>
                                        {`Awarded Bronze Badges in EY for knowledge, experience & contribution in AI and Cybersecurity`}
                                        <ExternalLink 
                                            url="https://www.credly.com/users/ameykamat/badges"
                                            tooltip="EY Badges"
                                        />
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText
                                primary="Letter of Appreciation from IITB Professor"
                                secondary={
                                    <>
                                        {`Recieved LoR from Prof. Ganesh Ramakrishnan for contributing to RuralIVRS project`}
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><Description /></ListItemIcon>
                            <ListItemText
                                primary="Appreciation from Chief Minister, Goa"
                                secondary={
                                    <>
                                        {`Appreciation from CMO, Goa for contributing to fight against Covid19 pandemic`}
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">
                    Media Mentions
                </Typography>
                <Paper>
                    <List>
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><VolumeUp /></ListItemIcon>
                            <ListItemText
                                primary="Tech to the Rescue"
                                secondary={
                                    <>
                                        {`Kurio City, Navhind Times, 24 April 2020`}
                                        <ExternalLink 
                                            url="https://drive.google.com/file/d/1REkVU1H7D39FlbpLsaveX64N2hCOWoN2/view?usp=sharing"
                                            tooltip="Tech to the Rescue"
                                        />
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemIcon><VolumeUp /></ListItemIcon>
                            <ListItemText
                                primary="Young Minds Moulding Young Lives"
                                secondary={
                                    <>
                                        {`Kurio City, Navhind Times, 15 November 2013`}
                                        <ExternalLink 
                                            url="https://drive.google.com/file/d/0B6kMe5y2lWnfOFFyZnh1LXNNWUE/view?usp=sharing"
                                            tooltip="Young Minds Moulding Young Lives"
                                        />
                                    </>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    </Section>
}
  
export default Achievements;