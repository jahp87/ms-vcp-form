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
exports.FormsService = void 0;
const common_1 = require("@nestjs/common");
const form_repository_1 = require("./repositories/form.repository");
let FormsService = class FormsService {
    constructor(formRepository) {
        this.formRepository = formRepository;
    }
    async create(formDto) {
        const form = await this.formRepository.create(formDto);
        return form;
    }
    async findAll() {
        const forms = await this.formRepository.findAll();
        return forms;
    }
    async findOne(id) {
        const rule = await this.formRepository.findOne(id);
        return rule;
    }
    async update(id, _updateFormDto) {
        const updateForm = await this.formRepository.update(id, _updateFormDto);
        return updateForm;
    }
    async remove(id) {
        await this.formRepository.remove(id);
    }
};
FormsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [form_repository_1.FormRepository])
], FormsService);
exports.FormsService = FormsService;
//# sourceMappingURL=forms.service.js.map