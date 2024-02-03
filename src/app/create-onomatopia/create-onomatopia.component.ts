import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';
  @Output( ) sendOnomatopiaToParent = new EventEmitter<string>();

  createOnomatopia(): void {
    if (this.newOnomatopia) {
      this.sendOnomatopiaToParent.emit(this.newOnomatopia);
      this.newOnomatopia = '';
    }
  }
}
