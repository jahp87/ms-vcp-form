import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { FormDto } from '../dto/form.dto';
import { FormEntity } from '../entities/form.entity';

@Injectable()
export class FormRepository {
  constructor(
    @InjectRepository(FormEntity)
    private fromRepository: Repository<FormEntity>,
  ) {}

  findAll(): Promise<FormEntity[]> {
    return this.fromRepository.find();
  }

  findOne(id: number): Promise<FormEntity> {
    return this.fromRepository.findOneBy({ id });
  }

  create(formDto: FormDto): Promise<FormEntity> {
    return this.fromRepository.save(formDto);
  }

  async update(id: number, formDto: FormDto) {
    await this.fromRepository.update(id, formDto);
    return this.fromRepository.findOneBy({ id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.fromRepository.delete(id);
  }
}
