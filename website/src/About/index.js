import React from 'react'
import { Grid, Chip } from "@material-ui/core"

import Heading from '../Heading'
import Section from '../Section'

import "./index.css"
import HeadShot from "./amey_kamat.jpeg"



const About = () => {

    const skills = [ 
        "Java", "Python", "JavaScript", "Spring Boot", "React", "Redux", "MySQL", "Cassandra", "MongoDB", "Kubernetes", "RabbitMQ",
        "Domain Driven Design", "CQRS", "Event Driven Architecture"
    ]

    return <Section>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Heading text="Hey there! I'm Amey" align="right" />
            </Grid>
            <Grid item xs={12} sm={5}>
                <img src={HeadShot} className="portrait-photo img-center" alt="Amey Kamat"/>
            </Grid>
            <Grid item xs={12} sm={7}>
        
                <div className="about-text">
                    {
                        `
                        I'm a Fullstack Software Developer in Bengaluru, India. I have a strong passion for building Scalable 
                        Software Platforms that add value to the End Users.
                        `
                    }
                </div>
                <div className="skill-tags">
                    {
                        skills.map(tag => <Chip 
                            variant="outlined" 
                            size="medium" label={tag}
                            clickable
                            className="skill-tag"
                        />)
                    }
                </div>
            </Grid>
        </Grid>
    </Section>
}
  
export default About;