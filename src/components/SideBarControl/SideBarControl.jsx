import LevelItem from '../LevelItem/LevelItem'

function SideBarControl() {
  return (
    <section className="h-[90px] w-full fixed bottom-0 left-0 px-5 border-t border-[#ffffff1a] bg-[#130c1c]">
      <div className="flex items-center h-full w-full">
        <section className="playerControlLeft w-3/12 h-full flex items-center gap-3">
          <div className="mediaAvatar">
            <a href="" className="block h-16 w-16">
              <img className="h-full w-full rounded" src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/d/e/0/0de0b18a91ceedd16bb42cc260210de3.jpg" alt="" />
            </a>
          </div>
          <div className="mediaContent">
            <div className="leading-none"><a href="" className="text-sm font-medium truncate text-white">Đổi Tình Đổi Áo Đổi Anh </a></div>
            <div className="leading-none"><a href="" className="text-xs font-medium truncate leading-none text-[#ffffff80]">Nguyễn Thành Đạt</a></div>
          </div>
          <div className="">
            <LevelItem />
          </div>
        </section>
        <section className="playerControlCenter w-6/12 h-full bg-slate-400"></section>
        <section className="playerControlRight w-3/12 h-full bg-slate-500"></section>
      </div>
    </section>
  )
}

export default SideBarControl
