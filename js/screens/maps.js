import { html, DCLogic } from '../dc.js';

class Screen extends DCLogic {
  constructor(props) {
    super(props);
    const k = (props && props.kiosk === 'Level 1 entrance') ? 1 : 2;
    this.state = { level: k, filter: 'all', sel: null };
  }
  D() {
    if (!Screen._d) Screen._d = Object.assign({"img":{"1":"assets/maps/level-1.svg","2":"assets/maps/level-2.svg","3":"assets/maps/level-3.svg","4":"assets/maps/level-4.svg"},"places":[{"id":"1-126A","level":1,"name":"ASC Collection","num":"","f":"office","d":"M255,490 L737,490 L741,486 L741,403 L255,403Z","x":498,"y":446},{"id":"1-122A","level":1,"name":"ASC Office","num":"122A","f":"office","d":"M1010,349 L1010,403 L1054,403 L1054,349Z","x":1032,"y":376},{"id":"1-122B","level":1,"name":"ASC Office","num":"122B","f":"office","d":"M1054,349 L1054,403 L1094,403 L1094,349Z","x":1074,"y":376},{"id":"1-122C","level":1,"name":"ASC Office","num":"122C","f":"office","d":"M1094,349 L1094,403 L1121,403 L1123,390 L1138,390 L1138,349Z","x":1116,"y":370},{"id":"1-122D","level":1,"name":"ASC Office","num":"122D","f":"office","d":"M1138,349 L1138,390 L1144,403 L1163,402 L1166,390 L1174,390 L1176,387 L1176,349Z","x":1157,"y":368},{"id":"1-122E","level":1,"name":"ASC Office","num":"122E","f":"office","d":"M1054,269 L1066,269 L1066,282 L1112,282 L1112,240 L1054,240Z","x":1091,"y":262},{"id":"1-122F","level":1,"name":"ASC Office","num":"122F","f":"office","d":"M1054,240 L1112,240 L1112,195 L1066,195 L1066,216 L1054,216Z","x":1088,"y":217},{"id":"1-120","level":1,"name":"ASC Reading Room","num":"120","f":"key","d":"M782,315 L782,403 L938,403 L938,367 L974,367 L974,315Z","x":878,"y":359},{"id":"1-122","level":1,"name":"ASC Workroom","num":"122","f":"office","d":"M1112,195 L1112,282 L922,282 L922,315 L974,315 L974,367 L1010,367 L1010,349 L1176,349 L1176,327 L1174,324 L1176,315 L1176,279 L1174,276 L1176,195Z","x":1138,"y":312},{"id":"1-127","level":1,"name":"Archives + Community Room","num":"127","f":"key","d":"M782,117 L922,117 L922,39 L909,39 L906,23 L902,21 L889,21 L882,29 L837,29 L831,21 L815,21 L804,31 L782,29Z","x":830,"y":73},{"id":"1-100","level":1,"name":"Commons","num":"","f":"commons","d":"","x":623,"y":91},{"id":"1-121","level":1,"name":"Engaged Research & Learning Classroom","num":"121","f":"classroom","d":"M877,153 L877,282 L1022,282 L1022,269 L1037,269 L1037,275 L1054,269 L1054,164 L1047,153Z","x":966,"y":217},{"id":"1-100E","level":1,"name":"Kaleidoscope","num":"","f":"key","d":"","x":586,"y":330},{"id":"1-104","level":1,"name":"Letterpress Lab","num":"104","f":"key","d":"M255,117 L428,117 L428,70 L433,60 L428,60 L428,29 L261,30 L255,35Z","x":344,"y":73},{"id":"1-112","level":1,"name":"Library Classroom","num":"112","f":"classroom","d":"M141,29 L48,31 L45,46 L32,51 L32,90 L45,96 L45,117 L156,117 L156,33 L154,35Z","x":94,"y":73},{"id":"1-103","level":1,"name":"Office","num":"103","f":"office","d":"M372,195 L372,240 L428,240 L428,195Z","x":395,"y":218},{"id":"1-101","level":1,"name":"Registrar Classroom","num":"101","f":"classroom","d":"M428,282 L255,282 L255,403 L428,403Z","x":342,"y":342},{"id":"1-105","level":1,"name":"Registrar Seminar Room","num":"105","f":"classroom","d":"M255,216 L269,216 L269,240 L263,240 L269,246 L255,246 L255,282 L360,282 L360,269 L372,269 L372,195 L255,195Z","x":314,"y":239},{"id":"2-200K","level":2,"name":"Art Collection Display","num":"","f":"key","d":"","x":881,"y":454},{"id":"2-243B","level":2,"name":"Audio Studio 1","num":"243B","f":"key","d":"M1013,106 L1013,121 L982,121 L982,154 L989,165 L989,177 L1035,177 L1035,154 L1051,154 L1051,121 L1026,121 L1026,106Z","x":1009,"y":147},{"id":"2-243A","level":2,"name":"Audio Studio 2","num":"243A","f":"key","d":"M989,254 L1051,254 L1051,204 L1013,204 L1013,197 L989,197Z","x":1020,"y":229},{"id":"2-201","level":2,"name":"CTL Classroom / Group Tutor","num":"201","f":"classroom","d":"M163,491 L298,491 L298,328 L163,328Z","x":230,"y":423},{"id":"2-207","level":2,"name":"CTL Office","num":"207","f":"office","d":"M87,336 L87,391 L91,400 L115,400 L115,381 L131,381 L131,336Z","x":109,"y":358},{"id":"2-208","level":2,"name":"CTL Office","num":"208","f":"office","d":"M104,281 L163,281 L163,238 L104,238Z","x":141,"y":260},{"id":"2-209","level":2,"name":"CTL Office","num":"209","f":"office","d":"M31,347 L31,400 L66,400 L72,391 L87,391 L87,336 L37,336 L33,339Z","x":58,"y":365},{"id":"2-210","level":2,"name":"CTL Office","num":"210","f":"office","d":"M104,238 L163,238 L163,197 L104,197Z","x":142,"y":218},{"id":"2-212","level":2,"name":"CTL Office","num":"212","f":"office","d":"M104,154 L104,197 L163,197 L163,154Z","x":126,"y":175},{"id":"2-200","level":2,"name":"Commons","num":"","f":"commons","d":"","x":604,"y":343},{"id":"2-desk","level":2,"name":"Connections Desk","num":"","f":"service","d":"","x":525,"y":293},{"id":"2-214-2","level":2,"name":"Data Lab / Tutoring","num":"","f":"key","d":"M104,121 L163,121 L163,29 L104,29Z","x":133,"y":75},{"id":"2-232","level":2,"name":"ER&L Office","num":"232","f":"office","d":"M842,411 L879,411 L879,360 L842,360Z","x":861,"y":385},{"id":"2-234","level":2,"name":"ER&L Office","num":"234","f":"office","d":"M879,411 L922,411 L922,360 L879,360Z","x":901,"y":385},{"id":"2-236","level":2,"name":"ER&L Office","num":"236","f":"office","d":"M922,360 L922,411 L970,411 L970,360Z","x":946,"y":385},{"id":"2-240","level":2,"name":"ER&L Office","num":"240","f":"office","d":"M922,491 L965,491 L965,463 L959,458 L959,445 L936,445 L936,463 L922,463Z","x":948,"y":475},{"id":"2-242","level":2,"name":"ER&L Office","num":"242","f":"office","d":"M1013,411 L1018,408 L1043,408 L1049,404 L1051,400 L1051,360 L1013,360Z","x":1032,"y":380},{"id":"2-244","level":2,"name":"ER&L Office","num":"244","f":"office","d":"M1051,400 L1071,400 L1077,407 L1094,407 L1094,360 L1051,360Z","x":1073,"y":380},{"id":"2-246","level":2,"name":"ER&L Office","num":"246","f":"office","d":"M1094,407 L1113,407 L1122,400 L1140,400 L1140,360 L1094,360Z","x":1117,"y":380},{"id":"2-248","level":2,"name":"ER&L Office","num":"248","f":"office","d":"M1140,400 L1179,400 L1179,360 L1140,360Z","x":1159,"y":380},{"id":"2-215","level":2,"name":"Group Tutor Room","num":"215","f":"study","d":"M31,47 L40,57 L37,60 L41,68 L31,68 L31,87 L57,87 L57,68 L79,68 L79,87 L104,87 L104,68 L91,68 L91,52 L104,52 L104,29 L79,29 L72,39 L57,39 L51,29 L35,29 L31,33Z","x":54,"y":53},{"id":"2-230","level":2,"name":"Ideation Lounge","num":"","f":"commons","d":"","x":1011,"y":340},{"id":"2-LL","level":2,"name":"Laptop Lending","num":"","f":"service","d":"","x":330,"y":445},{"id":"2-251","level":2,"name":"Media Production","num":"251","f":"key","d":"M922,121 L922,154 L897,154 L897,165 L879,165 L879,254 L989,254 L989,177 L982,177 L982,121Z","x":937,"y":203},{"id":"2-241","level":2,"name":"Meeting Room","num":"241","f":"study","d":"M1013,491 L1071,491 L1071,453 L1017,453 L1013,448Z","x":1042,"y":472},{"id":"2-230-3","level":2,"name":"Open Project Space","num":"","f":"commons","d":"","x":1117,"y":266},{"id":"2-211","level":2,"name":"Open Tutoring","num":"","f":"commons","d":"","x":86,"y":195},{"id":"2-230A","level":2,"name":"Print / Copy","num":"","f":"service","d":"M992,452 L992,490 L1016,490 L1016,452Z","x":1004,"y":471},{"id":"2-245","level":2,"name":"Project Room","num":"245","f":"study","d":"M1051,68 L1051,106 L1122,106 L1122,69Z","x":1087,"y":87},{"id":"2-247","level":2,"name":"Project Room","num":"247","f":"study","d":"M1122,106 L1173,106 L1178,103 L1178,76 L1170,69 L1122,69Z","x":1150,"y":88},{"id":"2-250","level":2,"name":"Project Room","num":"250","f":"study","d":"M842,121 L842,177 L879,177 L879,121Z","x":861,"y":143},{"id":"2-252","level":2,"name":"Project Room","num":"252","f":"study","d":"M842,121 L906,121 L906,68 L842,68Z","x":880,"y":94},{"id":"2-230-4","level":2,"name":"Scholars Studio Touch Down","num":"","f":"commons","d":"","x":850,"y":317},{"id":"2-200B","level":2,"name":"Study / Tutor Room","num":"200B","f":"study","d":"M298,368 L298,400 L327,400 L327,368Z","x":312,"y":384},{"id":"2-200C","level":2,"name":"Study / Tutor Room","num":"200C","f":"study","d":"M298,368 L343,368 L343,328 L298,328Z","x":323,"y":348},{"id":"2-200D","level":2,"name":"Study / Tutor Room","num":"200D","f":"study","d":"M321,246 L321,254 L298,254 L298,281 L336,281 L336,246Z","x":313,"y":267},{"id":"2-200E","level":2,"name":"Study / Tutor Room","num":"200E","f":"study","d":"M253,197 L253,246 L343,246 L343,197Z","x":298,"y":221},{"id":"2-202","level":2,"name":"Study / Tutor Room","num":"202","f":"study","d":"M253,246 L253,281 L298,281 L298,246Z","x":275,"y":264},{"id":"2-204","level":2,"name":"Study / Tutor Room","num":"204","f":"study","d":"M163,281 L216,281 L216,246 L163,246Z","x":198,"y":264},{"id":"2-213","level":2,"name":"Study / Tutor Room","num":"213","f":"study","d":"M31,87 L31,113 L39,121 L72,121 L72,87Z","x":51,"y":104},{"id":"2-200F","level":2,"name":"Study Room","num":"200F","f":"study","d":"M254,107 L291,107 L291,82 L254,82Z","x":279,"y":94},{"id":"2-200G","level":2,"name":"Study Room","num":"200G","f":"study","d":"M254,81 L290,81 L290,56 L254,56Z","x":278,"y":69},{"id":"2-200H","level":2,"name":"Study Room","num":"200H","f":"study","d":"M254,56 L291,56 L291,29 L254,29Z","x":277,"y":42},{"id":"3-300","level":3,"name":"Commons","num":"","f":"commons","d":"","x":614,"y":327},{"id":"3-313","level":3,"name":"Library Director's Office","num":"","f":"office","d":"M324,321 L226,321 L226,379 L324,379Z","x":275,"y":350},{"id":"3-320","level":3,"name":"Love of Teaching Suite","num":"","f":"key","d":"M205,455 L147,455 L142,474 L94,474 L91,476 L91,545 L93,551 L108,551 L115,562 L139,562 L142,551 L149,543 L205,543Z","x":166,"y":505},{"id":"3-322A","level":3,"name":"Office","num":"322A","f":"office","d":"M108,321 L166,321 L166,281 L108,281Z","x":146,"y":301},{"id":"3-322B","level":3,"name":"Office","num":"322B","f":"office","d":"M108,281 L166,281 L166,236 L108,236Z","x":144,"y":259},{"id":"3-322C","level":3,"name":"Office","num":"322C","f":"office","d":"M108,236 L166,236 L166,192 L108,192Z","x":144,"y":214},{"id":"3-322D","level":3,"name":"Office","num":"322D","f":"office","d":"M149,152 L108,152 L108,192 L166,192 L166,159Z","x":137,"y":172},{"id":"3-322E","level":3,"name":"Office","num":"322E","f":"office","d":"M108,117 L166,117 L166,68 L108,68Z","x":137,"y":92},{"id":"3-322F","level":3,"name":"Office","num":"322F","f":"office","d":"M108,68 L166,68 L166,33 L154,24 L114,26 L108,33Z","x":137,"y":46},{"id":"3-305","level":3,"name":"Reading Room","num":"305","f":"key","d":"M318,487 L323,492 L885,494 L885,406 L318,406Z","x":602,"y":450},{"id":"3-343","level":3,"name":"Registrar Classroom","num":"343","f":"classroom","d":"M885,152 L885,281 L1033,281 L1033,152Z","x":959,"y":216},{"id":"3-342","level":3,"name":"Silent Reading Room","num":"342","f":"key","d":"M1120,455 L1023,455 L1023,462 L951,462 L941,455 L924,455 L924,466 L885,466 L885,494 L924,494 L941,499 L941,536 L956,542 L969,562 L984,562 L988,551 L1005,548 L1012,551 L1077,551 L1081,562 L1101,562 L1104,550 L1120,545Z","x":1071,"y":503},{"id":"3-318","level":3,"name":"Staff + Faculty Lounge","num":"","f":"office","d":"M123,346 L123,358 L33,359 L32,369 L40,379 L40,405 L91,406 L93,425 L97,428 L151,428 L157,424 L166,406 L166,379 L174,379 L174,346Z","x":131,"y":393},{"id":"3-322G","level":3,"name":"Staff Work Area","num":"322G","f":"office","d":"M108,33 L32,34 L32,113 L35,117 L108,117Z","x":70,"y":73},{"id":"3-351","level":3,"name":"Study Nooks","num":"","f":"commons","d":"","x":1068,"y":252},{"id":"3-300A","level":3,"name":"Study Room","num":"300A","f":"study","d":"M288,281 L288,309 L324,309 L324,281Z","x":306,"y":295},{"id":"3-300B","level":3,"name":"Study Room","num":"300B","f":"study","d":"M251,199 L251,281 L324,281 L324,199Z","x":288,"y":240},{"id":"3-300C","level":3,"name":"Study Room","num":"300C","f":"study","d":"M255,113 L291,113 L291,88 L255,88Z","x":273,"y":101},{"id":"3-300D","level":3,"name":"Study Room","num":"300D","f":"study","d":"M256,87 L291,87 L291,61 L256,61Z","x":278,"y":74},{"id":"3-300E","level":3,"name":"Study Room","num":"300E","f":"study","d":"M255,60 L290,60 L290,28 L255,28Z","x":273,"y":44},{"id":"3-340","level":3,"name":"Study Room","num":"340","f":"study","d":"M885,379 L840,379 L840,406 L885,406Z","x":863,"y":392},{"id":"3-341","level":3,"name":"Study Room","num":"341","f":"study","d":"M840,321 L885,321 L885,256 L840,256Z","x":863,"y":298},{"id":"3-345","level":3,"name":"Study Room","num":"345","f":"study","d":"M941,321 L984,321 L984,281 L941,281Z","x":964,"y":301},{"id":"3-347","level":3,"name":"Study Room","num":"347","f":"study","d":"M984,321 L1008,321 L1008,281 L984,281Z","x":996,"y":309},{"id":"3-349","level":3,"name":"Study Room","num":"349","f":"study","d":"M1008,281 L1008,321 L1052,321 L1052,281Z","x":1028,"y":301},{"id":"3-350","level":3,"name":"Study Room","num":"350","f":"study","d":"M1094,402 L1174,402 L1178,399 L1178,333 L1161,324 L1161,321 L1094,321Z","x":1136,"y":362},{"id":"3-352","level":3,"name":"Study Room","num":"352","f":"study","d":"M1094,108 L1162,108 L1178,100 L1178,77 L1172,72 L1110,72 L1110,68 L1094,68Z","x":1122,"y":89},{"id":"3-354","level":3,"name":"Study Room","num":"354","f":"study","d":"M924,117 L969,117 L969,68 L924,68Z","x":946,"y":94},{"id":"3-312","level":3,"name":"Wellness Room","num":"312","f":"study","d":"M251,281 L251,321 L288,321 L295,309 L288,309 L288,281Z","x":269,"y":300},{"id":"4-400A","level":4,"name":"Café","num":"","f":"key","d":"M983,405 L985,401 L1017,401 L1022,405 L1058,405 L1068,390 L1068,294 L1058,288 L1014,288 L1008,282 L983,282Z","x":1026,"y":342},{"id":"4-400","level":4,"name":"Café Seating","num":"","f":"commons","d":"","x":820,"y":289},{"id":"4-400C","level":4,"name":"Meeting Space A","num":"400C","f":"key","d":"M259,36 L255,39 L254,263 L221,263 L221,299 L226,298 L237,305 L254,305 L254,340 L476,340 L472,263 L368,263 L368,248 L402,210 L380,182 L375,160 L375,129 L412,71 L402,36Z","x":319,"y":203},{"id":"4-400D","level":4,"name":"Meeting Space B","num":"400D","f":"key","d":"M412,60 L412,71 L380,118 L375,149 L375,182 L390,200 L432,219 L526,219 L560,200 L575,182 L584,149 L575,118 L544,71 L544,60 L556,36 L402,36Z","x":477,"y":130},{"id":"4-400E","level":4,"name":"Meeting Space C","num":"400E","f":"key","d":"M544,60 L544,71 L575,118 L584,160 L575,182 L549,210 L584,248 L584,263 L648,263 L670,236 L677,219 L694,219 L694,182 L709,182 L709,149 L694,149 L694,45 L687,36 L556,36Z","x":633,"y":100},{"id":"4-RD","level":4,"name":"Roof Deck","num":"","f":"key","d":"M983,405 L694,405 L694,340 L254,340 L254,489 L256,491 L386,491 L390,488 L390,469 L402,451 L426,451 L426,457 L438,470 L442,491 L514,491 L517,489 L517,470 L523,460 L550,460 L565,467 L566,491 L584,497 L584,539 L621,539 L627,536 L627,497 L644,491 L644,470 L655,459 L686,461 L694,470 L696,491 L769,491 L771,488 L771,470 L777,460 L813,461 L825,478 L825,491 L962,491 L970,470 L983,461Z","x":333,"y":415}],"popular":["2-desk","2-230-4","2-251","2-201","2-LL","2-214-2","2-211","1-120","1-127","1-104","1-121","1-100E","3-305","3-342","3-320","4-400A","4-400D","4-RD"],"you":{"1":[728,119],"2":[605,437]}}, { routable: {"1": ["1-100", "1-100E", "1-101", "1-103", "1-104", "1-105", "1-112", "1-120", "1-121", "1-122", "1-122A", "1-122B", "1-122C", "1-122D", "1-122E", "1-122F", "1-126A", "1-127", "2-200", "2-200B", "2-200C", "2-200D", "2-200E", "2-200F", "2-200G", "2-200H", "2-200K", "2-201", "2-202", "2-204", "2-207", "2-208", "2-209", "2-210", "2-211", "2-212", "2-213", "2-214-2", "2-215", "2-230", "2-230-3", "2-230-4", "2-230A", "2-232", "2-234", "2-236", "2-240", "2-241", "2-242", "2-243A", "2-243B", "2-244", "2-245", "2-246", "2-247", "2-248", "2-250", "2-251", "2-252", "2-LL", "2-desk", "3-300", "3-300A", "3-300B", "3-300C", "3-300D", "3-300E", "3-305", "3-312", "3-313", "3-318", "3-320", "3-322A", "3-322B", "3-322C", "3-322D", "3-322E", "3-322F", "3-322G", "3-340", "3-341", "3-342", "3-343", "3-345", "3-347", "3-349", "3-350", "3-351", "3-352", "3-354", "4-400", "4-400A", "4-400C", "4-400D", "4-400E", "4-RD"], "2": ["1-100", "1-100E", "1-101", "1-103", "1-104", "1-105", "1-112", "1-120", "1-121", "1-122", "1-122A", "1-122B", "1-122C", "1-122D", "1-122E", "1-122F", "1-126A", "1-127", "2-200", "2-200B", "2-200C", "2-200D", "2-200E", "2-200F", "2-200G", "2-200H", "2-200K", "2-201", "2-202", "2-204", "2-207", "2-208", "2-209", "2-210", "2-211", "2-212", "2-213", "2-214-2", "2-215", "2-230", "2-230-3", "2-230-4", "2-230A", "2-232", "2-234", "2-236", "2-240", "2-241", "2-242", "2-243A", "2-243B", "2-244", "2-245", "2-246", "2-247", "2-248", "2-250", "2-251", "2-252", "2-LL", "2-desk", "3-300", "3-300A", "3-300B", "3-300C", "3-300D", "3-300E", "3-305", "3-312", "3-313", "3-318", "3-320", "3-322A", "3-322B", "3-322C", "3-322D", "3-322E", "3-322F", "3-322G", "3-340", "3-341", "3-342", "3-343", "3-345", "3-347", "3-349", "3-350", "3-351", "3-352", "3-354", "4-400", "4-400A", "4-400C", "4-400D", "4-400E", "4-RD"]} });
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
    const NAMES = { 1: 'Archives, classrooms, Kaleidoscope & the Letterpress Lab', 2: 'Main entrance, CTL, laptop lending & Scholars Studio', 3: 'Reading rooms, study rooms & the Love of Teaching Suite', 4: 'Meeting spaces, Café & Roof Deck' };
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
