
export interface ISizeCrossword {
	xSize: number;
	ySize: number;
}

export type TCell = string | number; 

export interface ITCell {
	row: number;
	column: number;
	value: string | number;
}


export interface ISizeCrossword {
	xSize: number;
	ySize: number;
}

type ShemeAndAnswers = (number | string)[]

interface IQuestion {
	"number": number,
	"direction": string,
	"startRow": number,
	"startCol": number,
	"length": number,
	"text": string
}

export interface ICrosswordDTO {
	"day": number
	"columns": number
	"rows": number
	'answers': ShemeAndAnswers[]
	'scheme': ShemeAndAnswers[]
	'questions': IQuestion[]
}
