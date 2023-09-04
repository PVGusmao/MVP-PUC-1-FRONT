import * as yup from 'yup';

const schema = yup.object({
  first_name: yup
    .string()
    .required('Preencha o seu nome.')
    .min(3, 'Digite um nome válido.'),
  last_name: yup.string().required('Preencha o seu sobrenome.'),
  birth_date: yup
    .string()
    .required('Preencha a sua data de nascimento.'),

  cpf: yup.string().required('Preencha o seu cpf.'),
  email: yup
    .string()
    .required('Preencha o seu e-mail.')
    .email('O e-mail deve possuir um formato válido.'),
  password: yup.string().required('Preencha o seu password.'),
});

type RegisterFormData = yup.InferType<typeof schema>;

export {schema, RegisterFormData};

const loginSchema = yup.object({
  email: yup
  .string()
    .required('Preencha o seu e-mail.')
    .email('O e-mail deve possuir um formato válido.'),
  password: yup.string().required('Preencha o seu password.'),
})

type LoginFormData = yup.InferType<typeof loginSchema>;

export {loginSchema, LoginFormData};

const serieRegisterSchema = yup.object({
  name: yup.string().required('Qual o nome do exercicio?.'),
  muscle_group: yup.string().required("Qual o grupo muscular?"),
  series: yup.string().required("Quantas series serao feitas?"),
  series_repeats: yup.string().required('Quantas repeticoes por serie?'),
})

type SerieRegisterFormData = yup.InferType<typeof serieRegisterSchema>;

export {serieRegisterSchema, SerieRegisterFormData};