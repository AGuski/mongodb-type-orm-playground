import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Device extends BaseEntity {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    weight: number
}
