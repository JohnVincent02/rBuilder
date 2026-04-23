import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

function Header() {
    const intro = "At rBuilder, we understand that a great career starts with a great resume. Our mission is to simplify the resume creation process for students, job seekers, and professionals by providing an intuitive and user-friendly tool that helps you craft personalized, visually appealing, and ATS-friendly resumes — without the need for design or formatting skills."
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#524e4a"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}

            {/* icon */}
            <img width={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDcuUBhuqoKMJ0Q2CDOYzFAShcalWnPLsRg&s" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>RBuilder</Link>
          </Typography>
<Tooltip title={intro}>          <Button color="inherit">About us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header