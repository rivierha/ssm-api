import { Repository } from 'typeorm';
import { InstanceLog } from './instance-log.entity';
export declare class InstanceLogsService {
    private repository;
    constructor(repository: Repository<InstanceLog>);
    private getInstanceSchema;
    save(data: any): Promise<any>;
    findOne(id: any): Promise<InstanceLog>;
    findAll(): Promise<InstanceLog[]>;
    update(id: any, data: any): Promise<any>;
    delete(id: any): Promise<any>;
    getRepository(): Promise<Repository<InstanceLog>>;
}
