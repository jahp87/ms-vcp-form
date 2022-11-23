import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forms')
export class FormEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  requestStatusId: number;

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
}
