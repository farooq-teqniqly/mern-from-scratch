const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = process.env.AZURE_APP_URL || "http://localhost:3000";

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const content = await page.content();

    if (content.includes("Learn React")) {
      console.log('Text "Learn React" found on the page. Verification passed.');
    } else {
      console.error(
        'Text "Learn React" not found on the page. Verification failed.'
      );
      process.exit(1); // Fail the GitHub Actions workflow
    }
  } catch (error) {
    console.error("An error occurred during verification:", error);
    process.exit(1); // Fail the GitHub Actions workflow
  } finally {
    await browser.close();
  }
})();
