function fake(e){var a=0,n=8;function t(e){return s(r(i(e),e.length*n))}function r(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,i=-271733879,a=-1732584194,n=271733878,s=0;s<e.length;s+=16){var o=r,l=i,u=a,d=n;i=p(i=p(i=p(i=p(i=f(i=f(i=f(i=f(i=h(i=h(i=h(i=h(i=c(i=c(i=c(i=c(i,a=c(a,n=c(n,r=c(r,i,a,n,e[s+0],7,-680876936),i,a,e[s+1],12,-389564586),r,i,e[s+2],17,606105819),n,r,e[s+3],22,-1044525330),a=c(a,n=c(n,r=c(r,i,a,n,e[s+4],7,-176418897),i,a,e[s+5],12,1200080426),r,i,e[s+6],17,-1473231341),n,r,e[s+7],22,-45705983),a=c(a,n=c(n,r=c(r,i,a,n,e[s+8],7,1770035416),i,a,e[s+9],12,-1958414417),r,i,e[s+10],17,-42063),n,r,e[s+11],22,-1990404162),a=c(a,n=c(n,r=c(r,i,a,n,e[s+12],7,1804603682),i,a,e[s+13],12,-40341101),r,i,e[s+14],17,-1502002290),n,r,e[s+15],22,1236535329),a=h(a,n=h(n,r=h(r,i,a,n,e[s+1],5,-165796510),i,a,e[s+6],9,-1069501632),r,i,e[s+11],14,643717713),n,r,e[s+0],20,-373897302),a=h(a,n=h(n,r=h(r,i,a,n,e[s+5],5,-701558691),i,a,e[s+10],9,38016083),r,i,e[s+15],14,-660478335),n,r,e[s+4],20,-405537848),a=h(a,n=h(n,r=h(r,i,a,n,e[s+9],5,568446438),i,a,e[s+14],9,-1019803690),r,i,e[s+3],14,-187363961),n,r,e[s+8],20,1163531501),a=h(a,n=h(n,r=h(r,i,a,n,e[s+13],5,-1444681467),i,a,e[s+2],9,-51403784),r,i,e[s+7],14,1735328473),n,r,e[s+12],20,-1926607734),a=f(a,n=f(n,r=f(r,i,a,n,e[s+5],4,-378558),i,a,e[s+8],11,-2022574463),r,i,e[s+11],16,1839030562),n,r,e[s+14],23,-35309556),a=f(a,n=f(n,r=f(r,i,a,n,e[s+1],4,-1530992060),i,a,e[s+4],11,1272893353),r,i,e[s+7],16,-155497632),n,r,e[s+10],23,-1094730640),a=f(a,n=f(n,r=f(r,i,a,n,e[s+13],4,681279174),i,a,e[s+0],11,-358537222),r,i,e[s+3],16,-722521979),n,r,e[s+6],23,76029189),a=f(a,n=f(n,r=f(r,i,a,n,e[s+9],4,-640364487),i,a,e[s+12],11,-421815835),r,i,e[s+15],16,530742520),n,r,e[s+2],23,-995338651),a=p(a,n=p(n,r=p(r,i,a,n,e[s+0],6,-198630844),i,a,e[s+7],10,1126891415),r,i,e[s+14],15,-1416354905),n,r,e[s+5],21,-57434055),a=p(a,n=p(n,r=p(r,i,a,n,e[s+12],6,1700485571),i,a,e[s+3],10,-1894986606),r,i,e[s+10],15,-1051523),n,r,e[s+1],21,-2054922799),a=p(a,n=p(n,r=p(r,i,a,n,e[s+8],6,1873313359),i,a,e[s+15],10,-30611744),r,i,e[s+6],15,-1560198380),n,r,e[s+13],21,1309151649),a=p(a,n=p(n,r=p(r,i,a,n,e[s+4],6,-145523070),i,a,e[s+11],10,-1120210379),r,i,e[s+2],15,718787259),n,r,e[s+9],21,-343485551),r=g(r,o),i=g(i,l),a=g(a,u),n=g(n,d)}return Array(r,i,a,n)}function o(e,t,r,i,a,n){return g(function(e,t){return e<<t|e>>>32-t}(g(g(t,e),g(i,n)),a),r)}function c(e,t,r,i,a,n,s){return o(t&r|~t&i,e,t,a,n,s)}function h(e,t,r,i,a,n,s){return o(t&i|r&~i,e,t,a,n,s)}function f(e,t,r,i,a,n,s){return o(t^r^i,e,t,a,n,s)}function p(e,t,r,i,a,n,s){return o(r^(t|~i),e,t,a,n,s)}function g(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function i(e){for(var t=Array(),r=(1<<n)-1,i=0;i<e.length*n;i+=n)t[i>>5]|=(e.charCodeAt(i/n)&r)<<i%32;return t}function s(e){for(var t=a?'0123456789ABCDEF':'0123456789abcdef',r='',i=0;i<4*e.length;i++)r+=t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15);return r}return t(e)};
function time_to_sec(time) {
    if (time.length < 3) {
        return Number(time)
    } else if (time.length == 5) {
        var temp = time.split(':');
        return Number(temp[0] * 60) + Number(temp[1])
    } else if (time.length > 5) {
        var temp = time.split(':');
        return Number(temp[0] * 3600) + Number(temp[1] * 60) + Number(temp[2] * 60)
    } else {
        return null
    }
};





var _sdb="['sdb']['\x66\x69\x6c\x74\x65\x72']['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](((['sdb']+[])['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65']['\x61\x70\x70\x6c\x79'](null,'118A97x114n32H117m114J108U95C115f116e97a116m61a39S104z116y116j112H115T58h47V47x98P46b101j100V117K46w53K49p99o116A111L46y99t111w109W47e117u110k105V99a111W109U47b118k105N100e101u111u47F112O108E97h121r47b108F111H103P39D59O10Z118s97W114A32o117s114F108N95S97A117M116J104Y61U39Y104q116b116A112r115T58V47H47P98X46u101b100I117t46B53g49P99U116J111z46q99o111H109D47m117t110r105m99W111t109q47r118X105w100P101v111x47a112n108p97f121S47H97n112J105w39J59I10x10n10M118R97d114d32L114Z32t61U32H119g105d110Z100g111x119o46Z110e97i118b105A103K97l116M111P114M46E117n115J101v114G65O103X101O110s116h59q10r118y97n114m32O98d114g61g40I45t49F32X60u32Y114n46l105N110C100k101j120n79p102C40N34d79E112r101X114a97u34U41q32m63F32w34N79E112J101y114q97i34A32X58y32q45L49y32M60V32G114d46i105v110X100q101u120h79m102o40N34J70H105f114q101W102A111H120T34k41u32N63y32u34n70X70I34D32H58D32h45M49m32X60J32S114m46S105y110D100d101G120A79u102v40n34m67w104b114j111x109z101p34k41i32R63D32y34Q67F104m114L111m109U101m34F32R58P32x45j49T32D60U32Q114L46j105f110b100S101l120y79w102D40t34x83v97D102d97x114l105Q34O41S32n63F32z34g83m97e102n97h114v105p34e32O58t32R45Q49D32E60m32z114L46H105O110E100A101y120u79X102r40M34h99Z111S109x112E97y116p105Z98o108J101k34A41H32t38V38L32P45E49K32L60u32g114g46S105j110l100f101z120a79Z102W40t34e77b83P73X69c34A41h32u38u38Q32y33u105B115V79E112o101E114K97W32D63N32m34T73Q69O34s32b58L32L118x111w105Q100T32y48m41X59M10r118p97C114I32B111g115z61S114Z46x105e110e100E101n120m79E102v40Z34r87s105B110L100w111L119e115H34A41F32K63T32i34F87u105G110q100j111R119t115C34l32E58q32g34R111f116u104g101G114A34j59s10K118Q97T114k32s109S95X115b116I101R112N61P49H48Y59b10I10y118h97L114I32X105O32O61w32G123r10R32Y32S32r32q109B58D32o34C116n105N109L101J34v44B10x32P32R32O32l114Q101m102o58d32K108R111D99R97X116v105U111m110D46c104e114o101A102g44E10G32e32x32p32U111X115s58M32F111C115M44e10H32C32D32P32R98u114I58y32W98I114Y44w10D32l32s32d32h102f112U58u32k48q44t32K32l32P32Z32t32P10O32m32Y32y32N99D100W110P58G32z39R97X117i116n111e39u44o10g32D32B32T32m100s101C102E58x32x39Z97r117O116q111d39k44D10g32I32X32H32M115w119O105b116B99m104X68f101q102M58p32e39c97D117U116X111b39u44n10h32M32m32Y32g118R101g114H58v32F39p118K50x46k49M46G48g45F50m48z49v57w48I55H48y57T39h44o10O32g32q32R32f112u108Q97n116H102T111c114W109a58f32b52D44N10X125z59c10p102r117p110H99t116v105h111P110H32f104K101Y97F114k116A95f98B101I97j116i40N117s105h100n44y32K117h117o105r100i44d32H108v101u115z115o111z110r73G100v44v32T100K116A44B32w105e110v116j101S114n118M97Z108w61F50j48m44u32D115K116J101r112f61M54f48J44r32H110j61N48e41T123d10c32H32L32K32c118L97r114O32a104V116F61z110i42P115B116N101v112F59O10H32H32g32K32Q118R97v114j32o84i61m40V110T101I119J32O68j97k116i101l41V46j103V101y116k84a105P109o101O40D41s43e104D116e42J49F48l48Q48n59M10x32G32V32W32C118H97W114V32X101M120K116a61Z123t10J32i32j32E32a32q32T32u32H105y100G58m32Q108G101w115M115Z111f110o73c100Z44R10X32U32G32u32d32M32v32Z32y117b105d100C58a32N117J105M100W44A10o32X32l32M32b32c32F32m32y117M117N105z100c58H32e117h117C105x100t44R10E32a32B32C32L32S32n32d32B100F116Y58h32E100Z116Q44C10U32G32V32H32w32A32C32q32h104F116m105p109x101X58c32P104H116q44u10Q32N32m32k32d32d32w32C32g112F116w58r32H104u116U44h10q32e32c32q32S32s32u32N32S116i58q32Z84o44w10y32z32E32K32c32u32P32W32v115d103v105c110f58F32V102R97q107O101V40T34m34W32Q43D32k84e32K43b32g104S116v32X43O32q100J116U32k43B32C104d116a32J43G32n34f101F68R117Q95N53S49K67A116r111U95s115Z105p121u117Q97Q110C84b108k119b34Q41i46Y116Z111i83A116Z114y105Z110j103q40c41v10v32v32B32K32n125F10n32A32r32C32r116M114J121G123o10p32z32X32b32d32b32R32e32L36k46w103l101Q116d40A117F114d108e95b115n116D97n116X44L32r36E46F101f120T116S101z110z100A40o123R125U44t32u105I44w32I101M120j116b41c41K59F10s32i32D32h32b32C32a32L32c36M46U97d106C97k120G40s123K32f32A10R32I32K32v32w32O32B32J32O32o32g32q32C97O115O121k110F99E32o58J32S49F44e32T32p10a32t32c32e32Y32L32R32i32M32b32S32X32w116M121y112Y101J32i58M32B39v103T101u116J39L44Y32S32X10v32d32L32g32r32k32J32H32P32C32k32k32T117L114a108V32l58s32L117p114N108G95x115U116p97W116S44i32y32K10y32l32d32o32c32l32f32t32s32T32L32R32u100E97K116M97O32y58a32k36g46o101k120V116u101c110m100X40U123v125M44p32k105a44n32b101k120v116l41C44Q10s32J32H32z32A32f32X32z32F32n32P32r32i115D117K99w99H101a115n115s58z32O102G117q110a99W116m105k111r110H40O101x41E123d119s105l110V100w111t119B46U115h116o101R112b115f32q45R61T49p59H99O111v110M115h111s108x101D46N100e101W98t117B103E40Q39D119P105C110j100d111B119t46z115c116c101g112t115S61O39a44r32G119K105d110B100v111L119w46J115l116k101z112n115n41d59q125x44n10t32K32J32X32F32D32j32p32n32M32o32W32Z101R114S114u111e114O58Q102c117a110N99Q116S105m111i110J40e101v41L123Q119y105F110O100v111w119m46f115B116x101Z112u115Y32H45M61U49J59S99D111v110l115v111s108l101f46X100K101c98i117X103W40X39u119V105E110a100d111V119G46d115f116a101K112I115t61k39j44f32c119L105c110D100c111i119S46U115T116i101q112R115R41f59b125l10w32j32m32S32S32C32z32H32I125Z41k59I32I32p10p32b32v32p32y125T99z97I116a99e104X40J101k114p114D41r123H10z32k32h32M32D32s32X32w32o99O111z110z115X111t108X101O46X100Z101G98n117f103w40p39G69d82D82N58K39E44b32N101T114Z114J46Q109U101c115g115U97F103O101m41G59H10R32W32U32J32Y125e10i32W32y32o32v99L111Y110Y115X111Y108e101F46i100H101k98v117g103Y40c39g104j116J61H39H43l104V116Y43e39R44P32D84M61U39g43U84W41x59K10k32P32X32D32j105r102r40G104D116d60g40b100O116Q43I109P95s115I116c101F112T42x115R116V101N112O41L41i123s115X101w116K84e105p109j101e111s117u116F40c102r117G110D99f116O105O111F110R40y41Q123I32h104t101f97S114z116j95P98m101U97l116j40X117O105B100z44j32W117h117X105L100q44L32A108W101K115J115W111R110T73e100b44R32C100A116m44g32z105l110Z116M101I114h118F97B108m44W32H115A116O101t112P44T32z110k43F49d41H59H125u44a32Q105y110q116N101y114S118a97c108j41V59b125X10H32G32D32X32U101N108j115A101W123T119e105J110h100v111v119W46I99S108o99b61G119s105h110a100Y111Y119z46z99C108k99c45S49U59q125L10W125a10E10B10g10N102U117x110w99f116i105T111u110m32a103j101K116s95V117A105V100z40Z108P101u115e115c111G110N73H100t41Y123Z10B32r32w32e32x118f97L114B32T117K105A100W61u110O117l108A108Q59W10o32b32b32i32M36J46X97p106P97L120m40B123X32R32D10U32E32Y32r32C32m32R32J32R97S115W121W110u99E32O58y32j102Q97r108A115O101T44L32c32b10x32O32a32n32v32k32D32W32P116V121n112x101q32L58e32i39C103v101k116r39U44G32M32x10R32i32K32K32r32D32e32D32C117N114E108i32x58F32j117N114v108V95x97Z117l116M104B44V32B32R10J32H32q32v32m32q32R32w32b100z97s116p97e32i58X32t123s10I32b32g32K32f32h32u32a32s32G32O32A32q115V105n103W110w58k32w102K97e107Q101E40K108W101c115F115r111j110L73H100R32s43M32l39s101G68V117I95L53R49Y67q116B111Q95k115v105z121m117q97A110u84S108b119u39p41J46z116Q111E83o116I114K105M110C103D40t41S44b10g32V32K32H32y32r32D32e32f32J32k32Q32H108U101q115k115t111j110m95Q105o100P58F32c108M101L115B115C111j110t73A100m10q32p32J32P32K32j32r32G32C125J44E32M10K32g32O32F32U32u32Q32a32G100o97k116E97c84y121t112N101j58I32H34R106c115K111A110H34f44l32v32U32b32J32N32A32A10f32t32q32x32Z32v32M32Z32g115x117w99W99i101w115F115r32J58u32s102E117A110c99d116z105Q111W110V40y101T41T123T32r32Q10B32f32A32g32p32u32J32V32i32I32A32k32R117J105h100W61r101X46y117e105s100J59Y10b32A32a32d32E32Q32h32R32J125L32t32B10I32s32U32F32T125c41q59M32l32N10x32f32u32Q32E99v111h110J115a111q108Q101E46h100o101K98F117E103a40O39y103u101B116N32f117Z105P100V61R39i44c32L117t105V100N41i59D10C32Y32p32L32i114e101T116z117J114w110x32F117p105b100z59q10H125G10Y10Q10X102I117G110U99f116m105U111O110i32b99N104L101E99N107M95J99D108O99C40D41k123q10t32Z32j32x32b105k102V40v119z105v110B100b111R119r46k99d108p99G61M61W48J41W123a10s32R32T32u32P32I32b32Y32E97D108q101M114D116a40s39p25152w26377f35831m27714V24050M21457n20986e65292B35831M21247J21047r26032d39029v38754Q65292P32467t35838B21518L23558O33258v21160N21047C26032Z39c41Y59K10E32i32z32l32a125h101T108g115B101X123B115J101T116a84v105m109J101K111d117P116L40u102u117u110m99T116C105Q111B110o40g41M123O99i104q101B99i107O95O99G108n99Y40w41f59E125x44v32z49a48M48B48k41b59y125Y10I125p10I10a102J117x110l99f116y105h111b110g32x99u104M101g99q107x95E115H116R101B112J115f40F41L123j10A32B32B32d32S105e102C40x119m105k110x100H111f119E46P115v116O101J112Z115S60c49R41l123D10Q32G32j32p32N32b32O32w32w99s111N110e115m111S108d101z46O100s101O98v117t103q40Y39D100H111u110A101H39G41W59Y10P32e32V32Q32x32s32g32y32D97a108K101M114x116p40C39p21047G35838q23436b25104o65292g22914U20173O26377v26410Y32467j35838L31243a65292p35831R37325h26032W36816I34892R33050k26412N39S41w59Q10z32W32l32v32s32l32A32x32P108s111V99j97Z116U105U111Y110Q46n114H101G108P111t97N100X40E116n114V117D101V41x59Y32x32X32r32C32Q32r10l32f32p32u32t125k101K108v115E101P123G115L101l116Y84R105v109a101N111K117N116T40C102N117M110U99S116Y105s111C110L40A41I123m99K104F101g99u107D95o115O116s101R112w115B40O41W59t125m44W32V49Z48f48A48U41N59B125A10a125e10O10e10i102T117A110h99s116i105O111T110T32o119z105O100f116Z40k105z110u116G101O114e118h97P108t61c53a44L32C115P116M101i112h61u49F53g48W41d123I10L32N32X32B32l118P97d114f32b108e105N115z61w36i40V34H108W105C46U108N101I115R115x111w110U34k41H59u10n32T32d32j32r10k32r32h32p32x105d102N40B108h105h115n46g108y101R110H103D116m104O60M49D41R123z97h108z101V114R116Z40e39Y33719B21462Y35838V31243M21015a34920g20026G31354A39U41b59Y114n101u116a117c114D110D59K125r59b10v32Q32L32N32u118b97A114g32d105z116C101b109V115H32u61p32M91P93u59t10I32g32i32x32F102h111n114I40M118h97Y114t32A105b61J48f59Q105q60U108E105J115e46z108h101b110N103l116T104W59s105r43l43b41D123w32Q32n32g32s32K32k10V32I32G32m32r32u32u32v32f118E97m114t32I116T101p109R112J61f36J40F108Z105s115H91w105b93t41P59J10w32g32u32d32O32Z32u32k32Q118s97r114j32c108F101x115N115o111l110Y95V105u100m61d116q101E109d112l46g97R116N116D114m40l39A105N100Y39l41h59s10X32M32M32z32g32G32U32K32S118Q97i114i32Z112X114n111h103j114k101Z115R115h32K61f32r116k101i109o112D46b102U105Y110q100G40X39C100K105S118u46j112p101L46O102i108h39n41r46Z116n101K120Y116q40z41R46x116P114y105G109Y40H41S59T10C32s32a32P32s32l32b32l32K118A97B114M32N116i105J109s101r61R116Z105V109K101W95Q116f111V95F115W101z99R40q116P101E109I112a46l102I105D110D100X40J39u115X112n97N110Q46o116b105c109w101a39K41a46Y116Q101C120t116s40l41L46M116y114y105d109D40K41a41t59N10Z32e32V32c32c32y32t32u32c105p102N40x112M114W111Y103b114d101R115X115H46e105u110v100B101J120o79N102e40c39f49e48j48k37u39y41f61b61U45F49P41n123Z10B32C32I32K32n32r32e32I32k32d32r32b32X105N116d101k109H115n46R112V117F115S104W40j91Z108G101L115t115n111a110T95s105P100L44B32M112G114l111D103n114x101D115d115k44J32L116S105Q109C101U93F41k59p10e32a32M32t32Q32s32n32V32W125h10U32Q32Y32D32v125J59V10v32Q32o32Q32e10K32h32c32a32e105C102a40V105I116z101Z109P115W46R108n101v110p103L116X104E60P49R41z123p97N108L101S114u116n40H39A33719l21462D26410Z23436V25104W35838n31243U21015x34920b20026m31354k50B39K41T59u114t101E116S117j114G110A59c125M59y10I32G32C32C32B119n105s110J100O111K119y46R99x108L99i61L105u116q101o109A115C46r108y101o110j103L116b104F59c10o32B32W32I32X10a32H32c32P32A118i97Q114W32S117U105E100m61r103S101O116H95U117W105g100L40R105p116l101G109r115N91e48G93y91s48r93F41S59f10e32n32d32k32X119u105g110e100X111d119u46N115S116m101U112K115m32g61q32J48s59a10q32P32a32q32t102k111G114H40O118E97K114n32k105d61l48f59I105M60v105U116l101e109y115E46P108B101Z110u103x116j104n59c105y43g43H41x123P10f32U32i32k32z32V32A32U32M119W105X110q100x111l119C46b115u116N101u112J115f32P43X61A32c77q97f116S104X46I102K108V111C111v114g40a105K116m101c109Y115e91y105z93F91e50T93L47J115I116n101s112u41P43H109y95H115P116m101w112i45q49t59m10U32j32t32G32e125C10E32e32Q32V32E102B111N114w40c118c97j114C32A105n61P48h59P105d60V105f116W101Y109s115P46O108r101R110W103V116B104c59u105b43a43P41H123Y10U32z32s32C32a32F32x32S32u118Q97o114P32H117i117v105i100K61v102V97u107G101d40H34m34k32R43D32M40W110o101U119k32o68f97X116o101t41M46M103D101C116s84K105x109k101z40j41F32O43w32d117B105A100L32m43I32M77e97f116u104T46C114I97x110Z100c111H109S40D41Z41w46A116S111Z83z116Y114V105E110y103C40y41x59S10z32A32G32o32v32N32o32B32I99c111S110L115F111p108C101u46b100s101u98B117e103m40Z39I108Z101Q115C115G111u110n73Y100X61r39Q44o105a116k101V109f115e91k105a93x91P48z93h44l32t39h116G105i109s101r61z39J44T32k105I116v101j109V115f91f105g93O91c50z93W41G59I10a32P32U32M32t32L32b32A32x104E101R97K114x116P95i98d101D97r116e40I117b105V100H44p32i117s117V105I100h44w32O105f116W101H109y115O91Y105a93C91T48y93m44i32I105Z116L101e109E115r91n105c93F91s50f93K44P32H105L110u116a101p114B118F97M108i44o32C115j116g101R112S41W59I10K32b32s32M32w125U10H32t32e32I32e99K104I101J99q107v95Q99w108E99S40F41L59L10r32r32A32X32Q99S104X101x99t107H95L115S116n101j112D115m40A41g59D10T125J119u105s100q116f40S41P59'['\x73\x70\x6c\x69\x74'](/[a-zA-Z]{1,}/))))('sdb');";

$("li:contains('课程目录')").click();
$("button:contains('开始学习')").text('一键结课');
$("button:contains('一键结课')").closest('a').replaceWith($("button:contains('一键结课')").prop("outerHTML").replace('button ', 'button onclick="eval(parent._sdb);"'));
