import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-subject',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './view-subject.component.html',
  styleUrl: './view-subject.component.css'
})
export class ViewSubjectComponent {

}
