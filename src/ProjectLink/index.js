import React from 'react';

import { IconButton, Link, Tooltip } from '@material-ui/core';

import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import AttachmentIcon from '@material-ui/icons/Attachment';

import "./index.css"

const ProjectLink = props => {
    const { 
        type,
        url,
        tooltip,
    } = props;

    const getIcon = type => {
        switch (type.toLowerCase()) {
            case "github": return <GithubIcon fontSize="small" className="project-link-icon" />
            case "repository": return <CodeIcon fontSize="small" className="project-link-icon" />
            case "article": return <DescriptionIcon fontSize="small" className="project-link-icon" />
            case "youtube": return <YouTubeIcon fontSize="small" className="project-link-icon" />
            case "website": return <LanguageIcon fontSize="small" className="project-link-icon" />
            default: return <AttachmentIcon fontSize="small" className="project-link-icon" />
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
  
export default ProjectLink;