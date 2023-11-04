import user from '../assets/user-img.png'

const Profile = () => {

  const name = JSON.parse(localStorage.getItem("userName"));

  return (
    <div className='recommended:w-3/5 sticky sidebar:ml-72 sidebarMobile:ml-20 zero:ml-0 zero:w-full'>
    <div className="absolute top-[50px] left-4 flex gap-3 items-center">
      <div>
        <img src={user} alt="User img" />
      </div>
      <div className='flex flex-col sidebarMobile:hidden sidebar:block'>
        <span className='font-semibold'>{name.name}</span>
      </div>
    </div>
    </div>
  )
}

export default Profile