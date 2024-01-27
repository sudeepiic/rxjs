import "./style.css";

import { interval, timer } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// timer + interval operators: just like setInterval but for async and timer which is a smarter version of interval(needs two values)
const observable = timer(0, 2000);
observable.subscribe(observer);
