import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  list = ['text', null, 123, '145', false, 'aa', 'bb'];

  getType(val) {
    console.log("Function call ", typeof val);
   return typeof val;
  }

  someStuff1() {
    console.log('Clicked on button 1');
  }

    someStuff2() {
    console.log('Clicked on button 2');
  }

}
