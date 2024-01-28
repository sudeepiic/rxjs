import "./style.css";

import {
  debounce,
  asyncScheduler,
  distinctUntilChanged,
  fromEvent,
  interval,
  map,
  throttle,
  throttleTime,
} from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const input = document.querySelector("input")!;

const inputClick$ = fromEvent<HTMLInputElement>(input, "keyup");

// throttleTime: throttles stream until time passed, you can scheduler with config or leading or trailing
inputClick$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: false, trailing: true }),
    map((event: any) => event.target?.value),
    distinctUntilChanged()
  )
  .subscribe(observer);
