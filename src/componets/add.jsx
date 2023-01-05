import styled from '@emotion/styled'
import { Add, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Fab, Tooltip,Box ,Modal, Typography, Avatar,TextField, ButtonGroup, Button,Stack} from '@mui/material'
import React from 'react'
import { useState } from 'react'
const StyledModal=styled(Modal)({
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
})
const UserBox=styled(Box)({
  display:"flex",
   gap:"10px",
   marginBottom:"20px",
  alignItems:"center",
  
})
const Addbutton = () => {
  const [open,setOpen]=useState(false)
  return (
  <>
  <Tooltip title="Add" sx={{position:"fixed ",bottom:20, left:{xs:"calc(50% -25px) ",md:30}}}
  onClick={(e)=>setOpen(true)}>
    <Fab color="primary" aria-label=' '>
        <Add/>

    </Fab>

  </Tooltip>
  <StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  arial-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description">
    <Box width={400} height={280} p={3} bgcolor="white" borderRadius={5}>
      <Typography variant="h6" color="gray" textAlign="center">
        Create Post
      </Typography>
      <UserBox>
          <Avatar src="origin.jpg" sx={{width:35 ,height:35}}/>
          <Typography fontWeight={500} variant="span">Kingsley Aigbojie</Typography>
      </UserBox>
      <TextField
      sx={{width:"100%"}}
        rows={2}
        placeholder="What's on your mind ?"
        variant="standard"
        id="standard-multiline-static"
        multiline

      />
      <Stack direction="row" gap={1} mt={2} mb={1} >
        <EmojiEmotions color="primary"/>
        <Image color="secondary"/>
        <VideoCameraBack color="success"/>
        <PersonAdd color="error"/>
      </Stack>
      
        <Button variant="contained" sx={{width:"350px",backgroundColor:"dodgerblue",textAlign:"center",color:"white",marginLeft:"15px",marginTop:"20px"}}>Post</Button>
        
      





    </Box>

  </StyledModal>
  </>
  )
}

export default Addbutton