import { Action } from "rxjs/internal/scheduler/Action";

import { Pizza } from "src/app/models/pizzas";

export interface State {
  ids: number[];
  pizzas: { [id: number]: Pizza },
  selected: number;
  qty: number
}
