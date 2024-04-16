import { useState } from 'react'
import { Play } from 'lucide-react'
import { Heart } from 'lucide-react'
import { Ellipsis } from 'lucide-react'

function MediaItems({ isActive, dataMedia }) {
  const [addLoveList, setAddLoveList] = useState(false)

  const handleAddLoveList = () => {
    setAddLoveList(!addLoveList)
  }

  return (
    <div className={`p-2 rounded group/items ${isActive ? 'bg-[#9b4de0]' : ' hover:bg-[#ffffff1a]'} text-white`}>
      <div className="flex items-center">
        <div className="w-full flex items-center gap-2">
          <div className="songThumb cursor-pointer relative">
            <img className='min-w-10 h-10 rounded' src={dataMedia?.thumbnail} alt="" />
            <div className="absolute top-0 left-0 h-full w-full rounded hidden group-hover/items:block">
              <div className="h-full w-full flex items-center justify-center rounded bg-[#00000080]">
                <Play className='h-[18px] w-[18px]' />
              </div>
            </div>
          </div>

          <div className="cardInfor w-[166px] flex flex-col flex-shrink flex-grow basis-0">
            <div className="">
              <div className="title">
                <a href="#" className='truncate block text-sm font-medium leading-4 hover:text-[#c273ed]'>{dataMedia?.title}</a>
              </div>
              <div className="artist-names flex items-center gap-1 text-xs font-medium mt-[3px] text-[#ffffff99]">
                <p className='truncate block'>
                  {dataMedia?.artists?.map(({ id, name }) => <a key={id} href="#" className=' hover:underline'>{name}, </a>)}
                </p>
              </div>
            </div>
          </div>

          <div className="hidden group-hover/items:block">
            <div className="flex items-center ml-2">
              <div onClick={handleAddLoveList} className="px-1 h-[32px] w-[32px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]">
                <Heart className={`w-4 h-4 ${addLoveList ? 'fill-[#9b4de0] stroke-[#9b4de0]' : ''}`} />
              </div>
              <div className="px-1 h-[32px] w-[32px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]"><Ellipsis className='w-4 h-4' /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaItems
