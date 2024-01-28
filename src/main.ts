import "./style.css";

import { first, fromEvent, map, range, take, takeWhile } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const observable = fromEvent<MouseEvent>(document, "click");

// takeWhile: emits while true
observable
  .pipe(
    map((event) => ({ x: event.clientX, y: event.clientY })),
    takeWhile(({ x, y }) => x > 200 && y > 33, true)
  )
  .subscribe(observer);
