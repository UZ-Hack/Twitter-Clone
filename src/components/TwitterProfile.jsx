import MobileSidebar from './MobileSidebar/MobileSidebar'
import Profile from './Profile'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

const TwitterProfile = () => {
  return (
    <div className='flex scrollbar-track-gray-300'>
      <Sidebar />
      <Profile />
      <Recommended />
      <MobileSidebar />
    </div>
  )
}

export default TwitterProfile