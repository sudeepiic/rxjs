import "./style.css";

import { map, range, tap } from "rxjs";

// rxjs

const observable = range(0, 5);

// tap: use it to log observable streams

observable
  .pipe(
    tap((x) => console.log("before:", x)),
    map((x) => x * 2),
    tap((x) => console.log("after:", x))
  )
  .subscribe();
