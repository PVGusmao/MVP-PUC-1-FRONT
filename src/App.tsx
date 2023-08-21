import { useState } from 'react';
import './App.css'
import api from './service/api';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    api.get('/list-all')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className='bg-[#b625b6] rounded-[30px] w-[500px] h-[400px]'>
      <p className='text-[30px] text-white font-bold pt-[30px]'>Login</p>

      <div className='flex flex-col items-center mt-[30px]'>
        <input
          className='w-[350px] mb-[20px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Digite seu e-mail'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className='w-[350px] mb-[30px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Digite sua senha'
          name='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className='flex flex-col items-center'>
        <button
          type='button'
          onClick={handleLogin}
          className='text-[white] bg-[green] w-[350px] mb-[20px] p-[10px] rounded-[10px] cursor-pointer focus:outline-none focus:bg-[#2e8d2e] hover:border-[green]'
        >
          Logar
        </button>
        <button
          type='button'
          className='border-[1px] bg-[white] border-[green] text-[green] w-[350px] mb-[20px] p-[10px] rounded-[10px] cursor-pointer focus:outline-none focus:border-[#51cf51] hover:border-[green]'
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}

export default App
