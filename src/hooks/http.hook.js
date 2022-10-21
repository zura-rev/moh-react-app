import { useState, useCallback } from 'react'
//import { useAuth } from './auth.hook'

export const useHttp = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  //const { logout } = useAuth()

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      console.log('_request', url, method, body, headers)
      setLoading(true)

      try {

        if (body) {
          body = JSON.stringify(body)
        }

        if (!headers['content-type']) {
          headers['content-type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers })
        //console.log('response', response.headers['totalpages'])
        const data = await response.json()

        // if (!response.ok) {
        //   //როდესაც ტოკენი აღარ არის ვალიდური
        //   if (response.status == 401) {
        //     logout()
        //     //history.push('/')
        //   }
        //   throw new Error(data.message || 'მოხდა შეცდომა!')
        // }

        setLoading(false)

        return data

      } catch (e) {
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
