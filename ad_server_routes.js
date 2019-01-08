var fs = require("fs");

 var contents = fs.readFileSync("data.json");
// Define to JSON type
 
 
 
/*let getAdServerRoutes = function() {
    
    var jsonContent = JSON.parse(contents);
        console.log(jsonContent);
        return[{
        
            id: (jsonContent.placementSelector),
            url: (jsonContent.toutBaseUrl + jsonContent.toutPreviewQS)  
            
        }]       
           
 }*/


let getAdServerRoutes = function() {
       var jsonContent = JSON.parse(contents);

   return [
   
  /* {
    id: (jsonContent.placementSelector),
            url: (jsonContent.toutBaseUrl + jsonContent.toutPreviewQS)
   }*/
   {id: `worldation`,
            url: `http://2rbtx4ycab.worldation.com/top-locations/100-unique-hotels-around-world/2?ntv_a=121910&ntv_pl=1090996`
        },{
            id: `eternallifestyle`,
            url: `http://www.eternallifestyle.com/living/25-ton-whale-wouldnt-let-diver-escape-soon-realized-life-stake/2/?ntv_a=232816&ntv_pl=1090975`
        },{
            id: `moneywise1`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=232819&ntv_pl=1090955`
        },{
            id: `moneywise2`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=232817&ntv_pl=1090954`
        },{
            id: `moneywise3`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=237593&ntv_pl=1090953`
        },{
            id: `moneywise4`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=232820&ntv_pl=1090952`
        },{
            id: `moneywise5`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=233405&ntv_pl=1090951`
        },{
            id: `moneywise6`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=244795&ntv_pl=1090950`
        },{
            id: `moneywise7`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=245194&ntv_pl=1090948`
        },{
            id: `sportsretriever`,
            url: `http://dj5iwuva.sportsretriever.com/football/where-did-these-quarterbacks-go/2?ntv_a=224456&ntv_pl=1090401`
        },{
            id: `travelfuntu`,
            url: `http://www.travelfuntu.com/entertainment/stars-70s-now-2-2/2/?ntv_a=240747&ntv_pl=1090164`
        },
        /*{
            id: `reviewjournal`,
            url: `https://www.reviewjournal.com/news/news-columns/road-warrior/tinted-headlights-may-be-trendy-but-theyre-illegal-in-nevada/?ntv_a=241606&ntv_pl=1090069`
        },*/
        {
            id: `nydailynews1`,
            url: `http://www.nydailynews.com/?ntv_a=236957&ntv_pl=1089967`
        },{
            id: `nydailynews2`,
            url: `http://www.nydailynews.com/?ntv_a=241604&ntv_pl=1089966`
        },{
            id: `kiwireport`,
            url: `http://www.kiwireport.com/30-hilarious-portrayals-office-life/2/?ntv_a=245195&ntv_pl=1089963`
        },{
            id: `monagiza`,
            url: `http://www.monagiza.com/stories/marvel-women-off-screen/2/?ntv_a=232825&ntv_pl=1089958`
        },{
            id: `brain-sharper`,
            url: `http://www.brain-sharper.com/entertainment/john-travolta/2/?ntv_a=241611&ntv_pl=1089886`
        },{
            id: `viralised`,
            url: `http://viralised.com/dating-app-huggle-is-changing-the-face-of-dating-or-is-it/?ntv_a=241602&ntv_pl=1089878`
        },{
            id: `al`,
            url: `http://www.al.com/?ntv_a=232826&ntv_pl=1089520`
        },{
            id: `ninjajournalist`,
            url: `http://www.ninjajournalist.com/entertainment/stars-regular-life-fb/2/?ntv_a=234388&ntv_pl=1088082`
        },{
            id: `pensandpatron`,
            url: `http://www.pensandpatron.com/editorial/rare-photos-of-the-old-west-fb/2/?ntv_a=230733&ntv_pl=1088076`
        },{
            id: `graduatez`,
            url: `http://www.graduatez.com/view/why-you-should-get-involved-on-campus/?src=qa&utm_source=nativo?ntv_a=236961&ntv_pl=1088014`
        },{
            id: `ajc`,
            url: `http://www.ajc.com/news/national-govt--politics/trump-asks-how-joe-paterno-doing-pennsylvania-rally/fryoWxPNCvnErLKRZnaF8M/?ntv_a=236960&ntv_pl=1087797`
        },{
            id: `nationalreview1`,
            url: `http://nationalreview.com/?ntv_a=236243&ntv_pl=1087612`
        },{
            id: `nationalreview2`,
            url: `https://www.nationalreview.com/2018/02/911-syndrome-fbi-little-accountability/?ntv_a=237367&ntv_pl=1087611`
        },{
            id: `moneywise8`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=222766&ntv_pl=1082314`
        },{
            id: `moneywise9`,
            url: `https://moneywise.com/a/taxes-just-got-tougher-but-you-might-still-file-for-free?ntv_a=230131&ntv_pl=1082313`
        },{
            id: `latimes`,
            url: `http://www.latimes.com/local/lanow/la-me-ln-road-rage-motorcycle-crash-20170622-story.html?ntv_a=245891&ntv_pl=1081108`
        },{
            id: `247wallst`,
            url: `http://247wallst.com/pm-ad-testing/?ntv_a=229852&ntv_pl=1081050`
        },{
            id: `movieweb`,
            url: `https://movieweb.com/it-movie-2017-alternate-ending-video-blu-ray/?ntv_a=229851&ntv_pl=1081036`
        },{
        //     id: `tasteofhome`,
            url: `http://www.tasteofhome.com/recipes/porky-s-sandwiches?ntv_a=236410&ntv_pl=1079720`
        },{
            id: `familyhandyman`,
            url: `http://www.familyhandyman.com/woodworking/projects/how-to-build-a-bar/view-all?ntv_a=241612&ntv_pl=1079681`
        },{
            id: `rd`,
            url: `http://www.rd.com/relationships/canoe-relationship-test/?ntv_a=229848&ntv_pl=1079680`
        },{
            id: `lapatilla`,
            url: `https://www.lapatilla.com/site/?ntv_a=245926&ntv_pl=1079592`
        },{
            id: `entrepreneur`,
            url: `https://www.entrepreneur.com/article/303404?ntv_a=234001&ntv_pl=1076541`
        },{
            id: `barrons`,
            url: `http://www.barrons.com/articles/how-to-trade-ges-dividend-cut-rumor-1507743058?ntv_a=238322&ntv_pl=1074050`
        },{
            id: `teslarati`,
            url: `http://www.teslarati.com/tesla-model-3-tops-chevy-bolt-ev-sales-chart/?ntv_a=243636&ntv_pl=1074034`
        },{
            id: `chicago`,
            url: `https://chicago.suntimes.com/news/supreme-court-colorado-baker-same-sex-couple/?ntv_a=246176&ntv_pl=1073945`
        },{
            id: `newson61`,
            url: `http://www.newson6.com/?ntv_a=232827&ntv_pl=1073591`
        },{
            id: `newson62`,
            url: `http://www.newson6.com/story/36389492/road-work-set-to-begin-on-51st-street-between-sheridan-and-memorial?ntv_a=241605&ntv_pl=1073590`
        },{
            id: `mom`,
            url: `http://mom.me/kids/30972-raising-kids-demand-world/?ntv_a=229849&ntv_pl=1073405`
        },{
            id: `drivezing`,
            url: `http://drivezing.com/2019-ranger-americas-biggest-small-truck-returns/?ntv_a=221894&ntv_pl=1073025`
        },{
            id: `chicagotribune`,
            url: `http://www.chicagotribune.com/?ntv_a=234011&ntv_pl=1072933`
        },{
            id: `marketwatch`,
            url: `http://www.marketwatch.com/story/fda-warns-of-serious-manufacturing-violations-in-letter-to-epipen-manufacturing-facility-2017-09-07-141034838?ntv_a=246051&ntv_pl=1072763`
        },{
            id: `bobshideout`,
            url: `http://www.bobshideout.com/view/africas-renewable-energy-plan/?src=qa&utm_source=nativo?ntv_a=228009&ntv_pl=1072327`
        },{
            id: `parentztalk`,
            url: `http://www.parentztalk.com/view/three-recipes-that-utilize-your-leftover-valentines-day-candy/?src=qa&utm_source=nativo?ntv_a=229850&ntv_pl=1072125`
        },{
            id: `wrestlinginc`,
            url: `http://www.wrestlinginc.com?ntv_a=232194&ntv_pl=1071366`
        },{
            id: `dailywire1`,
            url: `http://www.dailywire.com/news/10184/political-violence-media-corruption-and-thank-god-john-nolte?ntv_a=243651&ntv_pl=1071007`
        },{
            id: `dailywire2`,
            url: `http://www.dailywire.com?ntv_a=234352&ntv_pl=1070998`
        },{
            id: `wtnh`,
            url: `http://www.wtnh.com?ntv_a=232828&ntv_pl=1070128`
        },{
            id: `mom`,
            url: `http://www.dailywire.com?ntv_a=239411&ntv_pl=1070080`
        },{
            id: `mom`,
            url: `http://mom.me/kids/30972-raising-kids-demand-world/?ntv_a=233641&ntv_pl=1066431`
        },{
            id: `hotnewhiphop`,
            url: `http://www.hotnewhiphop.com/adidas-confirms-new-release-date-for-zebra-yeezy-boost-350-v2-news.33672.html?ntv_a=244513&ntv_pl=1066404`
        },{
            id: `tworeddots`,
            url: `http://www.tworeddots.com/view/budget-friendly-vacations/?src=qa&utm_source=nativo?ntv_a=237887&ntv_pl=1066357`
        },{
            id: `icepop`,
            url: `http://www.icepop.com/modern-family/?ntv_a=243035&ntv_pl=1059239`
        },{
            id: `ocregister`,
            url: `http://www.ocregister.com/2017/04/17/rents-hit-all-time-highs-amid-job-growth-and-low-vacancy-rates/?ntv_a=244522&ntv_pl=1057046`
        },{
            id: `lifedaily`,
            url: `http://www.lifedaily.com/story/the-story-of-this-remarkable-tree-is-nothing-less-than-a-miracle/?ntv_a=241738&ntv_pl=1053879`
        },{
            id: `directexpose`,
            url: `http://www.directexpose.com/gavin-rossdale-divorce-gwen-stefani/?ntv_a=243772&ntv_pl=1047626`
        },{
            id: `tampabay`,
            url: `http://www.tampabay.com/?ntv_a=244725&ntv_pl=1046382`
        },{
            id: `wyff4`,
            url: `http://www.wyff4.com/?ntv_a=241589&ntv_pl=1043254`
        },{
            id: `wgal`,
            url: `http://www.wgal.com/?ntv_a=228003&ntv_pl=1039934`
        },{
            id: `wmur`,
            url: `http://www.wmur.com/?ntv_a=217609&ntv_pl=1039923`
        },{
            id: `wmur2`,
            url: `http://www.wmur.com/article/arrest-made-in-goffstown-indecent-exposure-investigation/6944337?ntv_a=239689&ntv_pl=1039922`
        },{
            id: `wlwt`,
            url: `http://www.wlwt.com/?ntv_a=243864&ntv_pl=1039340`
        },{
            id: `yeahmotor`,
            url: `http://yeahmotor.com/trucks/the-humvee-vs-the-6-foot-wall/?ntv_a=233663&ntv_pl=1028903`
        },{
            id: `wsoctv`,
            url: `http://www.wsoctv.com/web/wsoc/news/local/south-trade-street-shut-down-in-matthews-for-gas-leak/407996805?ntv_a=217610&ntv_pl=1028659`
        },{
            id: `mercurynews`,
            url: `http://www.mercurynews.com/2017/06/01/native-gardens-can-help-support-pollinators-and-wildlife/?ntv_a=219813&ntv_pl=1028524`
        },{
            id: `macworld`,
            url: `http://www.macworld.co.uk/how-to/iphone/how-get-wireless-charging-on-older-iphones-3642919/?ntv_a=243755&ntv_pl=993588`
        },{
            id: `apnews`,
            url: `http://apnews.com/?ntv_a=221833&ntv_pl=991390`
        },{
            id: `sparknotes`,
            url: `http://www.sparknotes.com/lit/mocking/section2.rhtml?ntv_a=220193&ntv_pl=989016`
        },{
            id: `mom`,
            url: `http://mom.me/kids/30972-raising-kids-demand-world/?ntv_a=226742&ntv_pl=987215`
        },{
            id: `denverpost`,
            url: `http://www.denverpost.com/?ntv_a=240084&ntv_pl=986902`
        },{
            id: `accessatlanta`,
            url: `http://www.accessatlanta.com/?ntv_a=242836&ntv_pl=985663`
        },{
            id: `ajc1`,
            url: `http://www.ajc.com/?ntv_a=243036&ntv_pl=985086`
        },{
            id: `ajc2`,
            url: `http://www.ajc.com/?ntv_a=244531&ntv_pl=985084`
        },{
            id: `ajc3`,
            url: `http://www.ajc.com/?ntv_a=243605&ntv_pl=985083`
        },{
            id: `marketwatch1`,
            url: `http://www.marketwatch.com?ntv_a=220196&ntv_pl=869416`
        },{
            id: `marketwatch2`,
            url: `http://www.marketwatch.com?ntv_a=233703&ntv_pl=869413`
        },{
            id: `chron1`,
            url: `http://www.chron.com/?ntv_a=243429&ntv_pl=868768`
        },{
            id: `chron2`,
            url: `http://www.chron.com/?ntv_a=241479&ntv_pl=868756`
        },{
            id: `newstimes1`,
            url: `http://www.newstimes.com/?ntv_a=245617&ntv_pl=868732`
        },{
            id: `newstimes2`,
            url: `http://www.newstimes.com/?ntv_a=244530&ntv_pl=868726`
        },{
            id: `ctpost1`,
            url: `http://www.ctpost.com/?ntv_a=240086&ntv_pl=868640`
        },{
            id: `ctpost2`,
            url: `http://www.ctpost.com/?ntv_a=238119&ntv_pl=868632`
        },{
            id: `sfgate1`,
            url: `http://www.sfgate.com/?ntv_a=238827&ntv_pl=868582`
        },{
            id: `sfgate2`,
            url: `http://www.sfgate.com/?ntv_a=240087&ntv_pl=868554`
        },{
            id: `mysanantonio1`,
            url: `http://www.mysanantonio.com/?ntv_a=246938&ntv_pl=868480`
        },{
            id: `mysanantonio2`,
            url: `http://www.mysanantonio.com/?ntv_a=236975&ntv_pl=868468`
        },{
            id: `nola1`,
            url: `http://www.nola.com/?ntv_a=221160&ntv_pl=861037`
        },{
            id: `pennlive3`,
            url: `http://www.pennlive.com/?ntv_a=239251&ntv_pl=858907`
        },{
            id: `mysanantonio3`,
            url: `http://www.mysanantonio.com/?ntv_a=240083&ntv_pl=844154`
        },{
            id: `ebaumsworld`,
            url: `http://www.ebaumsworld.com?ntv_a=243609&ntv_pl=843636`
        },{
            id: `kcci`,
            url: `http://www.kcci.com/?ntv_a=241476&ntv_pl=843171`
        },{
            id: `clickondetroit`,
            url: `http://clickondetroit.com/?ntv_a=241724&ntv_pl=843109`
        },{
            id: `ketv`,
            url: `http://www.ketv.com/?ntv_a=236972&ntv_pl=840910`
        },{
            id: `wcvb`,
            url: `http://www.wcvb.com/?ntv_a=228002&ntv_pl=840775`
        },{
            id: `wtae`,
            url: `http://www.wtae.com/?ntv_a=219572&ntv_pl=840762`
        },{
            id: `chron`,
            url: `http://www.chron.com/?ntv_a=240901&ntv_pl=840294`
        },{
            id: `thehill`,
            url: `http://thehill.com/?ntv_a=243606&ntv_pl=840135`
        },{
            id: `ksat`,
            url: `https://www.ksat.com/news/via-kicks-off-viva-passport-for-holiday-season-1?ntv_a=243608&ntv_pl=839904`
        },{
            id: `salon`,
            url: `http://www.salon.com/?ntv_a=243431&ntv_pl=837139`
        },{
            id: `macworld`,
            url: `http://www.macworld.co.uk/how-to/iphone/how-get-wireless-charging-on-older-iphones-3642919/?ntv_a=243700&ntv_pl=836295`
        },{
            id: `worldlifestyle`,
            url: `https://www.worldlifestyle.com/family/wife-passes-away-hours-after-giving-birth-then-husbands-instinct-takes-over?utm_source=facebook&slides=1?ntv_a=246325&ntv_pl=836243`
        },{
            id: `bangordailynews`,
            url: `http://bangordailynews.com/?ntv_a=246321&ntv_pl=835943`
        },{
            id: `dailycaller`,
            url: `http://dailycaller.com/2016/03/16/obamas-march-madness-bracket-is-complete-trash/?ntv_a=243626&ntv_pl=834067`
        },{
            id: `click2houston`,
            url: `http://www.click2houston.com/news/mysteriously-stabbed-man-crashes-in-parking-lot-of-walmart-in-cypress/34977890?ntv_a=246280&ntv_pl=833535`
        },{
            id: `click2houston2`,
            url: `http://click2houston.com/?ntv_a=243169&ntv_pl=833533`
        },{
            id: `news4jax`,
            url: `http://www.news4jax.com/?ntv_a=246322&ntv_pl=833419`
        },{
            id: `clickondetroit2`,
            url: `http://www.clickondetroit.com/lifestyle/trendy-vampire-facial-doesnt-bite?ntv_a=246327&ntv_pl=833281`
        },{
            id: `macworld2`,
            url: `https://www.macworld.com/article/2947679/os-x/done-with-the-el-capitan-public-beta-heres-how-to-revert-your-mac-back-to-yosemite.html?ntv_a=242505&ntv_pl=781916`
        },{
            id: `miamiherald`,
            url: `http://www.miamiherald.com/news/local/community/miami-dade/article176586256.html?ntv_a=246710&ntv_pl=776813`
        },{
            id: `sfgate4`,
            url: `http://www.sfgate.com/?ntv_a=242683&ntv_pl=774517`
        },{
            id: `kmov`,
            url: `http://www.kmov.com/?ntv_a=233756&ntv_pl=774478`
        },{
            id: `kmov2`,
            url: `http://www.kmov.com/?ntv_a=225384&ntv_pl=774476`
        },{
            id: `syracuse`,
            url: `http://www.syracuse.com/?ntv_a=225392&ntv_pl=773538`
        },{
            id: `silive`,
            url: `http://www.silive.com/?ntv_a=221958&ntv_pl=773536`
        },{
            id: `nola1`,
            url: `http://www.nola.com/?ntv_a=241365&ntv_pl=773531`
        },{
            id: `nola2`,
            url: `http://www.nola.com/?ntv_a=246319&ntv_pl=773530`
        },{
            id: `masslive1`,
            url: `http://www.masslive.com/?ntv_a=246330&ntv_pl=773529`
        },{
            id: `masslive2`,
            url: `http://www.masslive.com/?ntv_a=237102&ntv_pl=773528`
        },{
            id: `lehighvalleylive`,
            url: `http://www.lehighvalleylive.com/?ntv_a=237134&ntv_pl=773526`
        },{
            id: `cleveland`,
            url: `http://www.cleveland.com/?ntv_a=231614&ntv_pl=773524`
        },{
            id: `nj`,
            url: `http://www.nj.com/?ntv_a=241384&ntv_pl=773522`
        },{
            id: `pennlive1`,
            url: `http://www.pennlive.com/?ntv_a=242603&ntv_pl=773521`
        },{
            id: `pennlive2`,
            url: `http://www.pennlive.com/?ntv_a=240980&ntv_pl=773520`
        },{
            id: `cleveland`,
            url: `http://www.cleveland.com/sports/?ntv_a=240981&ntv_pl=768161`
        },{
            id: `washingtontimes1`,
            url: `http://www.washingtontimes.com/news/2015/apr/1/menendez-demanded-visas-foreign-girlfriends-donor/?ntv_a=246798&ntv_pl=765919`
        },{
            id: `washingtontimes2`,
            url: `http://www.washingtontimes.com/?ntv_a=236555&ntv_pl=765905`
        },{
            id: `channel30001`,
            url: `http://www.channel3000.com/news/local-news/marquette-university-acquires-rare-copy-of-the-hobbit/224103933?ntv_a=244869&ntv_pl=755372`
        },{
            id: `sfgate1`,
            url: `http://twentytwowords.com/schools-around-the-u-s-are-closing-for-the-day-without-a-woman-strike/?ntv_a=240985&ntv_pl=755363`
        },{
            id: `sfgate2`,
            url: `http://www.sfgate.com/outdoors/article/Rain-brings-great-transformation-to-outdoors-5940289.php?ntv_a=243633&ntv_pl=738443`
        },{
            id: `channel30002`,
            url: `http://www.channel3000.com/?ntv_a=243412&ntv_pl=729151`
        },{
            id: `fox59`,
            url: `http://fox59.com/2014/10/09/suspect-in-indianapolis-triple-shooting-charged-with-attempted-murder-of-chicago-police-captain/?ntv_a=240983&ntv_pl=729078`
        },{
            id: `wtkr`,
            url: `http://wtkr.com/2014/10/09/dont-waste-your-money-the-best-tablet-laptop-combos/?ntv_a=246329&ntv_pl=729076`
        },{
            id: `wreg`,
            url: `http://wreg.com/2014/10/09/former-officer-convicted-of-trying-to-frame-men-for-burglary/?ntv_a=246323&ntv_pl=729074`
        },{
            id: `fox8`,
            url: `http://fox8.com/2014/10/09/suspect-takes-wallet-of-elderly-man-using-walker-police-ask-for-help-on-id/?ntv_a=228413&ntv_pl=729070`
        },{
            id: `fox6now`,
            url: `http://fox6now.com/2014/10/09/she-should-get-prison-for-life-mother-grandmother-of-two-year-old-girl-kicked-and-killed-speak-out/?ntv_a=238368&ntv_pl=729069`
        },{
            id: `whnt`,
            url: `http://whnt.com/2014/10/08/check-to-see-if-you-get-a-refund-att-will-pay-105-million-for-unauthorized-charges-on-customer-bills/?ntv_a=242514&ntv_pl=729067`
        },{
            id: `wgntv`,
            url: `http://wgntv.com/2014/10/09/nc-murder-suspect-with-devil-name-was-possessed-sacrificed-animals-and-ate-their-hearts/?ntv_a=225387&ntv_pl=729064`
        },{
            id: `myfox8`,
            url: `http://myfox8.com/2014/10/09/couple-accused-of-burying-two-people-in-yard-were-living-off-taxpayer-dollars/?ntv_a=237127&ntv_pl=729062`
        },{
            id: `fox4kc`,
            url: `http://fox4kc.com/2014/10/09/thomas-eric-duncan-6-ways-his-case-differs-from-other-u-s-ebola-cases/?ntv_a=237076&ntv_pl=729061`
        },{
            id: `fox2now`,
            url: `http://fox2now.com/2014/10/09/marine-comes-to-moms-aid-after-man-grabs-purse/?ntv_a=237153&ntv_pl=729056`
        },{
            id: `fox13now`,
            url: `http://fox13now.com/2014/10/09/black-bear-breaks-out-car-windshield-climbs-inside-to-pig-out/?ntv_a=236339&ntv_pl=729054`
        },{
            id: `kfor`,
            url: `http://kfor.com/2014/10/08/refund-if-you-purchased-a-red-bull-since-2002-the-company-owes-you-money/?ntv_a=237125&ntv_pl=729026`
        },{
            id: `q13fox`,
            url: `http://q13fox.com/2014/10/09/is-north-korea-on-a-charm-offensive-now/?ntv_a=238286&ntv_pl=729025`
        },{
            id: `ktla2`,
            url: `http://ktla.com/2017/07/12/how-to-avoid-lines-at-disneyland/?ntv_a=238278&ntv_pl=729018`
        },{
            id: `pix11`,
            url: `http://pix11.com/2014/10/08/creep-squeezes-womans-toes-shop-rite-parking-lot-before-fleeing/?ntv_a=238283&ntv_pl=729017`
        },{
            id: `worthly`,
            url: `https://worthly.com/business/five-things-didnt-know-duane-reade/?ntv_a=238279&ntv_pl=665630`
        },{
            id: `kansascity`,
            url: `http://www.kansascity.com/?ntv_a=238281&ntv_pl=664157`
        },{
            id: `5newsonline`,
            url: `http://5newsonline.com/?ntv_a=236341&ntv_pl=663996`
        },{
            id: `whnt`,
            url: `http://whnt.com/?ntv_a=242600&ntv_pl=663994`
        },{
            id: `whotv`,
            url: `http://whotv.com/?ntv_a=&ntv_pl=663993`
        },{
            id: `wtvr`,
            url: `http://wtvr.com/?ntv_a=&ntv_pl=663992`
        },{
            id: `wnep`,
            url: `http://wnep.com/?ntv_a=&ntv_pl=663991`
        },{
            id: `wreg`,
            url: `http://wreg.com/?ntv_a=&ntv_pl=663989`
        },{
            id: `myfox8`,
            url: `http://myfox8.com/?ntv_a=&ntv_pl=663988`
        },{
            id: `kfor`,
            url: `http://kfor.com/?ntv_a=&ntv_pl=663985`
        },{
            id: `fox6now`,
            url: `http://fox6now.com/?ntv_a=&ntv_pl=663983`
        },{
            id: `fox13now`,
            url: `http://fox13now.com/?ntv_a=&ntv_pl=663982`
        },{
            id: `fox4kc`,
            url: `http://fox4kc.com/?ntv_a=&ntv_pl=663981`
        },{
            id: `fox59`,
            url: `http://fox59.com/?ntv_a=&ntv_pl=663979`
        },{
            id: `fox2now`,
            url: `http://fox2now.com/?ntv_a=&ntv_pl=663978`
        },{
            id: `fox8`,
            url: `http://fox8.com/?ntv_a=&ntv_pl=663974`
        },{
            id: `wgntv`,
            url: `http://wgntv.com/?ntv_a=&ntv_pl=663971`
        },{
            id: `ktla`,
            url: `http://ktla.com/?ntv_a=&ntv_pl=663970`
        },{
            id: `shebudgets`,
            url: `http://www.shebudgets.com/lifestyle/entertainment/sofia-vergara/69858?ntv_a=&ntv_pl=381317`
        },{
            id: `kdvr`,
            url: `http://kdvr.com/?ntv_a=&ntv_pl=378674`
        },{
            id: `sfgate3`,
            url: `http://www.sfgate.com/?ntv_a=&ntv_pl=333958`
        },{
            id: `duluthnewstribune`,
            url: `http://www.duluthnewstribune.com/?ntv_a=&ntv_pl=331437`
        },{
            id: `inforum`,
            url: `http://www.inforum.com/?ntv_a=&ntv_pl=331425`
        },{
            id: `newsday`,
            url: `http://www.newsday.com/?ntv_a=&ntv_pl=331421`
        },{
            id: `barstoolsports`,
            url: `https://www.barstoolsports.com/?ntv_a=&ntv_pl=317146`
        }
        ]
}

module.exports = {getAdServerRoutes: getAdServerRoutes}


