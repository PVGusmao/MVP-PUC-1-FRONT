import * as yup from 'yup';

const schema = yup.object({
  first_name: yup
    .string()
    .required('Necessário preencher o seu nome.')
    .min(3, 'Digite um nome válido.'),
  last_name: yup.string().required('Necessário preencher o seu sobrenome.'),
  birth_date: yup
    .string()
    .required('Necessário preencher a sua data de nascimento.'),

  cpf: yup.string().required('Necessário preencher o seu cpf.'),
  email: yup
    .string()
    .required('Necessário preencher o seu e-mail.')
    .email('O e-mail deve possuir um formato válido.'),
  password: yup.string().required('Necessário preencher o seu password.'),
});

type RegisterFormData = yup.InferType<typeof schema>;

export {schema, RegisterFormData};
