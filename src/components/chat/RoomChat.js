import React from 'react'

const RoomChat = () => {
    return (
        <div className="bg-gray-200 py-5 px-10 w-full h-full overflow-y-auto">
            <div className="space-y-2">
                <div className="flex flex-row justify-end space-y-3">
                    <div className="flex flex-col p-1.5 bg-green-800 rounded-md max-w-2xl">
                        <p className="text-white text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vel, doloribus perspiciatis minus ducimus adipisci blanditiis autem quaerat mollitia odit eveniet laboriosam, inventore temporibus libero at quo dignissimos aut asperiores.
                        </p>
                        <p className="ml-auto text-xs text-gray-300">12:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomChat
