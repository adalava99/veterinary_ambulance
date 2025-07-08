
export const createPets = async (petData) => {
    try {
        const response = await fetch('http://localhost:8000/clinic/pets/create',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(petData)
        });
        const parsedResponse = await response.json()
        return parsedResponse;

    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const updatePets = async (petId, petData) => {
    try {
        const response = await fetch(`http://localhost:8000/clinic/pets/update/${petId}`,
        {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(petData)
        });
        const parsedResponse = await response.json()
        return parsedResponse;

    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const deletePets = async (petId) => {
    try {
        const response = await fetch(`http://localhost:8000/clinic/pets/delete/${petId}`,
        {
            method: 'DELETE',
        });
        return response.ok;

    }
    catch (error) {
        console.error(error);
        return null;
    }
}