import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TCell } from './crossword/_models/crossword.models';
import { CrosswordService } from './app.service';
import { IScheme } from './crossword/interface/crossword.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent  {

  title = 'frontend';

  constructor(private crosswordService: CrosswordService) { }

  ngOnInit() {
    this.getCrosswordData();
  }






  // getCrosswordData(): void{
  //   this.crosswordService.getCrosswordData().subscribe(
  //     (data: TCell[][]) => {
  //       console.log('Тут 2',data);
  //       this.crosswordService.setCrosswordArray(data);
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }


  getCrosswordData(): void {
    this.crosswordService.getCrosswordData().subscribe(
      (data: any) => {
        console.log('Тут 2', data);
        this.crosswordService.setCrosswordArray(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }







}


  












  




  

