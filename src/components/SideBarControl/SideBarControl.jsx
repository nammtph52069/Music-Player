import { useState, useRef } from 'react'
import LevelItem from '../LevelItem/LevelItem'
import MediaItems from '../SideBarQueue/MediaItems/MediaItems'
import { Shuffle } from 'lucide-react'
import { SkipBack } from 'lucide-react'
import { SkipForward } from 'lucide-react'
import { CirclePlay } from 'lucide-react'
import { CirclePause } from 'lucide-react'
import { Repeat } from 'lucide-react'
import { MicVocal } from 'lucide-react'
import { PictureInPicture } from 'lucide-react'
import { Volume } from 'lucide-react'
import { Volume1 } from 'lucide-react'
import { Volume2 } from 'lucide-react'
import { ListMusic } from 'lucide-react'

function SideBarControl() {
  const [iconPlay, setIconPlay] = useState(!false)
  const audioRef = useRef(null)


  const handleIcon = () => {
    setIconPlay(!iconPlay)
    if (iconPlay) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  return (
    <section className="h-[90px] w-full fixed bottom-0 left-0 px-5 border-t border-[#ffffff1a] bg-[#170f23]">
      <audio ref={audioRef} hidden><source src="../../../src/assets/songs/em_chiu_hong.mp3" type="audio/mpeg" /></audio>
      <div className="flex items-center h-full w-full">
        <section className="playerControlLeft w-3/12 h-full flex items-center gap-3">
          <MediaItems />
        </section>
        <section className="playerControlCenter w-6/12 h-full">
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-3 text-white">
              <div className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]">
                <Shuffle className='w-5 h-5 stroke-1' />
              </div>
              <div className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]">
                <SkipBack className='w-5 h-5 stroke-1' />
              </div>
              <div onClick={handleIcon} className="h-12 w-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]">
                {!iconPlay ? <CirclePause className='w-10 h-10 stroke-1' /> : <CirclePlay className='w-10 h-10 stroke-1' />}
              </div>
              <div className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]">
                <SkipForward className='w-5 h-5 stroke-1' />
              </div>
              <div className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]">
                <Repeat className='w-5 h-5 stroke-1' />
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className='text-xs font-medium opacity-50'>04:12</span>
              <input type="range" />
              <span className='text-xs font-medium text-white'>04:12</span>
            </div>
          </div>
        </section>
        <section className="playerControlRight w-3/12 h-full text-white">
          <div className="h-full flex items-center justify-end gap-6">
            <div className="cursor-pointer"><MicVocal className='h-5 w-5' /></div>
            <div className="cursor-pointer"><PictureInPicture className='h-5 w-5' /></div>
            <div className="flex items-center cursor-pointer">
              <Volume className='h-6 w-6' />
              <input type="range" style={{ width: '100px' }} />
            </div>
            <div className="cursor-pointer"><ListMusic className='h-6 w-6' /></div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default SideBarControl
