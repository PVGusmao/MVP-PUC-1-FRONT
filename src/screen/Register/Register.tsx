import { useNavigate } from "react-router-dom";

import api from "../../service/api";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "../../utils/registerYupSchema";

export default function Register() {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    first_name: '',
    last_name: '',
    cpf: '',
    birth_date: '',
    email: '',
    password: '',
  });

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    console.log(data)
    api.post('/register-user', data)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.response.data))
  };
  
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className='flex  flex-col items-center bg-[#f1cbf1] rounded-[30px] w-[500px]'>
        <p className='text-[30px] text-white font-bold pt-[30px]'>Cadastrar Usuário</p>

        <div className='flex flex-col items-center mt-[30px]'>
          <input
            {...register("first_name")}
            className='w-[350px] p-[10px] rounded-[10px] focus:outline-none'
            placeholder='Nome'
            name='first_name'
            onChange={(e) => setNewUser({...newUser, first_name: e.target.value})}
            value={newUser?.first_name}
          />
          
          <div className="h-[15px] mb-[10px]">
            <p className="text-[red] w-[350px] text-[12px]">{errors.first_name?.message}</p>
          </div>

          <input
            {...register("last_name")}
            className='w-[350px] p-[10px] rounded-[10px] focus:outline-none'
            placeholder='Sobrenome'
            name='last_name'
            onChange={(e) => setNewUser({...newUser, last_name: e.target.value})}
            value={newUser?.last_name}
          />

          <div className="h-[15px] mb-[10px]">
            <p className="text-[red] w-[350px] text-[12px]">{errors.last_name?.message}</p>
          </div>

          <div className="flex justify-between w-full">
            <div className="flex flex-col w-full">
              <input
                {...register("cpf")}
                className='w-[170px] p-[10px] rounded-[10px] focus:outline-none'
                placeholder='CPF'
                name='cpf'
                onChange={(e) => setNewUser({...newUser, cpf: e.target.value})}
                value={newUser?.cpf}
              />

              <div className="h-[30px] mb-[10px]">
                <p className="text-[red] w-[170px] text-[12px]">{errors.cpf?.message}</p>
              </div>
            </div>
            
            <div>
              <input
                {...register("birth_date")}
                className='w-[170px] p-[10px] rounded-[10px] focus:outline-none'
                placeholder='Data de aniversário'
                name='birth_date'
                onChange={(e) => setNewUser({...newUser, birth_date: e.target.value})}
                value={newUser?.birth_date}
              />

              <div className="h-[30px] mb-[10px]">
                <p className="text-[red] w-[170px] text-[12px]">{errors.birth_date?.message}</p>
              </div>
            </div>
          </div>
          
          <input
            {...register("email")}
            className='w-[350px] p-[10px] rounded-[10px] focus:outline-none'
            placeholder='E-mail'
            name='email'
            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
            value={newUser?.email}
          />
            
          <div className="h-[15px] mb-[10px]">
            <p className="text-[red] w-[350px] text-[12px]">{errors.email?.message}</p>
          </div>
          
          <input
            {...register("password")}
            className='w-[350px] p-[10px] rounded-[10px] focus:outline-none'
            placeholder='Senha'
            name='password'
            onChange={(e) => setNewUser({...newUser, password: e.target.value})}
            value={newUser?.password}
          />

          <div className="h-[15px] mb-[10px]">
            <p className="text-[red] w-[350px] text-[12px]">{errors.password?.message}</p>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <button
            type='button'
            onClick={handleSubmit(onSubmit)}
            className='text-[white] bg-[green] w-[350px] mb-[20px] p-[10px] rounded-[10px] cursor-pointer focus:outline-none focus:bg-[#2e8d2e] hover:border-[green]'
          >
            Cadastrar
          </button>
          <button
            type='button'
            onClick={() => {navigate('/')}}
            className='border-[1px] bg-[white] border-[green] text-[green] w-[350px] mb-[20px] p-[10px] rounded-[10px] cursor-pointer focus:outline-none focus:border-[#51cf51] hover:border-[green]'
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  )
}