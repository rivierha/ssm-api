import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instance } from './instance.entity';
import * as Joi from 'joi';

@Injectable()
export class InstancesService {
    constructor(@InjectRepository(Instance) private repository: Repository<Instance>) { }

    private getInstanceSchema() {
        const schema = Joi.object().keys({
            id: Joi.string(),
            name: Joi.string().required().default(''),
            status: Joi.string().default('FREE'),
            team: Joi.string().required(),
            createdAt: Joi.date(),
            modifiedAt: Joi.date()
        });
        return schema;
    }

    async save(data): Promise<any> {
        const validatedData = this.getInstanceSchema().validate(data)
        const instance = this.repository.create(validatedData.value)
        return await this.repository.save(instance)
    }

    async findOne(id): Promise<Instance> {
        return await this.repository.findOne(id, {
            relations: ['team', 'status']
        })
    }

    async findAll(): Promise<Instance[]> {
        return await this.repository.find()
    }

    async update(id, data): Promise<any> {
        return await this.repository.update(id, data)
    }

    async delete(id): Promise<any> {
        return await this.repository.delete({ id: id })
    }

    async getRepository(): Promise<Repository<Instance>> {
            return this.repository;
    }
}
