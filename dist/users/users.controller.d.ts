import { UsersService } from './users.service';
import { User } from './user.entity';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    getUser(res: any, id: any): Promise<any>;
    getUsers(res: any, queryParams: any): Promise<any>;
    createUser(res: any, body: any): Promise<any>;
    updateUser(res: any, id: any, data: User): Promise<any>;
    deleteUser(res: any, params: any): Promise<any>;
}
