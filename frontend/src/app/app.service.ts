import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TCell } from './crossword/_models/crossword.models';
import { IQuestions, IScheme } from './crossword/interface/crossword.interface';



@Injectable({
  providedIn: 'root',
})
export class CrosswordService {

  // public crosswordArray: TCell[][] = [];
  public crosswordArray: IScheme[][] = [];
  public questionsArray: IQuestions[] = [];

  constructor(private http: HttpClient) { }

  getCrosswordData() {
    return this.http.get<TCell[][]>('http://localhost:1002/crossword/e.i.pogorelova');
  }

  // setCrosswordArray(data: TCell[][]) {
    setCrosswordArray(data: IScheme[][]) {
    this.crosswordArray = data;
  
  }

  getCrosswordArray() {
    return this.crosswordArray;
  }


  getQuestionsData() {
    return this.http.get<IQuestions[]>('http://localhost:1002/crossword/questions/e.i.pogorelova');
  }

  // setCrosswordArray(data: TCell[][]) {
  setQuestionsArray(data: IQuestions[]) {
    this.questionsArray = data;

  }

  getQuestionsArray() {
    return this.questionsArray;
  }


}