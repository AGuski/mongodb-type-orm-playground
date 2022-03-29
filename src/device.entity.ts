import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Device extends BaseEntity {
    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    weight: number;

    @Column()
    activated: boolean = true;
}
