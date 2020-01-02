import React from "react"
import SlideCard from "./Cards/SlideCard"

const ARViewer = props => {
    return <React.Fragment>
       
    {/* <!-- we add detectionMode and matrixCodeType to tell AR.js to recognize barcode markers --> */}
        <a-scene embedded arjs='sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>

        <a-assets>
            <img id="reef" crossOrigin="anonymous" src="https://i.scdn.co/image/ab67616d00001e029fe9990447846206e65691f4" />
        </a-assets>
          
        <a-marker id="animated-marker" type='barcode' value='6'>
          <a-box position='0 0.5 0' src="#reef" width="5" height="2" depth="5"></a-box>
        </a-marker> 

        {/* <!-- use this <a-entity camera> to support multiple-markers, otherwise use <a-marker-camera> instead of </a-marker> --> */}
        <a-entity camera></a-entity>
        </a-scene>
    </React.Fragment>
}

export default ARViewer