import { render, Component } from './lib/preact.module.js';
import { html } from './dc.js';
import Home from './screens/main.js';
import Rooms from './screens/rooms.js';
import Staff from './screens/staff.js';
import Events from './screens/events.js';
import Maps from './screens/maps.js';
import Directions from './screens/directions.js';
import ALIASES from './aliases.js';

const SCREENS = { home: Home, rooms: Rooms, staff: Staff, events: Events, maps: Maps, directions: Directions };
const IDLE = 60;          // seconds without a touch before the countdown
const WARN = 15;          // countdown length
const TOUR = ['3-305', '2-desk', '1-104', '2-251', '4-RD', '3-342', '1-127', '2-201', '4-400D', '1-120', '2-LL', '1-100E'];
const TOUR_STEP = 11;     // seconds per stop

function parseHash() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  const route = SCREENS[parts[0]] ? parts[0] : 'home';
  let dest = route === 'directions' && parts[1] ? decodeURIComponent(parts[1]) : null;
  if (dest && ALIASES[dest]) dest = ALIASES[dest];      // a link shared before the October 2026 maps
  return { route, dest };
}

function storedKiosk() {
  const q = new URLSearchParams(location.search).get('kiosk');
  if (q === '1' || q === '2') return Number(q);
  try { return localStorage.getItem('abernethy-kiosk') === '1' ? 1 : 2; } catch (e) { return 2; }
}

function Countdown({ seconds, onKeep }) {
  const pct = Math.round((seconds / WARN) * 100);
  return html`
    <div style="position: absolute; inset: 0; background: rgba(15,16,18,0.62); display: flex; align-items: center; justify-content: center; z-index: 40">
      <div role="alertdialog" aria-labelledby="timeout-title" style="width: 760px; box-sizing: border-box; background: #FFFFFF; border-radius: 28px; padding: 52px 56px 48px; display: flex; flex-direction: column; align-items: center; gap: 24px; text-align: center; box-shadow: 0 24px 60px rgba(15,16,18,0.35)">
        <div style=${`position: relative; width: 168px; height: 168px; border-radius: 999px; background: conic-gradient(#D42121 0 ${pct}%, #E9DED3 ${pct}% 100%); display: flex; align-items: center; justify-content: center`}>
          <div style="width: 136px; height: 136px; border-radius: 999px; background: #FFFFFF; display: flex; flex-direction: column; align-items: center; justify-content: center">
            <div style="font-size: 64px; font-weight: 800; line-height: 1">${seconds}</div>
            <div style="font-size: 16px; font-weight: 700; color: #6A6869; letter-spacing: 0.08em; text-transform: uppercase">seconds</div>
          </div>
        </div>
        <h2 id="timeout-title" style="margin: 0; font-family: 'Libre Caslon Text', Georgia, serif; font-weight: 400; font-size: 46px; line-height: 1.1">Still exploring?</h2>
        <p style="margin: 0; font-size: 24px; line-height: 1.45; color: #4A484A">This screen will return to the welcome page soon so it's ready for the next person.</p>
        <div style="display: flex; gap: 16px; width: 100%; margin-top: 8px">
          <button type="button" onClick=${onKeep} style="flex: 1; height: 80px; border-radius: 999px; border: 0; background: #D42121; color: #FFFFFF; font-size: 26px; font-weight: 800">Keep exploring</button>
          <a href="#/home" style="flex: 1; height: 80px; box-sizing: border-box; border-radius: 999px; border: 2px solid #0F1012; color: #0F1012; display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 800">Start over</a>
        </div>
      </div>
    </div>`;
}

function About({ onClose }) {
  return html`
    <div class="scrim" role="dialog" aria-modal="true" aria-labelledby="about-title" onClick=${(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div class="about">
        <h2 id="about-title">About this prototype</h2>
        <p>A concept for the welcome touchscreens planned for the Level 1 and Level 2 entrances of the George Lawrence Abernethy Library at Davidson College. It is a design prototype, not the finished kiosk, and not an official library website.</p>
        <h3>Try it</h3>
        <ul>
          <li>Tap through Rooms, Staff Directory, Events and Maps, as you would on the 43″ screen.</li>
          <li>On Maps, pick a place and tap <strong>Show me the way</strong>. Directions draws your route in 3D and reads it out step by step.</li>
          <li>Switch between <strong>Elevator</strong> and <strong>Stairs</strong> for routes to another floor, and between the Level 1 and Level 2 kiosks at the top of this page.</li>
          <li><strong>Tour</strong> plays a series of routes on its own, the way an idle kiosk might.</li>
        </ul>
        <h3>What's real and what's a sample</h3>
        <ul>
          <li>Floor maps and routes come from the library's October 2026 furniture plans. Routes keep to right angles, stay at least 3 feet off walls, and change floors by the elevators (step-free) or the main stair.</li>
          <li>Library events are real programs from the library's LibCal calendar, placed into an opening-week sample. CTL and Level 4 events, hours and room availability are samples.</li>
          <li>Still to confirm with the library: exactly where the two kiosks stand and which way they face, and where the Connections Desk sits. Doors aren't in the drawings, so a route ends at the nearest open edge of a room, or at the entrance of the suite a room sits in.</li>
        </ul>
        <h3>Feedback</h3>
        <p>Ideas and corrections are welcome: JD Mills, Technology & Innovation, <a href="mailto:jdmills@davidson.edu">jdmills@davidson.edu</a>.</p>
        <button type="button" class="close" onClick=${onClose}>Close</button>
      </div>
    </div>`;
}

class App extends Component {
  constructor() {
    super();
    this.state = { ...parseHash(), kiosk: storedKiosk(), scale: 0.5, idle: 0, tour: false, tourAt: 0, about: false };
  }
  componentDidMount() {
    this.onHash = () => this.setState({ ...parseHash(), idle: 0 });
    this.onResize = () => this.fit();
    this.onAct = (e) => {
      if (this.state.tour && e && e.target && e.target.closest && e.target.closest('.screen')) this.setState({ tour: false });
      if (this.state.idle) this.setState({ idle: 0 });
    };
    window.addEventListener('hashchange', this.onHash);
    window.addEventListener('resize', this.onResize);
    ['pointerdown', 'keydown', 'wheel'].forEach((ev) => window.addEventListener(ev, this.onAct, { passive: true }));
    this.timer = setInterval(() => this.second(), 1000);
    this.fit();
  }
  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHash);
    window.removeEventListener('resize', this.onResize);
    ['pointerdown', 'keydown', 'wheel'].forEach((ev) => window.removeEventListener(ev, this.onAct));
    clearInterval(this.timer);
  }
  fit() {
    const bar = 64, pad = 24 + 20;
    const s = Math.min((window.innerWidth - pad) / 1920, (window.innerHeight - bar - pad) / 1080);
    this.setState({ scale: Math.max(0.12, Math.min(s, 1.5)) });
  }
  second() {
    const s = this.state;
    if (s.tour) {
      const at = s.tourAt + 1;
      if (at % TOUR_STEP === 0) this.go(TOUR[(at / TOUR_STEP) % TOUR.length]);
      this.setState({ tourAt: at });
      return;
    }
    if (s.route === 'home' || s.about) return;
    const idle = s.idle + 1;
    if (idle >= IDLE + WARN) {
      this.setState({ idle: 0 });
      location.hash = '#/home';
      return;
    }
    this.setState({ idle });
  }
  go(id) {
    location.hash = '#/directions/' + encodeURIComponent(id);
  }
  setKiosk(k) {
    try { localStorage.setItem('abernethy-kiosk', String(k)); } catch (e) { /* private window: fine */ }
    const url = new URL(location.href);
    url.searchParams.set('kiosk', String(k));
    history.replaceState(null, '', url.pathname + url.search + url.hash);
    this.setState({ kiosk: k });
  }
  toggleTour() {
    if (this.state.tour) { this.setState({ tour: false }); return; }
    this.setState({ tour: true, tourAt: 0, idle: 0 });
    this.go(TOUR[0]);
  }
  render() {
    const s = this.state;
    const Scr = SCREENS[s.route];
    const kioskProp = s.kiosk === 1 ? 'Level 1 entrance' : 'Level 2 entrance';
    const w = Math.round(1920 * s.scale), h = Math.round(1080 * s.scale);
    const warn = !s.tour && s.idle >= IDLE ? IDLE + WARN - s.idle : 0;
    return html`
      <header class="topbar">
        <div class="brand">
          <img src="assets/logo_horizontal_white.svg" alt="Davidson College" />
          <span class="name">Abernethy Library welcome kiosk</span>
          <span class="badge">Prototype</span>
        </div>
        <div class="controls">
          <div class="seg" role="group" aria-label="Which kiosk">
            <button type="button" aria-pressed=${s.kiosk === 1 ? 'true' : 'false'} onClick=${() => this.setKiosk(1)}>Level 1<span class="hide-sm"> kiosk</span></button>
            <button type="button" aria-pressed=${s.kiosk === 2 ? 'true' : 'false'} onClick=${() => this.setKiosk(2)}>Level 2<span class="hide-sm"> kiosk</span></button>
          </div>
          <button type="button" class="tbtn" aria-pressed=${s.tour ? 'true' : 'false'} onClick=${() => this.toggleTour()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${s.tour ? html`<path d="M6 5h4v14H6zM14 5h4v14h-4z"></path>` : html`<path d="M7 4.5v15l12-7.5z"></path>`}</svg>
            ${s.tour ? 'Stop tour' : 'Tour'}
          </button>
          <button type="button" class="tbtn" onClick=${() => this.setState({ about: true })}>About</button>
        </div>
      </header>
      <main class="stage">
        <p class="hint">Best on a laptop or big screen. On a phone, turn it sideways.</p>
        <div class="bezel">
          <div class="screen" style=${`width:${w}px;height:${h}px`}>
            <div class="kiosk" style=${`transform:scale(${s.scale})`}>
              <${Scr} key=${s.route + '-' + s.kiosk} kiosk=${kioskProp} dest=${s.dest} onPick=${(id) => this.go(id)} />
              ${warn > 0 ? html`<${Countdown} seconds=${warn} onKeep=${() => this.setState({ idle: 0 })} />` : null}
            </div>
          </div>
        </div>
      </main>
      ${s.about ? html`<${About} onClose=${() => this.setState({ about: false })} />` : null}
    `;
  }
}

render(html`<${App} />`, document.getElementById('app'));
