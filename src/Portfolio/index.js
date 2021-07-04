import React, { useState } from 'react'
import { Grid } from "@material-ui/core"

import Heading from '../Heading'
import Section from "../Section"
import PortfolioItem from '../PortfolioItem'
import PortfolioModal from '../PortfolioModal'

import "./index.css"

import projects from "./projects"


const Portfolio = () => {

    const [ open, setOpen ] = useState(false)
    const [ selected, setSelected ] = useState({})

    const handleClick= project => { setSelected(project); setOpen(true) }

    return <Section>
        <Grid container justify="center">
            <Grid item xs={12}>
                <Heading text="My Projects" align="right" />
            </Grid>
            <Grid container className="portfolio-box" spacing={3} justify="center">
                {
                    projects.map((project, i) => <PortfolioItem project={project} key={i} onClick={handleClick}/>)
                }
            </Grid>
            <PortfolioModal project={selected} isOpen={open} onClose={() => setOpen(false)} />
        </Grid>
    </Section>
}
  
export default Portfolio;