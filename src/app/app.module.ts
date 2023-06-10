import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
