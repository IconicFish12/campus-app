import { forwardRef, Module } from '@nestjs/common';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { IsUniqueConstraint } from './is-unique-constraint';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';

@Module({
  imports: [forwardRef(() => CampusDbModule)],
  providers: [IsUniqueConstraint, CampusDbService],
  exports: [IsUniqueConstraint],
})
export class ValidatorsModule {}
