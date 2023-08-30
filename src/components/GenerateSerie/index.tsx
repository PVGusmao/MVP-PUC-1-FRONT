import generate_serie from '../../assets/gym_generate.webp';

export default function GenerateSerie() {
  return (
    <div className='flex flex-col items-center mb-[60px] mt-[120px]'>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col items-end mr-[30px]'>
          <div className='text-end'>
            <p className='text-[30px]'>Potencialize seus treinos </p>
            <p className='text-[20px]'>Cadastre exercícios, crie séries</p>
            <p className='text-[30px]'>Alcance seu máximo potencial</p>
            <p className='text-[20px]'>Experimente agora!</p>
          </div>
        </div>
        
        <img
          className='w-[400px] rounded-xl'
          src={generate_serie}
          alt='welcome image'
        />
      </div>

      <button
        className='flex items-center justify-center bg-[darkgreen] mt-[40px] w-[600px] h-[80px] p-[20px] rounded-xl text-[32px] text-white font-bold'
        onClick={() => console.log('clicked')}
      >
        Crie sua série e treine agora!
      </button>
    </div>
  )
}