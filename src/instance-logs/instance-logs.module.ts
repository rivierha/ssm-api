import { Module } from '@nestjs/common';
import { InstanceLogsService } from './instance-logs.service';
import { InstanceLogsController } from './instance-logs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstanceLog } from './instance-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstanceLog])],
  providers: [InstanceLogsService],
  controllers: [InstanceLogsController]
})
export class InstanceLogsModule {}
