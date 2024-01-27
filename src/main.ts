import "./style.css";

import { fromEvent, filter, map } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// filter to filter out with constraints

const keyPress$ = fromEvent<KeyboardEvent>(document, "keypress");
const keyCodes$ = keyPress$.pipe(map((x) => x.code));
const enter$ = keyCodes$.pipe(filter((x) => x === "Enter"));
enter$.subscribe(observer);
