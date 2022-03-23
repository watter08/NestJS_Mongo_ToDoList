import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TaskInterface } from 'src/interfaces/Task/task.interface';
import { CreateTaskDTO } from 'src/dto/Task/task.dto';


@Injectable()
export class TodolistService {

    constructor(@InjectModel('Task') private readonly taskModel : Model<TaskInterface>) {}

    async getTasks() : Promise<TaskInterface[]> {
        const Tasks = await this.taskModel.find();
        return Tasks;
    }

    async getTask(taskId : string) : Promise<TaskInterface> {
        const Task = await this.taskModel.findById(taskId);
        return Task;
    }

    async createTask(createTaskDTO : CreateTaskDTO) : Promise<TaskInterface> {
        const Task = new this.taskModel(createTaskDTO);
        return await Task.save();
    }


    async updateTask(taskId : string ,createTaskDTO : CreateTaskDTO) : Promise<TaskInterface> {
        const UpdateTask = await  this.taskModel.findByIdAndUpdate(taskId ,createTaskDTO , { new : true});
        return UpdateTask
    }

    async deleteTask(taskId : string) : Promise<TaskInterface> {
        const DeleteTask = await this.taskModel.findByIdAndDelete(taskId);
        return DeleteTask;
    }
}
