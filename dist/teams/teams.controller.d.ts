import { TeamsService } from './teams.service';
import { Team } from './team.entity';
export declare class TeamsController {
    private service;
    constructor(service: TeamsService);
    getTeam(res: any, id: any): Promise<any>;
    getTeams(res: any, queryParams: any): Promise<any>;
    createTeam(res: any, body: any): Promise<any>;
    updateTeam(res: any, id: any, data: Team): Promise<any>;
    deleteTeam(res: any, params: any): Promise<any>;
}
