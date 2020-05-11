import React from 'react'
import users from './Users'

function Hello() {

    return (
        <div>
            {users.map((user) => (
                    <ul key={user.id}>
                        <li> {user.nom} </li>
                        <li> {user.prenom} </li>
                        <li> {user.sexe} </li>
                        <li> {user.age} </li>
                        <ul>
                            <li> {user.langage[0]} </li>
                            <li> {user.langage[1]} </li>
                            <li> {user.langage[2]} </li>
                        </ul>
                        
                    </ul>
            ))}
        </div>
    )   

}

export default Hello;

