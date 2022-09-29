import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap'
import { createPost } from '../api'

const initialState = {
    title: '',
    body: ''
}


const CreatePostPage = ({ handlePost }) => {

    const titleRef = useRef(null)
    const bodyRef = useRef(null)

    const [validated, setValidated] = useState(false);
    const [state, setState] = useState(initialState)
    const [flag, setFlag] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        //if (flag) {
        setFirstName(`zura ${Number(new Date())}`)
        setLastName(`batiashvili ${Number(new Date())}`)
        //}
        return () => { }
    })



    const changeFlag = () => {
        setFlag(!flag)
    }

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
        console.log('body', value)
        setState({ ...state, [name]: value })
    }

    const savePost = async () => {
        console.log('state', state)
        console.log('ref', titleRef.current.value)
        //const post = await createPost(state)
        //handlePost(post)
    }


    const handleSubmit = (event) => {

        const form = event.currentTarget

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        setValidated(true)

    }

    const handleValidate = () => firstName !== 'zura'


    return (

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    //defaultValue="Mark"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required={handleValidate()}
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    //defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>
            <Button type="submit">Submit form</Button>

            <Button type="button" onClick={changeFlag}>change flag</Button>

        </Form>


        // <form>
        //     <label htmlFor="title" className="form-label">title</label>
        //     {/* <input
        //         id='title'
        //         className="form-control"
        //         name='title'
        //         value={state.title}
        //         onChange={handleChange}
        //         placeholder='title'
        //     /> */}
        //     <input
        //         id='title'
        //         className="form-control"
        //         name='title'
        //         ref={titleRef}
        //         //value={}
        //         //onChange={handleChange}
        //         placeholder='title'
        //     />
        //     <label htmlFor="body" className="form-label">body</label>
        //     <input
        //         id='body'
        //         className="form-control"
        //         name='body'
        //         value={state.body}
        //         onChange={handleChange}//setBody(event.target.value)
        //         placeholder='body'
        //     />
        //     {/* <button className="btn btn-primary mt-3 float-end" type="button" onClick={savePost}>add post</button> */}
        //     <Button variant="primary" className="mt-3 float-end" onClick={savePost}>add post</Button>
        // </form>
    )
}

export default CreatePostPage