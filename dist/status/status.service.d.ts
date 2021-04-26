import { Repository } from 'typeorm';
import { Status } from './status.entity';
export declare class StatusService {
    private repository;
    constructor(repository: Repository<Status>);
    save(data: any): Promise<any>;
    findOne(id: any): Promise<Status>;
    findAll(): Promise<Status[]>;
    update(id: any, data: any): Promise<any>;
    delete(id: any): Promise<any>;
    query(data: any): Promise<any>;
    seed(): Promise<any>;
}
