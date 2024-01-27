import "./style.css";

import { range } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log("current value:", val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// Range: just like of() but for ranges
const observable = range(1, 200);
observable.subscribe(observer);
