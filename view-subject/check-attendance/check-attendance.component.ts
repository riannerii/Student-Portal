import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-attendance',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './check-attendance.component.html',
  styleUrl: './check-attendance.component.css'
})
export class CheckAttendanceComponent {
  colors = ['white', 'green', 'orange']; // Colors to cycle through
  clickCounts: { [key: string]: number } = {}; // Track click counts for each cell

  handleClick(idnum: number, day:number, status:number) {
    // console.log (idnum, day);
    status ++;
    if (status > 2) status=0;

    this.students[idnum].attendance[day].status=status;

    // console.log (this.students[0].attendance[day].status, this.students[1].attendance[day].status); 
    console.log (this.students[idnum].attendance[day].status); 
  }

  students = [
    { id: 1, name: 'Ofiaza III, Mario Miko', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0},
      {day: 6, status: 0}
    ]},
    { id: 2, name: 'Lozada, Glenson', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0},
      {day: 6, status: 0}
    ]},
    { id: 3, name: 'Subido, Arjay', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0},
      {day: 6, status: 0}
    ]},
    { id: 4, name: 'Manaois, Jhonnel', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0},
      {day: 6, status: 0}
    ]},
    { id: 5, name: 'Collano, Dionece', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0},
      {day: 6, status: 0}
    ] },
    // Add more students as needed
  ];
}
