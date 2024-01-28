import "./style.css";

import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  interval,
  map,
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

// debounce: needs and function that is an obs$ to support dynamic deboucing
inputClick$
  .pipe(
    debounce(() => interval(500)),
    map((event: any) => event.target?.value),
    distinctUntilChanged()
  )
  .subscribe(observer);
