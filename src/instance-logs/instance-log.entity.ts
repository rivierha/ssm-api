import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne,} from 'typeorm';
import { Instance } from '../instances/instance.entity';
import { User } from '../users/user.entity';

@Entity()
export class InstanceLog { 

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    reason: string

    @ManyToOne(type => Instance)
    @JoinColumn()
    instance: Instance

    @ManyToOne(type => User)
    @JoinColumn()
    user: User

    @CreateDateColumn({ type: 'timestamp' })
    startTime: Date;

    @CreateDateColumn({ type: 'timestamp' })
    endTime: Date;

    @Column()
    totalTime: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    modifiedAt: Date;
}
