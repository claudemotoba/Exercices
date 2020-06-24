import React from 'react';
import styled from 'styled-components';

const Bouton = styled.button`
    background-color: red;
    height: 100px;
    width: 300px;
`

const Boutton = (props) => {
    return (   
        <>
        
            <Bouton>Envoyer</Bouton>
        </>
    )
}

export default Boutton;