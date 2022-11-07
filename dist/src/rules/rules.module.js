"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesModule = void 0;
const common_1 = require("@nestjs/common");
const rules_service_1 = require("./rules.service");
const rules_controller_1 = require("./rules.controller");
const typeorm_1 = require("@nestjs/typeorm");
const rule_entity_1 = require("./entities/rule.entity");
const rule_repository_1 = require("./repositories/rule.repository");
const form_entity_1 = require("../forms/entities/form.entity");
const form_repository_1 = require("../forms/repositories/form.repository");
let RulesModule = class RulesModule {
};
RulesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rule_entity_1.RuleEntity, form_entity_1.FormEntity])],
        controllers: [rules_controller_1.RulesController],
        providers: [rules_service_1.RulesService, rule_repository_1.RuleRepository, form_repository_1.FormRepository],
    })
], RulesModule);
exports.RulesModule = RulesModule;
//# sourceMappingURL=rules.module.js.map