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
exports.FormRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const form_entity_1 = require("../entities/form.entity");
let FormRepository = class FormRepository {
    constructor(fromRepository) {
        this.fromRepository = fromRepository;
    }
    findAll() {
        return this.fromRepository.find();
    }
    findOne(id) {
        return this.fromRepository.findOneBy({ id });
    }
    create(formDto) {
        return this.fromRepository.save(formDto);
    }
    async update(id, formDto) {
        await this.fromRepository.update(id, formDto);
        return this.fromRepository.findOneBy({ id });
    }
    remove(id) {
        return this.fromRepository.delete(id);
    }
};
FormRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(form_entity_1.FormEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FormRepository);
exports.FormRepository = FormRepository;
//# sourceMappingURL=form.repository.js.map