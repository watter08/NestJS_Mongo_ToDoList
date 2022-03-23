import { Module } from '@nestjs/common';
import { TodolistController } from './todolist.controller';
import { TodolistService } from './todolist.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from 'src/schemas/Task/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Task' , schema: TaskSchema}
    ])
  ],
  controllers: [TodolistController],
  providers: [TodolistService]
})
export class TodolistModule {}
