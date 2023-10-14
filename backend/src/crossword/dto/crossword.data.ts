type ShemeAndAnswers = (number | string)[]

type TValue = number | string;

export interface IScheme {
	"start"?: number,
	"row": number,
	"column": number,
	"value": TValue,
}

interface IQuestion {
	"number": number,
	"direction": string,
	"startRow": number,
	"startCol": number,
	"length": number,
	"text": string
}

export class CrosswordDto {
	"login": string
	"columns": number
	"rows": number
	'answers'?: ShemeAndAnswers[]
	'scheme'?: IScheme[][]
	'questions': IQuestion[]
}




