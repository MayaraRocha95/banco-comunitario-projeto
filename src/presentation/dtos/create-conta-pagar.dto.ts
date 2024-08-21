import { IsString, IsNumber, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateContaPagarDto {
  @IsString()
  descricao: string;

  @IsNumber()
  valor: number;

  @IsDateString() 
  dataVencimento: string;
}
