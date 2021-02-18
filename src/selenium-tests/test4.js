var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
const { BorderHorizontalOutlined } = require('@ant-design/icons');
var path = require('chromedriver').path;

const driver = new webdriver.Builder()
    .withCapabilities({ browserName: 'chrome', chromeOptions: { w3c: false } })
    .build();
const By = webdriver.By;
const until = webdriver.until;
const loginURL = "http://localhost:3000/signIn";

driver.navigate().to(loginURL);
//test 4 checkbox validation
driver.findElement(By.id("basic_remember"))
    .then(element=>element.isSelected()) //check is the checkbox is selected expected true
    .then(bool=>console.log(bool))
    .then(()=>driver.findElement(By.id("basic_remember")))
    .then(box=>box.click()) 
    .then(()=>driver.findElement(By.id("basic_remember")))
    .then(element=>element.isSelected()) //expected false
    .then(bool=>console.log(bool))    
;