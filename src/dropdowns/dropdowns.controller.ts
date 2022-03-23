import { Controller,Get , Post, Put , Delete, Res, HttpStatus, Body, Query } from '@nestjs/common';
import { query } from 'express';
import { CreateStatusDTO } from 'src/dto/DropDown/status.dto';
import { DropdownsService } from './dropdowns.service';

@Controller('dropdowns')
export class DropdownsController {

    constructor(private dropdownService : DropdownsService){}

    @Get('/getAllStatus')
    async getAllStatus(@Res() res) {
        try {
            const Status = await this.dropdownService.getAllStatus();
            return res.status(HttpStatus.OK).json({
                message: 'success',
                data:Status
            })
        } catch (error) {
            return res.status(HttpStatus.OK).json({
                message:String(error.message),
                data:[]
            })
        }
    }



    @Get('/getStatusByType')
    async getOneStatus(@Res() res , @Query('statusType') statusType) {
        try {
            const Status = await this.dropdownService.getStatusByType(statusType)
            if(!Status) throw new Error('Status With This Type Does Not Exits')
            return res.status(HttpStatus.OK).json({
                message: 'success',
                data:Status
            })
        } catch (error) {
            return res.status(HttpStatus.OK).json({
                message:String(error.message),
                data:[]
            })
        }
    }


    @Post('/createStatus')
    async CreateStatus(@Res() res , @Body() createStatusDTO :CreateStatusDTO) {
        try {
            const Status = await this.dropdownService.createStatus(createStatusDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Status Created Succesfully',
                data:Status
            })
        } catch (error) {
            return res.status(HttpStatus.OK).json({
                message:String(error.message),
                data:[]
            })
        }
    }


    @Put('/updateStatus')
    async UpdateStatus(@Res() res , @Query('statusId') statusId , @Body() createStatusDTO : CreateStatusDTO) {
        try {
            const Status = await this.dropdownService.updateStatus(statusId , createStatusDTO)
            return res.status(HttpStatus.OK).json({
                message: 'Status Updated Succesfully',
                data:Status
            })
        } catch (error) {
            return res.status(HttpStatus.OK).json({
                message:String(error.message),
                data:{}
            })
        }
    }


    @Delete('/deleteStatus')
    async DeleteStatus(@Res() res, @Query('statusId') statusId) {
        try {
            const Status = await  this.dropdownService.deleteStatus(statusId);
            if(!Status) throw new Error('Status Does Not Exists')
            return res.status(HttpStatus.OK).json({
                message: 'success',
                data: Status
            })
        } catch (error) {
            return res.status(HttpStatus.OK).json({
                message:String(error.message),
                data:{}
            })
        }
    }
}
