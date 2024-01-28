import "./style.css";

import {
  first,
  fromEvent,
  interval,
  map,
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

const mouseClicks$ = fromEvent<MouseEvent>(document, "click");
const interval$ = interval(1000);
// takeUntil: emits while another observable that is provided to it has not emited any values
interval$.pipe(takeUntil(mouseClicks$)).subscribe(observer);
