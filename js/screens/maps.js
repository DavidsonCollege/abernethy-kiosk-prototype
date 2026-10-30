import { html, DCLogic } from '../dc.js';

class Screen extends DCLogic {
  constructor(props) {
    super(props);
    const k = (props && props.kiosk === 'Level 1 entrance') ? 1 : 2;
    this.state = { level: k, filter: 'all', sel: null };
  }
  D() {
    if (!Screen._d) Screen._d = Object.assign({"img":{"1":"assets/maps/level-1.svg","2":"assets/maps/level-2.svg","3":"assets/maps/level-3.svg","4":"assets/maps/level-4.svg"},"places":[{"id":"1-120","level":1,"name":"ASC Collection","num":"120","f":"office","d":"M305,487 L721,486 L721,414 L305,414Z","x":513,"y":450},{"id":"1-123","level":1,"name":"ASC Growth Office / Meeting Space","num":"123","f":"office","d":"M905,487 L951,487 L951,452 L905,452Z","x":928,"y":469},{"id":"1-126","level":1,"name":"ASC Office","num":"126","f":"office","d":"M951,414 L987,414 L987,366 L951,366Z","x":969,"y":390},{"id":"1-127","level":1,"name":"ASC Office","num":"127","f":"office","d":"M987,414 L1022,414 L1022,366 L987,366Z","x":1005,"y":397},{"id":"1-128","level":1,"name":"ASC Office","num":"128","f":"office","d":"M1022,366 L1022,414 L1059,413 L1059,366Z","x":1040,"y":389},{"id":"1-129","level":1,"name":"ASC Office","num":"129","f":"office","d":"M1059,366 L1059,413 L1090,414 L1095,410 L1095,366Z","x":1077,"y":388},{"id":"1-131","level":1,"name":"ASC Office","num":"131","f":"office","d":"M987,307 L1035,307 L1035,276 L987,276Z","x":1019,"y":291},{"id":"1-132","level":1,"name":"ASC Office","num":"132","f":"office","d":"M987,276 L1035,276 L1035,233 L987,233Z","x":1011,"y":255},{"id":"1-125","level":1,"name":"ASC Reading Room","num":"125","f":"key","d":"M757,414 L889,414 L889,378 L921,378 L921,339 L757,339Z","x":839,"y":376},{"id":"1-130","level":1,"name":"ASC Workroom","num":"130","f":"office","d":"M1035,233 L1035,307 L878,307 L878,339 L921,339 L921,414 L931,414 L938,397 L951,397 L951,366 L1095,366 L1095,245 L1092,237 L1090,233Z","x":1060,"y":331},{"id":"1-133","level":1,"name":"ASCC / Engaged Research & Learning Classroom","num":"133","f":"classroom","d":"M841,219 L836,219 L836,287 L841,307 L978,307 L978,299 L987,299 L987,199 L841,199Z","x":912,"y":253},{"id":"1-125A","level":1,"name":"Alcove","num":"","f":"commons","d":"","x":905,"y":400},{"id":"1-142","level":1,"name":"Archives + Justice Community Room","num":"142","f":"key","d":"M757,168 L868,168 L868,94 L866,92 L837,92 L834,95 L814,95 L810,92 L778,92 L775,94 L757,92Z","x":796,"y":131},{"id":"1-146","level":1,"name":"Commons","num":"","f":"commons","d":"","x":617,"y":143},{"id":"1-114","level":1,"name":"Letterpress Lab","num":"114","f":"key","d":"M313,168 L456,168 L456,115 L447,115 L447,97 L432,92 L392,92 L385,94 L381,92 L331,92 L325,101 L309,101 L309,107 L314,114Z","x":370,"y":131},{"id":"1-106","level":1,"name":"Library Classroom","num":"106","f":"classroom","d":"M116,164 L120,166 L150,166 L150,168 L239,168 L239,92 L123,92 L116,96Z","x":177,"y":130},{"id":"1-117","level":1,"name":"Office","num":"117","f":"office","d":"M406,276 L456,276 L456,233 L406,233Z","x":431,"y":255},{"id":"1-117A","level":1,"name":"Office Support","num":"117A","f":"office","d":"M406,307 L456,307 L456,276 L406,276Z","x":440,"y":291},{"id":"1-124","level":1,"name":"Print & Scan","num":"","f":"service","d":"M951,487 L1040,487 L1047,482 L1047,458 L1041,452 L951,452Z","x":999,"y":469},{"id":"1-121","level":1,"name":"Processing And Staging","num":"121","f":"office","d":"M721,486 L905,487 L905,414 L721,414Z","x":813,"y":450},{"id":"1-119","level":1,"name":"Registrar Classroom","num":"119","f":"classroom","d":"M456,307 L305,307 L305,414 L456,414Z","x":380,"y":360},{"id":"1-115","level":1,"name":"Registrar Seminar Room","num":"115","f":"classroom","d":"M305,233 L305,307 L406,307 L406,233Z","x":356,"y":270},{"id":"2-250","level":2,"name":"Audio Booth","num":"250","f":"study","d":"M939,288 L984,288 L984,248 L939,248Z","x":961,"y":268},{"id":"2-222","level":2,"name":"CTL Classroom / Group Tutor","num":"222","f":"classroom","d":"M222,345 L222,485 L270,485 L276,481 L287,485 L336,485 L336,345Z","x":279,"y":415},{"id":"2-212","level":2,"name":"CTL Office","num":"212","f":"office","d":"M179,239 L216,239 L222,224 L222,209 L216,206 L216,200 L179,200Z","x":200,"y":219},{"id":"2-213","level":2,"name":"CTL Office","num":"213","f":"office","d":"M179,265 L222,265 L222,243 L216,239 L179,239Z","x":200,"y":252},{"id":"2-214","level":2,"name":"CTL Office","num":"214","f":"office","d":"M179,306 L215,306 L216,293 L213,288 L216,274 L219,272 L222,265 L179,265Z","x":196,"y":284},{"id":"2-221","level":2,"name":"CTL Office","num":"221","f":"office","d":"M185,363 L185,416 L222,416 L222,363Z","x":203,"y":398},{"id":"2-220","level":2,"name":"CTL Office (large)","num":"220","f":"office","d":"M118,411 L122,414 L185,416 L185,363 L118,363Z","x":144,"y":389},{"id":"2-226","level":2,"name":"Commons","num":"","f":"commons","d":"","x":604,"y":358},{"id":"2-desk","level":2,"name":"Connections Desk","num":"","f":"service","d":"","x":536,"y":318},{"id":"2-232","level":2,"name":"ER&L Office","num":"232","f":"office","d":"M844,416 L876,416 L876,374 L844,374Z","x":860,"y":400},{"id":"2-233","level":2,"name":"ER&L Office","num":"233","f":"office","d":"M876,374 L876,416 L913,416 L913,374Z","x":895,"y":398},{"id":"2-236","level":2,"name":"ER&L Office","num":"236","f":"office","d":"M876,483 L882,482 L886,485 L913,485 L913,452 L876,452Z","x":895,"y":469},{"id":"2-238","level":2,"name":"ER&L Office","num":"238","f":"office","d":"M1002,464 L1002,485 L1036,485 L1039,481 L1041,475 L1034,459 L1010,459Z","x":1021,"y":472},{"id":"2-240","level":2,"name":"ER&L Office","num":"240","f":"office","d":"M952,374 L952,413 L959,410 L984,409 L984,374Z","x":968,"y":391},{"id":"2-241","level":2,"name":"ER&L Office","num":"241","f":"office","d":"M984,409 L991,407 L1000,411 L1019,411 L1023,409 L1023,374 L984,374Z","x":1004,"y":392},{"id":"2-242","level":2,"name":"ER&L Office","num":"242","f":"office","d":"M1023,374 L1023,409 L1027,406 L1055,406 L1059,409 L1059,374Z","x":1041,"y":390},{"id":"2-243","level":2,"name":"ER&L Office","num":"243","f":"office","d":"M1059,409 L1064,413 L1090,413 L1094,410 L1094,374 L1059,374Z","x":1077,"y":391},{"id":"2-237","level":2,"name":"Fellow Workstations","num":"237","f":"office","d":"M1002,464 L1001,464 L957,464 L959,475 L969,485 L988,485 L994,483 L1002,485Z","x":980,"y":475},{"id":"2-202","level":2,"name":"Group Tutor Room","num":"202","f":"study","d":"M118,124 L121,133 L119,143 L179,143 L179,99 L177,94 L120,94 L118,95Z","x":148,"y":118},{"id":"2-228","level":2,"name":"H.A. Art Collection Display","num":"","f":"office","d":"","x":858,"y":464},{"id":"2-239","level":2,"name":"Ideation Lounge","num":"","f":"commons","d":"","x":965,"y":342},{"id":"2-245","level":2,"name":"Ideation Lounge","num":"","f":"commons","d":"","x":1016,"y":199},{"id":"2-251","level":2,"name":"Media Production","num":"251","f":"key","d":"M939,200 L839,200 L839,288 L939,288 L939,220 L952,220Z","x":896,"y":244},{"id":"2-244","level":2,"name":"Open Project Tables","num":"","f":"commons","d":"","x":1061,"y":279},{"id":"2-200","level":2,"name":"Open Tutoring","num":"","f":"commons","d":"","x":145,"y":250},{"id":"2-234","level":2,"name":"Print / Copy","num":"","f":"service","d":"M913,438 L913,485 L969,485 L947,452 L947,438Z","x":933,"y":466},{"id":"2-246","level":2,"name":"Project Room","num":"246","f":"study","d":"M1046,158 L1087,158 L1094,154 L1094,131 L1046,131Z","x":1070,"y":144},{"id":"2-247","level":2,"name":"Project Room","num":"247","f":"study","d":"M1002,131 L997,133 L989,133 L984,131 L984,158 L1042,158 L1042,131Z","x":1013,"y":144},{"id":"2-254","level":2,"name":"Project Room","num":"254","f":"study","d":"M807,220 L839,220 L839,158 L807,158Z","x":823,"y":204},{"id":"2-255","level":2,"name":"Project Room","num":"255","f":"study","d":"M807,158 L893,158 L893,118 L807,118Z","x":850,"y":138},{"id":"2-229","level":2,"name":"Scholars Studio Touch Down","num":"","f":"commons","d":"","x":831,"y":343},{"id":"2-225","level":2,"name":"Self-service Zone","num":"","f":"service","d":"","x":349,"y":458},{"id":"2-205","level":2,"name":"Study","num":"205","f":"study","d":"M315,94 L309,105 L309,114 L313,118 L336,118 L336,94Z","x":323,"y":106},{"id":"2-206","level":2,"name":"Study","num":"206","f":"study","d":"M314,118 L314,143 L336,143 L336,118Z","x":325,"y":130},{"id":"2-207","level":2,"name":"Study","num":"207","f":"study","d":"M309,154 L309,161 L314,168 L336,168 L336,143 L314,143Z","x":323,"y":155},{"id":"2-230","level":2,"name":"Study / Growth Office","num":"230","f":"study","d":"M807,416 L844,416 L844,374 L807,374Z","x":825,"y":398},{"id":"2-201","level":2,"name":"Study / Tutor","num":"201","f":"study","d":"M118,165 L124,168 L124,172 L147,172 L147,143 L119,143Z","x":134,"y":157},{"id":"2-215","level":2,"name":"Study / Tutor","num":"215","f":"study","d":"M273,306 L273,277 L239,277 L239,288 L235,288 L230,291 L230,306Z","x":252,"y":292},{"id":"2-217","level":2,"name":"Study / Tutor","num":"217","f":"study","d":"M307,306 L336,306 L336,277 L307,277Z","x":322,"y":292},{"id":"2-218","level":2,"name":"Study / Tutor","num":"218","f":"study","d":"M307,277 L382,277 L382,239 L307,239Z","x":363,"y":258},{"id":"2-219","level":2,"name":"Study / Tutor","num":"219","f":"study","d":"M336,306 L382,306 L382,277 L336,277Z","x":368,"y":292},{"id":"2-223","level":2,"name":"Study / Tutor","num":"223","f":"study","d":"M336,381 L382,381 L382,345 L336,345Z","x":364,"y":363},{"id":"2-224","level":2,"name":"Study / Tutor","num":"224","f":"study","d":"M336,416 L382,416 L382,381 L336,381Z","x":365,"y":399},{"id":"2-231","level":2,"name":"Website Production","num":"231","f":"key","d":"M893,288 L893,306 L876,306 L862,320 L862,354 L853,363 L853,374 L913,374 L913,288Z","x":888,"y":337},{"id":"3-329","level":3,"name":"Commons","num":"","f":"commons","d":"","x":603,"y":357},{"id":"3-327","level":3,"name":"Director Asst.","num":"327","f":"office","d":"M284,424 L335,424 L335,390 L284,390Z","x":309,"y":407},{"id":"3-328","level":3,"name":"Director's Office","num":"328","f":"office","d":"M335,390 L335,424 L307,424 L307,457 L318,457 L318,487 L321,485 L360,487 L361,417 L365,417 L365,390Z","x":338,"y":447},{"id":"3-326","level":3,"name":"Meeting","num":"326","f":"key","d":"M263,457 L307,457 L307,424 L263,424Z","x":291,"y":440},{"id":"3-332","level":3,"name":"Meeting + Classroom","num":"332","f":"classroom","d":"M843,200 L843,306 L968,306 L968,200Z","x":905,"y":253},{"id":"3-332","level":3,"name":"Meeting + Classroom","num":"332","f":"classroom","d":"M926,200 L974,200 L974,168 L926,168Z","x":950,"y":184},{"id":"3-320","level":3,"name":"Meeting Room","num":"320","f":"study","d":"M335,342 L365,342 L365,306 L335,306Z","x":350,"y":326},{"id":"3-302","level":3,"name":"Office","num":"302","f":"office","d":"M182,126 L215,126 L214,123 L225,118 L225,103 L217,100 L214,92 L182,91Z","x":200,"y":108},{"id":"3-303","level":3,"name":"Office","num":"303","f":"office","d":"M182,126 L182,168 L217,168 L225,162 L225,130 L215,126Z","x":203,"y":147},{"id":"3-312","level":3,"name":"Office","num":"312","f":"office","d":"M182,200 L182,236 L217,236 L216,200Z","x":199,"y":218},{"id":"3-313","level":3,"name":"Office","num":"313","f":"office","d":"M225,236 L182,236 L182,271 L231,271 L231,253 L225,250Z","x":206,"y":253},{"id":"3-314","level":3,"name":"Office","num":"314","f":"office","d":"M182,271 L182,306 L231,306 L231,271Z","x":199,"y":289},{"id":"3-315","level":3,"name":"Office","num":"315","f":"office","d":"M182,342 L231,342 L231,306 L182,306Z","x":206,"y":324},{"id":"3-300","level":3,"name":"Open Workstations","num":"","f":"commons","d":"","x":150,"y":246},{"id":"3-330","level":3,"name":"Reading Room","num":"330","f":"key","d":"M556,409 L550,417 L527,417 L525,409 L446,409 L442,417 L361,417 L361,485 L362,483 L373,483 L378,487 L549,487 L556,481 L556,443 L595,443 L595,409Z","x":478,"y":448},{"id":"3-324","level":3,"name":"Scholarship Suite Open Meeting Space","num":"324","f":"key","d":"M231,433 L231,457 L167,457 L167,531 L179,534 L182,537 L182,546 L186,548 L214,548 L217,544 L217,537 L263,537 L263,433Z","x":208,"y":498},{"id":"3-339","level":3,"name":"Silent Reading Room","num":"339","f":"key","d":"M878,390 L878,463 L845,463 L845,487 L878,487 L891,493 L891,534 L894,537 L908,537 L912,548 L939,548 L949,537 L990,537 L997,548 L1027,548 L1031,537 L1044,537 L1044,463 L1040,457 L956,457 L956,390Z","x":935,"y":495},{"id":"3-323","level":3,"name":"Staff + Faculty Lounge","num":"","f":"commons","d":"","x":173,"y":399},{"id":"3-325","level":3,"name":"Staff + Faculty Meeting Room","num":"325","f":"study","d":"M263,457 L263,540 L269,548 L297,548 L303,541 L318,537 L318,457Z","x":291,"y":512},{"id":"3-318","level":3,"name":"Staff + Faculty Wellness","num":"318","f":"study","d":"M273,306 L273,342 L307,342 L307,306Z","x":290,"y":325},{"id":"3-301","level":3,"name":"Staff Work Area","num":"301","f":"office","d":"M116,164 L120,168 L123,168 L124,189 L167,189 L182,200 L216,200 L217,168 L182,168 L182,91 L155,91 L148,99 L118,99 L116,102Z","x":149,"y":133},{"id":"3-341","level":3,"name":"Study Nooks","num":"","f":"commons","d":"","x":1005,"y":262},{"id":"3-305","level":3,"name":"Study Room","num":"305","f":"study","d":"M318,117 L335,117 L335,93 L320,93 L318,95Z","x":326,"y":106},{"id":"3-306","level":3,"name":"Study Room","num":"306","f":"study","d":"M314,140 L317,143 L335,143 L335,117 L315,117Z","x":324,"y":130},{"id":"3-307","level":3,"name":"Study Room","num":"307","f":"study","d":"M318,168 L335,168 L335,143 L318,143Z","x":326,"y":160},{"id":"3-319","level":3,"name":"Study Room","num":"319","f":"study","d":"M307,342 L335,342 L335,306 L307,306Z","x":321,"y":328},{"id":"3-321","level":3,"name":"Study Room","num":"321","f":"study","d":"M365,236 L307,236 L307,306 L365,306Z","x":336,"y":271},{"id":"3-331","level":3,"name":"Study Room","num":"331","f":"study","d":"M808,286 L808,342 L843,342 L843,286Z","x":826,"y":324},{"id":"3-333","level":3,"name":"Study Room","num":"333","f":"study","d":"M890,342 L915,342 L915,306 L890,306Z","x":903,"y":329},{"id":"3-334","level":3,"name":"Study Room","num":"334","f":"study","d":"M915,342 L939,342 L939,306 L915,306Z","x":927,"y":330},{"id":"3-335","level":3,"name":"Study Room","num":"335","f":"study","d":"M939,306 L939,342 L986,342 L986,306Z","x":957,"y":324},{"id":"3-337","level":3,"name":"Study Room","num":"337","f":"study","d":"M808,390 L808,417 L843,417 L843,390Z","x":822,"y":404},{"id":"3-340","level":3,"name":"Study Room","num":"340","f":"study","d":"M1022,409 L1093,409 L1093,348 L1088,346 L1081,346 L1080,342 L1022,342Z","x":1057,"y":375},{"id":"3-342","level":3,"name":"Study Room","num":"342","f":"study","d":"M1022,159 L1080,159 L1092,154 L1092,134 L1087,130 L1022,130Z","x":1057,"y":144},{"id":"3-344","level":3,"name":"Study Room","num":"344","f":"study","d":"M878,168 L915,168 L915,126 L878,126Z","x":897,"y":149},{"id":"4-412","level":4,"name":"Café","num":"","f":"key","d":"","x":984,"y":376},{"id":"4-411","level":4,"name":"Café Seating","num":"","f":"commons","d":"","x":789,"y":372},{"id":"4-419","level":4,"name":"Café Support","num":"419","f":"office","d":"M954,217 L954,239 L964,250 L964,300 L968,304 L985,304 L996,293 L993,284 L993,248 L996,237 L976,220 L977,209 L962,209Z","x":977,"y":241},{"id":"4-409A","level":4,"name":"Meeting Space A","num":"409A","f":"key","d":"M305,100 L305,266 L402,266 L405,249 L421,237 L408,218 L408,191 L415,173 L439,130 L439,108 L426,104 L426,100Z","x":361,"y":157},{"id":"4-409B","level":4,"name":"Meeting Space B","num":"409B","f":"key","d":"M439,130 L415,173 L408,191 L408,218 L439,249 L557,249 L574,237 L585,218 L585,191 L581,173 L553,130 L553,105 L546,101 L453,101 L439,108Z","x":496,"y":176},{"id":"4-409C","level":4,"name":"Meeting Space C","num":"409C","f":"key","d":"M553,130 L581,173 L585,191 L585,218 L567,237 L588,266 L592,266 L601,283 L657,283 L677,266 L677,105 L662,107 L658,100 L567,100 L566,105 L557,108 L553,105Z","x":627,"y":151}],"popular":["2-desk","2-229","2-251","2-222","2-200","1-125","1-142","1-114","1-133","3-330","3-339","3-324","4-412","4-409B"],"you":{"1":[710,170],"2":[605,440]}}, { routable: {"1": ["1-106", "1-114", "1-115", "1-117", "1-117A", "1-119", "1-120", "1-121", "1-125", "1-130", "1-132", "1-133", "1-142", "1-146", "2-200", "2-201", "2-202", "2-205", "2-206", "2-207", "2-212", "2-213", "2-214", "2-215", "2-217", "2-218", "2-219", "2-220", "2-221", "2-222", "2-223", "2-224", "2-225", "2-226", "2-228", "2-229", "2-230", "2-231", "2-232", "2-233", "2-236", "2-247", "2-251", "2-254", "2-255", "2-desk", "3-300", "3-301", "3-303", "3-305", "3-306", "3-307", "3-312", "3-313", "3-314", "3-315", "3-318", "3-319", "3-320", "3-321", "3-323", "3-324", "3-325", "3-326", "3-327", "3-328", "3-329", "3-330", "3-331", "3-332", "3-333", "3-334", "3-335", "3-337", "3-339", "3-340", "3-341", "3-342", "3-344", "4-409A", "4-409B", "4-409C", "4-411", "4-412"], "2": ["1-106", "1-114", "1-115", "1-117", "1-117A", "1-119", "1-120", "1-121", "1-125", "1-130", "1-132", "1-133", "1-142", "1-146", "2-200", "2-201", "2-202", "2-205", "2-206", "2-207", "2-212", "2-213", "2-214", "2-215", "2-217", "2-218", "2-219", "2-220", "2-221", "2-222", "2-223", "2-224", "2-225", "2-226", "2-228", "2-229", "2-230", "2-231", "2-232", "2-233", "2-236", "2-247", "2-251", "2-254", "2-255", "2-desk", "3-300", "3-301", "3-303", "3-305", "3-306", "3-307", "3-312", "3-313", "3-314", "3-315", "3-318", "3-319", "3-320", "3-321", "3-323", "3-324", "3-325", "3-326", "3-327", "3-328", "3-329", "3-330", "3-331", "3-332", "3-333", "3-334", "3-335", "3-337", "3-339", "3-340", "3-341", "3-342", "3-344", "4-409A", "4-409B", "4-409C", "4-411", "4-412"]} });
    return Screen._d;
  }
  renderVals() {
    const D = this.D();
    const kiosk = (this.props.kiosk ?? 'Level 2 entrance') === 'Level 1 entrance' ? 1 : 2;
    const st = this.state;
    const lvl = st.level, flt = st.filter;
    const CAT = { study: 'Study room', commons: 'Open study space', classroom: 'Classroom', key: 'Key space', service: 'Service point', office: 'Office' };
    const sel = D.places.find((p) => p.id === st.sel) || null;
    const pick = (p) => () => this.setState({ sel: p.id, level: p.level });
    const here = D.places.filter((p) => p.level === lvl);
    const matchD = flt === 'all' ? '' : here.filter((p) => p.f === flt && p.d).map((p) => p.d).join('');
    const selD = sel && sel.level === lvl ? sel.d : '';
    const dots = flt === 'all' ? [] : here.filter((p) => p.f === flt && !p.d).map((p) => ({ l: p.x - 11, t: p.y - 11 }));
    if (sel && sel.level === lvl && !sel.d) dots.push({ l: sel.x - 11, t: sel.y - 11 });
    const targets = here.map((p) => ({ l: p.x - 24, t: p.y - 24, aria: p.name + (p.num ? ', room ' + p.num : ''), pick: pick(p) }));
    const filters = [['all', 'Everything'], ['study', 'Study rooms'], ['commons', 'Open study'], ['classroom', 'Classrooms'], ['key', 'Key spaces'], ['service', 'Services & printing'], ['office', 'Offices']].map(([k, label]) => ({
      label, pressed: flt === k ? 'true' : 'false',
      bg: flt === k ? '#0F1012' : '#FFFFFF', fg: flt === k ? '#FFFFFF' : '#0F1012', bd: flt === k ? '#0F1012' : '#B0ABAB',
      pick: () => this.setState({ filter: k, sel: null })
    }));
    const levelBtns = [4, 3, 2, 1].map((n) => ({
      n, pressed: lvl === n ? 'true' : 'false', here: n === kiosk,
      aria: 'Level ' + n + (n === kiosk ? ', you are here' : ''),
      bg: lvl === n ? '#0F1012' : '#FFFFFF', fg: lvl === n ? '#FFFFFF' : '#0F1012', bd: lvl === n ? '#0F1012' : '#B0ABAB',
      pick: () => this.setState({ level: n })
    }));
    const src = flt === 'all' ? D.popular.map((id) => D.places.find((p) => p.id === id)).filter(Boolean)
      : D.places.filter((p) => p.f === flt);
    const list = src.map((p) => ({
      level: p.level, name: p.name + (p.num ? ' ' + p.num : ''),
      meta: 'Level ' + p.level + ' · ' + CAT[p.f],
      bd: sel && sel.id === p.id ? '#D42121' : '#FFFFFF',
      pick: pick(p)
    }));
    const NAMES = { 1: 'Archives, classrooms & the Letterpress Lab', 2: 'Main entrance, CTL & Scholars Studio', 3: 'Reading rooms, study rooms & the Scholarship Suite', 4: 'Meeting spaces & Café' };
    const card = sel ? {
      name: sel.name + (sel.num ? ' ' + sel.num : ''),
      cat: CAT[sel.f],
      meta: 'Level ' + sel.level + (sel.num ? ' · Room ' + sel.num : ''),
      note: sel.level === kiosk ? 'On this floor, highlighted in red.' : 'On Level ' + sel.level + '. Tap Show me the way for step-by-step directions.',
      isStudy: sel.f === 'study',
      canRoute: (D.routable[kiosk] || []).indexOf(sel.id) >= 0,
      noRoute: (D.routable[kiosk] || []).indexOf(sel.id) < 0,
      wayHref: '#/directions/' + sel.id
    } : { name: '', cat: '', meta: '', note: '', isStudy: false, canRoute: false, noRoute: false, wayHref: '#/directions' };
    const chipName = sel && sel.level === lvl ? card.name : '';
    return {
      filters, levelBtns, list, targets, dots,
      mapSrc: D.img[lvl], mapAlt: 'Level ' + lvl + ' floor map',
      matchD, selD,
      levelTitle: 'Level ' + lvl, levelHint: NAMES[lvl],
      listTitle: flt === 'all' ? 'Popular destinations' : (filters.find((f) => f.pressed === 'true') || {}).label + ' · all levels',
      showYou: lvl === kiosk,
      you: { l: D.you[kiosk][0] - 15, t: D.you[kiosk][1] - 15, ll: D.you[kiosk][0] + 20, lt: D.you[kiosk][1] - 14 },
      showChip: !!chipName, chip: { name: chipName, l: sel ? sel.x : 0, t: sel ? sel.y - 46 : 0 },
      hasSel: !!sel, noSel: !sel, sel: card
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
      <h1 style="margin: 0; font-family: 'Libre Caslon Text', Georgia, serif; font-weight: 400; font-size: 54px; line-height: 1">Maps</h1>
      <div style="font-size: 20px; color: #4A484A">Find a space, a service or a collection in the building</div>
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

  <main style="flex: 1; min-height: 0; box-sizing: border-box; padding: 22px 64px 24px; display: flex; flex-direction: column; gap: 18px">

    <div role="group" aria-label="Show on the map" style="display: flex; align-items: center; gap: 10px">
      ${(v.filters || []).map((f, $index) => html`
        <button type="button" onClick=${f.pick} aria-pressed=${f.pressed} style="height: 58px; padding: 0 22px; border-radius: 999px; border: 2px solid ${f.bd}; background: ${f.bg}; color: ${f.fg}; font-size: 19px; font-weight: 700; white-space: nowrap">${f.label}</button>
      `)}
    </div>

    <div style="flex: 1; min-height: 0; display: grid; grid-template-columns: 88px 1242px minmax(0, 1fr); gap: 24px">

      <div role="group" aria-label="Choose a level" style="display: flex; flex-direction: column; gap: 12px">
        <div style="font-size: 14px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #6A6869; text-align: center">Level</div>
        ${(v.levelBtns || []).map((b, $index) => html`
          <button type="button" onClick=${b.pick} aria-pressed=${b.pressed} aria-label=${b.aria} style="position: relative; height: 104px; border-radius: 18px; border: 2px solid ${b.bd}; background: ${b.bg}; color: ${b.fg}; font-size: 44px; font-weight: 800; display: flex; align-items: center; justify-content: center">
            ${b.n}
            ${(b.here) ? html`
              <span style="position: absolute; top: 10px; right: 10px; width: 14px; height: 14px; border-radius: 999px; background: #D42121; border: 2px solid #FFFFFF"></span>
            ` : null}
          </button>
        `)}
        <div style="margin-top: auto; font-size: 14px; line-height: 1.35; color: #4A484A; text-align: center"><span style="display: inline-block; width: 12px; height: 12px; border-radius: 999px; background: #D42121; vertical-align: -1px"></span> you are here</div>
      </div>

      <div style="background: #FFFFFF; border: 1px solid #D4CFCE; border-radius: 22px; padding: 16px; display: flex; flex-direction: column; gap: 12px">
        <div style="display: flex; align-items: baseline; justify-content: space-between; padding: 0 6px">
          <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 30px">${v.levelTitle}</div>
          <div style="font-size: 17px; color: #4A484A">${v.levelHint}</div>
        </div>
        <div style="position: relative; width: 1210px; height: 584px; border-radius: 12px; overflow: hidden; background: #F9F5F2">
          <img src=${v.mapSrc} alt=${v.mapAlt} style="position: absolute; left: 0; top: 0; width: 1210px; height: 584px; display: block" />
          <svg width="1210" height="584" viewBox="0 0 1210 584" aria-hidden="true" style="position: absolute; left: 0; top: 0; pointer-events: none">
            <path d=${v.matchD} fill="#D42121" fill-opacity="0.34" stroke="#D42121" stroke-width="2" stroke-linejoin="round"></path>
            <path d=${v.selD} fill="#D42121" fill-opacity="0.82" stroke="#0F1012" stroke-width="2.5" stroke-linejoin="round"></path>
          </svg>
          ${(v.dots || []).map((dt, $index) => html`
            <span style="position: absolute; left: ${dt.l}px; top: ${dt.t}px; width: 22px; height: 22px; box-sizing: border-box; border-radius: 999px; background: #D42121; border: 3px solid #FFFFFF; box-shadow: 0 0 0 1px #0F1012; pointer-events: none"></span>
          `)}
          ${(v.targets || []).map((tg, $index) => html`
            <button type="button" onClick=${tg.pick} aria-label=${tg.aria} style="position: absolute; left: ${tg.l}px; top: ${tg.t}px; width: 48px; height: 48px; padding: 0; border: 0; border-radius: 999px; background: transparent"></button>
          `)}
          ${(v.showChip) ? html`
            <div style="position: absolute; left: ${v.chip.l}px; top: ${v.chip.t}px; transform: translateX(-50%); background: #0F1012; color: #FFFFFF; font-size: 16px; font-weight: 800; padding: 7px 12px; border-radius: 8px; white-space: nowrap; pointer-events: none">${v.chip.name}</div>
          ` : null}
          ${(v.showYou) ? html`
            <div style="position: absolute; left: ${v.you.l}px; top: ${v.you.t}px; width: 30px; height: 30px; box-sizing: border-box; border-radius: 999px; background: #D42121; border: 5px solid #FFFFFF; box-shadow: 0 0 0 6px rgba(212,33,33,0.25), 0 2px 6px rgba(15,16,18,0.35); pointer-events: none"></div>
            <div style="position: absolute; left: ${v.you.ll}px; top: ${v.you.lt}px; font-size: 15px; font-weight: 800; background: #D42121; color: #FFFFFF; padding: 5px 10px; border-radius: 6px; white-space: nowrap; pointer-events: none">You are here</div>
          ` : null}
        </div>
        <div style="display: flex; align-items: center; gap: 20px; padding: 0 6px; font-size: 15px; color: #4A484A; flex-wrap: wrap">
          <span style="display: flex; align-items: center; gap: 7px"><span style="width: 16px; height: 16px; background: #D42121; border-radius: 3px"></span>Matches your choice</span>
          <span style="display: flex; align-items: center; gap: 7px"><span style="width: 16px; height: 16px; background: #D4DAE4; border-radius: 3px"></span>Study rooms</span>
          <span style="display: flex; align-items: center; gap: 7px"><span style="width: 16px; height: 16px; background: #B6C1D1; border-radius: 3px"></span>Classrooms</span>
          <span style="display: flex; align-items: center; gap: 7px"><span style="width: 16px; height: 16px; background: #E9DED3; border-radius: 3px"></span>Key spaces</span>
          <span style="display: flex; align-items: center; gap: 7px"><span style="width: 16px; height: 16px; background: #D4CFCE; border-radius: 3px"></span>Offices</span>
          <span style="display: flex; align-items: center; gap: 7px"><span style="width: 16px; height: 16px; background: #B0ABAB; border-radius: 3px"></span>Staff only</span>
          <span style="margin-left: auto; font-weight: 700; color: #0F1012">Main entrance: Level 2, bottom of the map</span>
        </div>
      </div>

      <aside style="display: flex; flex-direction: column; gap: 16px; min-height: 0">
        <div style="background: #0F1012; color: #FFFFFF; border-radius: 20px; padding: 22px 24px; display: flex; flex-direction: column; gap: 10px">
          ${(v.hasSel) ? html`
            <div style="display: flex; flex-direction: column; gap: 10px">
              <div style="font-size: 14px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #E9DED3">${v.sel.cat}</div>
              <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 30px; line-height: 1.12">${v.sel.name}</div>
              <div style="font-size: 18px; font-weight: 700">${v.sel.meta}</div>
              <div style="font-size: 17px; line-height: 1.4; color: #D4CFCE">${v.sel.note}</div>
              ${v.sel.canRoute ? html`<a href=${v.sel.wayHref} style="height: 58px; border-radius: 999px; background: #D42121; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 20px; font-weight: 800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19V9h9"></path><path d="M11 5l4 4-4 4"></path></svg>
                Show me the way
              </a>` : null}${v.sel.noRoute ? html`<div style="font-size: 17px; line-height: 1.4; color: #E9DED3; border: 1px dashed #8D898A; border-radius: 12px; padding: 12px 14px">No route drawn to this space yet. Staff at the Connections Desk can show you the way.</div>` : null}
              ${(v.sel.isStudy) ? html`
                <div style="display: flex; align-items: center; gap: 14px; background: #FFFFFF; color: #0F1012; border-radius: 12px; padding: 10px">
                  <img src="assets/qr_reserve.svg" alt="QR code to book a study room" style="width: 84px; height: 84px; display: block" />
                  <div style="font-size: 17px; font-weight: 700; line-height: 1.3">Scan to book this room on your phone</div>
                </div>
              ` : null}
            </div>
          ` : null}
          ${(v.noSel) ? html`
            <div style="display: flex; flex-direction: column; gap: 8px">
              <div style="font-family: 'Libre Caslon Text', Georgia, serif; font-size: 28px; line-height: 1.15">Where would you like to go?</div>
              <div style="font-size: 17px; line-height: 1.4; color: #D4CFCE">Choose a category above, or tap a place on the map or in the list.</div>
            </div>
          ` : null}
        </div>
        <div style="font-size: 15px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: #6A6869; padding: 0 4px">${v.listTitle}</div>
        <div style="flex: 1; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; padding-right: 4px">
          ${(v.list || []).map((it, $index) => html`
            <button type="button" onClick=${it.pick} style="text-align: left; min-height: 60px; box-sizing: border-box; padding: 9px 14px; border-radius: 12px; border: 2px solid ${it.bd}; background: #FFFFFF; color: #0F1012; display: flex; align-items: center; gap: 12px">
              <span style="flex: none; width: 40px; height: 40px; border-radius: 10px; background: #F9F5F2; border: 1px solid #D4CFCE; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800">${it.level}</span>
              <span style="display: flex; flex-direction: column; min-width: 0">
                <span style="font-size: 17px; font-weight: 700; line-height: 1.2">${it.name}</span>
                <span style="font-size: 14px; color: #4A484A">${it.meta}</span>
              </span>
            </button>
          `)}
        </div>
      </aside>
    </div>
  </main>

  <footer style="height: 96px; box-sizing: border-box; padding: 0 64px; background: #D42121; color: #FFFFFF; display: flex; align-items: center; justify-content: space-between; gap: 32px">
    <div style="display: flex; align-items: center; gap: 18px; font-size: 25px; font-weight: 600">
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M12 11v5M12 8h.01"></path></svg>
      <span><strong style="font-weight: 800">Prefer paper?</strong> Printed floor maps and in-person help are at the Connections Desk, Level 2.</span>
    </div>
    <div style="font-size: 23px; font-weight: 500; white-space: nowrap"><strong style="font-weight: 800">Email</strong> library@davidson.edu  ·  <strong style="font-weight: 800">Call</strong> 704-894-2331</div>
  </footer>
</div>`;
};

export default Screen;
