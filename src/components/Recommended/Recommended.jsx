import axios from 'axios';
import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const Recommended = () => {
    const [trendsData, setTrendsData] = useState([])
    const [more, setMore] = useState(false)

    const options = {
        method: 'GET',
        url: 'https://twitter154.p.rapidapi.com/trends/available',
        headers: {
          'X-RapidAPI-Key': '18c4853963msh8df61b8497bb34bp17d8b4jsn5b722cebf95d',
          'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
      };
      

      async function trendsFetch() {
        try {
            const response = await axios.request(options);
            setTrendsData(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
      }

      useEffect(() => {
        trendsFetch()
      }, [])
      
      function showMore() {
        setMore(!more)
      }
      
      let threeData = trendsData.slice(50, more ? 55 : 53)


  return (
    <div className='border z-50 bg-white border-r-0 p-[20px] w-[400px] sticky top-0 max-h-[110vh] zero:hidden recommended:block'>
        <form className='flex p-[20px] gap-2 rounded-full bg-[#EFF3F4]' action="#">
            <MagnifyingGlassIcon  className='h-6 text-[#5C6C79]'/>
            <input type="text" name="query" placeholder="Search Twitter" className='placeholder-[#5C6C79] bg-transparent outline-none'/>
        </form>
        <div className='p-[20px] bg-[#F7F9F9] rounded-[10px] mt-[20px]'>
            <h3 className='font-bold text-[20px] pb-[20px]'>Trends for you</h3>
            <div className='flex flex-col gap-5'>
                {
                    threeData.map((trend, index) => (
                        <div className='flex flex-col' key={index}>
                            <span className='font-medium'>{trend.name}</span>
                            <span className='text-gray-300'>{trend.woeid} Tweets</span>
                        </div>
                    ))
                }
                <span onClick={showMore} className='text-blue cursor-pointer hover:border-b hover:border-blue w-[80px]'>{more ? 'Hide' : 'Show more'}</span>
            </div>
        </div>
        <div className='flex flex-wrap gap-x-3 mt-[20px] text-gray-300'>
          <span className='cursor-pointer hover:border-b h-[25px]'>Terms of Service</span>
          <span className='cursor-pointer hover:border-b h-[25px]'>Privacy Policy</span>
          <span className='cursor-pointer hover:border-b h-[25px]'>Cookie Policy</span>
          <span className='cursor-pointer hover:border-b h-[25px]'>Imprint</span>
          <span className='cursor-pointer hover:border-b h-[25px]'>Ads Info</span>
          <span className='cursor-pointer hover:border-b h-[25px]'>More ···</span>
          <span className='cursor-pointer hover:border-b h-[25px]'>© 2023 Twitter, Inc.</span>
        </div>
    </div>
  )
}

export default Recommended