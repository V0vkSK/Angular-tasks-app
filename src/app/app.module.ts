import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './components/no-found/no-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './pizza/pages/nav-bar/nav-bar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calc', component: CalculatorComponent },
  { path: '**', component: NoFoundComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    HomeComponent,
    NoFoundComponent,
    FooterComponent,
    NavBarComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
