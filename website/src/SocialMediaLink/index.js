import React from 'react';

import { IconButton, Link, Tooltip } from '@material-ui/core';

import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';

import "./index.css"

const SocialMedialLink = props => {
    const { 
        type,
        url,
        tooltip,
    } = props;

    const getIcon = type => {
        switch (type.toLowerCase()) {
            case "github": return <GithubIcon fontSize="large" className="social-link-icon" />
            case "linkedin": return <LinkedInIcon fontSize="large" className="social-link-icon" />
            case "email": return <DraftsIcon fontSize="large" className="social-link-icon" />
            default: <></>
        }
    }

    return <Link target="_blank" rel="noreferrer" href={url} underline="none">
        <IconButton color="inherit" aria-label={tooltip}>
            <Tooltip title={tooltip} placement="top" arrow>
                { getIcon(type) }
            </Tooltip>
        </IconButton>
    </Link>
}
  
export default SocialMedialLink;