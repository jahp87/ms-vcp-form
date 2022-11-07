import { RulesService } from './rules.service';
import { RuleDto } from './dto/rule.dto';
export declare class RulesController {
    private readonly rulesService;
    constructor(rulesService: RulesService);
    create(createRuleDto: RuleDto): Promise<import("./entities/rule.entity").RuleEntity>;
    findAll(): Promise<import("./entities/rule.entity").RuleEntity[]>;
    findOne(id: string): Promise<import("./entities/rule.entity").RuleEntity>;
    update(id: string, updateRuleDto: RuleDto): Promise<import("./entities/rule.entity").RuleEntity>;
    remove(id: string): Promise<void>;
}
