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
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const status_service_1 = require("./status.service");
const status_entity_1 = require("./status.entity");
let StatusController = class StatusController {
    constructor(service) {
        this.service = service;
        service.seed();
    }
    async getStatus(res, id) {
        try {
            const status = await this.service.findOne(id);
            if (!status) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Status not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json(status);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Status not found',
            });
        }
    }
    async getAllStatus(res, queryParams) {
        try {
            const allStatus = await this.service.findAll();
            return res.status(common_1.HttpStatus.OK).json(allStatus);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }
    async createStatus(res, body) {
        try {
            const status = await this.service.save(body);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Status created successfully',
                status,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
    }
    async updateStatus(res, id, data) {
        try {
            const status = await this.service.update(id, data);
            if (!status) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Status not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Status updated successfully',
                status,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Status not found.',
            });
        }
    }
    async deleteStatus(res, params) {
        try {
            const status = await this.service.delete(params.id);
            if (!status) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Status not found',
                });
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Status deleted successfully',
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Status not found.',
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
], StatusController.prototype, "getStatus", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "getAllStatus", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, status_entity_1.Status]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "createStatus", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, status_entity_1.Status]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "updateStatus", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "deleteStatus", null);
StatusController = __decorate([
    common_1.Controller('api/v1/status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
exports.StatusController = StatusController;
//# sourceMappingURL=status.controller.js.map