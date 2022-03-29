import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity } from "typeorm";
import { Device } from "./device.entity";

@Entity()
export class Cyborg extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column((type) => Device)
  devices: Device[];

  assemble(name: string, devices: Device[]): Cyborg {
    this.name = name;
    this.devices = devices;
    return this;
  }
}
