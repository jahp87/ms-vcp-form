import { ApiProperty } from '@nestjs/swagger';


export class RuleDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  countryIds: JSON;

  @ApiProperty()
  typeProdiverIds: JSON;

  @ApiProperty()
  businessGroupId: string;

  @ApiProperty()
  societyIds: JSON;

  @ApiProperty()
  origin: string;

  @ApiProperty()
  ruleId: string;

  @ApiProperty()
  ruleDescription: string;

  @ApiProperty()
  ruleActive: boolean;


}

