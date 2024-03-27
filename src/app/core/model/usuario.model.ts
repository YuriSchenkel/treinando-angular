export class UsuariosModel {
  public id: number;
  public name: string;
  public age: number;
  public email: string;
  public cpf: string;
  public profession: string;
  public cep?: number | string;
  public cidade?: string;
  public uf?: string;
  public logradouro?: string;
  public bairro?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.email = '';
    this.cpf = '';
    this.profession = '';
  }
}
