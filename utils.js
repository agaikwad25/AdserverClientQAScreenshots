const puppeteer = require('puppeteer');
const options = require('./options.js');

module.exports = {
    getBrowserAndPage: getBrowserAndPage,
    tearDown: tearDown,
};

// Puppeteer setup functions
async function getBrowserAndPage() {
    browser = await puppeteer.launch(options.browser);

    page = await browser.newPage();
    page.setViewport(options.page.viewPortDimensions);

    await page.tracing.start({
        path: 'trace.json',
        screenshots: true
    });
    return [browser, page];
}

async function tearDown(browser, page) {
    await page.tracing.stop();
    browser.close();
}

