import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { UserLayout } from './layouts/UserLayout'
import { Tabs } from './components/pages/Tabs'

const Popup = () => {
  return (
    <UserLayout>
      <Tabs />
    </UserLayout>
  )
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
)
