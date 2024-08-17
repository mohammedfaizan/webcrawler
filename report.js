function printReport(pages) {
  console.log("\nFinal crawl results:");
  for (const [url, count] of Object.entries(pages)) {
    console.log(`Found ${count} internal link(s) to ${url}`);
  }
}

module.exports = { printReport };
