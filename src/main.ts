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
  scan,
  from,
} from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// streams
const counter$ = interval(1000);
const btn = document.querySelector("#counter")!;
counter$
  .pipe(
    map(() => -1),
    scan((acc, crv) => acc + crv, 6),
    filter((val) => val >= 0)
  )
  .subscribe({
    next: (val) => {
      if (val) {
        btn.innerHTML = val.toString();
      } else {
        btn.innerHTML = "Time's up";
      }
    },
    complete() {
      btn.innerHTML = "Time's up";
    },
  });

console.log(`// streams
const counter$ = interval(1000);
const btn = document.querySelector("#counter")!;
counter$
  .pipe(
    map(() => -1),
    scan((acc, crv) => acc + crv, 20),
    filter((val) => val >= 0)
  )
  .subscribe({
    next: (val) => {
      btn.innerHTML = val.toString();
      return val;
    },
  });`);
