import { DeleteResult, Repository } from 'typeorm';
import { FormDto } from '../dto/form.dto';
import { FormEntity } from '../entities/form.entity';
export declare class FormRepository {
    private fromRepository;
    constructor(fromRepository: Repository<FormEntity>);
    findAll(): Promise<FormEntity[]>;
    findOne(id: number): Promise<FormEntity>;
    create(formDto: FormDto): Promise<FormEntity>;
    update(id: number, formDto: FormDto): Promise<FormEntity>;
    remove(id: number): Promise<DeleteResult>;
}
