const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  const url = process.env.AZURE_APP_URL || "http://localhost:3000";

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Get the page title
    const pageTitle = await page.title();
    const expectedTitle = "Welcome to ProShop!"; // Replace with your expected title

    console.log(`Page title: ${pageTitle}`);

    // Verify the page title
    if (pageTitle === expectedTitle) {
      console.log(
        `Title "${expectedTitle}" matches the expected title. Verification passed.`
      );
    } else {
      console.error(
        `Title "${expectedTitle}" does not match the expected title. Verification failed.`
      );
      process.exit(1);
    }

    const content = await page.content();
    const expectedText = "ProShop";

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
