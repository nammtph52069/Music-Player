import { Heart } from 'lucide-react'
import { Ellipsis } from 'lucide-react'

function LevelItem() {
  return (
    <div className="flex items-center ml-2 text-white">
      <div className="px-1 h-[32px] w-[32px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]"><Heart className='w-4 h-4' /></div>
      <div className="px-1 h-[32px] w-[32px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#ffffff1a]"><Ellipsis className='w-4 h-4' /></div>
    </div>
  )
}

export default LevelItem
