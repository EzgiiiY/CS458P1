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

//test 2.2: Sign up button works correctly
driver.findElement(By.id("signUp"))
    .then(link=>link.click())
    .then(()=>driver.getCurrentUrl())
    .then(url=>{console.log(url);console.log(url==="http://localhost:3000/signup")})
;
