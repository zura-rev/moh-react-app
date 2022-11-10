import React, { useState, useReducer, useEffect  } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from '../hooks/http.hook'

const initialState = {
    id: 0,
    apP_TYPE: 0,
    apP_NO: "string",
    oP_DATE: "2022-11-10T12:29:37.665Z",
    regioN_ID: 301,
    apP_PID: "44001004283",
    apP_FIRST_NAME: "string",
    apP_LAST_NAME: "string",
    apP_BIRTH_DATE: "2022-11-10T12:29:37.665Z",
    apP_PHONE: "string",
    apP_IS_FAMILY_MEMBER: 0,
    apP_FAMILY_LINK: 0,
    apP_REG_ADDRESS: "string",
    casheR_PID: "44001004283",
    casheR_FIRST_NAME: "string",
    casheR_LAST_NAME: "string",
    casheR_BIRTH_DATE: "2022-11-10T12:29:37.665Z",
    casheR_PHONE: "string",
    casheR_IS_FAMILY_MEMBER: 0,
    ziP_CODE: "string",
    city: "string",
    region: "string",
    government: "string",
    village: "string",
    address: "string",
    addresS_NO: "string",
    homE_1: "string",
    homE_2: "string",
    phonE_1: "string",
    phonE_2: "string",
    email: "string",
    useR_ID: 0
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
    let params = useParams()
    const { loading, request, error} = useHttp()
    const [formState, dispatch] = useReducer(formReducer, initialState)
    // const [application, setApplication] = useState(null)
    
    async function fetchApplication(id) {
        const uri = `https://ssademographytestapi.ssa.moh.local/api/Application/${id}`
        const _application = await request('GET',`${uri}`,  null)
        console.log('_application_22', _application)
        // setApplication(_application)
        dispatch({ type: 'CHANGE', payload: {...formState, ..._application}})
    }

    useEffect(()=>{
       if(params.id!=0){
        
         fetchApplication(params.id)

       }
    }, [params.id]
    )
   

    
    
    const handleSubmit = async (event) => {
        try{
        const url = `https://ssademographytestapi.ssa.moh.local/api/Application`
        event.preventDefault()
        const result = await request('POST',`${url}`, {createApplication: formState})
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
                <input type="text" className="form-control" id="apP_PID" name="apP_PID" value={formState.apP_PID} onChange={handleChange} required/>
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
                <label htmlFor="casheR_PID" className="form-label">casheR_PID</label>
                <input type="text" className="form-control" id="casheR_PID" name="casheR_PID" value={formState.casheR_PID} onChange={handleChange} required/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* <button type="button" className="btn btn-primary" onClick={someMethod} >some click</button> */}
        </form>
    </>
}

export default CreateApplicationPage