import React, { useState } from 'react'


const Box = ({id, color, width, height, handler }) => {
    return (
        <div id={id}
            role={`${color}-box`}
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            width:width,
            height:height,
            margin: 10
        }}>
            <button data-testid={id}
                onClick={handler}>X</button>
        </div>
    )

}

export default Box