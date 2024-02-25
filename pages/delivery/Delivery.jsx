import React from 'react'
import { styled,Typography } from '@mui/material';
import {Box,Container} from '@mui/system'
import deliveryimg from '../../assets/DeliveryImg.png';
import CoustomButton from '../../components/CoustomButton';

function Delivery() {
    const CustomBox=styled(Box)(({theme})=>({
        padding:theme.spacing(0,10,0,10),
        margin:theme.spacing(0,2,1,2),
        [theme.breakpoints.down('md')]:{
            padding:'0',
        }

    }))
    const CustomContainer=styled(Container)(({theme})=>({
        backgroundColor:'#fed801',
        height:'416px',
        borderRadius:'15px',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
            height:'auto',
            flexDirection:'column',
            alignItems:'center',
            padding:theme.spacing(3,3,0,3),
            width:'90%',
        }
    }))
  return (

    <CustomBox>
        <CustomContainer>
            <Box>
                <Typography sx={{fontSize:'35px',color:'white',fontWeight:'700',fontFamily:'monospace'}}>
                      SuperFast Home Delivery
                </Typography>
                <Typography sx={{fontSize:'16px',color:'000',fontWeight:'800',my:3,fontFamily:'monospace'}}>
                  Door to Door Delivery
                </Typography>
                <CoustomButton
                backgroundColor='#fff'
                color='#17275f'
                buttonText='Order Now'/>
            </Box>
            <img src={deliveryimg} alt="" style={{maxWidth:'100%'}} />
             
        </CustomContainer>

    </CustomBox>
  )
}

export default Delivery