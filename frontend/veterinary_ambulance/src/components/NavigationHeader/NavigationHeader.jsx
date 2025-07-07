import {AppBar, Button, Toolbar} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


const NavigationHeader = () => {
    const navigate = useNavigate();
    return (
        <AppBar position='static' sx={{backgroundColor: 'pink'}}>
            <Toolbar>
                <Button sx={{ mr: 2 }} variant ="outlined" color="white" onClick={() => {navigate('/pets')}}>Pets</Button>
                <Button sx={{ mr: 2 }} variant ="outlined" color="white" onClick={() => {navigate('/owners')}}>Owners</Button>
                <Button sx={{ mr: 2 }} variant ="outlined" color="white" onClick={() => {navigate('/vets')}}>Vets</Button>
                <Button sx={{ mr: 2 }} variant ="outlined" color="white" onClick={() => {navigate('/appointments')}}>Appointments</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationHeader