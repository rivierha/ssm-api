import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import * as Joi from 'joi';

@Injectable()
export class TeamsService {

    constructor(@InjectRepository(Team) private repository: Repository<Team>) { }

    private getTeamsSchema() {
        const schema = Joi.object().keys({
            id: Joi.string(),
            name: Joi.string().required().default(''),
            createdAt: Joi.date(),
            modifiedAt: Joi.date()
        });
        return schema;
    }

    async save(data): Promise<any> {
        const validatedData = this.getTeamsSchema().validate(data)
        const team = this.repository.create(validatedData.value)
        return await this.repository.save(team)
    }

    async findOne(id): Promise<Team> {
        return await this.repository.findOne(id)
    }

    async findAll(): Promise<Team[]> {
        return await this.repository.find()
    }

    async update(id, data): Promise<any> {
        return await this.repository.update(id, data)
    }

    async delete(id): Promise<any> {
        return await this.repository.delete({ id: id })
    }

    async getRepository(): Promise<Repository<Team>> {
        return this.repository;
    }
}