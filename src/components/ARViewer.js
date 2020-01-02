import React from "react"
import SlideCard from "./Cards/SlideCard"
import styled from "styled-components"
import Button from "./Common/Button"
import mp3Audio from "../audio/mixed-feelings.mp3"
import oggAudio from "../audio/mixed-feelings.ogg"

const StyledIframe = styled.iframe`
width: 100%;
border: none;
position: absolute;
top: 0;
left: 0;
right: 0;
height: 100%;
`

const closeAndStopAudio = (props) => {
    const audioAR = document.getElementById('arSong');
    audioAR.src =""
    props.closeAR()
}

const ARSlideCard = styled(SlideCard)`
height: 70vh;
`

const ARSlideCardHeader = styled.div`
position: relative;
z-index: 1;
text-align: center;
color: #fff;
text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.75);
`

const ARSlideCardButtonRow = styled.div`
position: absolute;
bottom: 0;
z-index: 1;
left: 0;
right: 0;
`

const ARViewer = props => {
    return <ARSlideCard show={props.show}>
       <SlideCard.Header><ARSlideCardHeader>Point camera at the QR code</ARSlideCardHeader></SlideCard.Header>
    <StyledIframe src="/AR.html"></StyledIframe>
    <ARSlideCardButtonRow><Button type="button" onClick={() => {closeAndStopAudio(props)}}>Close</Button></ARSlideCardButtonRow>
    
    <audio id="arSong" autoPlay>
            <source src={oggAudio} type="audio/ogg" />
            <source src={mp3Audio} type="audio/mpeg" />
          Your browser does not support the audio element.
          </audio> 
    </ARSlideCard>
}

export default ARViewer