import React from "react"
import styled from "styled-components"
import TextInput from "../components/TextInput/TextInput";

const LoginBack = "/assets/images/login-back.jpg";

const Login = () =>
    <LoginContainer background={LoginBack}>
        <LoginCenteredContainer>
            <Title>#YENDO</Title>
            <TextInput placeholder={"N° de SUBE"}/>
            <TextInput placeholder={"Contraseña"}/>
            <LabelsContainer>
                <Label>Eee, me olvide</Label>
                <Label>Soy nuevo</Label>
            </LabelsContainer>
        </LoginCenteredContainer>
    </LoginContainer>;

const LoginContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${props => props.background}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const LoginCenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: #FCEB06;
    font-size: 7.5rem;
    margin: 0;
`;
const LabelsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
`;

const Label = styled.p`
    color: white;
    text-decoration: underline;
    display: inline-block;
`;

export default Login
