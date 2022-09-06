import React from 'react'

export const Table = ({ data }) => {
    console.log('props', data)
    return <table className='table'>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {data && data.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
            </tr>)}
        </tbody>
    </table>
}