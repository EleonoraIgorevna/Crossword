import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CounterService } from './counter.service';
import { ObjectId } from "mongoose";
import { CounterDto } from './dto/counter.data';


// АПИ по работе с счетчиком
@Controller('counter')
export class CounterController {

	constructor(private readonly counterService: CounterService) { }

	// Получает счетчик
	// http://localhost:1002/counter
	@Get()
	getOne() {
		return this.counterService.getOne();
	}

	// Добавляет один новый счетчик
	// http://localhost:1002/counter
	@Post()
	create(@Body() dto: CounterDto) {
		return this.counterService.create(dto);
	}

	// Обновляет  счетчик
	// http://localhost:1002/counter
	@Post('update')
	update() {
		return this.counterService.update();
	}

	// Удаляет один счетчик по id
	// http://localhost:1002/counter/650abcf90cb9a3bf645e8493
	@Delete('/:id')
	deleteById(@Param('id') id: ObjectId) {
		return this.counterService.delete(id);
	}

}
