import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CrosswordModel, CrosswordModelDocument } from './model/crossword.model';
import { CrosswordDto, IScheme } from './dto/crossword.data';
import { Model, ObjectId } from "mongoose";
import * as fs from 'fs';


@Injectable()
export class CrosswordService {

    //СПРОСИТЬ ЭТОТ МОМЕНТ У ХАЛФИГЕРА
	private formatSchemeInCrossword(scheme: any): any{
		const transformedArray = scheme.map(row => {
				return row.map(cell => {
					if (cell.value === 1) {
						return { ...cell, value: '' };
					} else {
						return cell;
					}
				});
			});
			return transformedArray;
	}


	constructor(
		@InjectModel(CrosswordModel.name) private crosswordModel: Model<CrosswordModelDocument>,
	) { }


	async getByLogin(login: string): Promise<any> {
		const users = await this.crosswordModel.find();
		let user = users.find(element => element.login == login);
		if (!user) {
			try {
				let fileData = fs.readFileSync(`/home/e.i.pogorelova/home/crossword/backend/files/file.json`, `utf8`);
				user = JSON.parse(fileData);
				user.login = login;
				user = await this.crosswordModel.create({ ...user });
			} catch (error) {
				console.error('Ошибка чтения файла JSON:', error);
			}
		}
		return this.formatSchemeInCrossword(user.scheme);
	};


	async getQuestionsByLogin(login: string): Promise<any> {
		const users = await this.crosswordModel.find();
		let user = users.find(element => element.login == login);
		if (!user) {
			try {
				let fileData = fs.readFileSync(`/home/e.i.pogorelova/home/crossword/backend/files/file.json`, `utf8`);
				user = JSON.parse(fileData);
				user.login = login;
				user = await this.crosswordModel.create({ ...user });
			} catch (error) {
				console.error('Ошибка чтения файла JSON:', error);
			}
		}
		return user.questions;
	};




	async getAll(): Promise<CrosswordModelDocument[]> {
		return await this.crosswordModel.find();
	};

	async create(dto: CrosswordDto): Promise<CrosswordModelDocument> {
		return await this.crosswordModel.create({ ...dto });
	}

	async deleteById(id: ObjectId): Promise<CrosswordModelDocument> {
		return await this.crosswordModel.findByIdAndRemove(id);
	}

	



}

