import { Injectable } from '@nestjs/common';
import { FormDto } from './dto/form.dto';
import { FormEntity } from './entities/form.entity';
import { FormRepository } from './repositories/form.repository';

@Injectable()
export class FormsService {
  constructor(private formRepository: FormRepository) {}
  async create(formDto: FormDto): Promise<FormEntity> {
    const form: FormEntity = await this.formRepository.create(formDto);
    return form;
  }

  async findAll(): Promise<FormEntity[]> {
    const forms: FormEntity[] = await this.formRepository.findAll();
    return forms;
  }

  async findOne(id: number): Promise<FormEntity> {
    const rule: FormEntity = await this.formRepository.findOne(id);
    return rule;
  }

  async update(id: number, _updateFormDto: FormDto): Promise<FormEntity> {
    const updateForm = await this.formRepository.update(id, _updateFormDto);
    return updateForm;
  }

  async remove(id: number): Promise<void> {
    await this.formRepository.remove(id);
  }

  /*
  getForm(
    requestStatusId: number,
    countryId: number,
    origin: string,
    typeProviderId: number,
    businessGroupId: number,
  ) {
    console.log(requestStatusId);

    //return new Array<FormEntity>();
    /*
    return this.formRepository.getForms(
      requestStatusId,
      countryId,
      origin,
      typeProviderId,
      businessGroupId,
    );
    
  }
  */
}
