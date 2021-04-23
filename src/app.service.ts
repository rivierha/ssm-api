import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { InstancesService } from './instances/instances.service';
import { StatusService } from './status/status.service';
import { TeamsService } from './teams/teams.service';
import { InstanceLogsService } from './instance-logs/instance-logs.service';

@Injectable()
export class AppService {
  constructor(
    private readonly usersService: UsersService,
    private readonly instanceService: InstancesService,
    private readonly instanceLogsService: InstanceLogsService,
    private readonly teamsService: TeamsService,
    private readonly statusService: StatusService
  ) { }

  // users
  async createUser(data): Promise<any> {
    const user = await this.usersService.save(data);
    return this.usersService.findOne(user.id);
  }

  async getUser(id): Promise<any> {
    let user = this.usersService.findOne(id);
    return user;
  }

  async getAllUsers(queryParams): Promise<any> {

    let repository = this.usersService.getRepository();
    let options: any = {};

    options.limit = queryParams.limit ? Number(queryParams.limit) : 10;
    delete queryParams.limit;
    options.index = queryParams.index ? Number(queryParams.index) : 0;
    delete queryParams.index;
    options.order = queryParams.order ? queryParams.order : 'createdAt';
    delete queryParams.order;
    options.sort = queryParams.sort ? queryParams.sort : 'desc';
    delete queryParams.sort;

    const users = (await repository)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.team', 'team')
      .where(queryParams)
      .orderBy(`user.${options.order}`, options.sort.toUpperCase())
      .skip(options.index)
      .take(options.limit)
      .getMany();
    
    return users;
  }

  async updateUser(id, data): Promise<any> {
    await this.usersService.update(id, data);
    return this.usersService.findOne(id);
  }

  async deleteUser(id): Promise<any> {
    return await this.usersService.delete(id);
  }

  // teams
  async createTeam(data): Promise<any> {
    const team = await this.teamsService.save(data);
    return this.teamsService.findOne(team.id);
  }

  async getTeam(id): Promise<any> {
    let team = this.teamsService.findOne(id);
    return team;
  }

  async getAllTeams(queryParams): Promise<any> {

    let repository = this.teamsService.getRepository();
    let options: any = {};

    options.limit = queryParams.limit ? Number(queryParams.limit) : 10;
    delete queryParams.limit;
    options.index = queryParams.index ? Number(queryParams.index) : 0;
    delete queryParams.index;
    options.order = queryParams.order ? queryParams.order : 'createdAt';
    delete queryParams.order;
    options.sort = queryParams.sort ? queryParams.sort : 'desc';
    delete queryParams.sort;

    const teams = (await repository)
      .createQueryBuilder('team')
      .where(queryParams)
      .orderBy(`team.${options.order}`, options.sort.toUpperCase())
      .skip(options.index)
      .take(options.limit)
      .getMany();
    
    return teams;
  }

  async updateTeam(id, data): Promise<any> {
    await this.teamsService.update(id, data);
    return this.teamsService.findOne(id);
  }

  async deleteTeam(id): Promise<any> {
    return await this.teamsService.delete(id);
  }


}
