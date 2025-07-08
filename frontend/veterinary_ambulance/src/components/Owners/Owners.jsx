import { getOwners, deleteOwners } from '../../services/OwnersService';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import OwnerModal from './OwnerModal';
import { Button } from '@mui/material';

const Owners = () => {
    const [owners, setOwners] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedOwner, setSelectedOwner] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOwners();
                setOwners(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [])

    const refreshOwners = async () => {
        try {
            const data = await getOwners();
            setOwners(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (ownerId) => {
        try {
            const succes = await deleteOwners(ownerId)
            if (succes) {
                refreshOwners();
            } else {
                console.error("failed to delete Owner.")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        {
            field: 'actions', headerName: 'Actions', width: 200
            , renderCell: (params) => (
                <>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setSelectedOwner(params.row)
                            setModalOpen(true);
                        }}
                    >Edit</Button>
                    <Button
                        variant="outlined"
                        color='error'
                        onClick={() => {
                            handleDelete(params.row.id)
                        }}
                    >Delete</Button>
                </>
            )
        },


    ];

    const createOwner = () => {
        setSelectedOwner({});
        setModalOpen(true);
    }


    return (
        <>
            <h1>Owners</h1>
            <Button variant="contained" onClick={createOwner}>Add Owner</Button>
            <DataGrid rows={owners} columns={columns}></DataGrid>
            <OwnerModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                selectedOwner={selectedOwner}
                refreshOwners={refreshOwners} />
        </>
    )
}

export default Owners