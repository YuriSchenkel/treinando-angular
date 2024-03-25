export class UsuariosModel {
  public id: number;
  public name: string;
  public age: number;
  public email: string;
  public cpf: number;
  public profession: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.age = 0;
    this.email = '';
    this.cpf = 0;
    this.profession = '';
  }
}
