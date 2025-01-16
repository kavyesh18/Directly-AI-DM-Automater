import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'
import ActiveAutomationButton from '../../active-automation-button'

type Props = {
    id:string
}

const AutomationsBreadCrumb = ({id}: Props) => {
    //WIP : getch the automation data
    //User Mutation stuff to update the automations

  return <div className='rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center'>
        <div className='flex items-center gap-x-3'>
            <p className='text-[#9B9CA0]'>Automations</p>
            <ChevronRight color='#9B9CA0'/>
            <span className='flex gap-x-3 items-center'> 
                {/* //WIP: Show the Editing Data */}
                <p className='text-[#9B9CA0]'>This is the automation title</p>

                <span
                // onClick={enableEdit}
                className='cursor-pointer hover:opacity-75 duration-100 transition'
                >
                <PencilIcon size={14}/>
                </span>
            </span>
        </div>

        <div className='flex gap-x-5 '>
            <p className='hidden md:block text-text-secondary/60 text-sm '>
            All states automatically saved
            </p>
            <div className='flex gap-x-5 '>
                <p className='text-text-secondary text-sm '>Changes Saved</p>
            </div>
        </div>
        <ActiveAutomationButton/>
  </div>
  
}

export default AutomationsBreadCrumb