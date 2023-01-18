
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

export class CalculatorComponent implements OnInit {

  firstNumber!: any;  // Multiplied
  secondNumber!: any; // Multiplier
  a!: number;            // Root variable
  answer!: number;
  isAlert: boolean = false; // Alert window visibility
  isRootAlert: boolean = false; // root value is incorrect message

  ngOnInit(): void {
    // Greetings to my friend (I hope that;)
    console.log('Hi, man!!! I am waiting for your new tasks)');
    this.firstNumber = +sessionStorage['firstNumber'];
    this.secondNumber = +sessionStorage['secondNumber']
    this.a = +sessionStorage['a'];

  }
  // The absolute value of number method
  abs(a: number) {
    return a > 0 ? a : -a;

  }

  // Multiply two integers numbers

  multiply(a: number, b: number) {
    sessionStorage['firstNumber'] = this.firstNumber;
    sessionStorage['secondNumber'] = this.secondNumber;

    this.answer = 0;
    if (b == 0) {
      this.answer = 0;
    } else {
      for (let i = 1; i <= this.abs(a); i++) {
        this.answer = this.answer + this.abs(b);
      }
      this.answer = ((a > 0 && b > 0) || (a < 0 && b < 0)) ? this.answer : -this.answer;
    }
  }

  // Divide two integers numbers

  division(a: number, b: number) {
    sessionStorage['firstNumber'] = this.firstNumber;
    sessionStorage['secondNumber'] = this.secondNumber;
    this.answer = 0;
    if (b == 0) {
      this.isRootAlert = false;
      this.isAlert = true;
      setTimeout(() => this.isAlert = false, 3000);
    } else {
      for (let i = this.abs(a) - this.abs(b); i >= 0; i = i - this.abs(b)) {
        this.answer++
      }
      this.answer = ((a > 0 && b > 0) || (a < 0 && b < 0)) ? this.answer : -this.answer;
    }
  }

  // Square root
  sqrt(numb: number) {
    sessionStorage['a'] = this.a;
    if (numb == 0) {
      this.answer = 0;
      return
    } else if (numb < 0) {
      this.isRootAlert = true;
      this.answer = 0;
      this.isAlert = true;
      setTimeout(() => this.isAlert = false, 3000);
      return
    }
    // finding approximate integer answer for first iteration
    let oddNumbers = 1;
    let aprox = 0;
    let num = numb;
    for (aprox; numb > 0; aprox++) {
      numb = numb - oddNumbers;
      if (numb < 0) { break };
      oddNumbers = oddNumbers + 2;
    }
    // iterations for finding square root
    let error = 1;
    let variant = 0.5 * (aprox + (num / aprox));
    let prevVariant = variant;
    while (error > 0.0001) {                     // measure error
      variant = 0.5 * (variant + num / variant);
      error = prevVariant - variant;
      prevVariant = variant;
    }
    this.answer = variant
  }

  // Clear buttons in inputs
  clearBtn1() {
    this.firstNumber = undefined;
    sessionStorage['firstNumber'] = undefined;
  }

  clearBtn2() {
    this.secondNumber = undefined;
    sessionStorage['secondNumber'] = undefined;
  }
  clearBtn3() {
    this.a = 0;
    sessionStorage['a'] = undefined;
  }
}




