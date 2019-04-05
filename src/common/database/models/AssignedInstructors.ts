import { Op } from "sequelize";
import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model } from "sequelize-typescript";

import { IAssignedInstructors } from "../../interfaces/models/IAssignedInstructors";
import { UserType } from "../../interfaces/models/IUser";

import { Schedule } from "./Schedule";
import { User } from "./User";

export class AssignedInstructors extends Model<AssignedInstructors> implements IAssignedInstructors {
  // Class Methods

  private static async verifyAdminStatus(instance: AssignedInstructors) {
    let user = await User.findOne({where: { userId: {[Op.eq]: instance.userId} }});
    
    if(!user) {
      throw new Error(`User ${instance.userId} does not exist`);
    }

    if(user.type !== UserType.Admin) {
      throw new Error(`User ${instance.userId} does not exist`);
    }
  }

  // End Class Methods
  
  // Model Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public userId: string;  
  
  @ForeignKey(() => Schedule)
  @AllowNull(false)
  @Column(DataType.STRING)
  public scheduleCode: string;

  // End Model Columns

  // Model Relationships

  @BelongsTo(() => Schedule)
  public schedule: Schedule;

  @BelongsTo(() => User)
  public user: User;

  // End Model Relationships

}
