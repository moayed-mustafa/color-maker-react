import React, { useState } from 'react'
import Box from './Box'


const BoxList = (props) => {

    // set the state
    const INITIAL_STATE = [
        {color: 'red', width: 200, height:200},
        {color: 'navy', width: 200, height:200},
        {color: 'green', width: 200, height:200},

    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    return (
        // this should take color, width , height
        boxes.map(box => <Box color={box.color} width={box.width} height={box.height}/>)
    )
}

export default BoxList