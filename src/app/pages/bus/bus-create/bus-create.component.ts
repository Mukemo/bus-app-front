import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms';
import { SeatComponent } from '../../../shared/components/seat/seat.component';

@Component({
  selector: 'app-bus-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, SeatComponent],
  templateUrl: './bus-create.component.html',
  styleUrl: './bus-create.component.scss',
})
export class BusCreateComponent {
  fb = inject(FormBuilder);

  selectedRowIndex: number | null = null;

  selected = new Set<string>();
  busForm = this.fb.group({
    floors: this.fb.control(1),
    cols: this.fb.control(0),
    rows: this.fb.control(0),
    seats: this.fb.array([]),
  });

  get rows() {
    let arrRows = [];
    const rowsControl = this.busForm.get('rows');
    const rowsValue = rowsControl?.value || 0;
    for (let i = 0; i < rowsValue; i++) {
      arrRows.push(i);
    }
    return arrRows;
  }

  get cols() {
    let arrCols = [];
    const colsControl = this.busForm.get('cols');
    const rowsValue = colsControl?.value || 0;
    for (let i = 0; i < rowsValue; i++) {
      arrCols.push(i);
    }
    return arrCols;
  }

  onSubmit() {
    console.log(this.busForm.value);
  }

  clear() {
    this.busForm.reset({
      floors: 1,
      cols: 0,
      rows: 0,
      seats: [],
    });
    this.selected.clear();
  }

  onSelectRow(rowIndex: number) {
    console.log('Selected Row Index:', rowIndex);
    this.selectedRowIndex = this.selectedRowIndex === rowIndex ? null : rowIndex;
    console.log('Updated Selected Row Index:', this.selectedRowIndex);
  }

  increment(control: 'rows' | 'cols', max = 6) {
    const current = this.busForm.get(control)!.value || 0;
    if (current < max) {
      this.busForm.get(control)!.setValue(current + 1);
    }
  }

  decrement(control: 'rows' | 'cols', min = 1) {
    const current = this.busForm.get(control)!.value || 0;
    if (current > min) {
      this.busForm.get(control)!.setValue(current - 1);
    }
  }

  key(r: number, c: number) {
    return `${r}-${c}`;
  }

  toggle(r: number, c: number) {
    const k = this.key(r, c);
    this.selected.has(k) ? this.selected.delete(k) : this.selected.add(k);
  }

  isSelected(r: number, c: number) {
    return this.selected.has(this.key(r, c));
  }

  setSeat() {}
  setWc() {}
  setEmpty() {}
  setDriver() {}
}
