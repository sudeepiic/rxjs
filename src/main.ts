import "./style.css";

import { fromEvent, map, auditTime } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const input$ = fromEvent(document, "click");

// auditTime: takes a sample of a source obs$ after a certain time
input$
  .pipe(
    auditTime(1000),
    map((event: any) => {
      return { x: event.clientX, y: event.clientY };
    })
  )
  .subscribe(observer);
