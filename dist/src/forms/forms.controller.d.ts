import { FormsService } from './forms.service';
import { FormDto } from './dto/form.dto';
export declare class FormsController {
    private readonly formsService;
    constructor(formsService: FormsService);
    create(createFormDto: FormDto): Promise<import("./entities/form.entity").FormEntity>;
    findAll(): Promise<import("./entities/form.entity").FormEntity[]>;
    findOne(id: string): Promise<import("./entities/form.entity").FormEntity>;
    update(id: string, updateFormDto: FormDto): Promise<import("./entities/form.entity").FormEntity>;
    remove(id: string): Promise<void>;
}
