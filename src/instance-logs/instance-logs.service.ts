import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstanceLog } from './instance-log.entity';
import * as Joi from 'joi';

@Injectable()
export class InstanceLogsService {
    constructor(@InjectRepository(InstanceLog) private repository: Repository<InstanceLog>) { }

    private getInstanceSchema() {
        const schema = Joi.object().keys({
            id: Joi.string(),
            description: Joi.string().required().default(''),
            instance: Joi.string().required(),
            user: Joi.string().required(),
            startTime: Joi.date(),
            endTime: Joi.date(),
            totalTime: Joi.number().default(0),
            createdAt: Joi.date(),
            modifiedAt: Joi.date()
        });
        return schema;
    }

    async save(data): Promise<any> {
        const validatedData = this.getInstanceSchema().validate(data)
        const log = this.repository.create(validatedData.value)
        return await this.repository.save(log)
    }

    async findOne(id): Promise<InstanceLog> {
        return await this.repository.findOne(id, {
            relations: ['user', 'instance']
        })
    }

    async findAll(): Promise<InstanceLog[]> {
        return await this.repository.find()
    }

    async update(id, data): Promise<any> {
        return await this.repository.update(id, data)
    }

    async delete(id): Promise<any> {
        return await this.repository.delete({ id: id })
    }

    async getRepository(): Promise<Repository<InstanceLog>> {
            return this.repository;
    }
}
