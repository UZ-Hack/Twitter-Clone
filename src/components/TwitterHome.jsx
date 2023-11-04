import Chat from './Chat/Chat'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

const TwitterHome = () => {
  return (
    <div className='flex scrollbar-track-gray-300'>
      <Sidebar />
      <Chat />
      <Recommended />
      <MobileSidebar />
    </div>
  )
}

export default TwitterHome