import React from "react"
import styled from "styled-components"

const TextInput = (props) => <TextInputContainer {...props}/>;

const TextInputContainer = styled.input`
    background: #FFAA71;
    border: none;
    color: white;
    width: 200px;
    max-width: 100%;
    &:focus {
        outline: none;
    }
    
    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 1; /* Firefox */
    }
    
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: white;
    }
    
    &::-ms-input-placeholder { /* Microsoft Edge */
      color: white;
    }
`;

export default TextInput
