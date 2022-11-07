"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsModule = void 0;
const common_1 = require("@nestjs/common");
const forms_service_1 = require("./forms.service");
const forms_controller_1 = require("./forms.controller");
const typeorm_1 = require("@nestjs/typeorm");
const form_entity_1 = require("./entities/form.entity");
const form_repository_1 = require("./repositories/form.repository");
let FormsModule = class FormsModule {
};
FormsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([form_entity_1.FormEntity])],
        controllers: [forms_controller_1.FormsController],
        providers: [forms_service_1.FormsService, form_repository_1.FormRepository],
    })
], FormsModule);
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map