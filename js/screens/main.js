import { html, DCLogic } from '../dc.js';

class Screen extends DCLogic {
  renderVals() {
    const kiosk = this.props.kiosk ?? 'Level 2 entrance';
    const l1 = kiosk === 'Level 1 entrance';
    return {
      accent: this.props.accent ?? '#D42121',
      kioskLevel: l1 ? 'Level 1' : 'Level 2',
      helpText: l1
        ? 'Printed floor maps and in-person help are one floor up at the Connections Desk, Level 2.'
        : 'Printed floor maps and in-person help are at the Connections Desk, just ahead.'
    };
  }
}

Screen.prototype.template = function (v) {
  return html`<div style="width: 1920px; height: 1080px; box-sizing: border-box; background: #F9F5F2; color: #0F1012; font-family: 'Inter', Helvetica, Arial, sans-serif; display: flex; flex-direction: column; overflow: hidden">

  <header style="height: 132px; box-sizing: border-box; padding: 0 64px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #D4CFCE; background: #FFFFFF">
    <img src="assets/logo_horizontal.svg" alt="Davidson College" style="height: 58px; width: auto; display: block" />
    <div style="display: flex; align-items: center; gap: 40px">
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px">
        <div style="font-size: 22px; font-weight: 600; color: #4A484A">Tuesday, August 31, 2027</div>
        <div style="font-size: 18px; color: #6A6869">You are on <strong style="color: #0F1012">${v.kioskLevel}</strong></div>
      </div>
      <div style="font-size: 56px; font-weight: 700; letter-spacing: -0.02em; line-height: 1">10:42<span style="font-size: 26px; font-weight: 600; margin-left: 6px">AM</span></div>
    </div>
  </header>

  <main style="flex: 1; box-sizing: border-box; padding: 48px 64px 40px; display: grid; grid-template-columns: 780px minmax(0, 1fr); gap: 64px">

    <section style="display: flex; flex-direction: column; justify-content: space-between; min-height: 0">
      <div style="display: flex; flex-direction: column; gap: 20px">
        <div style="font-size: 18px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: #D42121">Davidson College Library</div>
        <h1 style="margin: 0; font-family: 'Libre Caslon Text', Georgia, serif; font-weight: 400; line-height: 1.04">
          <span style="display: block; font-style: italic; font-size: 44px; color: #4A484A; margin-bottom: 8px">Welcome to the</span>
          <span style="display: block; font-size: 76px; letter-spacing: -0.01em">George Lawrence Abernethy Library</span>
        </h1>
        <p style="margin: 0; font-size: 24px; line-height: 1.45; color: #4A484A; max-width: 720px">Home of the Davidson College Library and the John Crosland Jr. Center for Teaching & Learning.</p>
      </div>

      <div style="display: flex; align-items: center; gap: 28px; background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 16px; padding: 24px 28px">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#D42121" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path></svg>
        <div style="display: flex; flex-direction: column; gap: 4px">
          <div style="font-size: 18px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #6A6869">Public hours today</div>
          <div style="font-size: 40px; font-weight: 700; letter-spacing: -0.01em; white-space: nowrap">7:30 AM – 10:00 PM</div>
        </div>
        <div style="margin-left: auto; font-size: 19px; line-height: 1.4; color: #4A484A; max-width: 250px">Students, faculty and staff: 24/7 access with your CatCard</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 20px">
        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 10px">
          <img src="assets/qr_library.svg" alt="QR code for the library website" style="width: 116px; height: 116px; display: block" />
          <div style="font-size: 17px; font-weight: 700; text-align: center">Library website</div>
        </div>
        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 10px">
          <img src="assets/qr_ctl.svg" alt="QR code for the Center for Teaching and Learning website" style="width: 116px; height: 116px; display: block" />
          <div style="font-size: 17px; font-weight: 700; text-align: center">CTL website</div>
        </div>
        <div style="border: 2px dashed #B0ABAB; border-radius: 16px; padding: 14px; display: flex; flex-direction: column; align-items: center; gap: 10px; position: relative">
          <div style="position: absolute; top: -13px; right: 12px; background: #9F8B76; color: #FFFFFF; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px">Option</div>
          <div style="width: 116px; height: 116px; box-sizing: border-box; border: 2px solid #D4CFCE; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 600; color: #6A6869; text-align: center">QR<br />link TBD</div>
          <div style="font-size: 17px; font-weight: 700; text-align: center">Café hours & menu</div>
        </div>
        <div style="border: 2px dashed #B0ABAB; border-radius: 16px; padding: 14px; display: flex; flex-direction: column; align-items: center; gap: 10px; position: relative">
          <div style="position: absolute; top: -13px; right: 12px; background: #9F8B76; color: #FFFFFF; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 9px; border-radius: 999px">Option</div>
          <div style="width: 116px; height: 116px; box-sizing: border-box; border: 2px solid #D4CFCE; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 600; color: #6A6869; text-align: center">QR<br />link TBD</div>
          <div style="font-size: 17px; font-weight: 700; text-align: center">Friends of the Library</div>
        </div>
      </div>
    </section>

    <nav aria-label="Main menu" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 24px">
      <a href="#/rooms" style="background: ${v.accent}; color: #FFFFFF; border-radius: 22px; padding: 40px 40px 36px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 2px 0 rgba(15,16,18,0.12)">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"></path><path d="M3 21h18"></path><path d="M13.5 12h.01"></path></svg>
        <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 10px">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 62px; line-height: 1">Rooms</div>
            <div style="font-size: 22px; line-height: 1.35; opacity: 0.95">See what's open now and book a study room from your phone</div>
          </div>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </div>
      </a>
      <a href="#/staff" style="background: ${v.accent}; color: #FFFFFF; border-radius: 22px; padding: 40px 40px 36px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 2px 0 rgba(15,16,18,0.12)">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20a6.5 6.5 0 0 1 13 0"></path><circle cx="17" cy="9" r="2.5"></circle><path d="M16 14.1a5 5 0 0 1 5.5 4.9"></path></svg>
        <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 10px">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 62px; line-height: 1">Staff Directory</div>
            <div style="font-size: 22px; line-height: 1.35; opacity: 0.95">Library & CTL staff, appointments and tutoring</div>
          </div>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </div>
      </a>
      <a href="#/events" style="background: ${v.accent}; color: #FFFFFF; border-radius: 22px; padding: 40px 40px 36px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 2px 0 rgba(15,16,18,0.12)">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16.5" rx="2"></rect><path d="M3 9.5h18M8 2.5v4M16 2.5v4"></path><path d="M7.5 13.5h3v3h-3z"></path></svg>
        <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 10px">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 62px; line-height: 1">Events</div>
            <div style="font-size: 22px; line-height: 1.35; opacity: 0.95">Today in the Library, the CTL and on Level 4</div>
          </div>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </div>
      </a>
      <a href="#/maps" style="background: ${v.accent}; color: #FFFFFF; border-radius: 22px; padding: 40px 40px 36px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 2px 0 rgba(15,16,18,0.12)">
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 4 3 6.5V20l6-2.5 6 2.5 6-2.5V4l-6 2.5z"></path><path d="M9 4v13.5M15 6.5V20"></path></svg>
        <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 16px">
          <div style="display: flex; flex-direction: column; gap: 10px">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 62px; line-height: 1">Maps</div>
            <div style="font-size: 22px; line-height: 1.35; opacity: 0.95">Floor plans and step-by-step directions to any room</div>
          </div>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="flex: none"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </div>
      </a>
    </nav>
  </main>

  <footer style="height: 96px; box-sizing: border-box; padding: 0 64px; background: #D42121; color: #FFFFFF; display: flex; align-items: center; justify-content: space-between; gap: 32px">
    <div style="display: flex; align-items: center; gap: 18px; font-size: 25px; font-weight: 600">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path></svg>
      <span><strong style="font-weight: 800">Need help?</strong> ${v.helpText}</span>
    </div>
    <div style="font-size: 23px; font-weight: 500; white-space: nowrap"><strong style="font-weight: 800">Email</strong> library@davidson.edu  ·  <strong style="font-weight: 800">Call</strong> 704-894-2331</div>
  </footer>
</div>`;
};

export default Screen;
