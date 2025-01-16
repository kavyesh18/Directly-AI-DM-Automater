import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { ActiveAutomation } from '@/icons/active-automation'

type Props = {}

const ActiveAutomationButton = (props: Props) => {
    //WIP: Setup optimistic UI
    //WIP : Getch some Automation data
  return <Button className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4'>
        {/* //WIP: Set the Loading State */}
        <Loader state={false}>
            <ActiveAutomation/>
            <p className='lg:inline hidden'>
               'Activate'
            </p>
        </Loader>
  </Button>
}

export default ActiveAutomationButton