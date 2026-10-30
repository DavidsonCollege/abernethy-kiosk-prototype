import { html, DCLogic } from '../dc.js';

class Screen extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { filter: 'all', sel: 1 };
  }
  renderVals() {
    const SRC = {
      lib: { src: 'Library · LibCal', dot: '#D42121' },
      ctl: { src: 'CTL', dot: '#294878' },
      l4: { src: 'Level 4 · College calendar', dot: '#9F8B76' }
    };
    // Library entries: real recurring programs from LibCal (davidson.libcal.com, calendar 7393), shown in opening week.
    // Their rooms in the new building are not set yet. CTL and Level 4 entries are still samples.
    const EV = [
      { day: 'Today', dayLong: 'Today, Tue Aug 31', time: '4:30 – 6:00 PM', title: '[Level 4 event title]', where: 'Event Space · Level 4', k: 'l4', blurb: '[Description from the College calendar listing.]' },
      { day: 'Today', dayLong: 'Today, Tue Aug 31', time: '7:00 – 8:00 PM', title: 'Silent Book Club', where: '[Room in the new building TBD]', k: 'lib', blurb: 'An hour of quiet reading together. Bring whatever you are reading, in any format. Tea and hot cocoa are on the library.' },
      { day: 'Today', dayLong: 'Today, Tue Aug 31', time: '8:00 – 10:00 PM', title: 'Drop-in tutoring: Math, Science & Economics', where: 'Open Tutoring · Level 2', k: 'ctl', blurb: 'Free peer tutoring, no appointment needed.' },
      { day: 'Today', dayLong: 'Today, Tue Aug 31', time: '8:00 – 10:00 PM', title: 'Writing Center drop-in hours', where: 'Center for Teaching & Learning · Level 2', k: 'ctl', blurb: 'Bring a draft at any stage, in any subject.' },
      { day: 'Wednesday, September 1', dayLong: 'Wed Sep 1', time: '12:00 – 1:00 PM', title: 'Faculty lunch: teaching with digital tools', where: 'CTL Classroom 222 · Level 2', k: 'ctl', blurb: 'A conversation hosted by the CTL and the Scholars Studio.' },
      { day: 'Wednesday, September 1', dayLong: 'Wed Sep 1', time: '4:00 – 5:00 PM', title: 'Library Book Bike Pop-Up', where: '[Pop-up spot posted on LibCal]', k: 'lib', blurb: 'Browse a hand-picked pop-up collection and check books out on the spot. Download the Meescan app first so you can borrow.' },
      { day: 'Thursday, September 2', dayLong: 'Thu Sep 2', time: '6:00 – 8:00 PM', title: 'Puzzle Competition', where: '[Room in the new building TBD] · registration required', k: 'lib', blurb: 'Teams race to finish a 500-piece puzzle, and the first team done takes home a prize package. Team spots are limited, so register on LibCal.' },
      { day: 'Thursday, September 2', dayLong: 'Thu Sep 2', time: '6:00 – 8:00 PM', title: '[Level 4 event title]', where: 'Café seating · Level 4', k: 'l4', blurb: '[Description from the College calendar listing.]' }
    ];
    const f = this.state.filter;
    const filters = [['all', 'All events', '#0F1012'], ['lib', 'Library', '#D42121'], ['ctl', 'CTL', '#294878'], ['l4', 'Level 4', '#9F8B76']].map(([k, label, dot]) => ({
      label, dot,
      bg: f === k ? '#0F1012' : '#FFFFFF',
      fg: f === k ? '#FFFFFF' : '#0F1012',
      bd: f === k ? '#0F1012' : '#B0ABAB',
      pick: () => this.setState({ filter: k })
    }));
    let lastDay = '';
    const rows = EV.map((e, i) => ({ ...e, i })).filter(e => f === 'all' || e.k === f).map(e => {
      const head = e.day !== lastDay;
      lastDay = e.day;
      return { ...e, ...SRC[e.k], head, bd: e.i === this.state.sel ? '#D42121' : '#FFFFFF', pick: () => this.setState({ sel: e.i }) };
    });
    const s = EV[this.state.sel] || EV[0];
    return { filters, rows, sel: { ...s, ...SRC[s.k] } };
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
      <h1 style="margin: 0; font-family: 'Libre Caslon Text', Georgia, serif; font-weight: 400; font-size: 54px; line-height: 1">Events</h1>
      <div style="font-size: 20px; color: #4A484A">What's happening in the Library, the CTL and on Level 4</div>
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

  <main style="flex: 1; min-height: 0; box-sizing: border-box; padding: 28px 64px 32px; display: grid; grid-template-columns: minmax(0, 1fr) 560px; gap: 40px">

    <section style="display: flex; flex-direction: column; gap: 20px; min-height: 0">
      <div style="display: flex; align-items: center; gap: 12px">
        ${(v.filters || []).map((f, $index) => html`
          <button type="button" onClick=${f.pick} style="height: 60px; padding: 0 24px; border-radius: 999px; border: 2px solid ${f.bd}; background: ${f.bg}; color: ${f.fg}; font-size: 21px; font-weight: 700; display: flex; align-items: center; gap: 10px">
            <span style="width: 14px; height: 14px; border-radius: 999px; background: ${f.dot}; border: 2px solid #FFFFFF"></span>${f.label}
          </button>
        `)}
      </div>

      <div style="flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding-right: 6px">
        ${(v.rows || []).map((e, $index) => html`
          ${(e.head) ? html`
            <div style="font-size: 16px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #6A6869; padding: 8px 4px 2px">${e.day}</div>
          ` : null}
          <button type="button" onClick=${e.pick} style="text-align: left; min-height: 78px; box-sizing: border-box; padding: 12px 22px; border-radius: 14px; border: 3px solid ${e.bd}; background: #FFFFFF; color: #0F1012; display: grid; grid-template-columns: 210px minmax(0, 1fr) 190px; align-items: center; gap: 20px">
            <span style="font-size: 20px; font-weight: 700">${e.time}</span>
            <span style="display: flex; flex-direction: column; gap: 3px; min-width: 0">
              <span style="font-size: 22px; font-weight: 700; line-height: 1.2">${e.title}</span>
              <span style="font-size: 17px; color: #4A484A">${e.where}</span>
            </span>
            <span style="justify-self: end; display: inline-flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: #F9F5F2; border: 1px solid #D4CFCE"><span style="width: 12px; height: 12px; border-radius: 999px; background: ${e.dot}"></span>${e.src}</span>
          </button>
        `)}
      </div>
    </section>

    <aside style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 22px; padding: 32px; display: flex; flex-direction: column; gap: 18px; min-height: 0">
      <div style="display: inline-flex; align-self: flex-start; align-items: center; gap: 8px; font-size: 16px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: #F9F5F2; border: 1px solid #D4CFCE"><span style="width: 12px; height: 12px; border-radius: 999px; background: ${v.sel.dot}"></span>${v.sel.src}</div>
      <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 40px; line-height: 1.12">${v.sel.title}</div>
      <div style="display: flex; flex-direction: column; gap: 6px; font-size: 22px">
        <div style="font-weight: 700">${v.sel.dayLong} · ${v.sel.time}</div>
        <div style="color: #4A484A">${v.sel.where}</div>
      </div>
      <div style="font-size: 19px; line-height: 1.45; color: #4A484A">${v.sel.blurb}</div>
      <a href="#/directions" style="height: 64px; border-radius: 999px; background: #0F1012; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 22px; font-weight: 700">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>
        Show me the way
      </a>
      <div style="margin-top: auto; display: flex; align-items: center; gap: 22px; padding: 20px; border-radius: 16px; background: #F9F5F2">
        <img src="assets/qr_libcal.svg" alt="QR code for the library events calendar on LibCal" style="width: 150px; height: 150px; display: block" />
        <div style="display: flex; flex-direction: column; gap: 8px">
          <div style="font-size: 24px; font-weight: 800; line-height: 1.15">Explore the full calendar</div>
          <div style="font-size: 17px; line-height: 1.4; color: #4A484A">davidson.libcal.com · register for events and add them to your calendar.</div>
        </div>
      </div>
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
