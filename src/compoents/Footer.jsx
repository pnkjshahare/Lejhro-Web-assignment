import { Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
        <div className='w-screen bg-[#2c7fbf] h-4'>
            -
        </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3 text-[20px]">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors ">Innovations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Business Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Financial services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lejhro Recruiter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Programs</h3>
            <ul className="space-y-3 text-[20px]">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lejhro Bootcamp</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3 text-[20px]">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Statement</a></li>
            </ul>
          </div>

          {/* Connect with us Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-black  hover:text-blue-500 transition-colors">
                {/* <Twitter color="black" size={24}  />
                 */}
                 <img className='h-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT086HJnYSz0CDS1pha4EdeZUEityKO3mpNRg&s" alt="" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                {/* <Facebook size={24} /> */}
                <img className='h-6'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
                {/* <Linkedin size={24} /> */}
                <img className='h-6' src="https://img.icons8.com/ios_filled/512/linkedin.png" alt="" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                {/* <Youtube size={24} /> */}
                <img className='h-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Fa9hsJFTOUERGm182bu975KN1svwkFRuaA&s" alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className=" pt-6">
          <p className="text-center text-gray-500 text-2xl">
            © 2025 LEJHRO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}