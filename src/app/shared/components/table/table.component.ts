import { Component, effect, input, output, signal } from '@angular/core';
import { Action, Column } from '../../../infrastructure/types/model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> {
  columns = input<Column<T>[]>([]);
  data = input<T[]>([]);
  itemClickEmit = output<{ action: Action<T>; rowData: T }>();

  actionClick(action: Action<T>, rowData: T) {
    this.itemClickEmit.emit({ action, rowData });
  }

  sortedData = signal<T[]>([]);

  constructor() {
    effect(
      () => {
        this.sortedData.set(this.data());
      },
      { allowSignalWrites: true }
    );
  }

  sort(column: Column<T>) {
    console.log('Entrance sorting', column);
    if (!column.sortable || !column.field) {
      console.log('---1 ----Entrance sorting', column);
      return;
    }

    this.columns().forEach((col) => {
      console.log('---2 ----Entrance sorting', column);
      if (col !== column && col.sortDirection !== undefined) col.sortDirection = '';
    });

    column.sortDirection = column.sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...this.sortedData()].sort((a, b) => {
      console.log('---3 ----Entrance sorting', column);
      const aVal = a[column.field as keyof T];
      const bVal = b[column.field as keyof T];
      console.log('aVal ---->', aVal);
      console.log('bVal ---->', bVal);

      return column.sortDirection === 'asc' ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
    });
    this.sortedData.set(sorted);
  }

  readonly logEffect = effect(() => console.log(this.sortedData()));
  search() {}
}
