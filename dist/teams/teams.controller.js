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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const teams_service_1 = require("./teams.service");
const team_entity_1 = require("./team.entity");
let TeamsController = class TeamsController {
    constructor(service) {
        this.service = service;
    }
    async getTeam(res, id) {
        try {
            const team = await this.service.findOne(id);
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
            const teams = await this.service.findAll();
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
            const team = await this.service.save(body);
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
            const team = await this.service.update(id, data);
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
    async deleteTeam(res, params) {
        try {
            const team = await this.service.delete(params.id);
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
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getTeam", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getTeams", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "createTeam", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, team_entity_1.Team]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "updateTeam", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "deleteTeam", null);
TeamsController = __decorate([
    common_1.Controller('api/v1/teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
exports.TeamsController = TeamsController;
//# sourceMappingURL=teams.controller.js.map