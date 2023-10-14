import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type TCell = string | number;

@Injectable({
  providedIn: 'root'
})
  
export class CrosswordApiService {

  private host: string = 'http://localhost:1002';

  result: TCell[][] = [];

  constructor(
    private http: HttpClient
  ) { }

  // getCrossword(): Observable<TCell[][]> {
  // return this.http.get<TCell[][]>(`${this.host}/crossword/day/1`);
  // }


  getCrossword() {
    const apiUrl = 'http://localhost:1002/crossword/day/1';
    this.http.get(apiUrl).subscribe(
      (response) => {
        console.log('Beb',response);
        this.result = response as TCell[][];
      },
      (error) => {
        console.error(error);
      }
    );
  }



  /*
  [[0,"",0,2,0,0],["","","","","",0],[0,"",0,2,0,0],[0,0,0,2,2,2],[0,0,0,0,0,2],[0,0,0,0,0,2]]
  */




}

