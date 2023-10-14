



export interface IScheme {
	"row": number,
	"column": number,
	"value": ForValue,
}

type ForValue = number | string;


export interface IQuestions{
	"number": number,
	"direction": string,
	"startRow": number,
	"startCol": number,
	"length": number,
	"text": string
}