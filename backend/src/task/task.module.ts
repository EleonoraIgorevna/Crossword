import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { CounterModule } from 'src/counter/counter.module';
import { TaskScheduler } from './task.sheduler';
import { CrosswordModule } from 'src/crossword/crossword.module';


@Module({
  imports: [
    CounterModule,
    CrosswordModule
  ],
  providers: [
    TaskService,
    TaskScheduler
  ],
  controllers: [
    TaskController
  ]
})
export class TaskModule {}
