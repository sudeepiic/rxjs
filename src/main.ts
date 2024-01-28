import "./style.css";

import {
  distinctUntilChanged,
  first,
  fromEvent,
  interval,
  map,
  of,
  range,
  take,
  takeUntil,
  takeWhile,
} from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const of$ = of(
  1,
  2,
  3,
  4,
  4,
  2,
  4,
  3,
  3,
  4,
  4,
  2,
  3,
  3,
  1,
  2,
  23,
  6,
  6,
  6,
  63,
  34,
  234,
  234
);

// distinctUntilChanged: emits distinct sequential values
of$.pipe(distinctUntilChanged()).subscribe(observer);
