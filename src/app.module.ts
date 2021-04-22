import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { StatusModule } from './status/status.module';
import { InstancesModule } from './instances/instances.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    UsersModule,
    TeamsModule,
    StatusModule,
    InstancesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
