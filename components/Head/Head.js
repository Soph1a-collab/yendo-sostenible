import React from "react";
import styled from "styled-components";

const Hamburguer = () => <svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="31" height="5" rx="2.5" fill="#FFED00"/>
    <rect y="7" width="31" height="5" rx="2.5" fill="#FFED00"/>
    <rect y="14" width="31" height="5" rx="2.5" fill="#FFED00"/>
</svg>;


const Head = () =>
    <HeadContainer>
        <HamburguerContainer>
            <Hamburguer/>
        </HamburguerContainer>
        <Title>#YENDO</Title>
    </HeadContainer>;

const HamburguerContainer = styled.div`
    margin: 0 30px;
`;

const HeadContainer = styled.div`
    height: 50px;
    background: black;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.p`
    color: #FFED00;
`;

export default Head
