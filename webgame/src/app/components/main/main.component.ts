import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from '../route-animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class MainComponent implements OnInit {

  constructor(private contexts: ChildrenOutletContexts) {  }

  ngOnInit(): void {
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  
}
