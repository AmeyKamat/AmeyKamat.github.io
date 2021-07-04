import React from 'react';

import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Chip } from '@material-ui/core';

import "./index.css"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ProjectLink from '../ProjectLink';


const PortfolioItem = props => {
    const { 
        size = 3,
        project,
        onClick
    } = props;

    const handleClick = project => {
        console.log(project)
        onClick(project)
    }

    return <Grid item xs={12} sm={size} onClick={() => handleClick(project)}>
        <Card>
            <CardActionArea>
                <CardMedia
                    className="portfolio-item"
                    image={project.image}
                    title={project.name}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={6} container>
                            <Typography className="project-title" gutterBottom variant="h6" align="left">
                                {project.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} container justify="flex-end">
                            <Chip variant="outlined" 
                                className="project-tag"
                                size="small" 
                                label={project.organisation} 
                                icon={<AccountBalanceIcon className="org-icon" />}
                            />
                        </Grid>
                    </Grid>
                    
                    <Typography variant="body2" color="textSecondary" component="p">
                        {project.oneLiner}
                    </Typography>
                    <div className="project-tags">
                        {
                            project.tags.map(tag => <Chip 
                                variant="outlined" 
                                size="small" label={tag}
                                clickable
                                className="project-tag"
                            />)
                        }
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    project.links.map(link => <ProjectLink type={link.type} 
                        tooltip={link.tooltip} 
                        url={link.url}
                    />)
                }
            </CardActions>
        </Card>
    </Grid>
}
  
export default PortfolioItem;