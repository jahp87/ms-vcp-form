import { ApiProperty } from '@nestjs/swagger';


export class FormDto {
  @ApiProperty()
  id?: number;

 
  @ApiProperty()
  formId: string;

  @ApiProperty()
  formDescription: string;

  @ApiProperty()
  formDetails: JSON;

  @ApiProperty()
  formActive: boolean;
}
