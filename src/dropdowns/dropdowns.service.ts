import { Injectable  } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { StatusInterface } from 'src/interfaces/DropDown/status.interface';
import { CreateStatusDTO } from 'src/dto/DropDown/status.dto';


@Injectable()
export class DropdownsService {

   constructor(@InjectModel('Status') private readonly StatusModel : Model<StatusInterface> ) {}


   async getAllStatus(): Promise<StatusInterface[]> {
    const Status = await this.StatusModel.find();
    return Status;
   }

   async getStatusByType(statustype : string): Promise<StatusInterface[]> {
    const Status = await this.StatusModel.find({type : statustype});
    return Status;
   }

   async createStatus(createStatusDto : CreateStatusDTO) : Promise<StatusInterface>{
       const Status =  new this.StatusModel(createStatusDto);
       return await Status.save();
   }

   async updateStatus(statusId : string , createStatusDto : CreateStatusDTO): Promise<StatusInterface> {
    const Status = await this.StatusModel.findByIdAndUpdate(statusId ,createStatusDto);
    return Status;
   }
   
   async deleteStatus(statusId : string ): Promise<StatusInterface> {
    const Status = await this.StatusModel.findByIdAndDelete(statusId);
    return Status;
   }



}
