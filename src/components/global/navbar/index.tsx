'use client'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/user-nav'
import { Menu} from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpDuoToneWhite } from '@/icons'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import Image from 'next/image'
import CreateAutomation from '../create-automation'
import Search from './search'
import Notifications from './notifications'
import MainbreadCrumb from '../bread-crumbs/main-bread-crumb'

type Props = {
    slug: string
}

const Navbar = ({ slug }: Props) => {
    const { page } = usePaths();
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug;

    return currentPage && <div className='flex flex-col'>
       <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
        <span className='lg:hidden flex items-center flex-1 gap-x-2'>
            <Sheet
            trigger={<Menu/>}
            className="lg:hidden"
            side="left"
            >
               <div className="w-[250px] border-2 radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
            <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl'>
                <div className='flex justify-center'> 
                    <Image 
                        src='/directly logo.ico' 
                        alt='Directly Logo' 
                        width={150} 
                        height={150} 
                        className='object-contain cursor-pointer'
                    />
                </div>
                <div className='flex flex-col py-3'>
                  <Items page={page} slug={slug}/>
                </div>
                <div className='px-16'>
                <Separator
                orientation='horizontal'
                className='bg-[#333336]'
                />
                </div>
                <div className='px-3 flex flex-col gap-y-5'>
                  <div className='flex gap-x-2'>
                    <ClerkAuthState/>
                    <p className='text-[#9B9CA0]'>Profile</p>
                  </div>
                  <div className='flex gap-x-3'>
                    <HelpDuoToneWhite/>
                    <p className='text-[#9B9CA0]'>Help</p>
                  </div>
                </div>

                <SubscriptionPlan type='FREE'>
                  <div className='flex-1 flex flex-col justify-end'>
                    <UpgradeCard/>
                  </div>
                </SubscriptionPlan>
            </div>
        </div>
            </Sheet>
        </span>
        <Search/>
        <CreateAutomation/>
        <Notifications/>
       </div>
       <MainbreadCrumb page={page == slug ? 'Home' : page}
       slug={slug}
       />
    </div>
}

export default Navbar;
