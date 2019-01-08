const rt = require('./ad_server_routes.js');
const opts = require('./options.js');
const utils = require('./utils.js');
const fs = require('fs');
const pixelmatch = require('pixelmatch');
const PNG = require('pngjs').PNG;

let adServerRoutes;


let getScreenshots = async function(dir) {
    
    for(var i in rt)
    {
        routes = rt.getAdServerRoutes(i);    
        console.log("routes",routes);
    }

    [browser, page] = await getPage();

    for(let item of routes){
        console.log(item);
        await screenshotPage(item, dir);

    }

    console.log('Tearing Down Browser');
    await utils.tearDown(browser, page);
}

let getPage = async function() {
    [browser, page] = await utils.getBrowserAndPage();
    //page.goto(`http://google.com`);
    return [browser, page];
}

let screenshotPage = async function(item, dir) {
    let route = item.url;
    console.log(`screenshotting the ${route}`);
    await page.goto(route, {timeout: 0});
    // await timeout(5000);
    await takeScreenshot(page, item.id , dir);
}

let screenShotPageNew = new Promise(
        function(resolve, reject) {

        }
    );


async function takeScreenshot(page, filename, dir) {
    await page.screenshot({
        path: `${dir}${filename}.png`,
        fullPage: true
    });
    console.log(`📷  screenshotted ${dir}${filename}.png`);

}


getScreenshots('ad-server-ss/');
