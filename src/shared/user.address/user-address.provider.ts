import { Provider } from "@nestjs/common";

import { UserAddress } from "../database/models/UserAddress.entity";

export const USER_ADDRESS_PROVIDER = "USER_ADDRESS_PROVIDER";

export const UserAddressProvider: Provider = {
  provide: USER_ADDRESS_PROVIDER,
  useValue: UserAddress,
};
