import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { createPets, updatePets } from '../../services/PetsService';
import { useState, useEffect } from 'react';

const PetModal = ({
  modalOpen,
  setModalOpen,
  selectedOwnerId,
  selectedPet,
  refreshPets
}) => {

  const isCreate = selectedPet?.id === undefined;

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    age: ''
  });

  useEffect(() => {
    setFormData({
      name: selectedPet?.name || '',
      species: selectedPet?.species || '',
      age: selectedPet?.age || ''
    });
  }, [selectedPet]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    bgcolor: "white",
    width: 300,
    height: 320,
    transform: "translate(-50%, -50%)",
    p: 3,
    borderRadius: 1,
    boxShadow: 24
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isCreate) {
        await createPets({ ...formData, owner_id: selectedOwnerId });
      } else {
        await updatePets(selectedPet.id, formData);
      }

      await refreshPets();

      setModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={style}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {isCreate ? "Create Pet" : "Update Pet"}
        </Typography>
        <form>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Species"
            value={formData.species}
            onChange={(e) => setFormData({ ...formData, species: e.target.value })}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Age"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            fullWidth
          >
            {isCreate ? "Create" : "Update"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PetModal;
