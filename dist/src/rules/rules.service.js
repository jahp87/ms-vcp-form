"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesService = void 0;
const common_1 = require("@nestjs/common");
const rule_repository_1 = require("./repositories/rule.repository");
let RulesService = class RulesService {
    constructor(ruleRepository) {
        this.ruleRepository = ruleRepository;
    }
    async create(ruleDto) {
        const rule = await this.ruleRepository.create(ruleDto);
        return rule;
    }
    async findAll() {
        const rules = await this.ruleRepository.findAll();
        return rules;
    }
    async findOne(id) {
        const rule = await this.ruleRepository.findOne(id);
        return rule;
    }
    async update(id, _updateRuleDto) {
        const updateApprover = await this.ruleRepository.update(id, _updateRuleDto);
        return updateApprover;
    }
    async remove(id) {
        await this.ruleRepository.remove(id);
    }
};
RulesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rule_repository_1.RuleRepository])
], RulesService);
exports.RulesService = RulesService;
//# sourceMappingURL=rules.service.js.map