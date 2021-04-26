import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repository;
    constructor(repository: Repository<User>);
    private getUserSchema;
    save(data: any): Promise<any>;
    findOne(id: any): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: any, data: any): Promise<any>;
    delete(id: any): Promise<any>;
    getRepository(): Promise<Repository<User>>;
}
