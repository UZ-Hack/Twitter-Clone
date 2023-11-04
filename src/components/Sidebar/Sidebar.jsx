import logo from '../../assets/twitter-logo.svg'
import user from '../../assets/user-img.png'
import { HomeIcon } from '@heroicons/react/24/solid'
import { HashtagIcon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { ClipboardDocumentListIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/solid'
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const name = JSON.parse(localStorage.getItem("userName"));

  return (
    <div className='fixed'>
      <div
        className={`relativeflex flex-col content-between border zero:hidden sidebarMobile:w-20 sidebarMobile:block sidebar:w-72 bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt='Twitter Logo'
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <div className="flex flex-col justify-center pt-6">
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <HomeIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Home
              </span>
            </NavLink>
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <HashtagIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Explore
              </span>
            </NavLink>
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <BellIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Notifications
              </span>
            </NavLink>
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <EnvelopeIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Messages
              </span>
            </NavLink>
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <BookmarkIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Bookmarks
              </span>
            </NavLink>
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <ClipboardDocumentListIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Lists
              </span>
            </NavLink>
            <NavLink
              to='/profile'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <UserIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                Profile
              </span>
            </NavLink>
            <NavLink
              to='/twitter'
              className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              mt-2 bg-light-white hover:text-black font-medium hover:bg-gray-100'>

              <EllipsisHorizontalCircleIcon className="h-6 w-6 text-blue-500" />
              <span className={`sidebarMobile:hidden sidebar:block origin-left duration-200`}>
                More
              </span>
            </NavLink>
        </div>
        <div className="absolute bottom-10 flex gap-3 items-center">
          <div>
            <img src={user} alt="User img" />
          </div>
          <div className='flex flex-col sidebarMobile:hidden sidebar:block'>
            <span className='font-semibold'>{name.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;