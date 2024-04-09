import { AlarmClock } from 'lucide-react'
import { Ellipsis } from 'lucide-react'
import MediaItems from './MediaItems/MediaItems'

function SideBarQueue() {
  // const [tabHeader, setTabHeader] = useState(false)

  return (
    <div className="h-screen max-h-screen w-[330px] bg-[#120822]">
      {/* ===== Section Header ===== */}
      <section className="sectHeader  h-[70px] w-full py-3 px-2 flex items-center">
        <div className="flex items-center w-full">
          <div className="tabBar w-full flex items-center gap-2">
            <div className="flex items-center rounded-full p-1 flex-grow flex-shrink basis-0 bg-[#ffffff1a]">
              <div className="w-1/2 text-center text-xs font-medium py-[6px] rounded-full cursor-pointer bg-[#ffffff4d] text-white">Danh sách phát</div>
              <div className="w-1/2 text-center text-xs font-medium py-[6px] rounded-full cursor-pointer text-white">Nghe gần đây</div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="h-8 w-8 rounded-full flex items-center justify-center cursor-pointer bg-[#ffffff1a]"><AlarmClock className='w-4 h-4' /></div>
              <div className="h-8 w-8 rounded-full flex items-center justify-center cursor-pointer bg-[#ffffff1a]"><Ellipsis className='w-4 h-4' /></div>
            </div>
          </div>
          <div className="tabBar"></div>
        </div>
      </section>

      {/* ===== Now Playing ===== */}
      <section className='nowPlaying px-2'>
        <MediaItems isActive={true} />
      </section>

      {/* ===== Next Songs ===== */}
      <section>
        <div className="title pt-4 px-2 pb-1 text-sm font-bold text-white">Tiếp theo</div>
        <div className="listSongsWrapper w-full customHeightMediaQueue relative overflow-hidden">
          <div className="listSongs h-full w-full absolute top-0 left-0 overflow-auto">
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
            <MediaItems isActive={false} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SideBarQueue
