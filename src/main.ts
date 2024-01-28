import "./style.css";

import {
  fromEvent,
  filter,
  map,
  of,
  reduce,
  range,
  interval,
  take,
} from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// reduce transformation operator with interval that going infinite so using a take operator to limit the amount of 'takes' we want
const obs$ = interval(100);

const added$ = obs$.pipe(
  take(10),
  reduce((x, cr) => x + cr, 0)
);

added$.subscribe(observer);
