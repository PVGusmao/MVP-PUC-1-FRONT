import { useEffect, useState } from "react";
import api from "../service/api";
import { useAuth } from "../context/Auth.context";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "../utils/registerYupSchema";
import { setToken } from "../service/auth";

export default function Login() {
  const { setLoggedIn, setUser } = useAuth();

  const navigate = useNavigate()

  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = (data: {email: string, password: string}) => {
    api.post('/login', data)
    .then((res) => {
      setLoggedIn(true)
      setToken(res?.data?.token)
      setUser(res?.data?.user)
    })
    .catch((err) => console.log(err))
    console.log(data)
  };

  useEffect(() => {
    api.get('/exercise/list')
      .then((res) => {
        console.log(res)
        setLoggedIn(true)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='flex  flex-col items-center bg-[#f1cbf1] rounded-[30px] w-[500px] h-[400px]'>
      <p className='text-[30px] text-white font-bold pt-[30px]'>Login</p>

      <div className='flex flex-col items-center mt-[30px]'>
        <input
          {...register("email")}
          className='w-[350px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Digite seu e-mail'
          name='email'
          onChange={(e) => setUserLogin({...userLogin, email: e.target.value})}
          value={userLogin.email}
        />

        <div className="h-[20px] mb-[10px]">
          <p className="text-[red] w-[350px] text-[12px]">{errors.email?.message}</p>
        </div>
        
        <input
          {...register("password")}
          className='w-[350px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Digite sua senha'
          name='password'
          type='password'
          onChange={(e) => setUserLogin({...userLogin, password: e.target.value})}
          value={userLogin.password}
        />
      </div>

      <div className="h-[20px] mb-[10px]">
        <p className="text-[red] mb-[10px] w-[350px] text-[12px]">{errors.password?.message}</p>
      </div>

      <div className='flex flex-col items-center'>
        <button
          type='button'
          onClick={handleSubmit(onSubmit)}
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