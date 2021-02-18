var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

const driver = new webdriver.Builder()
    .withCapabilities({ browserName: 'chrome', chromeOptions: { w3c: false } })
    .build();
const By = webdriver.By;
const until = webdriver.until;
const loginURL = "http://localhost:3000/signIn";

driver.navigate().to(loginURL);
//test 3 Hidden element for learn more button
driver.findElement(By.id("extraInfo"))
    .then(info=>info.isDisplayed())
    .then(bool=>console.log(bool)) //shows that the element is not displayed
    .then(()=>driver.findElement(By.id("learnMore")))
    .then(element=>element.click())
    .then(()=>driver.findElement(By.id("extraInfo")))
    .then(info=>info.isDisplayed())
    .then(bool=>console.log(bool))
 ;