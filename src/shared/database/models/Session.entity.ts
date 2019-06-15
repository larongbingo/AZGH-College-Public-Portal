import { Table, Model, Column, DataType, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";

import { ISession } from "../../interfaces/models/ISession";

import { Room } from "./Room.entity";
import { Schedule } from "./Schedule.entity";

@Table({
  tableName: "sessions",
  paranoid: true,
})
export class Session extends Model<Session> implements ISession {
  // Columns
  @ForeignKey(() => Schedule)
  @Column(DataType.STRING)
  scheduleCode: string;

  @ForeignKey(() => Room)
  @Column(DataType.STRING)
  roomCode: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  startingTime: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  endingTime: string;

  @AllowNull(false)
  @Column(DataType.ENUM(["Lecture", "Laboratory"]))
  sessionType: "Lecture" | "Laboratory";
  // End Columns

  // Relationships
  @BelongsTo(() => Schedule)
  schedule: Schedule;
  
  @BelongsTo(() => Room)
  room: Room;
  // End Relationships

}
