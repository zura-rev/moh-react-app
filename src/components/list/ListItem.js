import React from 'react'

export const ListItem = (props) => {
    //console.log('props', props)
    return <li className='list-group-item'>{props.item.name}
        <button
            className='btn btn-sm btn-danger float-end'
            onClick={() => props.onUserDelete(props.item.id)}
        >X</button>
    </li>
}