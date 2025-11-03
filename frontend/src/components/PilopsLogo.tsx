import Logo from '../assets/PilopsLogo.svg'
import {Box, Typography} from '@mui/material'
export const PilopsLogo = () => {
    return (
        <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        sx={{py:4}}
        >
         <img src={Logo} alt="Pilops Logo" width={200} />
         <Typography variant='subtitle2' sx={{mt:2}} fontWeight={400} fontFamily={'Manrope'}>Your virtual pilot career for Flight Simulator</Typography>
        </Box>
)}
