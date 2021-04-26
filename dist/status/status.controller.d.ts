import { StatusService } from './status.service';
import { Status } from './status.entity';
export declare class StatusController {
    private service;
    constructor(service: StatusService);
    getStatus(res: any, id: any): Promise<any>;
    getAllStatus(res: any, queryParams: any): Promise<any>;
    createStatus(res: any, body: Status): Promise<any>;
    updateStatus(res: any, id: any, data: Status): Promise<any>;
    deleteStatus(res: any, params: any): Promise<any>;
}
