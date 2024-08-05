export class UpdateGerenteDto {
  nome?: string;
  email?: string;
  senha?: string;
  telefone?: string;
  endereco?: string;
  status?: 'ativo' | 'inativo';
  departamento?: string;
  nivelAcesso?: string;
}