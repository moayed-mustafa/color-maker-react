import React, { useState } from 'react'


const Box = ({ color, width, height }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            width:width,
            height:height,
            margin: 10
        }}>
            <button>X</button>
        </div>
    )

}

export default Box