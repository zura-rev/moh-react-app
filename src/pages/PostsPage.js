import React from 'react'
import { Table } from '../components/table'

export default function PostsPage({ posts }) {
    return <Table data={posts} />
}

