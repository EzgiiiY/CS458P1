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

//test 2.3: Need help button works correctly
driver.findElement(By.id("needHelp"))
    .then(button=>button.click())
    .then(()=>driver.getCurrentUrl())
    .then(url=>{console.log(url);console.log(url==="https://www.netflix.com/tr-en/LoginHelp")})
;
