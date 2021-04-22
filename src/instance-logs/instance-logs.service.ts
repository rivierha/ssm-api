import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InstanceLog } from './instance-log.entity';

@Injectable()
export class InstanceLogsService {
    constructor(@InjectRepository(InstanceLog) private repository: Repository<InstanceLog>) { }

    async save(data): Promise<any> {
        const log = this.repository.create(data)
        return await this.repository.save(log)
    }

    async findOne(id): Promise<InstanceLog> {
        return await this.repository.findOne(id)
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

    async query(data): Promise<any> {
        return await this.repository.createQueryBuilder('instancelog').where(data).getManyAndCount();
    }
}
