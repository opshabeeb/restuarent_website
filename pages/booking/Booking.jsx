import React from 'react'
import { Box,Typography } from '@mui/material'
import {styled} from '@mui/system'

import buyIcon from '../../assets/buy_icon.png'
import sellIcon from '../../assets/sell_icon.png'
import rentIcon from '../../assets/sell_icon.png'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CoustomButton from '../../components/CoustomButton'


function Booking() {
    const customBox=styled(Box)(({theme})=>({
        width:'30%',
        [theme.breakpointsd.down('md')]:{
                  width:'85%'
        }
    }))
    const GuidesBox=styled(Box)(({theme})=>({
          display:'flex',
          justifyContent:'space-around',
          width:'70%',
          marginTop:theme.spacing(5),
          marginBottom:theme.spacing(3),
          [theme.breakpoints.down('md')]:{
            width:'100%'
          },
          [theme.breakpoints.down('sm')]:{
            marginBottom:'0',
            flexDirection:'column'
          }
    }))
    const GuideBox=styled(Box)(({theme})=>({
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
           marginTop:theme.spacing(5),
           [theme.breakpoints.down('sm')]:{
            margin:theme.spacing(2,0,2,0),
           }

    }))
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:"center",
        padding:'40px',
    }}>
        <div style={{
            width:'5%',
            height:'5px',
            backgroundColor:'#000339',
            margin:'0 auto',
            borderRadius:'5px'
        }}>

        </div>
        <Typography variant='h3' sx={{
            fontSize:'35px',
            fontWeight:'bold',
            color:'#000339',
            my:3
        }}>
           How To Book?
        </Typography>
          <customBox>
            <Typography variant='body2' sx={{
                fontSize:'16px',
                fontWeight:'500',
                color:'#5A6473',
                textAlign:"center",
            }}>
                Everythng You Need To Know When You Book For The Advence Slot
            </Typography>
          </customBox>
          <GuidesBox>
              <GuideBox>
                <img src={buyIcon} alt="buy" />
                <Typography variant='body2' 
                sx={{
                    fontWeight:'500',
                    fontSize:'20px',
                    color:'#3B3c45',
                    my:1,
                }}>
                    Order Guides
                </Typography>
                <Box sx={
                    {
                      cursor:'pointer',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center'

                    }}>
                     <Typography variant='body2' sx={{fontWeight:'bold',fontSize:'14px',color:'#0689ff'}}>
                          How To Order
                     </Typography>
                     <ArrowRightAltIcon style={{color:'#0689FF'}}/>
                </Box>
              </GuideBox>
              <GuideBox>
              <img src={rentIcon} alt="sell" />
                <Typography variant='body2' 
                sx={{
                    fontWeight:'500',
                    fontSize:'20px',
                    color:'#3B3c45',
                    my:1,
                }}>
                    Booking Guides
                </Typography>
                <Box sx={
                    {
                      cursor:'pointer',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center'

                    }}>
                     <Typography variant='body2' sx={{fontWeight:'bold',fontSize:'14px',color:'#0689ff'}}>
                          How To Book
                     </Typography>
                     <ArrowRightAltIcon style={{color:'#0689FF'}}/>
                </Box>
              </GuideBox>
              <GuideBox>
              <img src={buyIcon} alt="buy" />
                <Typography variant='body2' 
                sx={{
                    fontWeight:'500',
                    fontSize:'20px',
                    color:'#3B3c45',
                    my:1,
                }}>
                    Payment Guides
                </Typography>
                <Box sx={
                    {
                      cursor:'pointer',
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center'

                    }}>
                     <Typography variant='body2' sx={{fontWeight:'bold',fontSize:'14px',color:'#0689ff'}}>
                          Payment Methodes
                     </Typography>
                     <ArrowRightAltIcon style={{color:'#0689FF'}}/>
                </Box>
              </GuideBox>
          </GuidesBox>
          <CoustomButton
          backgroundColor='#0f1b4c'
          color='#fff'
          buttonText='See Full Guides'
          guideBtn={true} />
    </Box>
  )
}

export default Booking