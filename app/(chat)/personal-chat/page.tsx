'use client'
import { ChatAvatar } from '@/components/personal/chat-avatar'
import { PersonalChatPage } from '@/components/personal/chat-page'
import React from 'react'


const Page = () => {
const [id, setId] = React.useState(0)

  function handler(newId: number) {
    console.log(newId)
    setId(newId) 
  }

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

  const avatarDummy: AvatarData = {
    onClick: () => {},
    data: [
      {
        id: 1,
        user: 'Florencio Dorrance',
        date: '2021-09-15',
        time: '12:00',
        lastMessage: 'How are you asddasasd?'
      },
      {
        id: 2,
        user: 'Satria Tama',
        date: '2021-09-15',
        time: '12:00',
        lastMessage: 'just ideas for next time lorem'
      },
      {
        id: 3,
        user: "supratman",
        date: '2021-09-15',
        time: '12:00',
        lastMessage: 'I\'ll be there in 2 mins 🕒'
      },
      {
        id: 4,
        user: 'Suparnk0',
        date: '2021-09-15',
        time: '12:00',
        lastMessage: 'I\'ll be there in 2 mins 🕒'
      }
    ]
  }

  return (
    id !== 0 ? (
    <div className='flex ms-1 h-screen'>
      <div className='flex flex-col gap-5 max-h-96 overflow-hidden overflow-y-auto scrollbar-hide mt-16 p-3 items-center bg-gray-400 rounded-3xl'>
      {avatarDummy.data.map((item, index) => (
        <ChatAvatar key={index} id={item.id} onClick={handler} user={item.user} date={item.date} time={item.time} lastMessage={item.lastMessage} />
      ))}
      </div>
      <PersonalChatPage {...getChatData(id)} />
    </div>
  ) : (
    <div className='flex flex-col justify-center items-center mt-56'>
      <div className='justify-center mb-2 '>
      <h1 className="text-4xl text-center font-bold mb-2">Welcome, Mustofa!</h1> 
        <p className="text-lg text-center">
          Pilih teman ngobrolmu di icon chat dibawah ini
        </p>
      </div>
      <div className='flex flex-row gap-5 p-3 rounded-3xl'>
      {avatarDummy.data.map((item, index) => (
        <ChatAvatar key={index} id={item.id} onClick={handler} user={item.user} date={item.date} time={item.time} lastMessage={item.lastMessage} />
      ))}
      </div>
    </div>
  )
  )
}

export default Page