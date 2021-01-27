import { IsInt, Max } from 'class-validator';

export class Item {
  name?: string;

  @IsInt()
  @Max(100)
  num?: number;
}
