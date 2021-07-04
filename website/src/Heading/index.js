import React from 'react';
import Typography from '@material-ui/core/Typography';

import "./index.css"


const Heading = props => {
    const { text, align } = props;

    return <Typography variant="h2" align={align} className="heading">
        { text }
    </Typography>
}
  
export default Heading;