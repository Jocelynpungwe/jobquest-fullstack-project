import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const ProtectedRoutes = ({children}) => {
 const {user} = useSelector(store => store.user)
 if(!user){
    return <Navigate to='/landing' />
 }
 return children
}

export default ProtectedRoutes