import React from 'react'
import { Typography } from '@mui/material';
import {styled} from '@mui/system';
import {Box,Container} from '@mui/system';

import fbIcon from '../../assets/facebook.png'
import twitterIcon from '../../assets/twitter.png'
import linkedinIcon from '../../assets/instagram.png'


function Footer() {
    const footerTitles=[
        {
            path:'/',
            display:'Guides',
        },
        {
            path:'/',
            display:'Services',
        },
        {
            path:'/',
            display:'ContactUs',
        },
    ]
    const overView=[
        {
            path:'/',
            display:'Location',
        },
        {
            path:'/',
            display:'Partnership',
        },
        {
            path:'/',
            display:'term of use & Policies',
        },
    ]
    const CustomContainer=styled(Container)(({theme})=>({
         display:'flex',
         justifyContent:'space-between',
         gap:theme.spacing(3),
         [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            textAlign:'center'
         }
    }))
    const FooterLink=styled('span')(({theme})=>({
        fontSize:'16px',
        color:'#000066',
        fontWeight:'300',
        cursor:'pointer',
        "&:hover":{
            color:'#66B2FF',
        }
    }))
    const iconBox=styled('Box')(({theme})=>({
        display:'flex',
        alignItems:'center',
        gap:'1rem',
        [theme.breakpoints.down('sm')]:{
            justifyContent:'center'
        }
    }))
  return (
    <Box sx={{py:10,backgroundColor:'#fff6B2'}}>
       <CustomContainer>
           <Box>
              <Typography sx={{
                fontSize:'20px',
                color:'#1c1c1d',
                fontWeight:'700',
                mb:2,
              }}>Featured</Typography>
              {
                footerTitles.map((item,index)=>(
                    <FooterLink key={index}>{item.display} <br/></FooterLink> 
                )
              )}
              
           </Box>
           <Box>
           <Typography sx={{
                fontSize:'20px',
                color:'#1c1c1d',
                fontWeight:'700',
                mb:2,
              }}>OverView</Typography>
              {
                overView.map((item,index)=>(
                    <FooterLink key={index}>{item.display} <br/></FooterLink> 
                )
              )}
           </Box>
           <Box>
              <Typography sx={{
                fontSize:'20px',
                color:'#1c11c1d',
                fontWeight:'700px',
                mb:2,
              }}>Get In Touch</Typography>
              <Typography sx={{
                fontSize:'16px',
                color:'#7a7a7e',
                fontWeight:'500',
                mb:2
              }}>Keep in touch with Our Social Media Pages</Typography>
              <iconBox>
                <img src={fbIcon} alt="fb" style={{cursor:'poinetr',marginRight:'15px'}} />
                <img src={twitterIcon} alt="ti" style={{cursor:'poinetr',marginRight:'15px'}} />
                <img src={linkedinIcon} alt="li" style={{cursor:'poinetr'}} />
              </iconBox>
           </Box>
       </CustomContainer>

    </Box>
  )
}

export default Footer