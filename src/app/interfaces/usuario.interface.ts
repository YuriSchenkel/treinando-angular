export default interface User {
  id: number;
  nome: string;
  idade: number;
  email: string;
  profissao: string;
  editou?: boolean;
  salvou?: boolean;
}
