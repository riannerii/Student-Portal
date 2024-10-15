import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../../../connect.service';

@Component({
  selector: 'app-view-attendance-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-attendance-report.component.html',
  styleUrl: './view-attendance-report.component.css'
})

export class ViewAttendanceReportComponent implements OnInit {
  classInfo: any;
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  today = new Date();

  constructor(
    private klase: ConnectService, 
    private aroute: ActivatedRoute){
      
    }

  ngOnInit(): void {
    console.log("CHECK ATTENDANCE") 
    const cid = this.aroute.snapshot.parent?.paramMap.get('cid')
      this.getClassInfo(cid);
      this.getClassAttendance(cid);
  }

  getClassInfo(cid:any){
    this.klase.getClassInfo(cid).subscribe((result: any) => {
      this.classInfo = result;
      console.log(this.classInfo);
    })
  } 

  getClassAttendance(cid:any) {
    this.klase.getClassAttendance(cid).subscribe((result: any) => {
      this.classInfo = result;
      console.warn(this.classInfo);
      }) 
  }

  colors = ['white', 'green', 'orange']; // Colors to cycle through
 
  handleClick(idnum: number, day:number, status:number) { 
    console.log (idnum, status);
    status ++;
    if (status > 2) status=0;

    this.students[idnum].attendance[day].status=status;

    // console.log (this.students[0].attendance[day].status, this.students[1].attendance[day].status); 
    // console.log (this.students[idnum].attendance[day].status); 
  }

  getCurrentDate(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric' 
    };
    return date.toLocaleDateString(undefined, options);
  }

  
  
  students = [
    { id: 1, name: 'Ofiaza III, Mario Miko', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0}
    ]},
    { id: 2, name: 'Lozada, Glenson', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0}
    ]},
    { id: 3, name: 'Subido, Arjay', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0}
    ]},
    { id: 4, name: 'Manaois, Jhonnel', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0}
    ]},
    { id: 5, name: 'Collano, Dionece', attendance:[
      {day: 1, status: 0},
      {day: 2, status: 0},
      {day: 3, status: 0},
      {day: 4, status: 0},
      {day: 5, status: 0}
    ] },
    // Add more students as needed
  ];

}
