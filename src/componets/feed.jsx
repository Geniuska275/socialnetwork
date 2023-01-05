import { Checkbox, Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
import React from "react"

export default function Feed(){
    return(
        <Box flex={4}>
            <Card sx={{margin:"10px"}}>
                <CardHeader
                    avatar={
                        <Avatar src="origin.jpg" arial-label="recipe">
                            KA
                        </Avatar> 
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title="Kingsley Aigbojie"
                    subheader="January 1,2023"
                />
                <CardContent>
                    <Typography variant="body2" color="text.seceondary">
                        Welcome to the new year everyone,am very excited and am wishing you a productive 2023.



                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="15%"
                image="brains.jpg"
                alt=""/>
                <CardActions>
                    <IconButton aria-label="Add to favorite">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share/>
                    </IconButton>
                </CardActions>
            </Card>
            <Card  sx={{margin:"10px"}}>
                <CardHeader
                    avatar={
                        <Avatar src="king.png" arial-label="recipe">
                            KA
                        </Avatar> 
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title="Ehichoya Blessing"
                    subheader="January 2,2023"
                />
                <CardContent>
                    <Typography variant="body2" color="text.seceondary">
                        Welcome to the new year everyone,am very excited and am wishing you a productive 2023.



                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="15%"
                image="origin.jpg"
                alt=""/>
                <CardActions>
                    <IconButton aria-label="Add to favorite">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share/>
                    </IconButton>
                </CardActions>
            </Card>
            <Card  sx={{margin:"10px"}}>
                <CardHeader
                    avatar={
                        <Avatar src="king.png" arial-label="recipe">
                            KA
                        </Avatar> 
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title="Esther Aigbojie"
                    subheader="January 2,2023"
                />
                <CardContent>
                    <Typography variant="body2" color="text.seceondary">
                        Welcome to the new year everyone,am very excited and am wishing you a productive 2023.



                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="15%"
                image="origin.jpg"
                alt=""/>
                <CardActions>
                    <IconButton aria-label="Add to favorite">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share/>
                    </IconButton>
                </CardActions>
            </Card>
    
            <Card  sx={{margin:"10px"}}>
                <CardHeader
                    avatar={
                        <Avatar src="king.png" arial-label="recipe">
                            KA
                        </Avatar> 
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title="Kelvin Omozokpia"
                    subheader="January 1,2023"
                />
                <CardContent>
                    <Typography variant="body2" color="text.seceondary">
                        Welcome to the new year everyone,am very excited and am wishing you a productive 2023.



                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="15%"
                image="origin.jpg"
                alt=""/>
                <CardActions>
                    <IconButton aria-label="Add to favorite">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share/>
                    </IconButton>
                </CardActions>
            </Card>
    
            <Card  sx={{margin:"10px"}}>
                <CardHeader
                    avatar={
                        <Avatar src="king.png" arial-label="recipe">
                            KA
                        </Avatar> 
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title="Peter Stewart"
                    subheader="January 3,2023"
                />
                <CardContent>
                    <Typography variant="body2" color="text.seceondary">
                        Welcome to the new year everyone,am very excited and am wishing you a productive 2023.



                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="15%"
                image="origin.jpg"
                alt=""/>
                <CardActions>
                    <IconButton aria-label="Add to favorite">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share/>
                    </IconButton>
                </CardActions>
            </Card>
    
            <Card  sx={{margin:"10px"}}>
                <CardHeader
                    avatar={
                        <Avatar src="king.png" arial-label="recipe">
                            KA
                        </Avatar> 
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert/>
                        </IconButton>
                    }
                    title="Osaretin Precious"
                    subheader="January 1,2023"
                />
                <CardContent>
                    <Typography variant="body2" color="text.seceondary">
                        Welcome to the new year everyone,am very excited and am wishing you a productive 2023.



                    </Typography>
                </CardContent>
                <CardMedia
                component="img"
                height="15%"
                image="origin.jpg"
                alt=""/>
                <CardActions>
                    <IconButton aria-label="Add to favorite">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color:"red"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share/>
                    </IconButton>
                </CardActions>
            </Card>
    
    
        </Box>
    )
}

