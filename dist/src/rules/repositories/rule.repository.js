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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const form_entity_1 = require("../../forms/entities/form.entity");
const typeorm_2 = require("typeorm");
const rule_entity_1 = require("../entities/rule.entity");
let RuleRepository = class RuleRepository {
    constructor(ruleRepository, formRepository) {
        this.ruleRepository = ruleRepository;
        this.formRepository = formRepository;
    }
    findAll() {
        return this.ruleRepository.find();
    }
    findOne(id) {
        return this.ruleRepository.findOneBy({ id });
    }
    async create(ruleDto) {
        const rule = new rule_entity_1.RuleEntity();
        rule.businessGroupId = ruleDto.businessGroupId;
        rule.countryId = ruleDto.countryId;
        rule.ruleActive = ruleDto.ruleActive;
        rule.ruleDescription = ruleDto.ruleDescription;
        rule.ruleId = ruleDto.ruleId;
        rule.societyId = ruleDto.societyId;
        rule.suppliesTypeId = ruleDto.suppliesTypeId;
        const formIds = ruleDto.formIds;
        const forms = await this.formRepository.findBy({ id: (0, typeorm_2.In)(formIds) });
        rule.forms = forms;
        return this.ruleRepository.save(rule);
    }
    async update(id, ruleDto) {
        const rule = new rule_entity_1.RuleEntity();
        rule.businessGroupId = ruleDto.businessGroupId;
        rule.countryId = ruleDto.countryId;
        rule.ruleActive = ruleDto.ruleActive;
        rule.ruleDescription = ruleDto.ruleDescription;
        rule.ruleId = ruleDto.ruleId;
        rule.societyId = ruleDto.societyId;
        rule.suppliesTypeId = ruleDto.suppliesTypeId;
        const formIds = ruleDto.formIds;
        const forms = await this.formRepository.findBy({ id: (0, typeorm_2.In)(formIds) });
        rule.forms = forms;
        await this.ruleRepository.update(id, rule);
        return this.ruleRepository.findOneBy({ id });
    }
    remove(id) {
        return this.ruleRepository.delete(id);
    }
};
RuleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rule_entity_1.RuleEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(form_entity_1.FormEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RuleRepository);
exports.RuleRepository = RuleRepository;
//# sourceMappingURL=rule.repository.js.map