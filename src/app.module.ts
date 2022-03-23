import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DropdownsModule } from './dropdowns/dropdowns.module';

@Module({
  imports: [TodolistModule , MongooseModule.forRoot('mongodb://127.0.0.1:27017/local',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }), DropdownsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
