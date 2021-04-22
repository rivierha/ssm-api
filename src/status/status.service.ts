import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './status.entity';

@Injectable()
export class StatusService {
    constructor(@InjectRepository(Status) private repository: Repository<Status>) { }

    async save(data): Promise<any> {
        const status = this.repository.create(data)
        return await this.repository.save(status)
    }

    async findOne(id): Promise<Status> {
        return await this.repository.findOne(id)
    }

    async findAll(): Promise<Status[]> {
        return await this.repository.find()
    }

    async update(id, data): Promise<any> {
        return await this.repository.update(id, data)
    }

    async delete(id): Promise<any> {
        return await this.repository.delete({ id: id })
    }

    async query(data): Promise<any> {
        return await this.repository.createQueryBuilder('status').where(data).getManyAndCount();
    }

    async seed(): Promise<any> {
        let status = [
            {
                id: 'FREE',
                name: 'FREE status',
                description: 'This status denotes free instance.',
            },
            {
                id: 'INUSE',
                name: 'MEMBER status',
                description: 'This status denotes in-use instance.',
            }
        ]
        await this.repository.save(status);
    }

}
