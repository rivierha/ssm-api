import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instance } from './instance.entity';

@Injectable()
export class InstancesService {
    constructor(@InjectRepository(Instance) private repository: Repository<Instance>) { }

    async save(data): Promise<any> {
        const instance = this.repository.create(data)
        return await this.repository.save(instance)
    }

    async findOne(id): Promise<Instance> {
        return await this.repository.findOne(id)
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

    async query(data): Promise<any> {
        return await this.repository.createQueryBuilder('instance').where(data).getManyAndCount();
    }
}
