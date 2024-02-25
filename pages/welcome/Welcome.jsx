import React from 'react'
import {Box,Button,Container,Typography} from "@mui/material";
import {styled} from "@mui/system"
import {container} from "@mui/system"
import CoustomButton from '../../components/CoustomButton';
import welcome from '../../assets/welcome.png'

function Welcome() {
     const CustomBox=styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        gap:theme.spacing(5),
        marginTop:theme.spacing(3),
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
        },
     }))
const Title=styled(Typography)(({theme})=>({
    fontSize:'64px',
    color:'#fff',
    fontWeight:'bold',
    margin:theme.spacing(4,0,4,0),
    [theme.breakpoints.down('sm')]:{
        fontSize:'40px',
    }
}))
  return (
    <Box sx={{backgroundColor:'#fed801',minHeight:'80vh',marginTop:'-25px'}}>
        <Container>
          <CustomBox>
            <Box sx={{flex:'1'}}>
                <Typography variant='body2' 
                sx={{
                    fontSize:'18px',
                    color:'#687690',
                    fontWeight:'500',
                    mt:10,
                    mb:4,
                }}>
                   Welcome to DELISH Restuarent
                </Typography>
                <Title variant='h1'>
                    Discover a Place Where You Love to Eat
                </Title>
                <Typography variant='body2' 
                sx={{
                    fontSize:'18px',
                    color:'#5a6473',
                    my:4,
                }}>
                  immerse yourself inthe elegent ambiance as you savor each bite,accombanied by our extensive selection of hand-picked wines and careful
                </Typography>
                <CoustomButton backgroundColor='#0f1b4c'
                color='#fff'
                buttonText="More about us "
                welcomeBtn={true}
                />
            </Box>
            <Box sx={{flex:'1.25'}}>
                 <img src={welcome} alt='welcome' style={{maxWidth:'100%',marginBottom:'2rem'}} /> 
            </Box>
          </CustomBox>
        </Container>

    </Box>
  )
}

export default Welcome