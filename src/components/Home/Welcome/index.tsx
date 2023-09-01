import { useNavigate } from 'react-router-dom';

import welcome_img from '../../../assets/image_home.webp';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center my-[120px]'>
      <div className='flex flex-col items-end mr-[30px]'>
        <div className='text-end'>
          <p className='text-[30px]'>Potencialize seus treinos </p>
          <p className='text-[20px]'>Cadastre exercícios, crie séries</p>
          <p className='text-[30px]'>Alcance seu máximo potencial</p>
          <p className='text-[20px]'>Experimente agora!</p>
        </div>
        <button
          className='flex items-center justify-center bg-[#e23232] mt-[40px] w-[300px] h-[30px] p-[20px] rounded-xl text-white font-bold'
          onClick={() => navigate('/list-series')}
        >
          Clique aqui e resitre sua série!
        </button>
      </div>
      
      <img
        className='w-[400px] rounded-xl'
        src={welcome_img}
        alt='welcome image'
      />
    </div>
  )
}