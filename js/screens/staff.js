import { html, DCLogic } from '../dc.js';

class Screen extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { tab: 'help' };
  }
  renderVals() {
    const tab = this.state.tab;
    const tabs = [['help', 'Get help'], ['lib', 'Library staff'], ['ctl', 'Center for Teaching & Learning']].map(([k, label]) => ({
      label,
      selected: tab === k ? 'true' : 'false',
      bg: tab === k ? '#0F1012' : '#FFFFFF',
      fg: tab === k ? '#FFFFFF' : '#0F1012',
      bd: tab === k ? '#0F1012' : '#B0ABAB',
      pick: () => this.setState({ tab: k })
    }));
    const leadership = { name: 'Library leadership', where: 'Level 3 · Library administration', people: [
      { n: 'Lisa Forrest', t: 'Leland M. Park Director of the Library' },
      { n: 'Liz Faubert', t: 'Library Operations & Business Manager' },
      { n: 'Jacob Heil', t: 'Asst. Director, Instruction, Research & Digital Scholarship' },
      { n: 'Ashley Mills', t: 'Asst. Director, Learner Engagement & Access Services' },
      { n: 'James Simon', t: 'Asst. Director, Collections & Discovery' },
      { n: 'Sara Swanson', t: 'Asst. Director, Archives & Special Collections' }
    ] };
    const asc = { name: 'Archives & Special Collections', where: 'Level 1 · ASC offices', people: [
      { n: 'Rosa de Jong', t: 'Justice, Equality, and Community Archivist' },
      { n: 'Molly Kunkel', t: 'Archivist for College Records & Collections Curation' },
      { n: 'Hadiya Lee', t: 'Access and Processing Archivist' }
    ] };
    const irds = { name: 'Instruction, Research & Digital Scholarship', where: 'Level 2 · Engaged Research & Learning', people: [
      { n: 'Tiffany Camp Johnson', t: 'Research Librarian for Digital Scholarship' },
      { n: 'Leah Duncan', t: 'Digital Humanities Librarian' },
      { n: 'Cara Evanson', t: 'Research and First Year Experience Librarian' },
      { n: 'Mohala Kaliebe', t: 'Teaching, Learning, and Research Librarian' },
      { n: 'Brian Powell', t: 'Scholars Studio Manager' },
      { n: 'Holly White', t: 'Instructional Designer' }
    ] };
    const leas = { name: 'Learner Engagement & Access Services', where: 'Level 2 · Connections Desk', people: [
      { n: 'Sydney Adams', t: 'Outreach and Engagement Librarian' },
      { n: 'Adam Barton', t: 'Library Systems and Digital Services Specialist' },
      { n: 'Michael Chapin', t: 'Community Engagement & Access Services Manager' },
      { n: 'Ben Morgan', t: 'Library Systems Analyst' }
    ] };
    const rcs = { name: 'Research Collections Strategies', where: 'Level 3 · Staff offices', people: [
      { n: 'Kelly Denzer', t: 'Collections Strategy & E-Resources Librarian' },
      { n: 'Joe Gutekanst', t: 'Interlibrary Loan Coordinator' },
      { n: 'David Heinz', t: 'Library Annex Manager' },
      { n: 'Jason Radcliffe', t: 'Collections Assistant' },
      { n: 'Maria Reilova', t: 'Acquisitions and Metadata Specialist' },
      { n: 'Alice Sloop', t: 'Cataloging & Acquisitions Assistant' }
    ] };
    return {
      tabs,
      isHelp: tab === 'help', isLib: tab === 'lib', isCtl: tab === 'ctl',
      goLib: () => this.setState({ tab: 'lib' }),
      goCtl: () => this.setState({ tab: 'ctl' }),
      libCols: [{ depts: [leadership, asc] }, { depts: [irds, leas] }, { depts: [rcs] }],
      ctlPrograms: [
        { name: 'Writing Center', what: 'Help at any stage of a writing project, in any subject.', lead: 'Rebeca Fernandez, Director' },
        { name: 'Speaking Center', what: 'Practice presentations, speeches and class discussions.', lead: 'Sara Baugh, Director' },
        { name: 'Math, Science & Economics Center', what: 'Drop-in and appointment tutoring for quantitative courses.', lead: 'Andrea Duhon, Director' },
        { name: 'Data CATS', what: 'Consulting, analytics and tutoring for data work.', lead: 'Pete Benbow, Director' },
        { name: 'Multilingual Support', what: 'English writing support for students from diverse language backgrounds.', lead: 'Fangzhi He' },
        { name: 'Peer Academic Coaching', what: 'Study strategies, time management and planning with a peer coach.', lead: 'Through the CTL' }
      ],
      ctlStaff: [
        { n: 'Mark Barsoum', t: 'Director, John Crosland Jr. Center for Teaching & Learning' },
        { n: 'Lauren Smith', t: 'Program Coordinator' },
        { n: 'Ann Fletcher', t: 'Program Specialist' }
      ]
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
      <h1 style="margin: 0; font-family: 'Libre Caslon Text', Georgia, serif; font-weight: 400; font-size: 54px; line-height: 1">Staff Directory</h1>
      <div style="font-size: 20px; color: #4A484A">Library and Center for Teaching & Learning staff, appointments and tutoring</div>
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

  <main style="flex: 1; min-height: 0; box-sizing: border-box; padding: 28px 64px 32px; display: flex; flex-direction: column; gap: 24px">
    <div role="tablist" aria-label="Directory sections" style="display: flex; gap: 12px">
      ${(v.tabs || []).map((t, $index) => html`
        <button type="button" role="tab" aria-selected=${t.selected} onClick=${t.pick} style="height: 64px; padding: 0 30px; border-radius: 999px; border: 2px solid ${t.bd}; background: ${t.bg}; color: ${t.fg}; font-size: 22px; font-weight: 700">${t.label}</button>
      `)}
    </div>

    ${(v.isHelp) ? html`
      <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 22px">

        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 26px 28px; display: flex; gap: 22px">
          <div style="flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 0">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 32px; line-height: 1.1">Research help</div>
            <div style="font-size: 19px; line-height: 1.4; color: #4A484A">Book a one-on-one consultation with a research librarian for sources, citations or project planning.</div>
            <a href="#/maps" style="margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #D42121"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D42121" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>Level 2 · Engaged Research & Learning</a>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <img src="assets/qr_research.svg" alt="QR code to book a research consultation" style="width: 136px; height: 136px; display: block" />
            <div style="font-size: 15px; font-weight: 700; color: #4A484A">Scan to book</div>
          </div>
        </div>

        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 26px 28px; display: flex; gap: 22px">
          <div style="flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 0">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 32px; line-height: 1.1">Digital projects</div>
            <div style="font-size: 19px; line-height: 1.4; color: #4A484A">Building a website, recording a podcast, editing audio or video? Meet with the Scholars Studio team.</div>
            <a href="#/maps" style="margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #D42121"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D42121" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>Level 2 · Scholars Studio</a>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <img src="assets/qr_help.svg" alt="QR code for digital project assistance appointments" style="width: 136px; height: 136px; display: block" />
            <div style="font-size: 15px; font-weight: 700; color: #4A484A">Scan to book</div>
          </div>
        </div>

        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 26px 28px; display: flex; gap: 22px">
          <div style="flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 0">
            <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 32px; line-height: 1.1">Tutoring</div>
            <div style="font-size: 19px; line-height: 1.4; color: #4A484A">Free peer tutoring: writing, speaking, math, science & economics, data, coaching. Drop in Sunday–Thursday, 8–10 PM.</div>
            <a href="#/maps" style="margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #D42121"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D42121" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>Level 2 · Open Tutoring (CTL)</a>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px">
            <img src="assets/qr_ctl.svg" alt="QR code to meet with a tutor at the CTL" style="width: 136px; height: 136px; display: block" />
            <div style="font-size: 15px; font-weight: 700; color: #4A484A">Scan for a tutor</div>
          </div>
        </div>

        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 26px 28px; display: flex; flex-direction: column; gap: 10px">
          <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 32px; line-height: 1.1">Archives & Special Collections</div>
          <div style="font-size: 19px; line-height: 1.4; color: #4A484A">Rare books, college history and archival collections. Visit the reading room or ask an archivist.</div>
          <a href="#/maps" style="margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #D42121"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D42121" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>Level 1 · ASC Reading Room</a>
        </div>

        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 26px 28px; display: flex; flex-direction: column; gap: 10px">
          <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 32px; line-height: 1.1">Connections Desk</div>
          <div style="font-size: 19px; line-height: 1.4; color: #4A484A">Checkout, course reserves, printing help, printed floor maps and any question at all.</div>
          <a href="#/maps" style="margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; color: #D42121"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D42121" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>Level 2 · near the main entrance</a>
        </div>

        <div style="background: #0F1012; color: #FFFFFF; border-radius: 20px; padding: 26px 28px; display: flex; flex-direction: column; gap: 14px">
          <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 32px; line-height: 1.1">Looking for someone?</div>
          <div style="font-size: 19px; line-height: 1.4; color: #D4CFCE">Browse staff by department and find their office suite on the map.</div>
          <div style="margin-top: auto; display: flex; gap: 12px">
            <button type="button" onClick=${v.goLib} style="flex: 1; height: 60px; border-radius: 999px; border: 0; background: #FFFFFF; color: #0F1012; font-size: 19px; font-weight: 700">Library staff</button>
            <button type="button" onClick=${v.goCtl} style="flex: 1; height: 60px; border-radius: 999px; border: 0; background: #FFFFFF; color: #0F1012; font-size: 19px; font-weight: 700">CTL staff</button>
          </div>
        </div>
      </div>
    ` : null}

    ${(v.isLib) ? html`
      <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; align-items: start">
        ${(v.libCols || []).map((col, $index) => html`
          <div style="display: flex; flex-direction: column; gap: 22px">
            ${(col.depts || []).map((d, $index) => html`
              <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 20px 24px; display: flex; flex-direction: column; gap: 12px">
                <div style="display: flex; flex-direction: column; gap: 8px">
                  <div style="font-size: 15px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #D42121">${d.name}</div>
                  <a href="#/maps" style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; font-size: 16px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: #F9F5F2; border: 1px solid #D4CFCE"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1012" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>${d.where}</a>
                </div>
                ${(d.people || []).map((p, $index) => html`
                  <div style="display: flex; flex-direction: column; border-top: 1px solid #E9DED3; padding-top: 8px">
                    <div style="font-size: 19px; font-weight: 700; line-height: 1.25">${p.n}</div>
                    <div style="font-size: 15px; line-height: 1.3; color: #4A484A">${p.t}</div>
                  </div>
                `)}
              </div>
            `)}
          </div>
        `)}
      </div>
    ` : null}

    ${(v.isCtl) ? html`
      <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: minmax(0, 1fr) 520px; gap: 22px">
        <div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); grid-auto-rows: min-content; gap: 18px">
          ${(v.ctlPrograms || []).map((p, $index) => html`
            <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 18px; padding: 20px 22px; display: flex; flex-direction: column; gap: 8px; min-height: 150px; box-sizing: border-box">
              <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 26px; line-height: 1.15">${p.name}</div>
              <div style="font-size: 17px; line-height: 1.35; color: #4A484A">${p.what}</div>
              <div style="margin-top: auto; font-size: 16px; font-weight: 700">${p.lead}</div>
            </div>
          `)}
        </div>
        <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 20px; padding: 26px 28px; display: flex; flex-direction: column; gap: 16px">
          <div style="font-size: 15px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #D42121">John Crosland Jr. Center for Teaching & Learning</div>
          <a href="#/maps" style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; font-size: 16px; font-weight: 700; padding: 6px 12px; border-radius: 999px; background: #F9F5F2; border: 1px solid #D4CFCE"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F1012" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.4-6.5-11a6.5 6.5 0 0 1 13 0c0 5.6-6.5 11-6.5 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>Level 2 · CTL offices</a>
          ${(v.ctlStaff || []).map((p, $index) => html`
            <div style="display: flex; flex-direction: column; border-top: 1px solid #E9DED3; padding-top: 8px">
              <div style="font-size: 20px; font-weight: 700; line-height: 1.25">${p.n}</div>
              <div style="font-size: 16px; line-height: 1.3; color: #4A484A">${p.t}</div>
            </div>
          `)}
          <div style="margin-top: auto; display: flex; align-items: center; gap: 20px; padding: 18px; border-radius: 16px; background: #F9F5F2">
            <img src="assets/qr_ctl.svg" alt="QR code to meet with a tutor" style="width: 132px; height: 132px; display: block" />
            <div style="display: flex; flex-direction: column; gap: 6px">
              <div style="font-size: 23px; font-weight: 800; line-height: 1.15">Meet with a tutor</div>
              <div style="font-size: 17px; line-height: 1.35; color: #4A484A">Request an appointment or see drop-in hours on your phone.</div>
            </div>
          </div>
        </div>
      </div>
    ` : null}
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
