import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private repository: Repository<User>) { }

    async save(data): Promise<any> {
        const user = this.repository.create(data)
        return await this.repository.save(user)
    }

    async findOne(id): Promise<User> {
        return await this.repository.findOne(id)
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

    async query(data): Promise<any> {
        return await this.repository.createQueryBuilder('user').where(data).getManyAndCount();
    }

}