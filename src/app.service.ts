import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { InstancesService } from './instances/instances.service';
import { StatusService } from './status/status.service';
import { TeamsService } from './teams/teams.service';
import { InstanceLogsService } from './instance-logs/instance-logs.service';
import { Between } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private readonly usersService: UsersService,
    private readonly instanceService: InstancesService,
    private readonly instanceLogsService: InstanceLogsService,
    private readonly teamsService: TeamsService,
    private readonly statusService: StatusService
  ) { 
    this.statusService.seed();
  }

  // users
  async createUser(data): Promise<any> {
    const user = await this.usersService.save(data);
    return await this.usersService.findOne(user.id);
  }

  async getUser(id): Promise<any> {
    let user = await this.usersService.findOne(id);
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
    return await this.usersService.findOne(id);
  }

  async deleteUser(id): Promise<any> {
    return await this.usersService.delete(id);
  }

  // teams
  async createTeam(data): Promise<any> {
    const team = await this.teamsService.save(data);
    return await this.teamsService.findOne(team.id);
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
    return await this.teamsService.findOne(id);
  }

  async deleteTeam(id): Promise<any> {
    return await this.teamsService.delete(id);
  }

  // instances
  async createInstance(data): Promise<any> {
    if (!data.team) {
      return;
    }
    const instance = await this.instanceService.save(data);    
    return await this.instanceService.findOne(instance.id);
  }

  async getInstance(id): Promise<any> {
    let instance = await this.instanceService.findOne(id);
    return instance;
  }

  async getAllInstances(queryParams): Promise<any> {

    let repository = this.instanceService.getRepository();
    let options: any = {};

    options.limit = queryParams.limit ? Number(queryParams.limit) : 100;
    delete queryParams.limit;
    options.index = queryParams.index ? Number(queryParams.index) : 0;
    delete queryParams.index;
    options.order = queryParams.order ? queryParams.order : 'createdAt';
    delete queryParams.order;
    options.sort = queryParams.sort ? queryParams.sort : 'desc';
    delete queryParams.sort;

    const teams = (await repository)
      .createQueryBuilder('instance')
      .leftJoinAndSelect('instance.team', 'team')
      .leftJoinAndSelect('instance.status','status')
      .where(queryParams)
      .orderBy(`instance.${options.order}`, options.sort.toUpperCase())
      .skip(options.index)
      .take(options.limit)
      .getMany();
    
    return teams;
  }

  async updateInstance(id, data): Promise<any> {
    await this.instanceService.update(id, data);
    return await this.instanceService.findOne(id);
  }

  async deleteInstance(id): Promise<any> {
    // delete all logs of that instance
    await this.deleteAllInstanceLogs(id);
    return await this.instanceService.delete(id);
  }

  // Instance-logs
  async createInstanceLog(data): Promise<any> {
    if (!data.user || !data.instance) {
      return;
    }
    
    const log: any = await this.instanceLogsService.save(data);
    await this.runScript(log.instance, log.id, log.startTime);
    return await this.instanceLogsService.findOne(log.id);
  }

  async getInstanceLog(id): Promise<any> {
    let instance = await this.instanceLogsService.findOne(id);
    return instance;
  }

  async getAllInstanceLogs(queryParams): Promise<any> {

    let repository = this.instanceLogsService.getRepository();
    let options: any = {};

    options.limit = queryParams.limit ? Number(queryParams.limit) : 100;
    delete queryParams.limit;
    options.index = queryParams.index ? Number(queryParams.index) : 0;
    delete queryParams.index;
    options.order = queryParams.order ? queryParams.order : 'createdAt';
    delete queryParams.order;
    options.sort = queryParams.sort ? queryParams.sort : 'desc';
    delete queryParams.sort;

    const teams = (await repository)
      .createQueryBuilder('instancelog')
      .leftJoinAndSelect('instancelog.user', 'user')
      .leftJoinAndSelect('instancelog.instance','instance')
      .where({instance: queryParams.instance, totalTime: Between(0, queryParams.totalTime)})
      .orderBy(`instancelog.${options.order}`, options.sort.toUpperCase())
      .skip(options.index)
      .take(options.limit)
      .getMany();
    
    return teams;
  }

  async updateInstanceLog(id, data): Promise<any> {
    await this.instanceLogsService.update(id, data);
    return await this.instanceLogsService.findOne(id);
  }

  async deleteInstanceLog(id): Promise<any> {
    return await this.instanceLogsService.delete(id);
  }

  async runScript(instanceId, logId, startTime) {
    let timeOut = Math.floor(Math.random() * (19 - 1 + 1) + 1);
    await this.instanceService.update(instanceId, { status: 'INUSE' });
    setTimeout(async () => {
      await this.instanceService.update(instanceId, { status: 'FREE' });
      let time = new Date();
      let data: any = {
        endTime: time,
        totalTime: Math.floor((time.getTime()-startTime.getTime()) / 1000 / 60)
      }
      await this.instanceLogsService.update(logId, data);
     }, timeOut * 60 * 1000);
  }

  async deleteAllInstanceLogs(instanceId) {
    let repository = this.instanceLogsService.getRepository();
    const instances = (await repository)
      .createQueryBuilder('instancelogs')
      .delete()
      .where({instance: instanceId})
      .execute()
  }
}
