"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const form_entity_1 = require("./src/forms/entities/form.entity");
const typeorm_1 = require("typeorm");
const rule_entity_1 = require("./src/rules/entities/rule.entity");
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'jahp',
    database: 'dbvcp',
    entities: [rule_entity_1.RuleEntity, form_entity_1.FormEntity],
    synchronize: true,
    migrations: ['./migrations/*.ts'],
});
//# sourceMappingURL=typeOrm.config.js.map