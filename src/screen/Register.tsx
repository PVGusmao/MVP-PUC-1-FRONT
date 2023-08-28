import { useNavigate } from "react-router-dom";

import api from "../service/api";
import { useState } from "react";

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

  function signUp() {
    api.post('/register-user', newUser)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error.response.data))
      .finally(() => {
        setNewUser({
          first_name: '',
          last_name: '',
          cpf: '',
          birth_date: '',
          email: '',
          password: '',
        })
      })
  }
  
  return (
    <div className='flex  flex-col items-center bg-[#b625b6] rounded-[30px] w-[500px]'>
      <p className='text-[30px] text-white font-bold pt-[30px]'>Cadastrar Usuário</p>

      <div className='flex flex-col items-center mt-[30px]'>
        <input
          className='w-[350px] mb-[20px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Nome'
          name='first_name'
          onChange={(e) => setNewUser({...newUser, first_name: e.target.value})}
          value={newUser?.first_name}
        />
        <input
          className='w-[350px] mb-[30px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Sobrenome'
          name='last_name'
          onChange={(e) => setNewUser({...newUser, last_name: e.target.value})}
          value={newUser?.last_name}
        />

        <div className="flex justify-between w-full">
          <input
            className='w-[170px] mb-[30px] p-[10px] rounded-[10px] focus:outline-none'
            placeholder='CPF'
            name='cpf'
            onChange={(e) => setNewUser({...newUser, cpf: e.target.value})}
            value={newUser?.cpf}
          />
          <input
            className='w-[170px] mb-[30px] p-[10px] rounded-[10px] focus:outline-none'
            placeholder='Data de aniversário'
            name='birth_date'
            onChange={(e) => setNewUser({...newUser, birth_date: e.target.value})}
            value={newUser?.birth_date}
          />
        </div>
        
        <input
          className='w-[350px] mb-[30px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='E-mail'
          name='email'
          onChange={(e) => setNewUser({...newUser, email: e.target.value})}
          value={newUser?.email}
        />
        <input
          className='w-[350px] mb-[30px] p-[10px] rounded-[10px] focus:outline-none'
          placeholder='Senha'
          name='password'
          onChange={(e) => setNewUser({...newUser, password: e.target.value})}
          value={newUser?.password}
        />
      </div>

      <div className='flex flex-col items-center'>
        <button
          type='button'
          onClick={signUp}
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
  )
}