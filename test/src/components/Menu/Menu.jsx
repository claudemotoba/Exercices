import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
        <a href="/">
            <span role="img"></span>
            Connexion
        </a>
        <a href="/">
            <span role="img"></span>
            Inscription
        </a>
        <a href="/">
            <span role="img"></span>
            Accueil
        </a>
        <a href="/">
            <span role="img"></span>
            Catégorie
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;
