import { chromium } from "playwright";

const main = async () => {
  const url = process.env.PDF_URL || "http://127.0.0.1:4321/";
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle" });

  await page.emulateMedia({ media: "screen" });

  await page.pdf({
    path: "public/resume.pdf",
    margin: { top: "50px", bottom: "80px" },
    printBackground: true,
    displayHeaderFooter: false,
  });

  return browser.close();
};

main();
