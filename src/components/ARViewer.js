import React from "react"
import SlideCard from "./Cards/SlideCard"
import styled from "styled-components"
import Button from "./Common/Button"
import mp3Audio from "../audio/mixed-feelings.mp3"
import oggAudio from "../audio/mixed-feelings.ogg"

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
    <audio autoPlay>
            <source src={oggAudio} type="audio/ogg" />
            <source src={mp3Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
          </audio> 
    </SlideCard>
}

export default ARViewer