import { forwardRef, Module } from '@nestjs/common';
import { CampusDbModule } from 'src/common/Database/campus-db/campus-db.module';
import { IsUniqueConstraint } from './constraint/is-unique-constraint';
import { CampusDbService } from 'src/common/Database/campus-db/campus-db.service';
import { IsMatchConstraint } from './constraint/is-match-constraint';

@Module({
  imports: [forwardRef(() => CampusDbModule)],
  providers: [IsUniqueConstraint, IsMatchConstraint, CampusDbService],
  exports: [IsUniqueConstraint, IsMatchConstraint],
})
export class ValidatorsModule {}
