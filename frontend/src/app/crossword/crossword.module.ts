import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrosswordCellComponent } from './crossword-cell/crossword-cell.component';
import { CrosswordComponent } from './crossword/crossword.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskitoModule } from '@maskito/angular';

@NgModule({
  declarations: [
    CrosswordCellComponent,
    CrosswordComponent
  ],
  imports: [
    CommonModule,
    TuiInputModule,
    ReactiveFormsModule,
    FormsModule,
    MaskitoModule,
  ],
  exports: [
    CrosswordComponent,
    CrosswordCellComponent
  ]
})
export class CrosswordModule { }
