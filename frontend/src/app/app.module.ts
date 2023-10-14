import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaskitoModule } from '@maskito/angular';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { CrosswordModule } from './crossword/crossword.module';
import { HttpClientModule } from '@angular/common/http';
import { CrosswordService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiInputModule,
    ReactiveFormsModule,
    MaskitoModule,
    TuiButtonModule,
    CrosswordModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }, CrosswordService],
  bootstrap: [AppComponent]
})

export class AppModule { }
