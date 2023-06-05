const {Builder, By, Key, until} = require('selenium-webdriver');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

(async function() {
  // Set up the webdriver
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://www.example.com');

  // Find all links on the page
  let links = await driver.findElements(By.tagName('a'));

  // Choose a random link
  let random_link = links[Math.floor(Math.random() * links.length)];

  // Click on the random link
  await random_link.click();

  // Wait for the page to load
//   await driver.wait(until.urlContains(random_link.getAttribute('href')), 10000);

  sleep(10000);
  console.log('Loaded random link');

  // Extract specific data from the linked page
  let data = await driver.findElement(By.css('p')).getText();

  // Store the data
  console.log(data);

  // Close the webdriver
  await driver.quit();
})();
