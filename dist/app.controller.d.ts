import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUser(res: any, id: any): Promise<any>;
    getUsers(res: any, queryParams: any): Promise<any>;
    createUser(res: any, body: any): Promise<any>;
    updateUser(res: any, id: any, data: any): Promise<any>;
    deleteUser(res: any, id: any): Promise<any>;
    getTeam(res: any, id: any): Promise<any>;
    getTeams(res: any, queryParams: any): Promise<any>;
    createTeam(res: any, body: any): Promise<any>;
    updateTeam(res: any, id: any, data: any): Promise<any>;
    deleteTeam(res: any, id: any): Promise<any>;
    getInstance(res: any, id: any): Promise<any>;
    getAllInstance(res: any, queryParams: any): Promise<any>;
    createInstance(res: any, body: any): Promise<any>;
    updateInstance(res: any, id: any, data: any): Promise<any>;
    deleteInstance(res: any, id: any): Promise<any>;
    getInstanceLog(res: any, id: any): Promise<any>;
    getAllInstanceLogs(res: any, queryParams: any): Promise<any>;
    createInstanceLog(res: any, body: any): Promise<any>;
    updateInstanceLog(res: any, id: any, data: any): Promise<any>;
    deleteInstanceLog(res: any, id: any): Promise<any>;
}
