import React from 'react'
import ChatHeader from './ChatHeader'
import MessageBox from './MessageBox'
import RoomChat from './RoomChat'

const RightBar = () => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <ChatHeader/>
            <RoomChat/>
            <MessageBox/>
        </div>
    )
}

export default RightBar
