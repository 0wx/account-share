import React, { FC, useEffect, useMemo } from 'react'
import { useAccounts } from '../../hooks/useAccounts'
import { Input } from '../atoms/Input'

export const AddAccount: FC<{ onExit: () => void }> = ({ onExit }) => {
  const { accountList, accounts, addAccount, fetchAccounts, getAccounts } = useAccounts()
  const [account, setAccount] = React.useState<number>()
  const [email, setEmail] = React.useState('')

  const options = useMemo(() => {
    return accountList.filter((v) => {
      return !accounts.find((account) => account.id === v.id)
    })
  }, [accountList])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const _account = accountList.find((v) => v.id === account) || options[0]
    addAccount({ ..._account, email })
    onExit()
  }

  useEffect(() => {
    fetchAccounts()
  }, [])
  return (
    <form className="p-10 flex flex-col gap-7" onSubmit={handleSubmit}>
      <div>
        <label className="label">Account</label>
        <select
          className="select select-sm select-bordered w-full max-w-xs"
          onChange={(e) => setAccount(Number(e.target.value))}
        >
          {options.map((account) => {
            return <option value={account.id}>{account.name}</option>
          })}
        </select>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="example@devhaus.com.sg"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-sm" type="submit">
        Add
      </button>
    </form>
  )
}
