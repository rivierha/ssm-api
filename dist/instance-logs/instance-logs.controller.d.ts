import { InstanceLogsService } from './instance-logs.service';
import { InstanceLog } from './instance-log.entity';
export declare class InstanceLogsController {
    private service;
    constructor(service: InstanceLogsService);
    getInstance(res: any, id: any): Promise<any>;
    getAllInstance(res: any, queryParams: any): Promise<any>;
    createInstance(res: any, body: InstanceLog): Promise<any>;
    updateInstance(res: any, id: any, data: InstanceLog): Promise<any>;
    deleteInstance(res: any, params: any): Promise<any>;
}
