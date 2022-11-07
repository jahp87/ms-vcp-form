import { FormDto } from './dto/form.dto';
import { FormEntity } from './entities/form.entity';
import { FormRepository } from './repositories/form.repository';
export declare class FormsService {
    private formRepository;
    constructor(formRepository: FormRepository);
    create(formDto: FormDto): Promise<FormEntity>;
    findAll(): Promise<FormEntity[]>;
    findOne(id: number): Promise<FormEntity>;
    update(id: number, _updateFormDto: FormDto): Promise<FormEntity>;
    remove(id: number): Promise<void>;
}
