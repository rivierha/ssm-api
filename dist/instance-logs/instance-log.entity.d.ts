import { Instance } from '../instances/instance.entity';
import { User } from '../users/user.entity';
export declare class InstanceLog {
    id: string;
    reason: string;
    instance: Instance;
    user: User;
    startTime: Date;
    endTime: Date;
    totalTime: number;
    createdAt: Date;
    modifiedAt: Date;
}
