import { ApiProperty } from '@nestjs/swagger';

export class RuleDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  countryId: string;

  @ApiProperty()
  suppliesTypeId: string;

  @ApiProperty()
  businessGroupId: string;

  @ApiProperty()
  societyId: string;

  @ApiProperty()
  ruleId: string;

  @ApiProperty()
  ruleDescription: string;

  @ApiProperty()
  ruleActive: boolean;

  @ApiProperty()
  formIds: number[];
}
