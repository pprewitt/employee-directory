import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #ffffff;
height: calc(100vh - 90vh);
padding: 20px;
`;

const Footer = () => {
    return (
        <StyledFooter>
       &copy; {new Date().getFullYear()} Employee Directory
        </StyledFooter>
    )
}
export default Footer;