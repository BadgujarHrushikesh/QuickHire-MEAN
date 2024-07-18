import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): string {

    const date = new Date(value)

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const daySuffix = this.getDaySuffix(day);

    return `${day}${daySuffix} ${month}, ${year}`;
  }

  private getDaySuffix(day: number): string {
    if (day > 3 && day < 21) return 'th'; // Exceptions for 11th, 12th, 13th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
  

}
