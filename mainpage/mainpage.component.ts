import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatBadgeModule } from '@angular/material/badge'
import { MatMenuModule } from '@angular/material/menu'
import { SidenavComponent } from "../sidenav/sidenav.component";
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, SidenavComponent, MatBadgeModule, MatMenuModule, MatListModule],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

  collapsed = signal(false)

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px');  
}
