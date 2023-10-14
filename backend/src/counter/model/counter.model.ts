import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CounterModelDocument = HydratedDocument<CounterModel>;

@Schema()
export class CounterModel {
	@Prop()
	'counter': number
}

export const CounterModelSchema = SchemaFactory.createForClass(CounterModel);