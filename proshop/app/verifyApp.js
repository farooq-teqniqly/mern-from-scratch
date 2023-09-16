const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const url = process.env.AZURE_APP_URL || "http://localhost:3000";

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const content = await page.content();
    const expectedText = "Learn React";

    if (content.includes(expectedText)) {
      console.log(
        `Text "${expectedText}" found on the page. Verification passed.`
      );
    } else {
      console.error(
        `Text "${expectedText}" not found on the page. Verification failed.`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error("An error occurred during verification:", error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
