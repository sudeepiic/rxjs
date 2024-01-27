import "./style.css";

import { map, pluck, fromEvent } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

//  map is a transformation operator --
// pluck can be also used to do the same thing

const keyPress$ = fromEvent<KeyboardEvent>(document, "keypress");
const keyCode$ = keyPress$.pipe(map((x) => x.code));
const keyCodeWithPluck$ = keyPress$.pipe(pluck("code"));

keyCodeWithPluck$.subscribe(observer);
