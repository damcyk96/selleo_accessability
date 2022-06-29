import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  background: 2px solid ${({ theme }) => theme.background};
  display: flex;
  padding: 12px;
  width: 100%;
  justify-content: space-around;
`;

const CustomLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

const NavBar = () => {
  return (
    <Navigation>
      <CustomLink aria-label="bikes" role="link" to="/bikes">
        Bikes
      </CustomLink>
      <CustomLink aria-label="cars" role="link" to="/cars">
        Cars
      </CustomLink>
      <CustomLink aria-label="dolls" to="/dolls">
        Dolls
      </CustomLink>
    </Navigation>
  );
};

export default NavBar;
