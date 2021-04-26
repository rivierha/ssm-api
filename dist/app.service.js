"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users/users.service");
const instances_service_1 = require("./instances/instances.service");
const status_service_1 = require("./status/status.service");
const teams_service_1 = require("./teams/teams.service");
const instance_logs_service_1 = require("./instance-logs/instance-logs.service");
const typeorm_1 = require("typeorm");
let AppService = class AppService {
    constructor(usersService, instanceService, instanceLogsService, teamsService, statusService) {
        this.usersService = usersService;
        this.instanceService = instanceService;
        this.instanceLogsService = instanceLogsService;
        this.teamsService = teamsService;
        this.statusService = statusService;
        this.statusService.seed();
    }
    async createUser(data) {
        const user = await this.usersService.save(data);
        return await this.usersService.findOne(user.id);
    }
    async getUser(id) {
        let user = await this.usersService.findOne(id);
        return user;
    }
    async getAllUsers(queryParams) {
        let repository = this.usersService.getRepository();
        let options = {};
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
    async updateUser(id, data) {
        await this.usersService.update(id, data);
        return await this.usersService.findOne(id);
    }
    async deleteUser(id) {
        return await this.usersService.delete(id);
    }
    async createTeam(data) {
        const team = await this.teamsService.save(data);
        return await this.teamsService.findOne(team.id);
    }
    async getTeam(id) {
        let team = this.teamsService.findOne(id);
        return team;
    }
    async getAllTeams(queryParams) {
        let repository = this.teamsService.getRepository();
        let options = {};
        options.limit = queryParams.limit ? Number(queryParams.limit) : 50;
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
    async updateTeam(id, data) {
        await this.teamsService.update(id, data);
        return await this.teamsService.findOne(id);
    }
    async deleteTeam(id) {
        return await this.teamsService.delete(id);
    }
    async createInstance(data) {
        if (!data.team) {
            return;
        }
        const instance = await this.instanceService.save(data);
        return await this.instanceService.findOne(instance.id);
    }
    async getInstance(id) {
        let instance = await this.instanceService.findOne(id);
        return instance;
    }
    async getAllInstances(queryParams) {
        let repository = this.instanceService.getRepository();
        let options = {};
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
            .leftJoinAndSelect('instance.status', 'status')
            .where(queryParams)
            .orderBy(`instance.${options.order}`, options.sort.toUpperCase())
            .skip(options.index)
            .take(options.limit)
            .getMany();
        return teams;
    }
    async updateInstance(id, data) {
        await this.instanceService.update(id, data);
        return await this.instanceService.findOne(id);
    }
    async deleteInstance(id) {
        await this.deleteAllInstanceLogs(id);
        return await this.instanceService.delete(id);
    }
    async createInstanceLog(data) {
        if (!data.user || !data.instance) {
            return;
        }
        const log = await this.instanceLogsService.save(data);
        await this.runScript(log.instance, log.id, log.startTime);
        return await this.instanceLogsService.findOne(log.id);
    }
    async getInstanceLog(id) {
        let instance = await this.instanceLogsService.findOne(id);
        return instance;
    }
    async getAllInstanceLogs(queryParams) {
        let repository = this.instanceLogsService.getRepository();
        let options = {};
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
            .leftJoinAndSelect('instancelog.instance', 'instance')
            .where({ instance: queryParams.instance, totalTime: typeorm_1.Between(0, queryParams.totalTime) })
            .orderBy(`instancelog.${options.order}`, options.sort.toUpperCase())
            .skip(options.index)
            .take(options.limit)
            .getMany();
        return teams;
    }
    async updateInstanceLog(id, data) {
        await this.instanceLogsService.update(id, data);
        return await this.instanceLogsService.findOne(id);
    }
    async deleteInstanceLog(id) {
        return await this.instanceLogsService.delete(id);
    }
    async runScript(instanceId, logId, startTime) {
        let timeOut = Math.floor(Math.random() * (60 - 1 + 1) + 1);
        await this.instanceService.update(instanceId, { status: 'INUSE' });
        setTimeout(async () => {
            await this.instanceService.update(instanceId, { status: 'FREE' });
            let time = new Date();
            let data = {
                endTime: time,
                totalTime: Math.floor((time.getTime() - startTime.getTime()) / 1000)
            };
            await this.instanceLogsService.update(logId, data);
        }, timeOut * 1000);
    }
    async deleteAllInstanceLogs(instanceId) {
        let repository = this.instanceLogsService.getRepository();
        const instances = (await repository)
            .createQueryBuilder('instancelogs')
            .delete()
            .where({ instance: instanceId })
            .execute();
    }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        instances_service_1.InstancesService,
        instance_logs_service_1.InstanceLogsService,
        teams_service_1.TeamsService,
        status_service_1.StatusService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map