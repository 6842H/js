﻿function fake(e){var a=0,n=8;function t(e){return s(r(i(e),e.length*n))}function r(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,i=-271733879,a=-1732584194,n=271733878,s=0;s<e.length;s+=16){var o=r,l=i,u=a,d=n;i=p(i=p(i=p(i=p(i=f(i=f(i=f(i=f(i=h(i=h(i=h(i=h(i=c(i=c(i=c(i=c(i,a=c(a,n=c(n,r=c(r,i,a,n,e[s+0],7,-680876936),i,a,e[s+1],12,-389564586),r,i,e[s+2],17,606105819),n,r,e[s+3],22,-1044525330),a=c(a,n=c(n,r=c(r,i,a,n,e[s+4],7,-176418897),i,a,e[s+5],12,1200080426),r,i,e[s+6],17,-1473231341),n,r,e[s+7],22,-45705983),a=c(a,n=c(n,r=c(r,i,a,n,e[s+8],7,1770035416),i,a,e[s+9],12,-1958414417),r,i,e[s+10],17,-42063),n,r,e[s+11],22,-1990404162),a=c(a,n=c(n,r=c(r,i,a,n,e[s+12],7,1804603682),i,a,e[s+13],12,-40341101),r,i,e[s+14],17,-1502002290),n,r,e[s+15],22,1236535329),a=h(a,n=h(n,r=h(r,i,a,n,e[s+1],5,-165796510),i,a,e[s+6],9,-1069501632),r,i,e[s+11],14,643717713),n,r,e[s+0],20,-373897302),a=h(a,n=h(n,r=h(r,i,a,n,e[s+5],5,-701558691),i,a,e[s+10],9,38016083),r,i,e[s+15],14,-660478335),n,r,e[s+4],20,-405537848),a=h(a,n=h(n,r=h(r,i,a,n,e[s+9],5,568446438),i,a,e[s+14],9,-1019803690),r,i,e[s+3],14,-187363961),n,r,e[s+8],20,1163531501),a=h(a,n=h(n,r=h(r,i,a,n,e[s+13],5,-1444681467),i,a,e[s+2],9,-51403784),r,i,e[s+7],14,1735328473),n,r,e[s+12],20,-1926607734),a=f(a,n=f(n,r=f(r,i,a,n,e[s+5],4,-378558),i,a,e[s+8],11,-2022574463),r,i,e[s+11],16,1839030562),n,r,e[s+14],23,-35309556),a=f(a,n=f(n,r=f(r,i,a,n,e[s+1],4,-1530992060),i,a,e[s+4],11,1272893353),r,i,e[s+7],16,-155497632),n,r,e[s+10],23,-1094730640),a=f(a,n=f(n,r=f(r,i,a,n,e[s+13],4,681279174),i,a,e[s+0],11,-358537222),r,i,e[s+3],16,-722521979),n,r,e[s+6],23,76029189),a=f(a,n=f(n,r=f(r,i,a,n,e[s+9],4,-640364487),i,a,e[s+12],11,-421815835),r,i,e[s+15],16,530742520),n,r,e[s+2],23,-995338651),a=p(a,n=p(n,r=p(r,i,a,n,e[s+0],6,-198630844),i,a,e[s+7],10,1126891415),r,i,e[s+14],15,-1416354905),n,r,e[s+5],21,-57434055),a=p(a,n=p(n,r=p(r,i,a,n,e[s+12],6,1700485571),i,a,e[s+3],10,-1894986606),r,i,e[s+10],15,-1051523),n,r,e[s+1],21,-2054922799),a=p(a,n=p(n,r=p(r,i,a,n,e[s+8],6,1873313359),i,a,e[s+15],10,-30611744),r,i,e[s+6],15,-1560198380),n,r,e[s+13],21,1309151649),a=p(a,n=p(n,r=p(r,i,a,n,e[s+4],6,-145523070),i,a,e[s+11],10,-1120210379),r,i,e[s+2],15,718787259),n,r,e[s+9],21,-343485551),r=g(r,o),i=g(i,l),a=g(a,u),n=g(n,d)}return Array(r,i,a,n)}function o(e,t,r,i,a,n){return g(function(e,t){return e<<t|e>>>32-t}(g(g(t,e),g(i,n)),a),r)}function c(e,t,r,i,a,n,s){return o(t&r|~t&i,e,t,a,n,s)}function h(e,t,r,i,a,n,s){return o(t&i|r&~i,e,t,a,n,s)}function f(e,t,r,i,a,n,s){return o(t^r^i,e,t,a,n,s)}function p(e,t,r,i,a,n,s){return o(r^(t|~i),e,t,a,n,s)}function g(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e){for(var t=Array(),r=(1<<n)-1,i=0;i<e.length*n;i+=n)t[i>>5]|=(e.charCodeAt(i/n)&r)<<i%32;return t}function s(e){for(var t=a?"0123456789ABCDEF":"0123456789abcdef",r="",i=0;i<4*e.length;i++)r+=t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15);return r}return t(e)};function time_to_sec(time){if(time.length<3){return Number(time)}else if(time.length==5){var temp=time.split(':');return Number(temp[0]*60)+Number(temp[1])}else if(time.length>5){var temp=time.split(':');return Number(temp[0]*3600)+Number(temp[1]*60)+Number(temp[2]*60)}else{return null}};
var _sdb="['sdb']['\x66\x69\x6c\x74\x65\x72']['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](((['sdb']+[])['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,'118r97E114h32j117q114v108H95y115a116P97M116w61q39r104M116U116T112L58E47d47r98W46P101b100M117A46H53t49d99v116s111I46U99K111o109k47W117L110L105S99V111a109H47u118w105g100G101O111N47P112y108j97m121p47X108Y111d103x39L59z10X118v97v114I32G117V114M108Z95A97D117R116E104d61U39m104D116t116x112E58R47k47d98r46K101L100d117p46g53O49x99J116u111o46a99X111u109v47x117e110X105D99q111I109H47s118X105K100V101B111x47K112Z108Y97c121p47q97T112V105t39o59a10H10l10Q118M97d114d32h114O32W61z32c119Y105X110e100g111g119k46m110R97E118h105d103O97o116v111O114D46P117O115l101z114m65g103D101G110k116Q59V10p118C97u114j32J98N114S61s40S45j49B32a60w32u114K46a105h110h100A101i120N79d102m40l34d79T112h101P114M97C34c41O32L63N32E34e79Y112Q101w114r97B34L32E58t32P45d49L32N60Q32W114Q46U105K110j100I101D120I79R102z40t34W70O105w114A101I102m111M120j34c41R32v63S32O34u70t70R34K32v58n32B45q49O32L60T32Z114P46j105d110g100l101C120C79i102M40l34G67N104N114y111E109m101s34y41V32C63e32H34H67V104T114M111M109v101t34M32s58G32f45R49q32o60Y32X114G46h105A110e100K101p120P79B102G40L34I83R97c102P97x114G105a34a41o32B63V32X34O83M97b102H97n114X105B34F32D58U32r45y49a32n60U32u114s46n105J110U100N101A120O79R102I40n34x99A111C109Y112f97m116M105M98V108I101i34v41d32i38p38X32X45P49D32D60j32v114C46s105u110l100Z101C120d79s102U40d34s77F83u73j69Q34K41X32f38R38o32q33F105v115b79Q112D101O114p97v32M63P32q34y73L69V34B32n58a32T118W111n105A100n32o48F41m59u10O118R97E114M32x111y115O61a114i46Y105d110B100g101T120A79Y102a40h34w87o105j110Q100h111R119X115f34Y41d32V63u32V34y87R105P110b100C111v119t115r34F32L58P32E34d111q116I104Z101t114Q34j59t10H118x97J114Y32z109G95B115B116n101R112v61z49I48e59E10q10Q118B97d114O32R105j32e61K32y123A10o9V109p58N32L34y116I105k109f101T34U44g10I9N114q101F102z58U32i108H111a99D97B116e105m111L110q46D104r114E101p102T44G10g9w111i115E58s32I111A115V44z10N9x98d114c58u32Y98i114C44Q10m9P102r112r58O32G48E44y9u9U10S9p99G100G110Y58u32D39J97M117O116X111h39e44Y10I9d100z101R102V58k32t39k97y117P116B111B39S44v10e9s115Y119c105v116N99p104K68C101u102O58K32x39e97u117b116u111k39i44q10S9e118s101E114m58K32t39g118b50x46B49Y46y48A45N50b48J49A57m48T55w48z57l39s44B10l9D112i108t97R116n102X111L114t109t58C32i52V44z10E125P59s10M102T117b110k99f116U105U111T110J32l104d101M97x114k116U95U98e101i97E116W40S117z105P100S44M32m117M117f105Q100B44r32K108H101F115o115v111a110W73u100P44P32w100k116I44U32P105B110P116L101r114V118D97n108F61D50f48N44o32P115v116y101u112o61Z54b48o44v32g110c61O48P41X123W10z9j118O97R114E32o104t116s61w110K42B115s116k101B112e59J10Q9m118i97w114D32U84W61j40x110g101G119G32x68h97J116A101n41h46f103M101k116e84d105s109W101T40E41A43x104i116T42g49o48O48D48R59E10R9W118r97x114O32Y101M120Y116v61s123c10d9b9T105G100A58Y32J108p101s115q115b111I110M73L100G44A10b9l9S117Q105A100h58L32M117C105t100F44J10T9B9s117W117d105T100q58R32q117g117S105s100q44b10X9g9V100Q116D58a32l100h116X44y10w9V9k104U116g105o109o101n58W32u104e116x44R10z9F9n112Q116M58S32E104Y116J44C10b9f9B116i58J32Z84U44S10d9B9l115H103Z105s110R58h32H102V97M107g101P40g34m34M32E43q32X84b32N43S32y104Z116H32n43Y32a100R116j32o43m32w104z116b32a43Y32F34c101A68Q117S95w53D49X67t116h111J95k115V105J121b117p97d110T84K108v119q34k41m46Q116F111V83E116n114d105r110x103S40G41U10p9b125Q10v9w116u114y121S123s10j9C9Y36e46A103O101g116P40M117L114L108U95Z115u116H97l116M44S32P36o46B101h120q116x101R110c100A40v123O125B44w32a105Q44G32c101Q120o116T41t41u59P10u9U9T36H46w97o106N97x120p40F123h32s32N10n9Z9W9l97d115m121M110g99B32o58V32H49F44D32E32s10P9L9A9S116B121T112I101h32m58s32h39N103d101h116n39D44m32X32e10G9j9Q9Z117G114J108O32Q58j32s117M114c108d95Z115e116X97k116a44j32B32U10A9Z9p9m100b97k116G97D32K58O32q36k46Z101B120Y116E101e110B100y40q123x125r44b32Z105N44U32P101s120z116o41X44z10u9H9V9S115J117l99X99F101z115y115e58G32t102f117P110f99Z116e105y111s110x40w101y41R123a119J105p110S100K111P119X46G115D116T101q112y115n32k45R61w49o59S99P111P110R115f111o108m101M46s100x101R98J117M103r40W39a119H105G110b100e111u119d46W115C116q101E112f115h61O39C44Q32n119l105R110Y100H111A119a46s115Y116z101k112h115D41W59Y125p44G10f9l9A9G101M114U114u111m114E58f102u117Q110S99O116e105o111P110C40D101R41m123y119y105m110X100e111j119U46d115j116E101G112J115v32g45x61d49B59j99F111T110B115P111s108S101i46S100x101f98p117n103u40b39O119g105v110T100P111t119D46a115a116F101B112M115F61Z39Z44s32T119H105h110t100W111S119m46s115Z116h101W112B115v41N59Q125x10b9f9Z125l41L59N32j32i10K9Q125D99e97M116W99C104F40N101f114s114F41z123U10u9e9j99k111n110S115L111P108Q101L46G100k101O98E117Q103L40s39O69b82i82Y58f39x44T32v101t114v114M46Q109b101Z115k115F97o103T101R41b59Y10r9g125c10n9s99h111x110R115i111f108n101Y46e100v101z98P117m103E40Q39S104y116D61K39q43U104U116p43E39y44E32n84Q61S39N43o84q41j59C10n9N105a102Q40u104b116y60p40f100g116u43F109L95q115S116J101D112y42e115H116w101w112f41I41N123i115p101X116f84L105Z109k101f111N117P116x40w102q117e110O99m116y105I111j110O40e41Z123G32h104x101m97x114U116N95v98D101c97s116i40m117f105T100B44S32W117k117C105U100t44J32h108U101F115O115I111u110P73S100L44R32Z100m116Y44E32f105v110V116z101J114h118M97X108k44W32J115X116r101s112q44Q32T110X43I49c41F59W125P44Y32V105D110E116x101G114M118j97k108l41D59q125K10i9E101m108Y115q101D123N119w105l110g100J111l119y46G99N108c99Q61e119R105t110j100L111O119y46x99r108I99e45y49V59o125C10l125g10D10J10u10Q102l117S110b99y116F105R111B110d32j103m101s116w95T117L105b100P40R108N101t115L115q111m110p73e100A41F123p10U9f118a97I114C32A117X105M100H61G110Z117k108H108q59w10M9r36r46N97R106k97V120r40H123a32A32m10w9X9V97M115c121C110a99r32t58l32c102v97Y108B115l101v44t32v32I10j9R9p116N121J112d101J32H58N32z39U103I101Z116A39C44S32I32Z10Q9w9a117d114n108g32a58n32W117y114V108N95T97n117x116z104z44b32U32U10u9H9H100b97E116F97M32B58q32I123q10f9k9V9x115v105b103O110p58x32t102u97r107z101E40o108E101l115p115I111T110s73F100u32h43b32G39Z101N68X117T95p53Q49O67u116w111B95W115M105s121k117r97W110H84q108l119G39i41d46K116B111E83c116h114E105x110g103q40n41u44u10Q9l9W9M108D101k115t115S111Z110y95Q105r100O58V32L108W101T115d115v111x110g73l100z10u9i9V125I44n32Y10z9f9l100P97G116t97K84O121R112A101g58w32f34U106i115g111n110d34R44m9x9H10M9s9G115h117g99K99W101K115J115U32I58z32h102W117S110x99W116q105L111k110S40D101B41S123x32m32s10F9E9g9s117r105j100i61j101U46r117L105k100J59r10F9G9v125y32B32Z10l9K125J41N59Z32s32h10m9u99E111Q110V115h111s108Z101E46t100X101d98t117Q103h40Q39w103I101i116S32A117Q105m100w61K39k44x32A117v105B100D41G59g10R9q114B101t116U117x114D110F32k117K105Y100M59D10f125w10G10z10y102f117O110c99C116R105g111n110e32x99g104a101I99q107k95X99E108C99G40i41C123l10z9I105X102s40M119y105H110v100p111F119X46X99v108m99c61h61L48r41U123c10o9C9P97J108U101C114U116i40k39E25152Z26377I35831L27714P24050L21457y20986E65292k35831g21247f21047Z26032W39029g38754w65292B32467z35838R21518Q23558q33258f21160c21047S26032W39B41Y59D10v9I125h101q108N115a101z123S115P101B116t84t105C109r101L111c117G116r40l102g117n110Q99Y116X105G111S110R40x41P123T99C104K101O99d107e95m99s108C99P40Q41Z59r125h44D32c49t48V48B48l41I59g125W10s125p10Q10B102Z117x110w99Y116h105l111Y110D32e99H104t101R99x107f95M115b116o101E112l115W40P41n123v10U9x105n102p40E119T105j110c100f111N119e46O115B116S101I112S115a60M49U41H123X10E9h9z99T111t110l115j111C108z101V46H100L101A98p117g103Z40J39R100o111u110x101j39Q41v59q10s9g9f97q108e101A114w116x40j39s21047E35838b23436N25104i65292e22914r20173g26377O26410Z32467V35838t31243r65292v35831O37325z26032g36816Q34892T33050o26412b39p41t59z10I9j9D108e111a99A97b116K105d111t110G46q114d101B108n111K97k100Q40d116Y114l117Q101p41r59S9t9W10e9C125X101E108Q115E101Q123G115O101x116C84w105Y109n101l111D117k116C40u102A117k110T99N116l105r111z110j40N41x123h99G104n101t99R107o95b115f116E101L112w115l40Y41U59N125i44q32w49F48n48d48O41d59U125p10p125D10v10K10y102J117u110z99R116L105t111X110c32q119l105q100i116A40h105d110V116V101Y114y118I97P108n61A53T44D32s115Z116U101U112x61i49s53o48Q41n123T10v9F118q97R114z32Y108r105F115v61F36O40H34B108r105d46f108T101m115a115K111e110g34t41P59Y10j9f10u9Q105Q102E40C108C105r115c46T108C101E110H103f116c104q60M49K41X123w97P108D101g114d116O40P39R33719z21462k35838F31243n21015I34920N20026O31354q39i41V59I114A101u116S117a114L110G59B125c59o10M9W118A97m114Z32b105h116J101k109h115H32X61J32b91H93l59X10J9F102S111n114S40s118m97i114P32B105R61K48z59h105q60r108t105T115o46k108L101f110O103k116b104h59k105i43w43x41M123B9s9l10I9U9P118S97F114M32u116s101O109J112x61K36R40f108O105K115U91D105h93s41C59c10P9i9P118b97h114b32v108o101T115O115B111X110A95a105I100J61l116Z101o109u112O46b97w116s116F114S40V39p105H100H39F41G59s10Q9C9y118N97O114L32W112L114C111D103J114M101i115n115t32U61S32p116y101u109G112M46P102f105c110f100K40D39h100G105R118m46U112x101N46T102n108B39f41K46s116M101Z120E116w40D41t46p116f114n105a109K40a41S59B10H9D9A118p97F114y32t116P105h109s101K61v116W105u109i101p95Y116L111q95n115o101c99V40X116N101P109q112i46R102g105F110r100j40Q39a115V112a97O110I46O116u105l109R101J39E41z46V116y101w120d116W40w41i46Q116j114o105g109E40U41A41y59G10y9Y9m105L102z40b112Y114v111o103e114E101Z115J115J46Z105v110u100Z101s120D79m102C40e39O49i48u48o37t39e41L61r61L45b49l41x123g10J9r9c9m105h116V101d109S115C46K112A117x115n104w40b91w108s101J115G115q111H110t95F105R100F44j32n112w114O111b103u114S101K115p115n44e32f116H105d109q101z93Z41W59I10d9l9P125F10N9C125W59K10g9j10i9r105Q102W40n105T116V101R109x115I46o108w101f110r103t116g104A60q49s41N123L97Z108o101a114U116D40r39Y33719a21462l26410r23436P25104e35838j31243u21015g34920G20026V31354b50w39i41I59x114C101k116E117O114F110g59e125S59L10b9u119N105K110h100t111x119y46W99y108F99w61b105R116t101G109q115M46d108d101w110I103z116L104W59v10N9k10Z9U118N97Q114D32x117w105Y100k61o103O101i116w95M117W105K100F40a105p116A101Z109p115t91v48p93E91d48O93a41y59J10U9K119s105e110O100n111Y119X46X115Z116k101y112u115S32V61k32O48L59o10H9L102z111T114h40M118p97B114P32n105e61E48C59a105t60D105b116d101L109T115f46I108r101q110F103R116y104A59k105C43I43m41R123M10p9F9Q119e105E110n100X111L119l46G115c116f101a112H115A32d43e61f32C77e97z116W104K46y102Y108U111O111U114f40D105g116z101d109O115M91l105m93B91f50u93d47g115x116W101n112b41D43p109g95S115J116j101P112k45A49c59U10x9E125E10m9Z102O111K114O40X118l97A114A32H105T61u48X59f105I60g105E116i101m109A115b46r108H101C110N103g116M104Z59D105Z43I43M41T123S10p9x9B118G97g114m32e117w117X105X100t61b102L97C107O101M40J34g34C32o43X32T40O110C101o119K32t68R97C116p101A41K46q103r101b116I84i105p109H101I40Z41M32c43t32r117W105L100E32E43d32D77z97P116f104i46J114s97G110X100N111k109S40t41T41T46w116S111w83n116D114c105D110T103X40y41s59V10G9e9e99H111I110y115o111o108J101F46r100j101b98O117T103g40k39Z108O101U115t115B111F110y73R100q61l39X44P105T116p101W109I115m91Y105K93t91h48J93f44b32p39x116v105n109H101v61y39P44z32d105C116T101H109R115M91q105T93d91W50n93t41p59r10c9u9k104S101t97c114Y116R95a98H101v97o116e40y117f105c100m44v32m117q117K105Q100g44I32I105v116K101R109t115s91M105r93j91S48c93V44g32H105M116F101K109C115z91Y105Q93e91U50I93g44l32Y105e110L116M101E114D118b97u108U44A32X115s116T101F112P41O59E10R9H125F10L9K99C104r101g99F107s95Y99z108C99Q40q41N59V10s9p99o104Z101c99L107i95b115W116Y101g112b115F40n41x59v10G125y119c105J100T116Q40L41g59'['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sdb');";
$("li:contains('课程目录')").click();
$("button:contains('开始学习')").text('一键结课');
$("button:contains('一键结课')").closest('a').replaceWith($("button:contains('一键结课')").prop("outerHTML").replace('button ', 'button onclick="eval(_sdb)"'));