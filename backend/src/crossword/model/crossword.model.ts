import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ShemeAndAnswers = (number | string)[]


interface IQuestion {
	"number": number,
	"direction": string,
	"startRow": number,
	"startCol": number,
	"length": number,
	"text": string
}

type TValue = number | string;

interface IScheme {
	"row": number,
	"column": number,
	"value": TValue
}

export type CrosswordModelDocument = HydratedDocument<CrosswordModel>;


@Schema()
export class CrosswordModel {
	@Prop()
	'day': number
	@Prop()
	'columns': number
	@Prop()
	'rows': number
	@Prop()
	'answers': (string | number)[][];
	@Prop()
	'scheme': IScheme[][];
	@Prop()
	'questions': IQuestion[]
	@Prop()
	'login': string
}

export const CrosswordModelSchema = SchemaFactory.createForClass(CrosswordModel);




