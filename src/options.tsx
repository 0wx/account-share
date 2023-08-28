import './style.css'
import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { UserLayout } from './layouts/UserLayout'
import { Tabs } from './components/pages/Tabs'

const Options = () => {
  return (
    <UserLayout>
      <Tabs />
    </UserLayout>
  )
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
)
