import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LoaderComponent,
    HomeComponent
  ]
})
export class CoreModule { }
