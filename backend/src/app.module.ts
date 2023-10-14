import {  Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrosswordModule } from './crossword/crossword.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { CounterModule } from './counter/counter.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://127.0.0.1:8027"),
    CrosswordModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TaskModule,
    ScheduleModule.forRoot(),
    CounterModule
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
