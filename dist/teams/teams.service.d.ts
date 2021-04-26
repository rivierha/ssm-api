import { Repository } from 'typeorm';
import { Team } from './team.entity';
export declare class TeamsService {
    private repository;
    constructor(repository: Repository<Team>);
    private getTeamsSchema;
    save(data: any): Promise<any>;
    findOne(id: any): Promise<Team>;
    findAll(): Promise<Team[]>;
    update(id: any, data: any): Promise<any>;
    delete(id: any): Promise<any>;
    getRepository(): Promise<Repository<Team>>;
}
