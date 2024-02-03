import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onomatope-project';
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string) {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
