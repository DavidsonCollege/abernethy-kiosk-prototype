// Tiny bridge so each kiosk screen keeps the same shape it has on the design canvas:
// a class with state and renderVals(), plus an htm template that reads those values.
import { h, Component } from './lib/preact.module.js';
import htm from './lib/htm.module.js';

export const html = htm.bind(h);

export class DCLogic extends Component {
  render() {
    return this.template(this.renderVals());
  }
}
