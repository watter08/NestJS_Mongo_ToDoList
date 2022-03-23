import { Module } from '@nestjs/common';
import { DropdownsController } from './dropdowns.controller';
import { DropdownsService } from './dropdowns.service';

import { MongooseModule } from '@nestjs/mongoose';
import { StatuSchema } from 'src/schemas/DropDown/Status.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Status' , schema: StatuSchema }
  ])],
  controllers: [DropdownsController],
  providers: [DropdownsService]
})
export class DropdownsModule {}
