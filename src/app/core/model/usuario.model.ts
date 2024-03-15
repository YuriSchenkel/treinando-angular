export class UsuariosModel {
  public id: number;
  public nome: string;
  public idade: number;
  public email?: string;
  public profissao?: string;
  public editou?: boolean;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.idade = 0;
  }
}
