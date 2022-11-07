import { FormEntity } from 'src/forms/entities/form.entity';
import { DeleteResult, Repository } from 'typeorm';
import { RuleDto } from '../dto/rule.dto';
import { RuleEntity } from '../entities/rule.entity';
export declare class RuleRepository {
    private ruleRepository;
    private formRepository;
    constructor(ruleRepository: Repository<RuleEntity>, formRepository: Repository<FormEntity>);
    findAll(): Promise<RuleEntity[]>;
    findOne(id: number): Promise<RuleEntity>;
    create(ruleDto: RuleDto): Promise<RuleEntity>;
    update(id: number, ruleDto: RuleDto): Promise<RuleEntity>;
    remove(id: number): Promise<DeleteResult>;
}
