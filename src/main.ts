import "./style.css";

import {
  fromEvent,
  filter,
  map,
  of,
  reduce,
  range,
  interval,
  take,
  scan,
  from,
} from "rxjs";

// rxjs
const observer = {
  next: (val: any) => console.log(val),
  error: (val: any) => console.error(val),
  complete: () => {
    console.table("completed");
  },
};
const user = [
  { name: "syd", login: false, age: 20 },
  { name: "syd", login: false, age: 20 },
  { name: "syd", login: false, age: 20 },
  { name: "syd", login: true, age: 20 },
];
// scan operator: just like reduce but it emit accumulated values everytime the a new value is emitted from an observable
const obs$ = from(user);

const added$ = obs$.pipe(
  scan((accumulator, crv) => {
    return { ...accumulator, ...crv };
  }, {})
);
const loginStatus$ = added$.pipe(map((crv: any) => crv.login));

loginStatus$.subscribe(observer);
