import React from 'react'
import {Box,Container,Typography} from '@mui/material';
import {styled} from "@mui/system";
import logoimg from '../../assets/deli.png';
import starsimg from '../../assets/Star.png';
import logosimg from '../../assets/logos.png'



function Partner() {
        const CustomContainer = styled(Container)(({ theme }) => ({
            display: 'flex',
            justifyContent: 'space-between',
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: theme.spacing(4),
            },
        }));
    
        const CustomBox = styled(Box)(({ theme }) => ({
            [theme.breakpoints.down('md')]: {
                marginBottom: theme.spacing(4),
            },
        }));
    
        return (
            <Box sx={{ mt: 10 }}>
                <CustomContainer>
                    <CustomBox>
                        <img src={logoimg} alt="logo" style={{ maxWidth: '100%' }} height={'35px'} />
                        <Typography variant='body2' sx={{
                            color: '#7d8589',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            mt: 2,
                        }}>
                            More Than 50,000 trust Delish
                        </Typography>
                    </CustomBox>
                    <Box>
                        <img src={starsimg} alt="review" style={{ maxWidth: '100%' }} />
                        <Typography variant='body2' sx={{
                            color: '#7d8589',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            mt: 2,
                        }}>
                            5-star rating (2.5k+ Reviews)
                        </Typography>
                    </Box>
                </CustomContainer>
    <Container sx={{
        display:'flex',flexDirection:'column'
    }}>
        <img src={logosimg} alt="logos" />
    </Container>
    </Box>
  )
}

export default Partner