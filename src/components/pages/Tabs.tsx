import { Tab } from '@headlessui/react'
import React, { FC, useState } from 'react'
import { Accounts } from './Accounts'
import { AddAccount } from './AddAccount'
import { Home } from './Home'

export const Tabs: FC = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className="w-full p-2">Home</Tab>
        <Tab className="w-full p-2">Accounts</Tab>
        <Tab className="w-full p-2">Add Account</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><Home /></Tab.Panel>
        <Tab.Panel>
          <Accounts />
        </Tab.Panel>
        <Tab.Panel>
          <AddAccount onExit={() => setTabIndex(0)} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
