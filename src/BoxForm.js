import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './BoxForm.css';

const BoxForm = ({submit}) => {
    // set the state
    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''

    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    // change the state
    const changeInput = (e) => {
        let { name, value } = e.target
        name === 'width' || name === 'height' ?value= parseInt(value) : value = value;
        e.persist()
        setFormData(data => ({
            ...data,
             [name] : value
        }))
    }

    const handleSubmit = (e) => {
        submit({ ...formData })
        setFormData(INITIAL_STATE)
        e.preventDefault()

    }

    return (
        <>
            <form
                style={{
                    margin: 10,
                    display: 'flex'
                }}
            onSubmit={handleSubmit}
            >
                <label htmlFor="width">width</label>
                <input onChange={changeInput} name="width" placeholder = "width" id="width" value={formData.width}></input>

                <label htmlFor="height">height</label>
                <input  onChange={changeInput} name="height" placeholder = "height" id="height" value={formData.height}></input>

                <label htmlFor="color">color</label>
                <input onChange={changeInput} name="color" placeholder = "color" id="color" value={formData.color}></input>
                <button>Add</button>

            </form>

            </>
    )

}

export default BoxForm