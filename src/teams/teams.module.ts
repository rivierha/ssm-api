import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
