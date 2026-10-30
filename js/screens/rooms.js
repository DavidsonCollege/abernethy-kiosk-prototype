import { html, DCLogic } from '../dc.js';

class Screen extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { sel: '200E', avail: false, size: 'any', level: 'all' };
  }
  renderVals() {
    const s = this.state;
    const ROOMS = [
      { num: '200B', kind: 'Study / Tutor Room', seats: '4–6', size: 'mid', level: 2, display: '65″ touch display', zoom: true, open: true, until: '1:00 PM', blocks: [[8, 9.5], [13, 15]] },
      { num: '200C', kind: 'Study / Tutor Room', seats: '4–6', size: 'mid', level: 2, display: '65″ touch display', zoom: true, open: false, until: '11:30 AM', blocks: [[9, 11.5], [14, 16]] },
      { num: '200D', kind: 'Study / Tutor Room', seats: '2–4', size: 'small', level: 2, display: '65″ touch display', zoom: true, open: true, until: '4:00 PM', blocks: [[16, 18]] },
      { num: '200E', kind: 'Study / Tutor Room', seats: '8–10', size: 'large', level: 2, display: '75″ touch display', zoom: true, open: true, until: '12:00 PM', blocks: [[8.5, 10], [12, 14], [19, 21]] },
      { num: '204', kind: 'Study / Tutor Room', seats: '2–4', size: 'small', level: 2, display: '65″ touch display', zoom: true, open: false, until: '12:15 PM', blocks: [[10, 12.25], [15, 16]] },
      { num: '245', kind: 'Project Room', seats: '2–4', size: 'small', level: 2, display: '65″ touch display', zoom: true, open: true, until: '3:00 PM', blocks: [[15, 17]] },
      { num: '247', kind: 'Project Room', seats: '2–4', size: 'small', level: 2, display: '65″ touch display', zoom: true, open: true, until: '2:00 PM', blocks: [[14, 15.5]] },
      { num: '252', kind: 'Project Room', seats: '8', size: 'large', level: 2, display: '65″ display', zoom: true, open: false, until: '11:00 AM', blocks: [[9.5, 11], [13, 14]] },
      { num: '300B', kind: 'Study Room', seats: '14–16', size: 'large', level: 3, display: '86″ touch display', zoom: true, open: false, until: '12:00 PM', blocks: [[10, 12], [18, 20]] },
      { num: '345', kind: 'Study Room', seats: '4–6', size: 'mid', level: 3, display: '65″ touch display', zoom: true, open: true, until: '5:00 PM', blocks: [[17, 19]] },
      { num: '350', kind: 'Study Room', seats: '16–20', size: 'large', level: 3, display: '86″ touch display', zoom: true, open: true, until: '3:00 PM', blocks: [[15, 17.5]] },
      { num: '352', kind: 'Study Room', seats: '4–6', size: 'mid', level: 3, display: 'No display', zoom: false, open: true, until: '9:00 PM', blocks: [[21, 22]] },
      { num: '354', kind: 'Study / Tutor Room', seats: '4–6', size: 'mid', level: 3, display: '65″ touch display', zoom: true, open: false, until: '1:30 PM', blocks: [[9, 13.5]] }
    ];
    const PXH = 496 / 14;
    const chip = (on) => ({ bg: on ? '#0F1012' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0F1012', bd: on ? '#0F1012' : '#B0ABAB' });
    const shown = ROOMS.filter(r => (!s.avail || r.open) && (s.size === 'any' || r.size === s.size) && (s.level === 'all' || String(r.level) === s.level));
    const rooms = shown.map(r => ({
      ...r,
      status: r.open ? 'Open until ' + r.until : 'In use until ' + r.until,
      pillBg: r.open ? '#294878' : '#D4CFCE',
      pillFg: r.open ? '#FFFFFF' : '#0F1012',
      bd: r.num === s.sel ? '#D42121' : '#FFFFFF',
      pick: () => this.setState({ sel: r.num })
    }));
    const selRoom = ROOMS.find(r => r.num === s.sel) || ROOMS[3];
    const sel = {
      ...selRoom,
      statusLong: selRoom.open ? 'Open now · free until ' + selRoom.until : 'In use · free at ' + selRoom.until,
      statusColor: selRoom.open ? '#294878' : '#4A484A',
      blocks: selRoom.blocks.map(b => ({ left: Math.round((b[0] - 8) * PXH), width: Math.round((b[1] - b[0]) * PXH) }))
    };
    const sizes = [['any', 'Any'], ['small', '2–4'], ['mid', '4–6'], ['large', '8+']].map(([k, label]) => ({ label, ...chip(s.size === k), pick: () => this.setState({ size: k }) }));
    const levels = [['all', 'All levels'], ['2', 'Level 2'], ['3', 'Level 3']].map(([k, label]) => ({ label, ...chip(s.level === k), pick: () => this.setState({ level: k }) }));
    return {
      rooms, sel, sizes, levels,
      none: rooms.length === 0,
      availCount: ROOMS.filter(r => r.open).length,
      totalCount: ROOMS.length,
      availBg: s.avail ? '#0F1012' : '#FFFFFF',
      availFg: s.avail ? '#FFFFFF' : '#0F1012',
      availPressed: s.avail ? 'true' : 'false',
      toggleAvail: () => this.setState({ avail: !s.avail })
    };
  }
}

Screen.prototype.template = function (v) {
  return html`<div style="width: 1920px; height: 1080px; box-sizing: border-box; background: #F9F5F2; color: #0F1012; font-family: 'Inter', Helvetica, Arial, sans-serif; display: flex; flex-direction: column; overflow: hidden">

  <header style="height: 132px; box-sizing: border-box; padding: 0 64px; display: flex; align-items: center; gap: 36px; border-bottom: 1px solid #D4CFCE; background: #FFFFFF">
    <a href="#/home" style="height: 72px; box-sizing: border-box; padding: 0 30px 0 24px; border-radius: 999px; background: #0F1012; color: #FFFFFF; display: flex; align-items: center; gap: 12px; font-size: 26px; font-weight: 700">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11 12 4l9 7"></path><path d="M5.5 9.5V20h13V9.5"></path></svg>
      Home
    </a>
    <div style="display: flex; flex-direction: column; gap: 4px">
      <h1 style="margin: 0; font-family: 'Libre Caslon Text', Georgia, serif; font-weight: 400; font-size: 54px; line-height: 1">Rooms</h1>
      <div style="font-size: 20px; color: #4A484A">Find an open study room, then book it on your phone</div>
    </div>
    <div style="margin-left: auto; display: flex; align-items: center; gap: 32px">
      <img src="assets/logo_horizontal.svg" alt="Davidson College" style="height: 40px; width: auto; display: block" />
      <div style="width: 1px; height: 56px; background: #D4CFCE"></div>
      <div style="display: flex; flex-direction: column; align-items: flex-end">
        <div style="font-size: 40px; font-weight: 700; letter-spacing: -0.02em; line-height: 1">10:42<span style="font-size: 20px; margin-left: 4px">AM</span></div>
        <div style="font-size: 17px; color: #6A6869; margin-top: 4px">Tue, Aug 31</div>
      </div>
    </div>
  </header>

  <main style="flex: 1; min-height: 0; box-sizing: border-box; padding: 32px 64px; display: grid; grid-template-columns: minmax(0, 1fr) 560px; gap: 40px">

    <section style="display: flex; flex-direction: column; gap: 22px; min-height: 0">
      <div style="display: flex; align-items: center; gap: 14px; flex-wrap: wrap">
        <button type="button" onClick=${v.toggleAvail} aria-pressed=${v.availPressed} style="height: 60px; padding: 0 26px; border-radius: 999px; border: 2px solid #0F1012; background: ${v.availBg}; color: ${v.availFg}; font-size: 21px; font-weight: 700; display: flex; align-items: center; gap: 10px">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5 9.5 18 20 6.5"></path></svg>
          Available now
        </button>
        <div style="width: 1px; height: 40px; background: #D4CFCE; margin: 0 6px"></div>
        <span style="font-size: 18px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #6A6869">Seats</span>
        ${(v.sizes || []).map((c, $index) => html`
          <button type="button" onClick=${c.pick} style="height: 60px; min-width: 88px; padding: 0 22px; border-radius: 999px; border: 2px solid ${c.bd}; background: ${c.bg}; color: ${c.fg}; font-size: 21px; font-weight: 700">${c.label}</button>
        `)}
        <div style="width: 1px; height: 40px; background: #D4CFCE; margin: 0 6px"></div>
        ${(v.levels || []).map((c, $index) => html`
          <button type="button" onClick=${c.pick} style="height: 60px; padding: 0 22px; border-radius: 999px; border: 2px solid ${c.bd}; background: ${c.bg}; color: ${c.fg}; font-size: 21px; font-weight: 700">${c.label}</button>
        `)}
      </div>

      <div style="font-size: 20px; color: #4A484A"><strong style="color: #0F1012">${v.availCount} of ${v.totalCount}</strong> bookable rooms are open right now · tap a room for details</div>

      <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-content: start">
        ${(v.rooms || []).map((r, $index) => html`
          <button type="button" onClick=${r.pick} style="text-align: left; height: 112px; box-sizing: border-box; padding: 16px 20px; border-radius: 16px; border: 3px solid ${r.bd}; background: #FFFFFF; color: #0F1012; display: flex; flex-direction: column; justify-content: space-between">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; width: 100%">
              <span style="font-size: 28px; font-weight: 800; letter-spacing: -0.01em">${r.num}</span>
              <span style="font-size: 16px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: ${r.pillBg}; color: ${r.pillFg}; white-space: nowrap">${r.status}</span>
            </div>
            <div style="font-size: 18px; color: #4A484A">${r.kind} · ${r.seats} seats · Level ${r.level}</div>
          </button>
        `)}
      </div>
      ${(v.none) ? html`
        <div style="font-size: 22px; color: #4A484A; padding: 24px; border: 2px dashed #B0ABAB; border-radius: 16px">No rooms match these filters. Try clearing “Available now” or choosing a different size.</div>
      ` : null}
    </section>

    <aside style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 22px; min-height: 0">
      <div style="display: flex; align-items: baseline; gap: 16px">
        <div style="font-size: 64px; font-weight: 800; letter-spacing: -0.02em; line-height: 1">${v.sel.num}</div>
        <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 28px; line-height: 1.15">${v.sel.kind}</div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 10px">
        <span style="font-size: 18px; font-weight: 600; padding: 8px 14px; border-radius: 10px; background: #F9F5F2; border: 1px solid #D4CFCE">Level ${v.sel.level}</span>
        <span style="font-size: 18px; font-weight: 600; padding: 8px 14px; border-radius: 10px; background: #F9F5F2; border: 1px solid #D4CFCE">${v.sel.seats} seats</span>
        <span style="font-size: 18px; font-weight: 600; padding: 8px 14px; border-radius: 10px; background: #F9F5F2; border: 1px solid #D4CFCE">${v.sel.display}</span>
        ${(v.sel.zoom) ? html`
          <span style="font-size: 18px; font-weight: 600; padding: 8px 14px; border-radius: 10px; background: #F9F5F2; border: 1px solid #D4CFCE">Video conferencing</span>
        ` : null}
      </div>
      <div style="font-size: 26px; font-weight: 700; color: ${v.sel.statusColor}">${v.sel.statusLong}</div>

      <div style="display: flex; flex-direction: column; gap: 8px">
        <div style="font-size: 15px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #6A6869">Today</div>
        <div style="position: relative; height: 34px; border-radius: 8px; background: #E9DED3; overflow: hidden">
          ${(v.sel.blocks || []).map((b, $index) => html`
            <div style="position: absolute; top: 0; bottom: 0; left: ${b.left}px; width: ${b.width}px; background: #8D898A"></div>
          `)}
          <div style="position: absolute; top: 0; bottom: 0; left: 94px; width: 4px; background: #D42121"></div>
        </div>
        <div style="position: relative; height: 20px; font-size: 15px; color: #6A6869">
          <span style="position: absolute; left: 0">8 AM</span>
          <span style="position: absolute; left: 124px">12 PM</span>
          <span style="position: absolute; left: 268px">4 PM</span>
          <span style="position: absolute; left: 410px">8 PM</span>
          <span style="position: absolute; right: 0">10 PM</span>
        </div>
        <div style="display: flex; gap: 20px; font-size: 15px; color: #4A484A">
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 14px; background: #8D898A; border-radius: 3px"></span>Booked</span>
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 14px; height: 14px; background: #E9DED3; border: 1px solid #B0ABAB; border-radius: 3px"></span>Open</span>
          <span style="display: flex; align-items: center; gap: 6px"><span style="width: 4px; height: 16px; background: #D42121"></span>Now</span>
        </div>
      </div>

      <div style="margin-top: auto; display: flex; align-items: center; gap: 24px; padding: 20px; border-radius: 16px; background: #F9F5F2">
        <img src="assets/qr_reserve.svg" alt="QR code to book this room" style="width: 168px; height: 168px; display: block; border-radius: 6px" />
        <div style="display: flex; flex-direction: column; gap: 8px">
          <div style="font-size: 26px; font-weight: 800; line-height: 1.15">Scan to book on your phone</div>
          <div style="font-size: 18px; line-height: 1.4; color: #4A484A">Sign in with your Davidson account to reserve. The panel outside the room updates right away.</div>
        </div>
      </div>
      <a href="#/directions" style="height: 68px; border-radius: 999px; background: #0F1012; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 23px; font-weight: 700">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>
        Show me the way
      </a>
    </aside>
  </main>

  <footer style="height: 96px; box-sizing: border-box; padding: 0 64px; background: #D42121; color: #FFFFFF; display: flex; align-items: center; justify-content: space-between; gap: 32px">
    <div style="display: flex; align-items: center; gap: 18px; font-size: 25px; font-weight: 600">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path></svg>
      <span><strong style="font-weight: 800">Need help?</strong> Printed floor maps and in-person help are at the Connections Desk, Level 2.</span>
    </div>
    <div style="font-size: 23px; font-weight: 500; white-space: nowrap"><strong style="font-weight: 800">Email</strong> library@davidson.edu  ·  <strong style="font-weight: 800">Call</strong> 704-894-2331</div>
  </footer>
</div>`;
};

export default Screen;
