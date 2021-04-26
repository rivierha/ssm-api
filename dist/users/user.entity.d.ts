import { Team } from '../teams/team.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    team: Team;
    createdAt: Date;
    modifiedAt: Date;
}
