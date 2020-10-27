import React from "react"
import styled from "styled-components"
import DropsImage from "./DropsImage";

const Drops = () =>
    <DropsContainer>
        <h3>Un recorrido de</h3>
        <DistanceContainer>
            <h2>25km</h2>
            <h5>Distancia del tren Sarmiento</h5>
        </DistanceContainer>
        <ConsumeLabel>Consume</ConsumeLabel>
        <ConsumeLabel>⌄</ConsumeLabel>
        <DropsImage/>
    </DropsContainer>;

const ConsumeLabel = styled.p``;

const DistanceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const DropsContainer = styled.div`
    text-align: center;
    svg{
        max-height: calc(100vh - 55px);
    }
    .toggle-green:hover{
        fill: #00AB97;
    }
    
    h3{
        font-size: 3.4rem;
        color: #FFAA71;
        margin: 0;
        font-weight: normal;
    }
    h2{
        font-size: 9rem;
        color: #FFAA71;
        font-weight: bold;
        margin: 0;
    }
    h5{
        font-size: 1.5rem;
        margin: 0;
        max-width: 60px;
        color: #404040;
        font-weight: 100;
    }
`;

export default Drops
