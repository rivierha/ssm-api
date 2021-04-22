import { Module } from '@nestjs/common';
import { InstancesService } from './instances.service';
import { InstancesController } from './instances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instance } from './instance.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Instance])],
  providers: [InstancesService],
  controllers: [InstancesController]
})
export class InstancesModule {}
