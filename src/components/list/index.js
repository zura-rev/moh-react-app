import React from 'react'
import { ListItem } from './ListItem'
import './style.css'



export const List = (props) => {
    return <div className='list-group'>
        {props.users.map((item, index, arr) => {
            return <ListItem key={item.id} item={item} onUserDelete={props.onUserDelete} />
        })}
    </div>
}