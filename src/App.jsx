import SideBarDir from './components/SideBarDir/SideBarDir'
import SideBarQueue from './components/SideBarQueue/SideBarQueue'

function App() {

  return (
    <section className="w-full min-h-screen max-h-screen flex justify-between bg-[#242424]">
      <SideBarDir />
      <SideBarQueue />
    </section>
  )
}

export default App
