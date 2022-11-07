import { RuleEntity } from 'src/rules/entities/rule.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forms')
export class FormEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  requestStatusId: string;

  @Column()
  formId: string;

  @Column()
  formDescription: string;

  @Column({
    type: 'json',
  })
  formDetails: JSON;

  @Column()
  formActive: boolean;

  @ManyToMany(() => RuleEntity, (rule) => rule.forms)
  forms: FormEntity[];
}
