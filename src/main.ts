import "./style.css";

import { fromEvent, map, sampleTime } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const input$ = fromEvent(document, "click");

// sampleTime: takes a sample of a source obs$
input$
  .pipe(
    sampleTime(1000),
    map((event: any) => {
      return { x: event.clientX, y: event.clientY };
    })
  )
  .subscribe(observer);
