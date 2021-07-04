import React from 'react';

import { IconButton, Link, Tooltip } from '@material-ui/core';

import OpenInNew from '@material-ui/icons/OpenInNew';

import "./index.css"

const ExternalLink = props => {
    const { url, tooltip } = props;

    return <Link target="_blank" rel="noreferrer" href={url} underline="none">
        <IconButton color="inherit" aria-label={tooltip}>
            <Tooltip title={tooltip} placement="top" arrow>
                <OpenInNew fontSize="small" className="external-link-icon" />
            </Tooltip>
        </IconButton>
    </Link>
}
  
export default ExternalLink;