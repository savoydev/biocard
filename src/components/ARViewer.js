import React from "react"
import SlideCard from "./Cards/SlideCard"
import styled from "styled-components"
import Button from "./Common/Button"

const StyledIframe = styled.iframe`
height: 80vh;
width: 100%;
border: none;
`

const ARViewer = props => {
    return <SlideCard show={props.show}>
       <SlideCard.Header>Point camera at the QR code</SlideCard.Header>
    <StyledIframe src="/AR.html"></StyledIframe>
    <Button type="button" onClick={props.closeAR}>Close</Button>
    </SlideCard>
}

export default ARViewer