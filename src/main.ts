import "./style.css";

import { from } from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log("response", val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};

// from operator: just like of() but smarter, can recognize arrays, strings, fetch() and iterable until completion
const observable = from(fetch("api.github.com/users/sapeol"));
observable.subscribe(observer);
