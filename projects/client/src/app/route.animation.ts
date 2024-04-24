import {
  query,
  stagger,
  transition,
  style,
  trigger,
  animate,
  group
} from '@angular/animations';

export let routeAnimation = trigger('routeAnimation', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translate3d(0, 10%, 0)'
    }),
    group([
      animate(
        '400ms ease-in-out',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      animate(
        '400ms 150ms ease-in-out',
        style({
          opacity: 1
        })
      )
    ])
  ])
]);

export let slideUpAnimation = trigger('slideUpAnimation', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)'
    }),
    group([
      animate(
        '300ms ease-in-out',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      animate(
        '300ms 150ms ease-in-out',
        style({
          opacity: 1
        })
      )
    ])
  ])
]);

export let fadeInAnimation = trigger('fadeInAnimation', [
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(
      '0ms 350ms ease-in-out',
      style({
        opacity: 1
      })
    )
  ])
]);

export const slideInAnimation = trigger('slideInAnimation', [
  transition('void => *', [
    style({
      opacity: 0,
      transform: 'translate3d(100%, 0, 0)'
    }),
    group([
      animate(
        '0ms 200ms ease-in-out',
        style({
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        })
      )
    ])
  ])
]);

export let listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0, transform: 'translateY(10px)' }), {
      optional: true
    }),

    query(
      ':enter',
      stagger('50ms', [
        animate(
          '200ms 500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ]),
      { optional: true }
    ),

    query(':enter', [animate(100, style('*'))], { optional: true })
  ])
]);
