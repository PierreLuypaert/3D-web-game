import {
    trigger,
    animate,
    transition,
    style,
    query,
    animateChild,
    group,
    state,
  } from '@angular/animations';
  
  
  export const slideInAnimation =
    trigger('routeAnimations', [
      transition('WelcomePage <=> DashboardPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ]),
        query(':enter', [
          style({ transform: 'translateY(-100px)', opacity: 0})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
              animate('550ms ease', style({ opacity : 0 , transform: 'translateY(-100px)' }))
          ]),
          query(':enter', [
              animate('550ms 300ms ease', style({ opacity : 1 , transform : 'translateY(0px)' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      
    ]);
  /*
    export const simpleFadeAnimation =  trigger('simpleFadeAnimation', [
      transition('childPage <=> ochildPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ]),
        query(':enter', [
          style({ opacity: 0})
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
              animate('550ms ease', style({ opacity : 0 }))
          ]),
          query(':enter', [
              animate('550ms 300ms ease', style({ opacity : 1  }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
    ]);*/
  