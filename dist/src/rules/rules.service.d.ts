import { RuleDto } from './dto/rule.dto';
import { RuleEntity } from './entities/rule.entity';
import { RuleRepository } from './repositories/rule.repository';
export declare class RulesService {
    private ruleRepository;
    constructor(ruleRepository: RuleRepository);
    create(ruleDto: RuleDto): Promise<RuleEntity>;
    findAll(): Promise<RuleEntity[]>;
    findOne(id: number): Promise<RuleEntity>;
    update(id: number, _updateRuleDto: RuleDto): Promise<RuleEntity>;
    remove(id: number): Promise<void>;
}
