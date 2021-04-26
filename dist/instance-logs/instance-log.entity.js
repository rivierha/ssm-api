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
exports.InstanceLog = void 0;
const typeorm_1 = require("typeorm");
const instance_entity_1 = require("../instances/instance.entity");
const user_entity_1 = require("../users/user.entity");
let InstanceLog = class InstanceLog {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], InstanceLog.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], InstanceLog.prototype, "reason", void 0);
__decorate([
    typeorm_1.ManyToOne(type => instance_entity_1.Instance),
    typeorm_1.JoinColumn(),
    __metadata("design:type", instance_entity_1.Instance)
], InstanceLog.prototype, "instance", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.User)
], InstanceLog.prototype, "user", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], InstanceLog.prototype, "startTime", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], InstanceLog.prototype, "endTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], InstanceLog.prototype, "totalTime", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], InstanceLog.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], InstanceLog.prototype, "modifiedAt", void 0);
InstanceLog = __decorate([
    typeorm_1.Entity()
], InstanceLog);
exports.InstanceLog = InstanceLog;
//# sourceMappingURL=instance-log.entity.js.map