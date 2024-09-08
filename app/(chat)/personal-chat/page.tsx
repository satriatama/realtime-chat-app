'use client'
import { ChatAvatar } from '@/components/personal/chat-avatar'
import { PersonalChatPage } from '@/components/personal/chat-page'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { CalendarDays, DotIcon, Icon, RedoDotIcon, StarHalfIcon } from 'lucide-react'
import React from 'react'


const page = () => {
const dataAvatar = [
  {
    user: 'satria',
    id: 1
  }
]  
const [id, setId] = React.useState(0)
function handler(id: number) {
  setId(id)
}
  return (
    id !== 0 ? (
    <div className='flex ms-1 h-screen'>
      <div className='flex flex-col gap-5 max-h-96 overflow-hidden overflow-y-auto scrollbar-hide mt-16 p-3 items-center bg-gray-400 rounded-3xl'>
        dataAvatar.map((item) => (
          
        ))
      </div>
      <PersonalChatPage />
    </div>
  ) : (
    <div className='flex ms-1 h-screen '>
      <div className='flex flex-row gap-5 max-h-96 overflow-hidden overflow-y-auto scrollbar-hide mt-16 p-3 items-center bg-gray-400 rounded-3xl'>
        <ChatAvatar />
      </div>
    </div>
  )
  )
}

export default page