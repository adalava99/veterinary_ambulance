import {getOwners} from '../../services/OwnersService';
import {useEffect, useState} from 'react';

const Owners = () =>{
    const [owners, setOwners] = useState([]);

    useEffect(async() => {
        try{
            const data = await getOwners();
            setOwners (data);
        }catch{
            console.error(error);
        }
    }, []

    )
    return(
        <h1>Owners</h1>
    )
}

export default Owners