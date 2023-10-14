import { Injectable } from '@nestjs/common';
import { CounterDto } from './dto/counter.data';
import { CounterModel, CounterModelDocument } from './model/counter.model';
import { Model, ObjectId } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CounterService {


	constructor(
		@InjectModel(CounterModel.name) private counterModel: Model<CounterModelDocument>,
	) { }

	async getOne(): Promise<CounterModelDocument> {
		return await this.counterModel.findOne();
	};

	async create(dto: CounterDto): Promise<CounterModelDocument> {
		return await this.counterModel.create({ ...dto });
	}

	async delete(id: ObjectId): Promise<CounterModelDocument> {
		return await this.counterModel.findOneAndRemove(id);
	}

	async update(): Promise<number> {
		let counterObject = (await this.counterModel.findOne());
		let counter = counterObject.counter + 1;
		(await this.counterModel.findOneAndUpdate({ counter }));
		return (await this.counterModel.findOne()).counter;	
	}

}
