import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';
import { ISizeCrossword, TCell } from '../_models/crossword.models';


interface ICell {
  "row": number,
  "column": number,
  "value": string|number
}

@Component({
  selector: 'crossword-cell',
  templateUrl: './crossword-cell.component.html',
  styleUrls: ['./crossword-cell.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrosswordCellComponent {

  constructor(private cdr: ChangeDetectorRef,
  ) { };
  @Input() public cell: ICell;

  @Output() public outputCell = new EventEmitter<ICell>() ;

  arrayCells: ICell[] = [];

  public readonly mask: MaskitoOptions = {
    mask: [/[а-я]/i],
  };


  // public inputChange(cell:ICell):void {
  //   // this.array.push()
  //   console.log('Клетка ' + JSON.stringify(cell));
  //   this.arrayCells.push(cell);
  // }


  public inputSentToParent(cell:ICell):void {
    this.outputCell.emit(cell);
  } 



}
