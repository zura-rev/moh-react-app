import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

const ApplicationPage = () => {
    let params = useParams()
    let navigate = useNavigate()
    //console.log('params', params)
    const { loading, request } = useHttp()
    const uri = `https://ssademographytestapi.ssa.moh.local/api/Application/${params.id}`
    const [application, setApplication] = useState(null)

    async function fetchApplication() {
        const _application = await request('GET',`${uri}`,  null)
        console.log('_application', _application)
        setApplication(_application)
    }

    useEffect(() => {
        fetchApplication()
    }, [])

    const renderValue = (value) => {
        if (value) {
            if (typeof value === "object") {
                return value.join(', ')
            }
            return value
        }
        return '-'

    }

    if (loading) {
        return <p>loading...</p>
    }

    const handleEditClick = (id) => {
        navigate(`/CreateApplicationPage/${id}`)
    }

    console.log('application', application)

    return (
        <>
        <button onClick={()=>handleEditClick(params.id)}>რედაქტირება</button>
        <hr />
        <div className='card'>
            <div className='card-header'>განაცხადი</div>
            <div className='card-body'>
                <table className='table'>
                    <tbody>
                        {application && Object.entries(application).map((item, index) => {
                            console.log('item', item)
                            return <tr key={index}>
                                <td>{item[0]}</td>
                                <td>{renderValue(item[1])}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}


export default ApplicationPage