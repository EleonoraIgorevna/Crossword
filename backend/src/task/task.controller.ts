import { Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

	constructor(
		private readonly tasrService: TaskService
	) { }

	@Post('update')
	update() {
		return this.tasrService.updateCrossword();
	}
	





}
