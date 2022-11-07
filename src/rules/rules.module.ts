import { Module } from '@nestjs/common';
import { RulesService } from './rules.service';
import { RulesController } from './rules.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleEntity } from './entities/rule.entity';
import { RuleRepository } from './repositories/rule.repository';
import { FormEntity } from '../forms/entities/form.entity';
import { FormRepository } from '../forms/repositories/form.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RuleEntity, FormEntity])],
  controllers: [RulesController],
  providers: [RulesService, RuleRepository, FormRepository],
})
export class RulesModule {}
