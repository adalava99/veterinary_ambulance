import { getOwners, getOwnerPets } from '../../services/OwnersService';
import { createPets, updatePets, deletePets } from '../../services/PetsService';
import { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Typography, Button, Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import PetModal from './PetModal';

const Pets = () => {
    const [owners, setOwners] = useState([]);
    const [selectedOwnerId, setSelectedOwnerId] = useState('');
    const [ownerPetsData, setOwnerPetsData] = useState(null);
    const [petModalOpen, setPetModalOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState(null);


    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const data = await getOwners();
                setOwners(data);
            } catch (error) {
                console.error("Error loading owners:", error);
            }
        };
        fetchOwners();
    }, []);

    useEffect(() => {
        const fetchPets = async () => {
            if (selectedOwnerId) {
                try {
                    const data = await getOwnerPets(selectedOwnerId);
                    setOwnerPetsData(data);
                } catch (error) {
                    console.error("Error loading pets:", error);
                }
            } else {
                setOwnerPetsData(null);
            }
        };
        fetchPets();
    }, [selectedOwnerId]);

    const refreshPets = async () => {
        if (selectedOwnerId) {
            const data = await getOwnerPets(selectedOwnerId);
            setOwnerPetsData(data);
        }
    };

    const handleDeletePet = async (petId) => {
        try {
            await deletePets(petId);
            await refreshPets();
        } catch (error) {
            console.error("Error deleting pet:", error);
        }
    };

    const petColumns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'species', headerName: 'Species', width: 100 },
        { field: 'age', headerName: 'Age', width: 100 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 205,
            renderCell: (params) => (
                <Box display="flex" gap={1}>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setSelectedPet(params.row);
                            setPetModalOpen(true);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => handleDeletePet(params.row.id)}
                    >
                        Delete
                    </Button>
                </Box>
            )
        }
    ];

    return (
        <>
            <h1>Pets</h1>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="owner-select-label">Select Owner</InputLabel>
                <Select
                    labelId="owner-select-label"
                    value={selectedOwnerId}
                    label="Select Owner"
                    onChange={(e) => setSelectedOwnerId(e.target.value)}
                >
                    {owners.map((owner) => (
                        <MenuItem key={owner.id} value={owner.id}>
                            {owner.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {ownerPetsData && (
                <>
                    <Button
                        variant="contained"
                        sx={{ mb: 2 }}
                        onClick={() => {
                            setSelectedPet(null);
                            setPetModalOpen(true);
                        }}
                        disabled={!selectedOwnerId}
                    >
                        Create Pet
                    </Button>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        Pets of {ownerPetsData.owner_name}
                    </Typography>
                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid
                            rows={ownerPetsData.pets}
                            columns={petColumns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </>
            )}
            <PetModal
                modalOpen={petModalOpen}
                setModalOpen={setPetModalOpen}
                selectedOwnerId={selectedOwnerId}
                selectedPet={selectedPet}
                refreshPets={refreshPets}
            />
        </>
    )
}

export default Pets