import React from 'react'

const card = () => {
    return (
        <div className="w-full border-t cursor-pointer">
          <div className="inline-block overflow-y-auto min-w-full">
            <div className="flex flex-col divide-y-2 p-2">
              <div className="flex items-center space-x-4 py-2">
                <img className="w-14 h-14 rounded-full" src="https://cdn0-production-images-kly.akamaized.net/FSCwzpdqi-TJMhKavSJE3uhXrMI=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2832638/original/037807400_1560947825-20190619-Anya-Geraldine-1.jpg" alt="" />

                <div className="flex justify-between w-full space-y-1">
                  <div className="space-y-1">
                    <div>
                      <p className="font-medium">Anya</p>
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Hay</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <div className="">
                      <p className="text-xs text-gray-400">23:00</p>
                    </div>
                    <div className="hiddens self-end text-xs text-center text-white rounded-full bg-green-500 w-5 py-0.5">
                      <p>1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default card
