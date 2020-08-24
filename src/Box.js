import React, { useState } from 'react'


const Box = ({id, color, width, height, handler }) => {
    return (
        <div id={id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            width:width,
            height:height,
            margin: 10
        }}>
            <button onClick={handler}>X</button>
        </div>
    )

}

export default Box