import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormEntity } from './entities/form.entity';
import { FormRepository } from './repositories/form.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FormEntity])],
  controllers: [FormsController],
  providers: [FormsService, FormRepository],
})
export class FormsModule {}
