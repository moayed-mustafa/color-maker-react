import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'


import BoxList from './BoxList.js'

// smoke test
it('should render without crashing', () => {
    render(<BoxList/>)
})

// snapshot test
it('should match an existing snapshot', () => {
    const { asFragment } = render(<BoxList />)

    expect(asFragment).toMatchSnapshot()
})

it('should be able to add a box', () => {
    const { queryByText, queryByRole, getByPlaceholderText } = render(<BoxList />)
    const button = queryByText('Add')
    expect(queryByRole('pink-box')).not.toBeInTheDocument()
    const inputs = [
         'width',
         'height',
         'color'
    ]

    const values = [200, 200, 'pink']
    for (let i = 0; i < inputs.length; i++){
        fireEvent.change(getByPlaceholderText(inputs[i]), {target:{value: values[i]}})
    }
    fireEvent.click(button)
    expect(queryByRole('pink-box')).toBeInTheDocument()


})

it('should be able to delete a box', () => {
    // todo: this is a bit quirky since I know that the red box is the first one, what if I did not?

    const { queryAllByText,queryByRole } = render(<BoxList />)
    const button = queryAllByText('X')
    expect(queryByRole('red-box')).toBeInTheDocument()
    fireEvent.click(button[0])
    expect(queryByRole('red-box')).not.toBeInTheDocument()
})