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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getUser(res, id) {
        try {
            const user = await this.appService.getUser(id);
            if (!user) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json(user);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'User not found',
            });
        }
    }
    async getUsers(res, queryParams) {
        try {
            const users = await this.appService.getAllUsers(queryParams);
            return res.status(common_1.HttpStatus.OK).json(users);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }
    async createUser(res, body) {
        try {
            const user = await this.appService.createUser(body);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User created successfully',
                user,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
    }
    async updateUser(res, id, data) {
        try {
            const user = await this.appService.updateUser(id, data);
            if (!user) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User updated successfully',
                user,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'User not found.',
            });
        }
    }
    async deleteUser(res, id) {
        try {
            const user = await this.appService.deleteUser(id);
            if (!user) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'User not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User deleted successfully',
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'User not found.',
            });
        }
    }
    async getTeam(res, id) {
        try {
            const team = await this.appService.getTeam(id);
            if (!team) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json(team);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Team not found',
            });
        }
    }
    async getTeams(res, queryParams) {
        try {
            const teams = await this.appService.getAllTeams(queryParams);
            return res.status(common_1.HttpStatus.OK).json(teams);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }
    async createTeam(res, body) {
        try {
            const team = await this.appService.createTeam(body);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Team created successfully',
                team,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
    }
    async updateTeam(res, id, data) {
        try {
            const team = await this.appService.updateTeam(id, data);
            if (!team) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Team updated successfully',
                team,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Team not found.',
            });
        }
    }
    async deleteTeam(res, id) {
        try {
            const team = await this.appService.deleteTeam(id);
            if (!team) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Team not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Team deleted successfully',
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Team not found.',
            });
        }
    }
    async getInstance(res, id) {
        try {
            const instance = await this.appService.getInstance(id);
            if (!instance) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json(instance);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance not found',
            });
        }
    }
    async getAllInstance(res, queryParams) {
        try {
            const allInstances = await this.appService.getAllInstances(queryParams);
            return res.status(common_1.HttpStatus.OK).json(allInstances);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }
    async createInstance(res, body) {
        try {
            const instance = await this.appService.createInstance(body);
            if (!instance) {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                    message: 'Team cannot be null',
                });
            }
            console.log(instance);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance created successfully',
                instance,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
    }
    async updateInstance(res, id, data) {
        try {
            const instance = await this.appService.updateInstance(id, data);
            if (!instance) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance updated successfully',
                instance,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance not found.',
            });
        }
    }
    async deleteInstance(res, id) {
        try {
            const instance = await this.appService.deleteInstance(id);
            if (!instance) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance deleted successfully',
            });
        }
        catch (error) {
            console.log(error);
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance not found.',
                error
            });
        }
    }
    async getInstanceLog(res, id) {
        try {
            const log = await this.appService.getInstanceLog(id);
            if (!log) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance-log not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json(log);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance-log not found',
            });
        }
    }
    async getAllInstanceLogs(res, queryParams) {
        try {
            const allLogs = await this.appService.getAllInstanceLogs(queryParams);
            return res.status(common_1.HttpStatus.OK).json(allLogs);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }
    async createInstanceLog(res, body) {
        try {
            const log = await this.appService.createInstanceLog(body);
            if (!log) {
                return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                    message: 'Instance and User required.',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance-log created successfully',
                log,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
    }
    async updateInstanceLog(res, id, data) {
        try {
            const log = await this.appService.updateInstanceLog(id, data);
            if (!log) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance-log not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance-log updated successfully',
                log,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance-log not found.',
            });
        }
    }
    async deleteInstanceLog(res, id) {
        try {
            const log = await this.appService.deleteInstanceLog(id);
            if (!log) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance-log not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance-log deleted successfully',
            });
        }
        catch (error) {
            console.log(error);
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance-log not found.',
                error
            });
        }
    }
};
__decorate([
    common_1.Get('users/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUser", null);
__decorate([
    common_1.Get('users'),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUsers", null);
__decorate([
    common_1.Post('users'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createUser", null);
__decorate([
    common_1.Put('users/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateUser", null);
__decorate([
    common_1.Delete('users/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteUser", null);
__decorate([
    common_1.Get('teams/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTeam", null);
__decorate([
    common_1.Get('teams'),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTeams", null);
__decorate([
    common_1.Post('teams'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createTeam", null);
__decorate([
    common_1.Put('teams/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateTeam", null);
__decorate([
    common_1.Delete('teams/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteTeam", null);
__decorate([
    common_1.Get('instances/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getInstance", null);
__decorate([
    common_1.Get('instances'),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllInstance", null);
__decorate([
    common_1.Post('instances'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createInstance", null);
__decorate([
    common_1.Put('instances/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateInstance", null);
__decorate([
    common_1.Delete('instances/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteInstance", null);
__decorate([
    common_1.Get('logs/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getInstanceLog", null);
__decorate([
    common_1.Get('logs'),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllInstanceLogs", null);
__decorate([
    common_1.Post('logs'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createInstanceLog", null);
__decorate([
    common_1.Put('logs/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateInstanceLog", null);
__decorate([
    common_1.Delete('logs/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteInstanceLog", null);
AppController = __decorate([
    common_1.Controller('api/v1/'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map