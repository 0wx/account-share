import React, { FC, ChangeEvent } from 'react'

export const Input: FC<{
  id: string
  label: string
  type?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
}> = ({ id, label, type = 'text', value, onChange, placeholder, required }) => {
  return (
    <div className="">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input input-sm input-bordered w-full max-w-xs"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  )
}
