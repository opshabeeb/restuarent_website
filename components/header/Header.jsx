import React, { useState } from 'react'
import {Box, ListItemIcon, Typography} from '@mui/material'
import {styled} from '@mui/system';
import CoustomButton from '../CoustomButton';
import logoimg from '../../assets/deli.png';

import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServiceIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListIconItem,
  ListIconText,
} from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate()
    const [mobailMenu, setMobailMenu] = useState({left:false})

    const toggleDrower=(anchor,open)=>(event)=>{
      if(event.type == 'keyDown' && (event.type=='tab' || event.type=='shift')){
        return ;
      }
      setMobailMenu({...mobailMenu,[anchor]:open})
    }
    const list=(anchor)=>(
      <Box sx={{
        width:anchor === 'top' || anchor === 'bottom' ? 'auto' :250
      }} 
      role='presentation'
      onClick={toggleDrower(anchor,false)}
      onKeyDown={toggleDrower(anchor,false)}
      >
      <List>
        {
          nav_titles.map((item,index)=>(
            <ListItem key={index} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {
                index === 0 && <HomeIcon/>
              }
              {
                index === 1 && <FeaturedPlayListIcon/>
              }
              {
                index === 2 && <MiscellaneousServiceIcon/>
              }
              {
                index === 3 && <ContactsIcon/>
              }
            </ListItemIcon>
            <ListItemText primary={item.display}/>
          </ListItemButton>
        </ListItem>
          ))
        }
        
      </List>
      </Box>
    )

  const nav_titles=[
    {
      path:'/',display:'Home'
    },
    {
      path:'/Dishes',display:'Dishes'
    },
    {
      path:'/services',display:'Services'
    },
    {
      path:'/about-us',display:'About-us'
    }
  ]
  
  const NavBarLinksBox=styled(Box)(({theme})=>({
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       gap:theme.spacing(3),
       [theme.breakpoints.down("md")]:{
        display:'none'
       }
  }))

  const NavBarLink=styled(Typography)(({})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'16px',
    color:'#4f5361',
    fontWeight:'500',
    cursor:'pointer',
    '&:hover':{
      color:'#fff'
    }
    
}))
  
const NavBarLogo=styled('img')(({theme})=>({
  cursor:'pointer',
  [theme.breakpoints.down("md")]:{
   display:'none'
  }
}))

const CoustomMenuIcon=styled(MenuIcon)(({theme})=>({
  cursor:'pointer',
  display:'none',
  marginRight:theme.spacing(2),
  [theme.breakpoints.down("md")]:{
   display:'block'
  }
}))

  return (
    <Box
     sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      padding:'40px',
      maxWidth:'auto',
      backgroundColor:'#FED801',
      marginLeft:"0px",
      marginBottom:'24px'

     }}
    >
      <Box sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      gap:'2.5rem'

     }}>
      <Box sx={{display:'flex',alignItems:'center'}}>
        <CoustomMenuIcon onClick={toggleDrower('left',true)}/>
        <Drawer anchor='left' open={mobailMenu['left']} onClose={toggleDrower('left',false)}>

          {list('left')}

        </Drawer>
        <NavBarLogo src={logoimg} alt="" height={'45px'} />
      </Box>
          <NavBarLinksBox>
            {
              nav_titles.map((item,index)=>(
                <NavBarLink key={index} variant='body2' onClick={()=>navigate(item.path)}>
                {item.display}
              </NavBarLink>
              ))
            }
            
            </NavBarLinksBox>
      </Box >
      <Box
       sx={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        gap:'1rem' 
       }}>
      <NavBarLink variant="body2">
        Signup

      </NavBarLink>
      <CoustomButton 
      buttonText="Register"
      backgroundColor='#0f1b4c'
      color='#fff' >
      
      </CoustomButton>
      </Box>
    </Box>
  )
}

export default Header