import React from 'react'
import { Box,Container,styled,Typography } from '@mui/material'
import CustomCard from '../../components/customcard/CustomCard'
import { Data } from '../../StaticData/Data'
function Dishes() {
    const propertiesTextbox=styled(Box)(({theme})=>({
        [theme.breakpoints.down('md')]:{
            textAlign:'center',
        },
    }))
    const DishesBox=styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'space-between',
        marginTop:theme.spacing(5),
        [theme.breakpoints.down('md')]:{
            flexDirection:'column',
            alignItems:'center'
        },
    }))
  return (
    <Box sx={{mt:5,backgroundColor:'#f5fafe',py:10}}>
      <Container>
        <propertiesTextbox>
            <Typography sx={{color:'#000339',fontSize:'35px',fontWeight:'bold',ml:'13px'}}>
                Featured Dishes
            </Typography>
            <Typography sx={{color:'#5a6473',fontSize:'16px',mt:1,ml:'13px'}}>
                 Explore Veriety of South Indian Dishes
            </Typography>
        </propertiesTextbox>
        <DishesBox>
            {
                Data.map((foodItem)=>(
                    <CustomCard
                    key={foodItem.id}
                    img={foodItem.img}
                    price={foodItem.price}
                    item={foodItem.item}
                    likes={foodItem.likes}
                    heart={foodItem.heart}
                    share={foodItem.share}
                    />
                ))
            }
        </DishesBox>
      </Container>
    </Box>
  )
}

export default Dishes