import { Injectable } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Cron } from "@nestjs/schedule";


@Injectable()
export class TaskScheduler {

	constructor(private taskService: TaskService) { }


	// //Отрабатывает каждые 30 секунд, изменяет value в scheme
	// @Cron('00 */10 * * * *', {
	// 	timeZone: 'Europe/Moscow'
	// })
	// public  sayHello() {
	// 	// this.taskService.updateCrossword();
	// 	this.taskService.updateCrossword();
	

		
	// }



	
}