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
exports.FormEntity = void 0;
const rule_entity_1 = require("../../rules/entities/rule.entity");
const typeorm_1 = require("typeorm");
let FormEntity = class FormEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FormEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormEntity.prototype, "requestStatusId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormEntity.prototype, "formId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormEntity.prototype, "formDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'json',
    }),
    __metadata("design:type", Object)
], FormEntity.prototype, "formDetails", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], FormEntity.prototype, "formActive", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => rule_entity_1.RuleEntity, (rule) => rule.forms),
    __metadata("design:type", Array)
], FormEntity.prototype, "forms", void 0);
FormEntity = __decorate([
    (0, typeorm_1.Entity)('forms')
], FormEntity);
exports.FormEntity = FormEntity;
//# sourceMappingURL=form.entity.js.map