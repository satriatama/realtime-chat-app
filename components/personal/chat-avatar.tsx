import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'



export const ChatAvatar = () => {

  return (
    <HoverCard>
        <HoverCardTrigger asChild>
        <div className='flex'>
        <Button className='border' size="icon" variant="link">
            <Avatar className='h-12 w-12'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>Mustofa</AvatarFallback>
            </Avatar>
        </Button>
        </div>
        </HoverCardTrigger>
        <HoverCardContent side='left' sideOffset={20} align='start' className='max-w-72'>
        <div className="flex justify-start space-x-4">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
            <h4 className="text-sm font-semibold">Mustofa Satria Tama</h4>
            <p className="text-sm bg-red-50 p-2 rounded-lg">
                Buka chatnya cepat! Kita bisa ngobrol apa aja disini.
            </p>
            <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">
                12/12/2021
                </span>
                <span className="text-xs text-muted-foreground">
                12:00
                </span>
            </div>
            </div>
        </div>
        </HoverCardContent>
    </HoverCard>
  )
}
