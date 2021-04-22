import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {

    constructor(@InjectRepository(Team) private repository: Repository<Team>) { }

    async save(data): Promise<any> {
        const team = this.repository.create(data)
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

    async query(data): Promise<any> {
        return await this.repository.createQueryBuilder('team').where(data).getManyAndCount();
    }

}