import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Disc2 } from 'lucide-react'
import { Disc3 } from 'lucide-react'
import { Radar } from 'lucide-react'
import { SquareLibrary } from 'lucide-react'
import { Ellipsis } from 'lucide-react'
import { CirclePlay } from 'lucide-react'
import { Music } from 'lucide-react'
import { LayoutDashboard } from 'lucide-react'
import { Star } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Heart } from 'lucide-react'
import { ListMusic } from 'lucide-react'
import { Album } from 'lucide-react'
import { Upload } from 'lucide-react'
import NavItems from './SideBarItems/NavItems'

function SideBarDir() {

  const [selected, setSelected] = useState(2)
  // const [scroll, setScroll] = useState(false)

  // Set size for icon //
  const iconSize = {
    height: '24px',
    width: '24px',
    opacity: '0.8'
  }
  const iconHiddenSize = {
    height: '20px',
    width: '20px',
    opacity: '0.8'
  }

  // SideBar Divide //
  const Divide = () => {
    return (
      <div className="relative w-full">
        <div className="h-[1px]"></div>
        <div className="absolute left-6 right-6 top-0 h-full bg-bd-primary"></div>
      </div>
    )
  }


  return (
    <section className="h-screen max-h-screen w-[240px] bg-sidebar-bg">
      {/* Logo */}
      <section className="logoWrapper h-[70px] w-full flex items-center">
        <div className="px-6">
          <a href=""><img className="h-10 w-[120px]" src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" alt="" /></a>
        </div>
      </section>
      {/* Nav Wrapper */}
      <section className="navWrapper">
        <nav className='navMain flex flex-col gap-1 my-4'>
          <NavItems
            index={1}
            text="Thư Viện"
            icon={<SquareLibrary style={ iconSize} />}
            iconHidden={<CirclePlay style={ iconHiddenSize } />}
            selected={selected}
            setSelected={setSelected}
          />
          <NavItems
            index={2}
            text="Khám Phá"
            icon={<Disc2 style={ iconSize } />}
            iconHidden={<CirclePlay style={ iconHiddenSize} />}
            selected={selected}
            setSelected={setSelected}
          />
          <NavItems
            index={3}
            text="#zingchart"
            icon={<Disc3 style={ iconSize } />}
            iconHidden={<CirclePlay style={ iconHiddenSize} />}
            selected={selected}
            setSelected={setSelected}
          />
          <NavItems
            index={4}
            text="Radio"
            icon={<Radar style={ iconSize } />}
            iconHidden={<CirclePlay style={ iconHiddenSize} />}
            selected={selected}
            setSelected={setSelected}
          />
        </nav>

        <Divide />

        <div className='relative customHeightSideBar w-full overflow-hidden'>
          <div
            className="h-full w-full my-4 absolute top-0 left-0 overflow-auto"
            // onMouseEnter={() => setScroll(true)}
            // onMouseLeave={() => setScroll(false)}
          >

            {/* ===== Nav Main ===== */}
            <nav className='navMain flex flex-col gap-1 my-4'>
              <NavItems
                index={5}
                text="BXH Nhạc Mới"
                icon={<Music style={ iconSize} />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />

              <NavItems
                index={6}
                text="Chủ Đề & Thể Loại"
                icon={<LayoutDashboard style={ iconSize } />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />

              <NavItems
                index={7}
                text="Top 100"
                icon={<Star style={ iconSize } />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
            </nav>

            {/* ===== VIP Banner ===== */}
            <div className='vipBanner mx-5 px-2 py-4 my-4 rounded-md flex flex-col items-center bg-[#5a4be7]'>
              <p className='text-xs font-semibold mb-3 text-center text-white'>Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM</p>
              <a href="#" className='inline-block mx-auto px-4 py-2 rounded-full text-xs font-semibold uppercase bg-[#ffdb00]'>Nâng cấp tài khoản</a>
            </div>

            {/* ===== Nav My Music ===== */}
            <nav className='navMusic flex flex-col gap-1 my-4'>
              <NavItems
                index={8}
                text="Nghe gần đây"
                icon={<Clock style={ iconSize} />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
              <NavItems
                index={9}
                text="Bài hát yêu thích"
                icon={<Heart style={ iconSize} />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
              <NavItems
                index={10}
                text="Playlist"
                icon={<ListMusic style={ iconSize} />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
              <NavItems
                index={11}
                text="Album"
                icon={<Album style={ iconSize} />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
              <NavItems
                index={12}
                text="Đã tải lên"
                icon={<Upload style={ iconSize} />}
                iconHidden={<CirclePlay style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
            </nav>

            <Divide />

            {/* ===== Nav Playlist ===== */}
            <nav className='navPlaylist flex flex-col gap-1 my-4'>
              <NavItems
                index={13}
                text="My Playlist 1"
                icon={null}
                iconHidden={<Ellipsis style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
              <NavItems
                index={14}
                text="My Playlist 2"
                icon={null}
                iconHidden={<Ellipsis style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
              <NavItems
                index={15}
                text="My Playlist 3"
                icon={null}
                iconHidden={<Ellipsis style={ iconHiddenSize} />}
                selected={selected}
                setSelected={setSelected}
              />
            </nav>
          </div>
        </div>
      </section>

      {/* Btn Playlist */}
      <section className="h-[54px] w-full px-6 border-t border-b border-bd-primary">
        <button className='h-full w-full flex items-center gap-3 text-txt-dadada'>
          <Plus style={iconSize} />
          <p className='text-sm'>Tạo playlist mới</p>
        </button>
      </section>
    </section>
  )
}

export default SideBarDir

