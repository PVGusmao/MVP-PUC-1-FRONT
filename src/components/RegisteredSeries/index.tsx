import { useNavigate } from 'react-router-dom';

import registered_series_image from '../../assets/registered-series.webp';

export default function RegisteredSeries() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/register-exercises")} className='flex w-full items-center justify-center py-[60px] mb-[60px] bg-[#141414]'>
      <img
        className='w-[400px] rounded-xl'
        src={registered_series_image}
        alt='welcome image'
      />

      <div className='flex flex-col ml-[30px]'>
        <div className='text-white text-start'>
          <p className='text-[20px]'>Navegue por suas séries personalizadas</p>
          <p className='text-[20px]'>Seu hub de treinos sob medida.</p>
          <p className='text-[20px]'>Gerencie suas sessões de academia</p>
          <p className='text-[20px]'>Com facilidade e alcance resultados eficientes.</p>
        </div>
      </div>
    </button>
  )
}