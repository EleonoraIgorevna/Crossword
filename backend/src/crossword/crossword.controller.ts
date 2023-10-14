import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CrosswordService } from './crossword.service';
import { CrosswordDto } from './dto/crossword.data';
import { ObjectId } from 'mongoose';


@Controller('crossword')
export class CrosswordController {


	constructor(private readonly crosswordService: CrosswordService) { }


	// ПЕРВЫЙ МЕТОД ДЛЯ ВЫЗОВА - ОТРИСОВКА КРОССВОРДА 
	// Получает текущий кроссворд определенного сотрудника из БД по login
	@Get('/:login')
	async getByLogin(@Param('login') login: string) {
		let user = this.crosswordService.getByLogin(login);
		return user;
	}


	// ВТОРОЙ МЕТОД ДЛЯ ВЫЗОВА - ОТРИСОВКА ВОПРОСОВ 
	// Получает текущие вопросы определенного сотрудника из БД по login
	@Get('/questions/:login')
	async getQuestionsByLogin(@Param('login') login: string) {
		let user = this.crosswordService.getQuestionsByLogin(login);
		return user;
	}


	// Получает все кроссворды
	// http://localhost:1002/crossword
	@Get()
	getAll() {
		return this.crosswordService.getAll();
	}

	
	// Добавляет один новый кроссворд
	// http://localhost:1002/crossword
	@Post()
	create(@Body() dto: CrosswordDto) {
		return this.crosswordService.create(dto);
	}


	// Удаляет один кроссворд по id
	// http://localhost:1002/crossword/650abcf90cb9a3bf645e8493
	@Delete('/:id')
	deleteById(@Param('id') id: ObjectId) {
		return this.crosswordService.deleteById(id);
	}


	// http://localhost:1002/crossword/day/1
	// @Get(':key/:value')
	// findByKey(@Param('key') key: string, @Param('value') value: string) {
	// 	const result = this.crosswordService.findByKey(key, value);
	// 	return result ? result : 'Object not found';
	// }


	// @Get('/:id')
	// getById(@Param('id') id: ObjectId) {
	// 	return this.crosswordService.getById(id);
	// }

}
