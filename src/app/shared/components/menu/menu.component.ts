import { identifierName } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { Tab } from '../../../infrastructure/types/model';
import { NgForOf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  activeTabId: string = 'dashboard';
  router = inject(Router);

  tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { id: 'buses', label: 'Buses', icon: 'directions_bus', route: '/bus/list' },
    { id: 'hotels', label: 'Hotels', icon: 'hotel', route: '/hotels/list' },
    { id: 'taxi', label: 'Taxi', icon: 'taxi_icone', route: '/taxi/list' },
    { id: 'settings', label: 'Settings', icon: 'settings', route: '/settings' },
  ];

  selectTab(tabId: string): void {
    this.activeTabId = tabId;
    const route = this.tabs.find((tab) => tab.id === this.activeTabId)?.route;
    if (route) {
      this.router.navigate([route]);
    }
  }

  getActiveTab(): Tab | undefined {
    return this.tabs.find((tab) => tab.id === this.activeTabId);
  }
}
