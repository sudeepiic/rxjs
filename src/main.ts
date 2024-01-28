import "./style.css";

import { debounceTime, fromEvent, map } from "rxjs";

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

// debounceTime: debouces until a certain time has passed that is proved in the argument
inputClick$
  .pipe(
    debounceTime(500),
    map((event: any) => event.target?.value)
  )
  .subscribe(observer);
