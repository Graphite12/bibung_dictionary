const divs = document.querySelectorAll(".Module_imgs");
const Lecture_boxs = document.querySelectorAll(".Lecture_box")
const Lecture_0 = Lecture_box[0].children[1];
const Lecture_1 = Lecture_box[1].children[1];
const Lecture_2 = Lecture_box[2].children[1];
const Lecture_3 = Lecture_box[3].children[1];


const Module_Menu = [
    {
        className: "F1",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "DEFA - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "열추적미사일 - R.550 Magic ", link: "wvr_short_missile_2"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            {title: "레이더 조작 방법", link: "bvr_radar"},
            {title: "530F", link: "bvr_short_missile_fox2"},
            {title: "530EM", link: "bvr_short_missile_fox1"},
            {title: "RWR", link: "rwr"},
            {title: "기만체 조작법", link: "counter"},
            {title: "회피 방법", link: "defit"},
        ],        
        cas: [ 
            {title: "DEFA - 기총", link: "cas_gun"},
            {title: "MATRA - 로켓", link: "cas_rocket"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"},
            {title: "BLU-107B Durendal", link: "cas_durendal"}
        ],
    },
    {
        className: "F86",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "AN/M3 - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            null
        ],        
        cas: [ 
            {title: "AN/M3 - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "M117 - 자유낙하폭탄", link: "cas_bomb"},
        ],
    },
    {
        className: "F5",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "M39A3  - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            null
        ],        
        cas: [ 
            {title: "M39A3  - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "MK-84 - 자유낙하폭탄", link: "cas_bomb"},
        ],
    },
    {
        className: "F14",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "항공모함 이륙&착륙", link: "ship_landing"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "기총 - M61A1", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            {title: "레이더 조작 방법", link: "bvr_radar"},
            {title: "AIM-7 Sparrow", link: "bvr_short_missile_fox1"},
            {title: "AIM-54 Phoenix", link: "bvr_short_missile_fox3"},
            {title: "ADM-141A TALD", link: "bvr_short_missile_tald"},
            {title: "RWR", link: "rwr"},
            {title: "기만체 조작법", link: "counter"},
            {title: "회피 방법", link: "defit"},
        ],        
        cas: [ 
            {title: "M61A1 - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
        ],
    },
    {
        className: "F15C",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "기총 - M61A1", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            {title: "레이더 조작 방법", link: "bvr_radar"},
            {title: "AIM-7 Sparrow", link: "bvr_short_missile_fox1"},
            {title: "AIM-120 Amraam", link: "bvr_short_missile_fox3"},
            {title: "RWR", link: "rwr"},
            {title: "기만체 조작법", link: "counter"},
            {title: "회피 방법", link: "defit"},
        ],        
        cas: [ 
            {title: "M61A1 - 기총", link: "cas_gun"},
        ],
    },  
    {
        className: "F15E",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "기총 - M61A1", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            {title: "레이더 조작 방법", link: "bvr_radar"},
            {title: "AIM-7 Sparrow", link: "bvr_short_missile_fox1"},
            {title: "AIM-120 Amraam", link: "bvr_short_missile_fox3"},
            {title: "RWR", link: "rwr"},
            {title: "기만체 조작법", link: "counter"},
            {title: "회피 방법", link: "defit"},
        ],        
        cas: [ 
            {title: "M61A1 - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"},
            {title: "BLU-107B Durendal", link: "cas_durendal"}
        ],
    },    
    {
        className: "F16",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "기총 - M61A1", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            {title: "레이더 조작 방법", link: "bvr_radar"},
            {title: "AIM-120 Amraam", link: "bvr_short_missile_fox3"},
            {title: "RWR", link: "rwr"},
            {title: "기만체 조작법", link: "counter"},
            {title: "회피 방법", link: "defit"},
        ],        
        cas: [ 
            {title: "M61A1 - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "AGM-65 MAVERICK- 공대지미사일", link: "cas_maverick"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"}
        ],
    },
    {
        className: "F18",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "항공모함 이륙&착륙", link: "ship_landing"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "기총 - M61A1", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            {title: "레이더 조작 방법", link: "bvr_radar"},
            {title: "AIM-7 Sparrow", link: "bvr_short_missile_fox1"},
            {title: "AIM-120 Amraam", link: "bvr_short_missile_fox3"},
            {title: "RWR", link: "rwr"},
            {title: "기만체 조작법", link: "counter"},
            {title: "회피 방법", link: "defit"},
        ], 
        cas: [ 
            {title: "M61A1 - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "AGM-65 MAVERICK- 공대지미사일", link: "cas_maverick"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"}
        ],
    },
    {
        className: "A10A",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "GAU-8/A Avenger - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            null
        ],        
        cas: [ 
            {title: "GAU-8/A Avenger - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "AGM-65 MAVERICK- 공대지미사일", link: "cas_maverick"},
            {title: "MK-84 - 자유낙하폭탄", link: "cas_bomb"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"}
        ],
    }, 
    {
        className: "A10C",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "GAU-8/A Avenger - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            null
        ],        
        cas: [ 
            {title: "GAU-8/A Avenger - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "AGM-65 MAVERICK- 공대지미사일", link: "cas_maverick"},
            {title: "MK-84 - 자유낙하폭탄", link: "cas_bomb"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"}
        ],
    },   
    {
        className: "AV8",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "공중급유", link: "aa_refule"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "GAU-12 Equalizer - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            null
        ],        
        cas: [ 
            {title: "GAU-12 Equalizer - 기총", link: "cas_gun"},
            {title: "LAU-10 - 로켓", link: "cas_rocket"},
            {title: "LANTIRN - 타겟팅포드 조작법", link: "cas_lantirn"},
            {title: "AGM-65 MAVERICK- 공대지미사일", link: "cas_maverick"},
            {title: "MK-84 - 자유낙하폭탄", link: "cas_bomb"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "CBU", link: "cas_cbu"}
        ],
    },   
    {
        className: "AJS37",
        startup: [
            {title: "기체 스펙", link: "spec"},
            {title: "시동 절차", link: "cold_start"},
            {title: "계기&지상주행", link: "texing"},
            {title: "항법", link: "navigation"},
            {title: "이륙&착륙", link: "takeoff"},
            {title: "편대비행", link: "formation_flight"},
            {title: "라디오 조작 방법", link: "radio"}
        ],
        aa_wvr: [
            {title: "AKNA - 기총", link: "wvr_gun"},
            {title: "열추적미사일 - AIM-9", link: "wvr_short_missile"},
            {title: "레이더", link: "wvr_radar"},
        ],
        aa_bvr: [
            null
        ],        
        cas: [ 
            {title: "AKNA - 기총", link: "cas_gun"},
            {title: "ARAK - 로켓", link: "cas_rocket"},
            {title: "RB75 MAVERICK - 공대지미사일", link: "cas_maverick"},
            {title: "RB05 - 공대지미사일", link: "cas_missile"},
            {title: "JDAM", link: "cas_jdam"},
            {title: "GBU", link: "cas_gbu"},
            {title: "BK90", link: "cas_bk90"},
            {title: "RB15F0", link: "cas_fb15f0"},
        ],
    },   
]





function flip_div(event) {
    const clickedClassName = event.target.classList.item(event.target.classList.length - 1);

    if (!styleElement) {
        styleElement = document.createElement('style');
        document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = `
    .Lecture {
        display: block;
    }
    
    .${clickedClassName}:hover {
        display: none;
    }`;

    Lectur_change_Text(clickedClassName)

    return ClickedName = clickedClassName

}

function Lectur_change_Text(clickedClassName) {
    console.log(clickedClassName);

}



divs.forEach(div => div.addEventListener("click", flip_div));