import { Module } from '@nestjs/common';
import { InstancesService } from './instances.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instance } from './instance.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Instance])],
  providers: [InstancesService],
  exports: [InstancesService],
})
export class InstancesModule {}
