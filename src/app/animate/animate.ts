import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';


export const flyIn = trigger('flyIn', [
  state('in', style({transform: 'translate(0)'})), // 默认平移0
  transition('void => *', [ // 进场动画
    animate(1000, keyframes([
      style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
      style({opacity: 1, transform: 'translateX(-90%)', offset: 0.1}),
      style({opacity: 1, transform: 'translateX(-80%)', offset: 0.2}),
      style({opacity: 1, transform: 'translateX(-70%)', offset: 0.3}),
      style({opacity: 1, transform: 'translateX(-60%)', offset: 0.4}),
      style({opacity: 1, transform: 'translateX(-50%)', offset: 0.5}),
      style({opacity: 1, transform: 'translateX(-40%)', offset: 0.6}),
      style({opacity: 1, transform: 'translateX(-30%)', offset: 0.7}),
      style({opacity: 1, transform: 'translateX(-20%)', offset: 0.8}),
      style({opacity: 1, transform: 'translateX(-10%)', offset: 0.9}),
      style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
    ]))
  ]),
  transition('* => void', [ // 离场动画
    animate(1000, keyframes([
      style({opacity: 1, transform: 'translateX(0)', offset: 0}),
      style({opacity: 1, transform: 'translateX(-10%)', offset: 0.1}),
      style({opacity: 1, transform: 'translateX(-20%)', offset: 0.2}),
      style({opacity: 1, transform: 'translateX(-30%)', offset: 0.3}),
      style({opacity: 1, transform: 'translateX(-40%)', offset: 0.4}),
      style({opacity: 1, transform: 'translateX(-50%)', offset: 0.5}),
      style({opacity: 1, transform: 'translateX(-60%)', offset: 0.6}),
      style({opacity: 1, transform: 'translateX(-70%)', offset: 0.7}),
      style({opacity: 1, transform: 'translateX(-80%)', offset: 0.8}),
      style({opacity: 1, transform: 'translateX(-90%)', offset: 0.9}),
      style({opacity: 0, transform: 'translateX(-100%)', offset: 1.0})
    ]))
  ])
]);

export const flyInOut = trigger('flyInOut', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)'}),
    animate(0)
  ]),
  transition('* => void', [
    animate(3000, style({transform: 'translateX(100%)'}))
  ])
]);


export const dodge = trigger('dodge', [
  animate(1000, keyframes([
    style({opacity: 1, transform: 'translateX(0)', offset: 0}),
    style({opacity: 1, transform: 'translateX(-10%)', offset: 0.1}),
    style({opacity: 1, transform: 'translateX(-20%)', offset: 0.2}),
    style({opacity: 1, transform: 'translateX(-30%)', offset: 0.3}),
    style({opacity: 1, transform: 'translateX(-40%)', offset: 0.4}),
    style({opacity: 1, transform: 'translateX(-50%)', offset: 0.5}),
    style({opacity: 1, transform: 'translateX(-60%)', offset: 0.6}),
    style({opacity: 1, transform: 'translateX(-70%)', offset: 0.7}),
    style({opacity: 1, transform: 'translateX(-80%)', offset: 0.8}),
    style({opacity: 1, transform: 'translateX(-90%)', offset: 0.9}),
    style({opacity: 0, transform: 'translateX(-100%)', offset: 1.0})
  ]))
]);

export const fade = trigger('fade', [
  state('in', style({opacity: '1' })),
  state('out', style({opacity: '0' })),
  transition('in => out',  animate('200ms ease-in')),
  transition('out => in',  animate('0ms ease-in'))
]);


