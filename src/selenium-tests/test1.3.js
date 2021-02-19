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

//test 1.3: correct email/phone number
driver.findElement(By.id("basic_email"))
    .then(element=>element.sendKeys("aaaaa@a.com"))//sample password input
    .then(()=>driver.findElement(By.id("basic_password")))
    .then(element=>element.sendKeys("12345"))//sample password input
    .then(()=>driver.findElement(By.id("signIn")))    
    .then(element=>element.click())
    .then(()=>driver.getCurrentUrl())
    .then(url=>{console.log(url);console.log(url==="http://localhost:3000/thank-you")})
;