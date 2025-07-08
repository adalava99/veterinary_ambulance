import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { getOwnerPets } from '../../services/OwnersService';
import { useState, useEffect } from 'react';

const OwnerPetsModal = ({ modalOpen, setModalOpen, selectedOwner }) => {

    const [ownerData, setOwnerData] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            if (modalOpen && selectedOwner?.id) {
                try {
                    const data = await getOwnerPets(selectedOwner.id);
                    setOwnerData(data);
                } catch (error) {
                    console.error("Error fetching pets:", error);
                }
            }
        };
        fetchPets();
    }, [modalOpen, selectedOwner]);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        bgcolor: "white",
        width: 300,
        height: 300,
        transform: "translate(-50%, -50%)",
        p: 3,
        borderRadius: 1,
        boxShadow: 24,
    };

    return (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box sx={style}>
                {ownerData ? (
                    <>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Pets of {ownerData.owner_name}
                        </Typography>
                        {ownerData.pets.length > 0 ? (
                            ownerData.pets.map((pet) => (
                                <Box key={pet.id} sx={{ mb: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                    <Typography>Name: {pet.name}</Typography>
                                    <Typography>Species: {pet.species}</Typography>
                                    <Typography>Age: {pet.age}</Typography>
                                </Box>
                            ))
                        ) : (
                            <Typography>No pets found</Typography>
                        )}
                    </>
                ) : (
                    <Typography>Loading...</Typography>
                )}
            </Box>

        </Modal>
    )
}

export default OwnerPetsModal