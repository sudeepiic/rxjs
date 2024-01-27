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

// map & filter to create a scroll progress bar
const scrollbar = document.querySelector<HTMLElement>(".scrollbar")!;
const scrollPercent = (event: any) => {
  const { scrollTop, scrollHeight, clientHeight } = event;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

const scroll$ = fromEvent(document, "scroll");
const scrollPercent$ = scroll$.pipe(
  map(({ target }) => scrollPercent((target! as any).documentElement))
);

scrollPercent$.subscribe((percent) => (scrollbar.style.width = percent + "%"));
