/* eslint-disable react/jsx-no-target-blank */
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <div className=" bg-white  p-5 ">
      <div className="flex justify-between items-center ">
        <div className="border-e-4 pr-20 border-black ">
          <p className="font-bold mb-3 ">
            <span className="bg-green-500 p-1 rounded-md  ">Email :</span>{' '}
            isaajde222@gmail.com
          </p>
          <p className="font-bold  ">
            <span className="bg-green-500 p-1 rounded-md">Phone :</span> +90 538
            300 9921
          </p>
        </div>
        <p className="font-bold border-e-4 pr-20 border-black h-12 pt-3">
          &copy; 2024 Your Website. All rights reserved.
        </p>
        <div>
          <p className="text-center mb-2 hover:underline tracking-wide font-bold text-blue-950 hover:text-gray-600 ">
            <a href="home ">Home</a>
          </p>
          <div className="flex gap-2 ">
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram className="w-5 h-5 text-amber-800 hover:scale-125 duration-200 cursor-pointer " />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook className="w-5 h-5 text-blue-700 hover:scale-125 duration-200 cursor-pointer" />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <FaTwitter className="w-5 h-5 text-blue-500 hover:scale-125 duration-200 cursor-pointer" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank">
              <FaWhatsapp className="w-5 h-5 text-green-700 hover:scale-125 duration-200 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
