import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import {  Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"
const Post = () => {
  return (
    <Card>
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
  )
}

export default Post