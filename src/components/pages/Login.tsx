import React from 'react'
import { FC } from 'react'
import { Input } from '../atoms/Input'
import { useUser } from '../../hooks/useUser'

export const Login: FC = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const { setUserToStorage } = useUser()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!name || !email) return
    setUserToStorage({ name, email })
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return (
    <form className="p-10 flex flex-col gap-7" onSubmit={handleSubmit}>
      <div>
        <pre></pre>
        <Input id="name" label="Name" onChange={handleChangeName} />
        <Input
          id="email"
          label="Email"
          type="email"
          onChange={handleChangeEmail}
        />
      </div>
      <button className="btn btn-sm" type="submit">
        Save
      </button>
    </form>
  )
}
