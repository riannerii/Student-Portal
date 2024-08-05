import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

  collapsed = signal(false)

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');  
}
