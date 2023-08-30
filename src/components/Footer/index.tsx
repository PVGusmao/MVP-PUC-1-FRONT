import logo from '../../assets/icon_header_navigator.webp';

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full h-[50px] bg-[#141414] px-[20px]">
      <p className="text-white">Developed by Paulo Victor | (21) 97113-7376 | </p>
      <img className='w-[20px] mx-[5px]' src={logo} alt="gymbro icon"/>
      <p className="text-white"> GymBro corp.</p>
    </div>
  )
}