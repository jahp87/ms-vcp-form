import { FormEntity } from 'src/forms/entities/form.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('rules')
export class RuleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryId: string;

  @Column()
  suppliesTypeId: string;

  @Column()
  businessGroupId: string;

  @Column()
  societyId: string;

  @Column()
  ruleId: string;

  @Column()
  ruleDescription: string;

  @Column()
  ruleActive: boolean;

  @ManyToMany(() => FormEntity)
  @JoinTable({
    name: 'rules_form',
    joinColumn: {
      name: 'rules_id',
    },
    inverseJoinColumn: {
      name: 'forms_id',
    },
  })
  forms: FormEntity[];
}
