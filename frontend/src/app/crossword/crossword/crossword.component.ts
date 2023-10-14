import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ISizeCrossword } from '../_models/crossword.models';
import { CrosswordService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { IQuestions, IScheme } from '../interface/crossword.interface';
type TCell = string | number;

interface ICell {
  "row": number,
  "column": number,
  "value": string | number
}

@Component({
  selector: 'crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosswordComponent implements OnChanges, OnInit {

  constructor(
    private crosswordService: CrosswordService,
  ) { }

  @Output() public crosswordOutput = new EventEmitter();

  public cells: ICell[] = [];

  // public crosswordInput: TCell[][] = this.crosswordService.getCrosswordArray();

  public questionsInput: IQuestions[] = this.crosswordService.getQuestionsArray();
  public crosswordInput: IScheme[][] = this.crosswordService.getCrosswordArray();

  observableInput!: Observable<any>;
  observableQuestion!: Observable<any>;

  public showArray() {
    console.log(this.cells);
  }

  public onAdd(cell: ICell) { 
    if (typeof cell.value == "string") {
      this.cells.unshift(cell);
    }
  }

  ngOnInit() {
    this.crosswordInput = this.crosswordService.getCrosswordArray();
    this.observableInput = this.crosswordService.getCrosswordData();
    this.observableInput.subscribe(
      (data: any) => {
        this.sizeCrossword = this.getSizeCrossword(data)
      },
      (error: any) => {
        console.error(error);
      }
    );


    this.questionsInput = this.crosswordService.getQuestionsArray();
    this.observableQuestion = this.crosswordService.getQuestionsData();
    this.observableQuestion.subscribe(
      (data: any) => {
        console.log('Тут 3 ', data);
      },
      (error: any) => {
        console.error(error);
      }
    );






  }


  ngOnChanges(_changes: any): void {
    // this.sizeCrossword = this.getSizeCrossword(this.crosswordInput);
  }

  getSizeCrossword(crosswordInput: any) {
    return {
      xSize: crosswordInput.length === 0 ? 0 : crosswordInput[0].length,
      ySize: crosswordInput.length
    };
  }

  public sizeCrossword: ISizeCrossword = {
    xSize: 0,
    ySize: 0
  };



}
