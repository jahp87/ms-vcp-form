import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rules')
export class RuleEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'json', nullable: true })
  countryIds: JSON;

  @Column({
    type: 'json',
    nullable: true,
  })
  typeProdiverIds: JSON;

  @Column({ nullable: true })
  businessGroupId: string;

  @Column({
    type: 'json',
    nullable: true,
  })
  societyIds: JSON;

  @Column({ nullable: true })
  ruleId: string;

  @Column()
  ruleDescription: string;

  @Column()
  origin: string;

  @Column()
  ruleActive: boolean;
}
