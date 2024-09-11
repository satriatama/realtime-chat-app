import { PersonalChatPage } from '@/components/personal/chat-page'
import React from 'react'

function getChatData(id: number): PersonalChatPageProps{
  return DummyDataArr.find((item :any) => item.idChat === id)
}

const DummyDataArr: any = [
  {
    idChat: 1,
    user: 'Florencio Dorrance',
    date: '2021-09-15',
    time: '12:00',
    dataChat: [
      {
        user: 'Florencio Dorrance',
        data: [
          { message: 'cek' },
          { message: 'ini adalah testing' }
        ]
      },
      {
        user: 'Satria Tama',
        data: [
          { message: 'tesing 123' },
          { message: 'wihhh mantap' }
        ]
      },
      {
        user: 'Florencio Dorrance',
        data: [
          { message: 'yakan' }
        ]
      }
    ]
  },
  {
    idChat: 2,
    user: 'Satria Tama',
    date: '2021-09-15',
    time: '12:00',
    dataChat: [
      {
        user: 'Florencio Dorrance',
        data: [
          { message: 'How are you asddasasd?' },
          { message: 'I\'ll be there in 2 mins 🕒' }
        ]
      },
      {
        user: 'Satria Tama',
        data: [
          { message: 'just ideas for next time lorem' },
          { message: 'woohoooo' }
        ]
      },
      {
        user: 'Florencio Dorrance',
        data: [
          { message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
          { message: 'I\'ll be there in 2 mins 🕒' }
        ]
      }
    ]
  },
  {
    idChat: 3,
    user: 'supratman',
    date: '2021-09-15',
    time: '12:00',
    dataChat: [
      {
        user: 'Florencio Dorrance',
        data: [
          { message: 'How are you asddasasd?' },
          { message: 'I\'ll be there in 2 mins 🕒' }
        ]
      },
      {
        user: 'Satria Tama',
        data: [
          { message: 'just ideas for next time lorem' },
          { message: 'woohoooo' }
        ]
      },
      {
        user: 'Florencio Dorrance',
        data: [
          { message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
          { message: 'I\'ll be there in 2 mins 🕒' }
        ]
      }
    ]
  },
]


const page = () => {
  return (
    <div className='flex ms-1 h-screen'>
      <PersonalChatPage {...getChatData(1)} />
    </div>
  )
}

export default page