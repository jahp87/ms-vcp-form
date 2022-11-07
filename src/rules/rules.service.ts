import { Injectable } from '@nestjs/common';
import { RuleDto } from './dto/rule.dto';
import { RuleEntity } from './entities/rule.entity';
import { RuleRepository } from './repositories/rule.repository';

@Injectable()
export class RulesService {
  constructor(private ruleRepository: RuleRepository) {}
  async create(ruleDto: RuleDto): Promise<RuleEntity> {
    const rule: RuleEntity = await this.ruleRepository.create(ruleDto);
    return rule;
  }

  async findAll(): Promise<RuleEntity[]> {
    const rules: RuleEntity[] = await this.ruleRepository.findAll();
    return rules;
  }

  async findOne(id: number): Promise<RuleEntity> {
    const rule: RuleEntity = await this.ruleRepository.findOne(id);
    return rule;
  }

  async update(id: number, _updateRuleDto: RuleDto): Promise<RuleEntity> {
    const updateApprover = await this.ruleRepository.update(id, _updateRuleDto);
    return updateApprover;
  }

  async remove(id: number): Promise<void> {
    await this.ruleRepository.remove(id);
  }
}
