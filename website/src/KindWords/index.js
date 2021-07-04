import React, { useState } from 'react'
import { Grid } from "@material-ui/core"
import Carousel, { Dots, autoplayPlugin } from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';

import Heading from '../Heading'
import Section from '../Section'

import "./index.css"
import Quote from '../Quote'

import quotes from "./quotes"



const KindWords = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0)

    return <Section>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Heading text="Kind Words..." align="right" />
            </Grid>
            <Grid container spacing={2} alignContent="center" justify="center" className="quotes-carousel">
                <Carousel
                    value={currentSlide}
                    onChange={setCurrentSlide}
                    slides={quotes.map(quote => <Quote quote={quote} />)}
                    draggable={false}
                    plugins={['arrows', 'infinite', {
                        resolve: autoplayPlugin,
                        options: {
                          interval: 50000,
                        }
                      },]}
                />
                <Dots value={currentSlide} onChange={setCurrentSlide} number={quotes.length} />
            </Grid>
        </Grid>
    </Section>
}
  
export default KindWords;