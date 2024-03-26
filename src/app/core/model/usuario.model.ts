export class UsuariosModel {
  public id: number;
  public name: string;
  public age: number;
  public email: string;
  public cpf: number;
  public profession: string;
  public cep?: number;
  public cidade?: string;
  public uf?: string;
  public rua?: string;
  public bairro?: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.email = '';
    this.cpf = 0;
    this.profession = '';
  }
}
