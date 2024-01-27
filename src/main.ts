import "./style.css";

import { map, of, range } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// timer + interval operators: just like setInterval but for async and timer which is a smarter version of interval(needs two values)
const observable = range(0, 20);
observable.pipe(map((x) => x * 12)).subscribe(observer);
