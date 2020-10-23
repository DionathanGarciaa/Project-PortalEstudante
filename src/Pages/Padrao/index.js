import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Padrao = () => {

    const history = useHistory();
        useEffect (() => {
            history.push('/Login');
        }, []);

    return (
        <div>   
        </div>
    )
}

export default  Padrao;