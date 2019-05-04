import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

import { IRoom } from "../../interfaces/models/IRoom";

@Table({
  tableName: "rooms",
  paranoid: true,
})
export class Room extends Model<Room> implements IRoom {
  @AllowNull(false)
  @Column(DataType.STRING)
  public roomCode: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public description: string;
}
