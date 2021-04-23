import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne,} from 'typeorm';
import { Team } from '../teams/team.entity';
import { Status } from '../status/status.entity';

@Entity()
export class Instance {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string

    @ManyToOne(type => Status)
    @JoinColumn()
    status: Status

    @ManyToOne(type => Team)
    @JoinColumn()
    team: Team

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    modifiedAt: Date;
}