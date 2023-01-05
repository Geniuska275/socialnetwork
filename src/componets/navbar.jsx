import styled from "@emotion/styled";
import { AppBar,Toolbar, Typography ,Box, InputBase, Badge, Avatar, Menu, MenuItem} from "@mui/material";
import React, { useState } from "react";
import {Mail, Notifications, People, Pets} from "@mui/icons-material"
import { borderRadius } from "@mui/system";

export default function Navbar() {
 const [open,setOpen]=useState(false)
  const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  })
  const Search=styled("div")({
   backgroundColor:"white",
   width:"40%",
   padding:"0 10px",
   borderRadius:"5px" 

  })
  const Icons=styled(Box)( ({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"20px",
 
   }))
  const UserBox=styled(Box)( ({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    // [theme.breakpoints.up("sm")]:{
    //   display:"none"
    // }

  }))
  return (
    <AppBar position="sticky" >
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none" ,sm:"block"}}}>

       SocialMedia.
        </Typography>
        <People sx={{display:{xs:"block",sm:"none"}}}/>
        <Search><InputBase placeholder="Search..."/></Search>
        <Icons >

          <Badge badgeContent={6} color="error">
            <Mail/>


          </Badge>
          <Badge badgeContent={10} color="error">
            <Notifications/>


          </Badge>
          <Avatar src="origin.jpg" sx={{width:"40px",height:"40px "}}
          onClick={e=>setOpen(true)}/>
        </Icons>
        {/* <UserBox >
        <Avatar src="origin.jpg" sx={{width:"40px",height:"40px "}}/>
        <Typography variant="span">
           Kingsley Aigbojie
        </Typography>


        </UserBox> */}

      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
        transformOrigin={{
          vertical:"top",
          horizontal:"right"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>


 





      </Menu>
    </AppBar>
  );
}

