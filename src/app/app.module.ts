import { HttpClientModule } from '@angular/common/http';
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
import { PizzasComponent } from './pages/pizza-shop/pizzas/pizzas.component';
import { PizzaItemComponent } from './pages/pizza-shop/pizza-item/pizza-item.component';
import { BiscuitComponent } from './components/biscuit/biscuit.component';
import { DrawerComponent } from './pages/pizza-shop/drawer/drawer.component';
import { SearchComponent } from './pages/pizza-shop/search/search.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calc', component: CalculatorComponent },
  { path: 'biscuit', component: BiscuitComponent },
  { path: 'pizzas', component: PizzasComponent },
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
    PizzasComponent,
    PizzaItemComponent,
    BiscuitComponent,
    DrawerComponent,
    SearchComponent,


  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
