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

    const addApplication = async ()=> {
        return await request(`${url}`, 'POST', {createApplication:formState})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log('formState', formState)

        //validation logic
        const result = addApplication()

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
                <label htmlFor="pid" className="form-label">PID</label>
                <input type="text" className="form-control" id="pid" name="apP_PID" value={formState.apP_PID} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">firstName</label>
                <input type="text" className="form-control" id="firstName" name="apP_FIRST_NAME" value={formState.apP_FIRST_NAME} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastName" className="form-label">lastName</label>
                <input type="text" className="form-control" id="lastName" name="apP_LAST_NAME" value={formState.apP_LAST_NAME} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">phone</label>
                <input type="text" className="form-control" id="phone" name="apP_PHONE" value={formState.apP_PHONE} onChange={handleChange} />
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