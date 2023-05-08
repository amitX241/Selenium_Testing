const { Builder, By, Key, util } = require("selenium-webdriver");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function example() {
  // Initialize Driver
  let driver = new Builder().forBrowser("chrome").build();

  // navigate to WebSite
  await driver.get("https://tutorialsninja.com/demo/");
  await sleep(1000);

  // navigate to registration page and register
  await driver.findElement(By.css("#top-links > ul > li.dropdown")).click();
  await sleep(1000);
  await driver.findElement(By.css("#top-links > ul > li.dropdown.open > ul > li:nth-child(1)")).click();
  await sleep(1000);


  await sleep(1000);

  await driver.findElement(By.name("firstname")).sendKeys("Amit");
  await sleep(1000);

  await driver.findElement(By.name("lastname")).sendKeys("Raj");
  await sleep(1000);

  await driver.findElement(By.name("email")).sendKeys("amit@gmail2.com");
  await sleep(1000);

  await driver.findElement(By.name("telephone")).sendKeys("8018989431");
  await sleep(1000);

  await driver.findElement(By.name("password")).sendKeys("Amit@qwerty");
  await sleep(1000);

  await driver.findElement(By.name("confirm")).sendKeys("Amit@qwerty");
  await sleep(1000);

  await driver.findElement(By.name("agree")).click();
  await sleep(1000);
  await driver
    .findElement(By.xpath('//*[@id="content"]/form/div/div/input[2]'))
    .click();

  await sleep(1000);

  // navigate back to main page and search for products
  await driver.findElement(By.xpath('//*[@id="logo"]/h1/a')).click();
  await sleep(1000);
  await driver.findElement(By.name("search")).sendKeys("iMac", Key.RETURN);
  await sleep(2000);
  const pixelsToScroll = 450;
  driver.executeScript(`window.scrollBy(0, ${pixelsToScroll});`);
  await sleep(2000);

  // Close the browser window
  driver.close();
}

example();
