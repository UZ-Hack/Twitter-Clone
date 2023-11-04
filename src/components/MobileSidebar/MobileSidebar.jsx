import { HomeIcon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";

const MobileSidebar = () => {
  return (
    <div className='sidebarMobile:hidden zero:flex z-[999] bg-white border-t justify-around items-center p-[15px] fixed bottom-0 w-full'>
      <NavLink to='/twitter'><HomeIcon className="h-6 w-6" /></NavLink>
      <NavLink to='/twitter'><BellIcon className="h-6 w-6" /></NavLink>
      <NavLink to='/twitter'><EnvelopeIcon className="h-6 w-6" /></NavLink>
      <NavLink to='/profile'><UserIcon className="h-6 w-6" /></NavLink>
    </div>
  )
}

export default MobileSidebar