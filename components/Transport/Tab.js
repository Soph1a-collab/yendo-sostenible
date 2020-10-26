import React from "react";
import styled from "styled-components";

const Tab = ({selected,title,onClick,quantity}) =>
    <TabContainer selected={selected} onClick={onClick}>
        <TabText selected={selected}>{quantity} {title}</TabText>
    </TabContainer>;

const TabContainer = styled.div`
background-color: ${props=>props.selected?"#00AB97":"#EFEFEF"};
box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
width: 330px;
height: 53px;
padding: 7px;
margin: 7px 28px;

`;

const TabText = styled.p`
color: ${props=>props.selected?"#EFEFEF":"#FFAA71"};
font-weight: ${props=>props.selected?"bolder":"bold"};

`

export default Tab
