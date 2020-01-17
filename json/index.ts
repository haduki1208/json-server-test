import { users } from "./user";
import { companys } from "./company";
import { locationTargets } from "./location";

export const root = {
  master: {
    users,
    companys
  },
  users,
  companys,
  locationTargets
};
