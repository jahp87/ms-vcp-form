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
 
    return this.ruleRepository.save(ruleDto);
  }

  async update(id: number, ruleDto: RuleDto) {
    await this.ruleRepository.update(id, ruleDto);
    return this.ruleRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.ruleRepository.delete(id);
  }
}
