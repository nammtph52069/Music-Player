import SideBarDir from './components/SideBarDir/SideBarDir'
import SideBarQueue from './components/SideBarQueue/SideBarQueue'
import SideBarControl from './components/SideBarControl/SideBarControl'

function App() {

  return (
    <section className="w-full min-h-screen max-h-screen flex justify-between bg-[#242424]">
      <SideBarDir />
      <SideBarQueue />
      <SideBarControl />
    </section>
  )
}

export default App
