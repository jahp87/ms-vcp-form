import { ConfigService } from '@nestjs/config';
import { FormEntity } from './src/forms/entities/form.entity';
import { DataSource } from 'typeorm';
import { RuleEntity } from './src/rules/entities/rule.entity';

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'jahp',
  database: 'dbvcp',
  entities: [RuleEntity, FormEntity],
  synchronize: true,
  migrations: ['./migrations/*.ts'],
});
