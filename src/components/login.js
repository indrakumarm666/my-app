import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import image from "./Image/WhatsApp Image 2024-02-21 at 11.10.39_e068869a.jpg";
import { Facebook } from "@mui/icons-material";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Login =() =>{
    return (
    <><div className='main'>
    <Box height={600}
        backgroundColor={"white"}
        width={1000}
        display="flex"> 
        
        <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        >
            <Grid item xs={4}>
            <Item>xs=4</Item>
            </Grid>

            <Grid>
            <img src={image} alt="img" style={{ width: '400px',height: '450px',paddingTop:'80px'}}></img>
            </Grid>

        </Grid>

        <Grid container  style={{ margin: '0.0', width: 'calc(100% + 0.0rem)'}}>

             {/* First row */}
            <Grid item xs={12}>
            <Typography>Create Account</ Typography>
            </Grid>
        
             {/* second row */}
            <Grid item xs={5}>
                <Item>
                <GoogleIcon/>
                Signup with Google
                </Item>
            </Grid>
            <Grid item xs={5}>
                <Item>
                    <FacebookIcon/>
                    Signup with Facebook
                </Item>
            </Grid>
    
             {/* Third row */}
             <Grid item xs={6}>
            <Typography align="center">-or-</Typography>
            </Grid> 

            <Grid item xs={7}>
            <TextField id="standard-basic" label="Full Name" variant="standard" width="100%" />
            </Grid>

            <Grid item xs={7}>
            <TextField id="standard-basic" label="Email" variant="standard" />
            </Grid>

            <Grid item xs={7}>
            <TextField id="standard-basic" label="Password" variant="standard" width="100px" />
            </Grid> 

            <Grid item xs={7}>
            <Button variant="outlined" size="medium">
            create Account
            </Button>
            </Grid>

            <Grid item xs={12}>
            <typography> Already have an account? <span style={{ color: 'blue' }}>Log In</span></typography>
            </Grid>
        </Grid>  
    </Box>
        {/* <table>
            <tr>
                <td>
                    <img src={image} alt="img" style={{ width: '200px', display: 'block', margin: 'auto'}} />
                </td>
                <td>
                    <h2>Create Account</h2>
                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>
                    
                </td>
            </tr>
        </table> */}
    {/* <Box sx={{ backgroundColor: "white",width :'600px', padding: '300px', paddingTop:'50px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center',margin:'0'}}>
                <Box>
                <img src={image} alt="img" style={{ width: '200px', display: 'block', margin: 'auto'}} />
                </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                <Box>
                <h1>Create Account</h1>
               
                </Box>
                </Grid>
            </Grid>
    </Box> */}
    </div>
    </>
       
    )
}
export default Login;