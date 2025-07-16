import { LmsDbService } from 'src/common/Database/lms-db/lms-db.service';

export type LmsPrismaModelName = Exclude<keyof LmsDbService, `$${string}`>;
