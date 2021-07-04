import React from 'react'
import { Grid, Paper } from "@material-ui/core"

import "./index.css"



const Quote = props => {

    const { quote } = props

    return <Grid item xs={12}>
        <Paper className="quote-box">
            <div className="quote-text">
                { `"${quote.quote}"` }
            </div>
            <div className="quote-person">
                { quote.person }
            </div>
            <div className="quote-designation">
                { `${quote.designation}, ${quote.organisation}` }
            </div>
        </Paper>
        
    </Grid>
}
  
export default Quote;