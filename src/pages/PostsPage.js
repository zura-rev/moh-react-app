import React, { useState, useEffect } from 'react'
import { Table } from '../components/table'
import { getPosts } from '../api'
import { Chat } from '../components/chat'

export default function PostsPage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const _posts = await getPosts()
            setPosts(_posts)
        }
        fetchData()
        //return () => { }
    }, [])

    return <Table data={posts} />
}

