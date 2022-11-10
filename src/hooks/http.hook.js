import React from 'react'
import { useState, useCallback } from 'react'
import axios from 'axios'
//import { useAuth } from './auth.hook'

export const useHttp = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  //const { logout } = useAuth()

  const request = useCallback(
    async (method = 'GET', url,  body = null, headers = {}) => {
      //console.log('_request', url, method, body, headers)
      setLoading(true)
      try {
  
        if (!headers['content-type']) {
          headers['content-type'] = 'application/json'
        }

        const response = await axios({method, url, data: body, headers:{ headers}}
        )

        //const data = await response.json()

        console.log('response.data',response.data)

        // if (!response.ok) {
        //   //როდესაც ტოკენი აღარ არის ვალიდური
        //   if (response.status == 401) {
        //     logout()
        //     //history.push('/')
        //   }
        //   throw new Error(data.message || 'მოხდა შეცდომა!')
        // }

        setLoading(false)

        return response.data

      } catch (e) {
        console.log('ex',e)
        setLoading(false)
        setError(e.message)
        throw e
      }
    },
    []
  )

  const clearError = useCallback(() => setError(null), [])

  return { loading, request, error, clearError }

}
