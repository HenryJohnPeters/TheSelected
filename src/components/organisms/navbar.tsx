
import { BsTwitter, BsDiscord} from 'react-icons/bs'
export default function Example() {
  return (
    <div className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center     py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#" className="text-size-4xl  text-gray-400 font-medium text-white hover:text-cyan-300">
          The Selected
            </a>
          </div>
        <div  className="hidden md:flex space-x-10">
        <a href="#" className="text-base font-medium text-white hover:text-cyan-300">
           < BsDiscord size ={30}/>
            </a>
            <a href="#" className="text-base font-medium text-white hover:text-cyan-300">
           < BsTwitter size ={30}/>
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-cyan-300">
            Top contributors
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-cyan-300">
              Coming Soon
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}