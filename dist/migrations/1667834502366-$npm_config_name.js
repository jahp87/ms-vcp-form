"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$npmConfigName1667834502366 = void 0;
class $npmConfigName1667834502366 {
    constructor() {
        this.name = '$npmConfigName1667834502366';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "forms" ("id" SERIAL NOT NULL, "requestStatusId" character varying NOT NULL, "formId" character varying NOT NULL, "formDescription" character varying NOT NULL, "formDetails" json NOT NULL, "formActive" boolean NOT NULL, CONSTRAINT "PK_ba062fd30b06814a60756f233da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rules" ("id" SERIAL NOT NULL, "countryId" character varying NOT NULL, "suppliesTypeId" character varying NOT NULL, "businessGroupId" character varying NOT NULL, "societyId" character varying NOT NULL, "ruleId" character varying NOT NULL, "ruleDescription" character varying NOT NULL, "ruleActive" boolean NOT NULL, CONSTRAINT "PK_10fef696a7d61140361b1b23608" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "rules"`);
        await queryRunner.query(`DROP TABLE "forms"`);
    }
}
exports.$npmConfigName1667834502366 = $npmConfigName1667834502366;
//# sourceMappingURL=1667834502366-$npm_config_name.js.map