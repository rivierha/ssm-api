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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_entity_1 = require("./user.entity");
let UsersController = class UsersController {
    constructor(service) {
        this.service = service;
    }
    async getUser(res, id) {
        try {
            const user = await this.service.findOne(id);
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
            const users = await this.service.findAll();
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
            const user = await this.service.save(body);
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
            const user = await this.service.update(id, data);
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
    async deleteUser(res, params) {
        try {
            const user = await this.service.delete(params.id);
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
};
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller('api/v1/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map