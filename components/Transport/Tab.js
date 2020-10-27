import React from "react";
import styled from "styled-components";

const Tab = ({selected,title,onClick,quantity}) =>
    <TabContainer selected={selected} onClick={onClick}>
        <p>{quantity} {title}</p>
    </TabContainer>;

const TabContainer = styled.div``;

export default Tab
