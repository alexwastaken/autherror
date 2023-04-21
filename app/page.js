'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Comp from './card.js';
import { UserButton, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

const posts = [
  {
    title: 'This is an image of a blue Square',
    content: 'This is the firmst blog post',
    image: './src/images/blueimage.png',
    comments: 'asdjasdklklj2'
  },
  {
    title: 'Post 2',
    content: 'This is the second blog post',
    comments: 'asdjasdklklj2'
  },
  {
    title: 'Post 3',
    content: 'This is the third blog post',
    comments: 'asdjasdklklj2'
  },
];

const Home = () => {

  const reed = async () => {
    const response = await fetch('/api/hello')
    const data = await response
    console.log(data)
    return data
  }
  

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <SignedIn>
            <UserButton />
            <button onClick={reed} style={{ fontSize: '18px', padding: '10px 20px' }}>
              Click me
            </button>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className='rounded border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100'>Sign In</button>
            </SignInButton>
          </SignedOut>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px'}}>
          {posts.map(post => (
            <Comp key={post.title} post={post} />
          ))}
    </Box>
    </div>
  );
}

export default Home