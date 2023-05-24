'use client'
import { Menu } from '@headlessui/react'
import { Icon } from '../../icon'
export default function Auth() {
    return (
      
     
          <Menu as="div" className={"relative"} >
        
      <Menu.Button className={" h-8 w-8 bg-black  flex items-center justify-center rounded-full bg-opacity-70"}>Gy</Menu.Button>
      <Menu.Items as ="div" className={"bg-active  absolute top-full right-0 w-48 rounded flex flex-col p-1  gap-y-1 text-sm"}>
  
        <Menu.Item  >
          {({ active }) => (
            <a
              className={`h-10 flex justify-between items-center    px-2 ${active && 'bg-white bg-opacity-10'}`}
              href="/account-settings"
            >
            Account 
          
            <Icon name="dom" size={18} /> 
          
            </a>
          )}
        </Menu.Item>
        <Menu.Item  >
          {({ active }) => (
            <a
              className={`h-10 flex items-center px-2 ${active && 'bg-white bg-opacity-10 '}`}
              href="/account-settings"
            >
              Profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item  >
          {({ active }) => (
            <a
              className={`h-10 flex items-center px-2 ${active && 'bg-white bg-opacity-10'}`}
              href="/account-settings"
            >
              Settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item  >
          {({ active }) => (
            <a
              className={`h-10 flex items-center px-2 border-t border-white border-opacity-20 ${active && 'bg-white bg-opacity-10'}`}
              href="/account-settings"
            >
              Log out
            </a>
          )}
        </Menu.Item>
 
      </Menu.Items>
    </Menu>
  
    );
  }