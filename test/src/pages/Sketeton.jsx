import React from 'react'
import { Skeleton, Bone } from 'react-loading-skeleton-placeholders';

const Keteton = () => {
    const Titre = {
        titre: 'claude',
        nom: 'motoba'
    }
    return (
        <div>
            {<Skeleton skull={true} amount={1}/> || <h1>Hello</h1>}
            <h1>{Titre.nom || <Bone />}</h1>
            {Titre.titre || <Skeleton count={10}/>}
        </div>
    )
}

export default Keteton;
