import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  selectedHouse = '';

  houses = [
    { value: '', name: 'All Houses' },
    { value: 'Gryffindor', name: 'Gryffindor' },
    { value: 'Slytherin', name: 'Slytherin' },
    { value: 'Hufflepuff', name: 'Hufflepuff' },
    { value: 'Ravenclaw', name: 'Ravenclaw' }
  ];

  onHouseChange(event: MatSelectChange): void {
    console.log('Filter changed to:', event.value);
    this.selectedHouse = event.value;
    this.houseSelected.emit(this.selectedHouse);
  }
}
