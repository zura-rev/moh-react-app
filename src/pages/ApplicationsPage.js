import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { url } from '../constants'

export default function AplicationsPage() {
    const { loading, request } = useHttp()
    const [applications, setApplications] = useState([])

    const params = {
        pageIndex: 1,
        pageSize: 10,
        teritoryIds: [300, 301, 302, 303, 304, 305, 306, 307, 308]
    }

    const uri = 'http://ssademographytestapi.ssa.moh.local/api/Application?PageIndex=1&PageSize=10&TeritoryIds=301&TeritoryIds=302&TeritoryIds=308&StartDate=2016-01-01&EndDate=2022-09-01'

    async function fetchApplications() {
        //const _applications = await request(`${uri}`, null, 'GET')
        await fetch(`${uri}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data => setApplications(data))

        //setApplications(_applications)
    }

    useEffect(() => {
        fetchApplications()
    }, [])


    console.log('_applications', applications)

    return (
        <div>341</div>
    )
}

