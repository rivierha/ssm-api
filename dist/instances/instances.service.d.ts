import { Repository } from 'typeorm';
import { Instance } from './instance.entity';
export declare class InstancesService {
    private repository;
    constructor(repository: Repository<Instance>);
    private getInstanceSchema;
    save(data: any): Promise<any>;
    findOne(id: any): Promise<Instance>;
    findAll(): Promise<Instance[]>;
    update(id: any, data: any): Promise<any>;
    delete(id: any): Promise<any>;
    getRepository(): Promise<Repository<Instance>>;
}
