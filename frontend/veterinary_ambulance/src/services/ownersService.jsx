export const getOwners = async () => {
    try {
        const response = await fetch('http://localhost:8000/clinic/owner')
        const parsedResponse = await response.json()
        return parsedResponse;

    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const createOwners = async (ownerData) => {
    try {
        const response = await fetch('http://localhost:8000/clinic/owner/create',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(ownerData)
        });
        const parsedResponse = await response.json()
        return parsedResponse;

    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const updateOwners = async (ownerId, ownerData) => {
    try {
        const response = await fetch(`http://localhost:8000/clinic/owner/update/${ownerId}`,
        {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(ownerData)
        });
        const parsedResponse = await response.json()
        return parsedResponse;

    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteOwners = async (ownerId) => {
    try {
        const response = await fetch(`http://localhost:8000/clinic/owner/delete/${ownerId}`,
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