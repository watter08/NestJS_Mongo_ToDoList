import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/Task/task.dto';
import { TodolistService } from './todolist.service';



@Controller('todolist')
export class TodolistController {

    constructor(private todolistService: TodolistService) { }

    @Get('/getALL')
    async GetTasks(@Res() res) {
        try {
            const Task = await this.todolistService.getTasks();
            return res.status(HttpStatus.OK).json({
                message: 'Success',
                data : Task
            })

        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: String(error.message),
                data: []
            })
        }

    }

    @Get('/getOne/:taskId')
    async GetTask(@Res() res , @Param('taskId') taskId) {
        try {
            const Task = await this.todolistService.getTask(taskId);
            if(!Task) throw new Error('Task Does Not Exists')
            return res.status(HttpStatus.OK).json({
                message: 'Success',
                data : Task
            })

        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: String(error.message),
                data: {}
            })
        }
    }


    @Post('/create')
    async CreateTask(@Res() res, @Body() createTaskDTO: CreateTaskDTO) {
        try {
            const Task = await this.todolistService.createTask(createTaskDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Task Succesfylly Created',
                data : Task
            })

        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: String(error.message),
                data: {}
            })
        }
    }


    @Put('/update')
    async UpdateTask(@Res() res ,@Query('taskId') taskId , @Body()  createTaskDTO : CreateTaskDTO) {
        try {
            const Task = await this.todolistService.updateTask( taskId,createTaskDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Task Updated Succesfully',
                data : Task
            })

        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: String(error.message),
                data: {}
            })
        }
    }
    @Delete('/delete')
    async DeleteTask(@Res() res, @Query('taskId') taskId) {
        try {
            const Task = await this.todolistService.deleteTask(taskId);
            if(!Task) throw new Error('Task Does Not Exists')
            return res.status(HttpStatus.OK).json({
                message: 'Task Deleted Succesfully',
                data : Task
            })

        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: String(error.message),
                data: {}
            })
        }
    }
}
