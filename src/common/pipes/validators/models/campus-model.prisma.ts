import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

export type CampusPrismaModelName = Exclude<
  keyof CampusDbService,
  `$${string}`
>;
