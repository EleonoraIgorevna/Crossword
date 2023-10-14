import { Inject, Injectable } from '@nestjs/common';
import { CounterService } from 'src/counter/counter.service';
import { CrosswordService } from 'src/crossword/crossword.service';
import * as fs from 'fs';


@Injectable()
export class TaskService {


	constructor(
		@Inject(CounterService) private readonly counterService: CounterService,
		@Inject(CrosswordService) private readonly crosswordService: CrosswordService
	) { }


	private processArray(arr, startRow, startCol, direction) {
		if (direction == 'Вертикально') {
			console.log('Кря');
			for (let i = startRow; i < arr.length; i++) {
				const currentArray = arr[i];
				if (currentArray[startCol].value === 0) return arr; // Выходим из функции, если элемент равен 0
				else if (currentArray[startCol].value === 2) currentArray[startCol].value = 1; // Меняем значение элемента на 1, если элемент равен 2
				else if (currentArray[startCol].value === 1) continue
			}
			return arr
		} else {
			for (let i = startRow; i < arr.length; i++) {
				let currRow = arr[i];
				for (let j = startCol; j < currRow.length; j++) {
					if (currRow[j].value === 1) continue;
					else if (currRow[j].value === 2) currRow[j].value = 1;
					else if (currRow[j].value === 0) return arr;
				}
				return arr
			}
		}
	}



	// Функция по счетчику ежедневно открывает клетки (отчет ведется с нуля)
	public async updateCrossword(): Promise<number> {

		let newScheme;

		//1. Проверяем значение счетчика
		let counter = (await this.counterService.getOne()).counter;
		if (counter == 4 || counter > 4) return 4;
		
		//2. Увеличиваем и получаем счетчик 
		counter = await this.counterService.update();


		//3. Получаем вопросы дня, которые будем открывать
		const answers = [
			[1, 2],
			[3, 4],
			[5, 6],
			[7, 8],
			[9, 10]
		];
		const questionsNumbers = answers[counter]; 
	
		//4. Получаем актуальные для обновления вопросы
		const fileData = fs.readFileSync(`/home/e.i.pogorelova/home/crossword/backend/files/questions.json`, `utf8`);
		const questionsAll = JSON.parse(fileData);

		const questionsFiltered = questionsAll.questions.filter(obj => questionsNumbers.includes(obj.number));
		console.log(questionsFiltered);
		
		//5. Получаем все объекты из БД
		const objects = await this.crosswordService.getAll(); // Получить все объекты из базы данных
		
		for (const object of objects) {
			
			questionsNumbers.forEach(number => {
				const option = questionsAll.questions.find(obj => obj.number == number);
				let { startRow, startCol, direction } = option;
				newScheme = this.processArray(object.scheme, startRow, startCol, direction);
			});

			object.scheme = newScheme;
			let currentQuestions = object.questions;
			let newArray = currentQuestions.concat(questionsFiltered);
			console.log(newArray);
			object.questions = newArray;
			object.markModified('scheme');			
			await object.save(); // Сохранить обновленный объект
		}
		
		return 1;
	}
}








// 2 - disabled
// 1 - пустая строка
// 0 - не существует поле
