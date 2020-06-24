import React from 'react'
import styled from 'styled-components'
import { Nav, NavItem, NavLink } from 'reactstrap'


const NavStyle = styled.div`

`

const Menu = () =>{
    return(
        <NavStyle>
            <Nav>
                <NavItem>
                    <NavLink href='/'>Accueil</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/connexion'>Connexion</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/categorie'>Categorie</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/inscription'>Inscription</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/Accueil'>Accueil</NavLink>
                </NavItem>
            </Nav>
        </NavStyle>
    )
}

export default Menu;