import { useState } from "react";
import api from "../service/api";
import { useAuth } from "../context/Auth.context";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setLoggedIn, setUser } = useAuth();

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    const body = {
      email,
      password
    }

    if (password.length === 0 || email.length === 0) {
      console.log('Error')
      return
    }

    api.post('/login', body)
      .then((res) => {
        setLoggedIn(true)
        setUser(res?.data?.user)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setEmail('');
        setPassword('');
      })
  }

  return (
    <div className='flex  flex-col items-center bg-[#b625b6] rounded-[30px] w-[500px] h-[400px]'>
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
          onClick={() => {navigate('/register')}}
          className='border-[1px] bg-[white] border-[green] text-[green] w-[350px] mb-[20px] p-[10px] rounded-[10px] cursor-pointer focus:outline-none focus:border-[#51cf51] hover:border-[green]'
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}