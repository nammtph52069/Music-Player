import { useState } from 'react'


function NavItems({ text, icon, iconHidden, index, selected, setSelected }) {
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    setSelected(index)
  }

  return (
    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`block border-transparent px-5 py-3 border-l-2 hover:text-white text-txt-dadada ${selected === index ? 'border-l-[#9b4de0] bg-[#ffffff1a]' : ''}`}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-3 text-sm font-medium"> {icon} {text} </div>
        <div className= 'h-5 w-5'>{isHovered && iconHidden}</div>
      </div>
    </a>
  )
}

export default NavItems
