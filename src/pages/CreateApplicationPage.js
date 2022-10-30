import React, { useState, useReducer, useEffect  } from "react";
import { useHttp } from '../hooks/http.hook'

const initialState = {
    apP_PID:'',
    apP_FIRST_NAME:'',
    apP_LAST_NAME:'',
    apP_PHONE:'',
    apP_REG_ADDRESS:''
}

function formReducer(state = initialState, action) {
   const { type, payload } = action
    switch (type) {
        case 'CHANGE':
    return { ...state, ...payload }
        case 'CLEAR':
    return initialState
        default:
        break
   }
}
    

const CreateApplicationPage = () => {
    
    const {loading, request, error } = useHttp()
    const [formState, dispatch] = useReducer(formReducer, initialState)

    const url = `https://ssademographytestapi.ssa.moh.local/api/Application`


    const handleSubmit = async (event) => {
        try{
        event.preventDefault()
        const result = await request(`${url}`, 'POST', {createApplication: formState})
        console.log('result', result)
        }catch(ex){console.log('ex',ex)}
    }
    
    if(loading){
        return <p>...Loading</p>
    }

    if(error){
        alert(error)
    }

    // const someMethod = () => {

    //     const obj = {
    //         fn:'Zura',
    //         ln:'Revazishvili',
    //         age:'45',
    //         funcName:'func',
    //         func: ()=>(id)=>{alert(id)}
    //     } 

    //     const key = Object.keys(obj)
    //     const val = Object.values(obj)
    //     const entries = Object.entries(obj)

    //     console.log('key', key)
    //     console.log('val', val)
    //     console.log('entries', entries)

    //     console.log(typeof obj.func)
    //     obj.func()(5)
    //     //obj['func1']()

    // } 

    const handleChange = (event)=>{
        const{name, value} = event.target
        dispatch({ type: 'CHANGE', payload: {...formState, [name]: value} })
    }

    return <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="apP_TYPE" className="form-label">apP_TYPE</label>
                <input type="text" className="form-control" id="apP_TYPE" name="apP_TYPE" value={formState.apP_TYPE} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="apP_NO" className="form-label">apP_NO</label>
                <input type="text" className="form-control" id="apP_NO" name="apP_NO" value={formState.apP_NO} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="regioN_ID" className="form-label">regioN_ID</label>
                <input type="text" className="form-control" id="regioN_ID" name="regioN_ID" value={formState.regioN_ID} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="apP_PID" className="form-label">apP_PID</label>
                <input type="text" className="form-control" id="apP_PID" name="apP_PID" value={formState.apP_PID} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="apP_FIRST_NAME" className="form-label">apP_FIRST_NAME</label>
                <input type="text" className="form-control" id="apP_FIRST_NAME" name="apP_FIRST_NAME" value={formState.apP_FIRST_NAME} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="apP_LAST_NAME" className="form-label">apP_LAST_NAME</label>
                <input type="text" className="form-control" id="apP_LAST_NAME" name="apP_LAST_NAME" value={formState.apP_LAST_NAME} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* <button type="button" className="btn btn-primary" onClick={someMethod} >some click</button> */}
        </form>
    </>
}

export default CreateApplicationPage