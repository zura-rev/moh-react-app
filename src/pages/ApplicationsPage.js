import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import moment from 'moment'
import 'moment/locale/ka'
import { url } from '../constants'
import { useNavigate } from "react-router-dom";



export default function AplicationsPage() {
    let navigate = useNavigate();
    const { loading, request } = useHttp()
    const [apps, setApplications] = useState([])
    const [next, setNext] = useState(1)

    const params = {
        pageIndex: 1,
        pageSize: 10,
        teritoryIds: [300, 301, 302, 303, 304, 305, 306, 307, 308]
    }

    const uri = `https://ssademographytestapi.ssa.moh.local/api/Application?PageIndex=${next}&PageSize=10&TeritoryIds=301&TeritoryIds=302&TeritoryIds=308&StartDate=2016-01-01&EndDate=2022-09-01`

    async function fetchApplications() {
        const _applications = await request(`${uri}`, 'GET', null)
        setApplications(_applications)
    }

    useEffect(() => {
        fetchApplications()
    }, [next])

    const handleClick = (id) => {
        navigate(`applicationPage/${id}`)
    }

    const navigatePage = (value) => {
        if (value + next > 0) {
            setNext(next + value)
        }
    }

    return (<>
        <div>
            <button onClick={() => navigatePage(-1)}>-1</button>
            <span>{next}</span>
            <button onClick={() => navigatePage(1)}>+1</button>
        </div>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>apP_FIRST_NAME</th>
                    <th>apP_LAST_NAME</th>
                    <th>apP_BIRTH_DATE</th>
                    <th>apP_PHONE</th>
                    <th>apP_RESULT_TEXT</th>
                    <th>reC_DATE</th>
                </tr>
            </thead>
            <tbody>
                {apps && apps.map((item, index, arr) => {
                    return <tr key={index} onClick={() => handleClick(item.id)}>
                        <td>{item.apP_FIRST_NAME}</td>
                        <td>{item.apP_LAST_NAME}</td>
                        <td>{moment(item.apP_BIRTH_DATE).format('LLLL')}</td>
                        <td>{item.apP_PHONE}</td>
                        <td>{item.apP_RESULT_TEXT}</td>
                        <td>{moment(item.reC_DATE).format('LLLL')}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
    )
}

