import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function RightBar() {
  return (
    <Box flex={2}  p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={300}>

    <Typography variant="h6" fontWeight={100}mt={2} mb={2}>
      Online Friends
    </Typography>
    <AvatarGroup max={7}>
      <Avatar src="king.png" alt=""/>
      <Avatar src="origin.jpg" alt=""/>
      <Avatar src="brains.jpg" alt=""/>
      <Avatar src=" " alt=""/>
      <Avatar src="king.png" alt=""/>
      <Avatar src="origin.jpg" alt=""/>
      <Avatar src="brains.jpg" alt=""/>
      <Avatar src="king.png" alt=""/>
      <Avatar src="king.png" alt=""/>


    </AvatarGroup>
    
   
    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
      Latest Conversation
    </Typography>
    <List m={2}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="Genius ,its time to master MUI"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          {"- Yes boss, definitely"}
          
          
          
          </>

        }>



        </ListItemText>
      </ListItem>
       <Divider variant="inset" component="li"/>
       <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="When are you going to office?"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          
          {"-Next week dear"}
          
          
          </>

        }>



        </ListItemText>
      </ListItem>
       <Divider variant="inset" component="li"/>
      <ListItem alignItems="flex-start">

        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="lets write some javascript"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          {"- okay ,stewart"}
          
          
          
          </>

        }> 



        </ListItemText>
      </ListItem>
       <Divider variant="inset" component="li"/>
       
       <ListItem alignItems="flex-start" mb={2}>
        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          {"-wish i could come over this...."}
          
          
          
          </>

        }>



        </ListItemText>
      </ListItem>
      <Divider variant="inset" component="li"/>

      <ListItem alignItems="flex-start" mb={2}>
        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          {"-wish i could come over this...."}
          
          
          
          </>

        }>



        </ListItemText>
      </ListItem>
      <Divider variant="inset" component="li"/>
       
      <ListItem alignItems="flex-start" mb={2}>
        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          {"-wish i could come over this...."}
          
          
          
          </>

        }>



        </ListItemText>
      </ListItem>
      <Divider variant="inset" component="li"/>
       
      <ListItem alignItems="flex-start" mb={2}>
        <ListItemAvatar>
          <Avatar src="king.png"/>
        </ListItemAvatar>
        <ListItemText
        primary="Brunch this weekend?"
        secondary={
          <>
          <Typography
          sx={{display:"inline"}}
          component="span"
          variant="body2"
          color="text.primary">

          </Typography>
          
          {"-wish i could come over this...."}
          
          
          
          </>

        }>



        </ListItemText>
      </ListItem>
       



    </List>
      </Box>
    </Box>
  );
}
 