const {Builder, By, Key, until} = require('selenium-webdriver');

(async function() {
  // Set up the webdriver
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.google.com');

  // Search for a query
  let search_bar = await driver.findElement(By.name('q'));
  await search_bar.sendKeys('your search query', Key.RETURN);

  // Get the top 10 search results
  let search_results = await driver.findElements(By.css('a'));

  console.log(search_results);

  // Print the URLs of the top 10 search results
  for (let i = 0; i < 10; i++) {
    console.log(`${i+1}. ${await search_results[i].getAttribute('href')}`);
  }

  // Close the webdriver
  await driver.quit();
})();