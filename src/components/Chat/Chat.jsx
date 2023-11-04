import { useState, useEffect } from 'react';
import axios from 'axios';
import { ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline'
import { HeartIcon} from '@heroicons/react/24/outline'
// import { ArrowRathRoundedSquareIcon} from '@heroicons/react/24/outline'
import { ArrowUpTrayIcon} from '@heroicons/react/24/outline'
import { ChartBarIcon} from '@heroicons/react/24/outline'

const Chat = () => {

  const [chatData, setChatData] = useState([])

  const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/lists/tweets',
    params: {
      list_id: '1591033111726391297',
    },
    headers: {
      'X-RapidAPI-Key': '7ef112efdamsh2fd2f38d092d5c1p187367jsn31b68087c191',
      'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    }
  };

  async function fetchChat() {
    try {
      const response = await axios.request(options);
      setChatData(response.data.results)
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchChat()
  }, [])


  return (
    <div className='recommended:w-3/5 sticky sidebar:ml-72 sidebarMobile:ml-20 zero:ml-0 zero:w-full'>
      <div className='p-[20px] fixed bg-[#ffffff7a] font-medium text-[20px] border-b text-black recommended:w-3/5 backdrop-blur-xl zero:w-full'>
          <span>Home</span>
      </div>
      <div className='mt-[50px]'>
      {
        chatData.map((message) => (
          <div key={message.tweet_id} className="flex gap-3 border-b px-[20px] content-start items-start py-6">
            <div className='flex content-center items-center w-14 h-14 rounded-full'>
              <img className='rounded-full h-14 object-cover' src={message.user.profile_pic_url} alt="Person image" />
            </div>
            <div className='w-full'>
              <div className='flex gap-2'>
                <span className='font-medium'>{message.user.name}</span>
                <span className='text-gray-300'>@{message.user.username}</span>
                <span>{message.user.name}</span>
              </div>
              <p className='max-w-[800px]'>{message.text}</p>
              <div className='flex gap-[100px]'>
                <div className='flex items-end gap-2 text-gray-300'><ChatBubbleOvalLeftIcon className='mt-6 h-5 text-gray-300'/> {message.reply_count}</div>
                {/* <ArrowRathRoundedSquareIcon className='mt-6 h-5 text-gray-300'/> */}
                <div className='flex items-end gap-2 text-gray-300'><HeartIcon className='mt-6 h-5 cursor-pointer'/> {message.favorite_count}</div>
                <div><ArrowUpTrayIcon className='mt-6 h-5 text-gray-300'/></div>
                <div><ChartBarIcon className='mt-6 h-5 text-gray-300'/></div>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Chat