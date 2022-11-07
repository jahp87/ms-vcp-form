import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormEntity } from 'src/forms/entities/form.entity';
import { DeleteResult, In, Repository } from 'typeorm';
import { RuleDto } from '../dto/rule.dto';
import { RuleEntity } from '../entities/rule.entity';

@Injectable()
export class RuleRepository {
  constructor(
    @InjectRepository(RuleEntity)
    private ruleRepository: Repository<RuleEntity>,
    @InjectRepository(FormEntity)
    private formRepository: Repository<FormEntity>,
  ) {}

  findAll(): Promise<RuleEntity[]> {
    return this.ruleRepository.find();
  }

  findOne(id: number): Promise<RuleEntity> {
    return this.ruleRepository.findOneBy({ id });
  }

  async create(ruleDto: RuleDto): Promise<RuleEntity> {
    const rule = new RuleEntity();
    rule.businessGroupId = ruleDto.businessGroupId;
    rule.countryId = ruleDto.countryId;
    rule.ruleActive = ruleDto.ruleActive;
    rule.ruleDescription = ruleDto.ruleDescription;
    rule.ruleId = ruleDto.ruleId;
    rule.societyId = ruleDto.societyId;
    rule.suppliesTypeId = ruleDto.suppliesTypeId;
    const formIds = ruleDto.formIds;
    const forms = await this.formRepository.findBy({ id: In(formIds) });
    rule.forms = forms;
    return this.ruleRepository.save(rule);
  }

  async update(id: number, ruleDto: RuleDto) {
    const rule = new RuleEntity();
    rule.businessGroupId = ruleDto.businessGroupId;
    rule.countryId = ruleDto.countryId;
    rule.ruleActive = ruleDto.ruleActive;
    rule.ruleDescription = ruleDto.ruleDescription;
    rule.ruleId = ruleDto.ruleId;
    rule.societyId = ruleDto.societyId;
    rule.suppliesTypeId = ruleDto.suppliesTypeId;
    const formIds = ruleDto.formIds;
    const forms = await this.formRepository.findBy({ id: In(formIds) });
    rule.forms = forms;
    await this.ruleRepository.update(id, rule);
    return this.ruleRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.ruleRepository.delete(id);
  }
}
