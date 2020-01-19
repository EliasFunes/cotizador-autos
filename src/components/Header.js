import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

const StyledHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;    
`;

const StyledTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;    
`;

const Header = ({titulo}) => {
    return (
        <StyledHeader>
            <StyledTitle>{titulo}</StyledTitle>
        </StyledHeader>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;
