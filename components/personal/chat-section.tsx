import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ChatItem } from './chat-item';


export const ChatSection = (
    { user, isLeft, data }: ChatSectionProps
    ) => {
    return (
        isLeft ? (
        <div className="flex items-start space-x-2">
        <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>{user.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
            <ChatItem data={data} isLeft={isLeft} />
        </div>
    ): (
        <div className="flex justify-end items-start space-x-2">
            <ChatItem data={data} isLeft={isLeft} />
            <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>{user.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
        </div>
        )
    );
};
