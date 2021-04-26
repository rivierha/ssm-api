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
exports.Instance = void 0;
const typeorm_1 = require("typeorm");
const team_entity_1 = require("../teams/team.entity");
const status_entity_1 = require("../status/status.entity");
let Instance = class Instance {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Instance.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Instance.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => status_entity_1.Status),
    typeorm_1.JoinColumn(),
    __metadata("design:type", status_entity_1.Status)
], Instance.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => team_entity_1.Team),
    typeorm_1.JoinColumn(),
    __metadata("design:type", team_entity_1.Team)
], Instance.prototype, "team", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Instance.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Instance.prototype, "modifiedAt", void 0);
Instance = __decorate([
    typeorm_1.Entity()
], Instance);
exports.Instance = Instance;
//# sourceMappingURL=instance.entity.js.map