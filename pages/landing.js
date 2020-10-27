import React from "react";
import styled from "styled-components";
import Drops from "../components/Drops/Drops";
import Head from "../components/Head/Head";
import Transport from "../components/Transport/Transport";

const Landing = () =>
    <LandingContainer>
        <Head/>
        <Transport/>
        <Drops/>
    </LandingContainer>;

const LandingContainer = styled.div`
    background: #EFEFEF;
`;

export default Landing
