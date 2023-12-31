import { useAuth } from "../../context/Auth.context";

import { BiLogOut } from "react-icons/bi";

import { logout } from "../../service/auth";

import logo_icon from '../../assets/icon_header_navigator.webp';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const {setLoggedIn} = useAuth();
  const navigate = useNavigate();
  
  function logoutUser() {
    logout();
    setLoggedIn(false);
    navigate('/')
  }

  return (
    <div className="flex justify-between items-center w-full h-[100px] bg-[#141414] px-[20px]">
      <img className='w-[60px]' src={logo_icon} alt="logo da aplicação" />

      <div className='flex w-[500px] justify-around items-center'>
        <button onClick={() => navigate('/register-exercises')} className='text-white'>Registrar</button>
        <button onClick={() => navigate('/list-series')} className='text-white'>Séries</button>
        <button onClick={() => navigate('/generate-series')} className='text-white'>Gerador</button>
      </div>

      <button onClick={logoutUser} className="flex">
        <BiLogOut size={24} color={'white'}/>
        <p className="text-white ml-[10px] mr-[50px]">Sair</p>
      </button>
    </div>
  )
}