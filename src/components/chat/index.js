import React, { useState } from 'react'
import { SearchInput } from '../search'
import { List } from '../list'
import './style.css'

const userArray = [
    { id: 1, name: 'ზურაბ ბატიაშვილი', imgUrl: '' },
    { id: 2, name: 'სალომე ახვლედიანი', imgUrl: '' },
    { id: 3, name: 'თიკო კურკუმული', imgUrl: '' },
    { id: 4, name: 'ნიკა ტორუა', imgUrl: '' },
    { id: 5, name: 'ლადო ჯიბლაძე', imgUrl: '' }
]

export const Chat = () => {

    const [users, setUsers] = useState(userArray)

    const onChange = (event) => {
        const { value } = event.target
        const _users = userArray.filter(x => x.name.includes(value))
        setUsers(_users)
    }

    const handleDelete = (id) => {
        const _users = users.filter(x => x.id !== id)
        setUsers(_users)
    }

    return <div className='card'>
        <div className='card-header'>
            <SearchInput onChange={onChange} />
        </div>
        {users.length > 0 ? < List users={users} onUserDelete={handleDelete} /> : <p className='text-center'>ჩანაწერი ვერ მოიძებნა!</p>}
    </div>
}