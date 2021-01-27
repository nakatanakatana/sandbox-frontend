import {IsEmail, Length, Contains, IsInt, Min, Max, IsFQDN, IsDate} from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

@JSONSchema({
  description: 'Post'
})
export class Post {
  @JSONSchema({
    description: 'タイトル',
  })
  @Length(10, 20)
  title?: string;

  @Contains('hello')
  text?: string;

  @JSONSchema({
    description: '評価',
  })
  @IsInt()
  @Min(0)
  @Max(10)
  rating?: number;

  @JSONSchema({
    description: 'メールアドレス',
  })
  @IsEmail()
  email?: string;

  @IsFQDN()
  site?: string;

  @IsDate()
  createDate?: Date;
}


