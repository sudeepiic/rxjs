import "./style.css";

import { fromEvent, of } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log("current value:", val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// for creation observables from synchronous values, it iterates through without flattening anything
const observable = of([2], 3, 231, 12, 31, 23, 1, 23, 1, 24, 412);
observable.subscribe(observer);
