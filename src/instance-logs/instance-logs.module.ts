import { Module } from '@nestjs/common';
import { InstanceLogsService } from './instance-logs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstanceLog } from './instance-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstanceLog])],
  providers: [InstanceLogsService],
  exports: [InstanceLogsService]
})
export class InstanceLogsModule {}
