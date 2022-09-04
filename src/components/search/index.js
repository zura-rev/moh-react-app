import React from 'react'
import './style.css'

export const SearchInput = ({ onChange }) => {
    return <div className='search-input'>
        <input
            type='text'
            id='search'
            name={'search'}
            onChange={onChange}
            className='form-control'
            placeholder='ძებნა'
        />
    </div>
}