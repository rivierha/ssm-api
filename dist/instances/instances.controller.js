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
exports.InstancesController = void 0;
const common_1 = require("@nestjs/common");
const instances_service_1 = require("./instances.service");
const instance_entity_1 = require("./instance.entity");
let InstancesController = class InstancesController {
    constructor(service) {
        this.service = service;
    }
    async getInstance(res, id) {
        try {
            const instance = await this.service.findOne(id);
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
            const allInstance = await this.service.findAll();
            return res.status(common_1.HttpStatus.OK).json(allInstance);
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
            });
        }
    }
    async createInstance(res, body) {
        try {
            const instance = await this.service.save(body);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Instance created successfully',
                instance,
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Something went wrong. Please try again',
                error
            });
        }
    }
    async updateInstance(res, id, data) {
        try {
            const instance = await this.service.update(id, data);
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
    async deleteInstance(res, params) {
        try {
            const instance = await this.service.delete(params.id);
            if (!instance) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: 'Instance not found',
                });
            }
            return res.instance(common_1.HttpStatus.OK).json({
                message: 'Instance deleted successfully',
            });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.NOT_FOUND).json({
                message: 'Instance not found.',
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
], InstancesController.prototype, "getInstance", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InstancesController.prototype, "getAllInstance", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, instance_entity_1.Instance]),
    __metadata("design:returntype", Promise)
], InstancesController.prototype, "createInstance", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, instance_entity_1.Instance]),
    __metadata("design:returntype", Promise)
], InstancesController.prototype, "updateInstance", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InstancesController.prototype, "deleteInstance", null);
InstancesController = __decorate([
    common_1.Controller('api/v1/instances'),
    __metadata("design:paramtypes", [instances_service_1.InstancesService])
], InstancesController);
exports.InstancesController = InstancesController;
//# sourceMappingURL=instances.controller.js.map