import React, { useState } from "react";
import { createPost } from '../api'

const initialState = {
    title: '',
    body: ''
}


const CreatePostPage = ({ handlePost }) => {


    const [state, setState] = useState(initialState)

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')

    // const handleChange = (event) => {
    //     const { name, value } = event.target
    //     if (name === 'title') setTitle(value)
    //     if (name === 'body') setBody(value)
    //     console.log('value', value)
    // }

    const handleChange = (event) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }

    const savePost = async () => {
        const post = await createPost(state)
        handlePost(post)
    }

    return (
        <form>
            <label htmlFor="title" className="form-label">title</label>
            <input
                id='title'
                className="form-control"
                name='title'
                value={state.title}
                onChange={handleChange}
                placeholder='title'
            />
            <label htmlFor="body" className="form-label">body</label>
            <input
                id='body'
                className="form-control"
                name='body'
                value={state.body}
                onChange={handleChange}
                placeholder='body'
            />
            <button className="btn btn-primary mt-3 float-end" type="button" onClick={savePost}>add post</button>
        </form>
    )
}

export default CreatePostPage