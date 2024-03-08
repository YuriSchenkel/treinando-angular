import { UsuariosModel } from '../model/usuario.model';

export const usuariosMock: UsuariosModel[] = [
  {
    id: 1,
    idade: 27,
    nome: 'Airton',
    email: 'airton@xpert.com.br',
    profissao: 'Desenvolvedor',
    editou: false,
  },
  {
    id: 2,
    idade: 18,
    nome: 'Yuri',
    email: 'yuri.teze@xpert.com.br',
    profissao: 'Desenvolvedor Estagiário',
    editou: false,
  },
  {
    id: 3,
    idade: 52,
    nome: 'Marcelo',
    email: 'marcelo@emxbrasil.com.br',
    profissao: 'Consultor',
    editou: false,
  },
];
