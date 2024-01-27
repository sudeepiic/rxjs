import "./style.css";

import { fromEvent } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => (val.key == "q" ? observer.complete() : console.log(val)),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

const observable = fromEvent(document, "keypress");
const subscription = observable.subscribe(observer);
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
