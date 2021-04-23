import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as Joi from 'joi';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    private getProjectSchema() {
        const schema = Joi.object().keys({
            id: Joi.string(),
            name: Joi.string().required(),
            email: Joi.string().required(),
            team: Joi.string().allow(null),
            createdAt: Joi.date(),
            modifiedAt: Joi.date()
        });
        return schema;
    }

    async save(data): Promise<any> {
        const validatedData = this.getProjectSchema().validate(data)
        const user = this.repository.create(validatedData.value)
        return await this.repository.save(user)
    }

    async findOne(id): Promise<User> {
        return await this.repository.findOne(id, {
            relations: ['team'],
        })
    }

    async findAll(): Promise<User[]> {
        return await this.repository.find()
    }

    async update(id, data): Promise<any> {
        return await this.repository.update(id, data)
    }

    async delete(id): Promise<any> {
        return await this.repository.delete({ id: id })
    }

    async getRepository(): Promise<Repository<User>> {
    return this.repository;
    }

}