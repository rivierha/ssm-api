import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, Index, } from 'typeorm';

@Entity()
export class Team {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    @Index({unique: true})
    name: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    modifiedAt: Date;
}