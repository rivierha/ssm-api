import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne,} from 'typeorm';
import { Instance } from '../instances/instance.entity';
import { User } from '../users/user.entity';

@Entity()
export class InstanceLog { 

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string

    @Column()
    email: string

    @ManyToOne(type => Instance)
    @JoinColumn()
    instanceId: Instance

    @ManyToOne(type => User)
    @JoinColumn()
    userId: User

    @CreateDateColumn({ type: 'timestamp' })
    startTime: Date;

    @CreateDateColumn({ type: 'timestamp' })
    endTime: Date;

    @CreateDateColumn({ type: 'timestamp' })
    totalTime: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    modifiedAt: Date;
}
