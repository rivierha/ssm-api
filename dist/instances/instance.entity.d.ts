import { Team } from '../teams/team.entity';
import { Status } from '../status/status.entity';
export declare class Instance {
    id: string;
    name: string;
    status: Status;
    team: Team;
    createdAt: Date;
    modifiedAt: Date;
}
