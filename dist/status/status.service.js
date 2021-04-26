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
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const status_entity_1 = require("./status.entity");
let StatusService = class StatusService {
    constructor(repository) {
        this.repository = repository;
    }
    async save(data) {
        const status = this.repository.create(data);
        return await this.repository.save(status);
    }
    async findOne(id) {
        return await this.repository.findOne(id);
    }
    async findAll() {
        return await this.repository.find();
    }
    async update(id, data) {
        return await this.repository.update(id, data);
    }
    async delete(id) {
        return await this.repository.delete({ id: id });
    }
    async query(data) {
        return await this.repository.createQueryBuilder('status').where(data).getManyAndCount();
    }
    async seed() {
        let status = [
            {
                id: 'FREE',
                name: 'FREE status',
                description: 'This status denotes free instance.',
            },
            {
                id: 'INUSE',
                name: 'INUSE status',
                description: 'This status denotes in-use instance.',
            }
        ];
        await this.repository.save(status);
    }
};
StatusService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(status_entity_1.Status)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusService);
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map