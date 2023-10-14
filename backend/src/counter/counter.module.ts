import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CounterModel, CounterModelSchema } from './model/counter.model';


@Module({
  providers: [
    CounterService
  ],
  controllers: [
    CounterController
  ],
  imports: [
    MongooseModule.forFeature([{ name: CounterModel.name, schema: CounterModelSchema }])
  ],
  exports: [
    CounterService
  ]
})
export class CounterModule { }
