import React from 'react'
import { FC, ReactNode, useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import { Login } from '../components/pages/Login'

export const UserLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { getUser, user, clearUser } = useUser()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="w-80 h-80">
      {!user?.email ? <Login /> : children}
    </div>
  )
}
