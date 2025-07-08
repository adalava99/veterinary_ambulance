import {Modal, Box, Typography, TextField, Button} from '@mui/material';
import { createOwners, updateOwners } from '../../services/OwnersService';
import { useState, useEffect} from 'react';

const OwnerModal = ({modalOpen, setModalOpen, selectedOwner, refreshOwners}) => {

const isCreate = selectedOwner.id === undefined;
const [formData, setFormData] = useState({name: "", phone: ""});

useEffect(() => {
    setFormData({name: selectedOwner.name || "", phone: selectedOwner.phone || ""})
},[selectedOwner, setModalOpen]);

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "white",
    width: 300,
    height:300,
    transform: "translate(-50%, -50%)",
    p: 3,
    borderRadius: 1,
    boxShadow: 24,
};

const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        if(isCreate){
            await createOwners(formData)
        }else{
            await updateOwners(selectedOwner.id, formData)
        }
        await refreshOwners();
        setModalOpen(false);

        setModalOpen(false);
    }catch(error){
        console.error(error);
    }
};

    return (
        <Modal open={modalOpen} onClose={()=> setModalOpen(false)}>
            <Box sx={style}>
                <Typography>
                    {isCreate?"Create Owner":"Update Owner"}
                </Typography>
                <form>
                    <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(e)=>
                            setFormData({...formData,name:e.target.value})
                        }
                        fullWidth
                        sx={{mb:2}}
                    />
                    <TextField
                        label="Phone"
                        value={formData.phone}
                        onChange={(e)=>
                            setFormData({...formData,phone:e.target.value})
                        }
                        fullWidth
                        sx={{mb:2}}
                    />
                    <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSubmit}
                    >
                        {isCreate? "Create":"Update"}
                    </Button>
                </form>
            </Box>
        </Modal>
    )
}

export default OwnerModal