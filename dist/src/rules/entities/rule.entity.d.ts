import { FormEntity } from 'src/forms/entities/form.entity';
export declare class RuleEntity {
    id: number;
    countryId: string;
    suppliesTypeId: string;
    businessGroupId: string;
    societyId: string;
    ruleId: string;
    ruleDescription: string;
    ruleActive: boolean;
    forms: FormEntity[];
}
