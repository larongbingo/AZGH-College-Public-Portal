import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
} from "sequelize-typescript";

import { IRoom } from "../../interfaces/models/IRoom";

import { Session } from "./Session.entity";

@Table({
  tableName: "rooms",
  paranoid: true,
})
export class Room extends Model<Room> implements IRoom {
  // Columns
  @AllowNull(false)
  @Column(DataType.STRING)
  public roomCode: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public description: string;
  // End Columns

  // Relationships
  @BelongsTo(() => Session)
  session: Session;
  // End Relationships

}
