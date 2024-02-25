import React from 'react'
import { Box,styled,Typography } from '@mui/material';
import Likeicon from '../../assets/like.png'
import Shareicon from '../../assets/share.png'
import Hearticon from '../../assets/heart.png'

function CustomCard({img,price,item,likes,heart,share}) {
    const imgContainer=styled(Box)(({theme})=>({
        width:'100%',
    }))
    const DishesBox=styled(Box)(({theme})=>({
        borderTopLeftRadius:'10px',
        borderTopRightRadius:'10px',
        maxWidth:350,
        backgroundColor:'#fff',
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down('md')]:{
            margin:theme.spacing(2,0,2,0),
        },
        "&:hover":{
            backgroundColor:'#f5f5f5',
            boxShadow:'0 0 5px rgba(0,0,0,0.2)',
            transform:'scale(1.05)',
            transition:'all 0.3s ease-in-out',
        }

    }))
    const infoBox=styled(Box)(({theme})=>({
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }))
  return (
   <DishesBox>
    <imgContainer>
    <img src={img} alt="" style={{maxWidth:'100%'}}/>
    </imgContainer>
    <Box sx={{padding:'1rem'}}>
    <Typography variant='body2' sx={{fontWeight:'700'}}>
        ${price}
        </Typography>
        <Typography variant='body2' sx={{my:2}}>{item}</Typography>
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
        }}>
             <infoBox>
                <img src={Likeicon} alt="" />
                <Typography variant='body2' sx={{mt:1}}>{likes}</Typography>
             </infoBox>
             <infoBox>
                <img src={Hearticon} alt="" />
                <Typography variant='body2' sx={{mt:1}}>{heart}</Typography>
             </infoBox>
             <infoBox>
                <img src={Shareicon} alt="" />
                <Typography variant='body2' sx={{mt:1}}>{share}</Typography>
             </infoBox>
        </Box>
    </Box>
   </DishesBox>
  )
}

export default CustomCard