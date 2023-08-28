import React, { FC } from 'react'
import { useUser } from '../../hooks/useUser'

export const Home: FC = () => {
  const { user, clearUser } = useUser()
  if (!user) return null
  return (
    <div className="p-10 h-60 flex flex-col justify-between">
      <div>
        <div>Hello,</div>
        <h1 className="text-lg">{user.name}</h1>
        <h2 className="text-base">{user.email}</h2>
      </div>
      <button
        className="btn btn-sm "
        onClick={() => {
          const isClear = confirm('Are you sure you want to clear user?')
          if (isClear) clearUser()
        }}
      >
        Clear User
      </button>
    </div>
  )
}
