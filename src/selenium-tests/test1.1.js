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
//test 1.1: Empty email/phone number, empty password
driver.findElement(By.id("signIn"))
    .then(element=>element.click())
    .then(()=>driver.wait(until.elementLocated(By.xpath('//*[@id="basic"]/div[1]/div/div[2]/div')))) //error message
    .then(()=>driver.findElement(By.xpath('//*[@id="basic"]/div[1]/div/div[2]/div')))
    .then(element=>element.getText())
    .then(text=>{console.log(text); console.log(text==="Please enter a valid email or phone number.")}) //Expected to get the Please enter a valid email or phone number. text
    .then(()=>driver.wait(until.elementLocated(By.xpath('//*[@id="basic"]/div[2]/div/div[2]/div')))) //error message
    .then(()=>driver.findElement(By.xpath('//*[@id="basic"]/div[2]/div/div[2]/div')))
    .then(element=>element.getText())
    .then(text=>{console.log(text);console.log(text==="Your password must contain between 4 and 60 characters.")}) //Expected to get the Your password must contain between 4 and 60 characters text

;