var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
const firefox = require('geckodriver');

const driverChrome = new webdriver.Builder()
    .withCapabilities({ browserName: 'chrome', chromeOptions: { w3c: false } })
    .build();
const driverFirefox = new webdriver.Builder()
    .withCapabilities({ browserName: 'firefox', chromeOptions: { w3c: false } })
    .build();
const By = webdriver.By;
const loginURL = "http://localhost:3000/signIn";

driverFirefox.navigate().to(loginURL);
driverChrome.navigate().to(loginURL);

//test 5 Multiple browser support for chrome and firefox
driverFirefox.findElement(By.id("signInHeader"))
    .then(info=>info.isDisplayed())
    .then(bool=>console.log(bool)) //shows that the element is not displayed
 ;

 driverChrome.findElement(By.id("signInHeader"))
    .then(info=>info.isDisplayed())
    .then(bool=>console.log(bool)) //shows that the element is not displayed
 ;