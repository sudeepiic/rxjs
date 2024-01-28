import "./style.css";

import { first, fromEvent, map, range, take } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const observable = fromEvent<MouseEvent>(document, "click");

// tap: use it to log observable streams
// first: use to take a first value that accepts the predicate
observable
  .pipe(
    map((event) => ({ x: event.clientX, y: event.clientY })),
    first(({ x }) => x > 200)
  )
  .subscribe(observer);
