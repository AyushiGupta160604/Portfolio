import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #141414;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin-left: 20px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .icon {
    color: #fff;
    margin-left: 20px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
      color: #b3b3b3;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>MyPortfolio</Logo>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <Icons>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faUser} className="icon" />
      </Icons>
    </NavLinks>
  </HeaderContainer>
);

export default Header;