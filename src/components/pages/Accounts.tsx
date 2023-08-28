import React, { useEffect } from 'react'
import { FC } from 'react'
import { useAccounts } from '../../hooks/useAccounts'
import { AddAccount } from './AddAccount'

export const Accounts: FC = () => {
  const { accounts, getAccounts, removeAccount } = useAccounts()

  useEffect(() => {
    getAccounts()
  }, [])

  return (
    <div>
      {accounts.length === 0 && (<div className='w-full h-full p-10 flex items-center justify-center'>No accounts added</div>)}
      {accounts.map((account) => {
        return (
          <div className="flex justify-between items-center p-2">
            <div className="flex flex-col">
              <div className='text-base font-bold'>{account.name}</div>
              <div className='text-gray-700'>{account.email}</div>
            </div>
            <button
              className="btn btn-sm btn-error"
              onClick={() => removeAccount(account)}
            >
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
