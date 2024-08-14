import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink, RouterModule } from '@angular/router';


export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val)
  }
  
  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'event_available',
      label: 'My Classes',
      route: 'classes'
    },
    {
      icon: 'campaign',
      label: 'Announcements',
      route: 'announcement'
    },
    {
      icon: 'message',
      label: 'Messages',
      route: 'messages'
    },
    // {
    //   icon: 'account_circle',
    //   label: 'My Account',
    //   route: 'account'
    // },
    // {
    //   icon: 'logout',
    //   label: 'Logout',
    //   route: 'login'
    // }
  ])

  profilePicSize = computed (() => this.sideNavCollapsed() ? '32' : '100');
}
