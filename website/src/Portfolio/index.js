import React from 'react'
import { Grid } from "@material-ui/core"

import Heading from '../Heading'
import Section from "../Section"
import PortfolioItem from '../PortfolioItem'

import "./index.css"

import projects from "./projects"


const Portfolio = () => {

    return <Section>
        <Grid container justify="center">
            <Grid item xs={12}>
                <Heading text="My Projects" align="right" />
            </Grid>
            <Grid container className="portfolio-box" spacing={3} justify="center">
                {
                    projects.map((project, i) => <PortfolioItem project={project} key={i} />)
                }
            </Grid>
        </Grid>
    </Section>
}
  
export default Portfolio;