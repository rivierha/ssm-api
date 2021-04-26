import { InstancesService } from './instances.service';
import { Instance } from './instance.entity';
export declare class InstancesController {
    private service;
    constructor(service: InstancesService);
    getInstance(res: any, id: any): Promise<any>;
    getAllInstance(res: any, queryParams: any): Promise<any>;
    createInstance(res: any, body: Instance): Promise<any>;
    updateInstance(res: any, id: any, data: Instance): Promise<any>;
    deleteInstance(res: any, params: any): Promise<any>;
}
