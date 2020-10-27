import React, {useState} from "react"
import styled from "styled-components"
import Tab from "./Tab";

const tabs = [
    {
        title: "Tren",
        img: "/assets/images/tren.png",
        quantity: 1
    },
    {
        title: "Colectivo",
        img: "/assets/images/bondi.png",
        quantity: 24
    },
    {
        title: "Camioneta",
        img: "/assets/images/camioneta.png",
        quantity: 309
    },
    {
        title: "Auto",
        img: "/assets/images/auto.png",
        quantity: 464
    },
    {
        title: "Moto",
        img: "/assets/images/moto.png",
        quantity: 982
    },
    {
        title: "Bicicleta",
        img: "/assets/images/bicicleta.png",
        quantity: 1856
    },
];

const TransportSelection = () =>{
    const [indexSelected,setIndexSelected] = useState(0);

    return <TransportSelectionContainer>
        <TabsContainer>
            {
                tabs.map( (tab,k) =>
                    <Tab key={tab.title} selected={indexSelected===k} quantity={tab.quantity} title={tab.title} onClick={()=>setIndexSelected(k)}/>
                )
            }
        </TabsContainer>
        <ImagesContainer>
            {
                <img src={tabs[indexSelected].img} alt={tabs[indexSelected].title}/>
            }
        </ImagesContainer>
    </TransportSelectionContainer>
};

const ImagesContainer = styled.div`
    overflow-y: scroll;
`;

const TransportSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TabsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default TransportSelection
