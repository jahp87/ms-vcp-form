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
exports.RuleEntity = void 0;
const form_entity_1 = require("../../forms/entities/form.entity");
const typeorm_1 = require("typeorm");
let RuleEntity = class RuleEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RuleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RuleEntity.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RuleEntity.prototype, "suppliesTypeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RuleEntity.prototype, "businessGroupId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RuleEntity.prototype, "societyId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RuleEntity.prototype, "ruleId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RuleEntity.prototype, "ruleDescription", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], RuleEntity.prototype, "ruleActive", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => form_entity_1.FormEntity),
    (0, typeorm_1.JoinTable)({
        name: 'rules_form',
        joinColumn: {
            name: 'rules_id',
        },
        inverseJoinColumn: {
            name: 'forms_id',
        },
    }),
    __metadata("design:type", Array)
], RuleEntity.prototype, "forms", void 0);
RuleEntity = __decorate([
    (0, typeorm_1.Entity)('rules')
], RuleEntity);
exports.RuleEntity = RuleEntity;
//# sourceMappingURL=rule.entity.js.map