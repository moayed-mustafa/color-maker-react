import React, { useState } from 'react'
import Box from './Box'
import { v4 as uuid } from 'uuid'
import BoxForm from './BoxForm'


const BoxList = (props) => {

    // set the state
    const INITIAL_STATE = [
        {id: uuid(), color: 'red', width: 200, height:200},
        {id: uuid(), color: 'navy', width: 200, height:200},
        {id: uuid(), color: 'green', width: 200, height:200},

    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE)
    // delete a box
    const handleDelete = (id) => {
        let newBoxes = boxes.filter(box => box.id !== id)
        setBoxes(newBoxes)
    }
    // add a box
    const handleAdding = (boxes) => {
        setBoxes((data) =>[...data, {id:uuid(), ...boxes}] )
    }


    return (
        // this should take color, width , height
            <>
            <BoxForm submit={handleAdding} />
            <div>
                {boxes.map((box) =>
                    <Box
                        key={box.id}
                        color={box.color}
                        width={box.width}
                        height={box.height}
                        handler={() => handleDelete(box.id)}
                        id={box.id}
                    />)}
            </div>

            </>


    )
}

export default BoxList