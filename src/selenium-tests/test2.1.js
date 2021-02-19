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
//test 2.1: Facebook button works correctly
driver.findElement(By.id("facebookConnect"))
    .then(element=>element.click())
    .then(()=>driver.getCurrentUrl())
    .then(url=>{console.log(url);console.log(url==="https://www.facebook.com/login.php?skip_api_login=1&api_key=163114453728333&kid_directed_site=0&app_id=163114453728333&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%3Fapp_id%3D163114453728333%26cbt%3D1613471068099%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df1b41f2e1d06f1%2526domain%253Dwww.netflix.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Fff10f31a6dcc08%2526relation%253Dopener%26client_id%3D163114453728333%26display%3Dpopup%26domain%3Dwww.netflix.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.netflix.com%252Ftr-en%252Flogin%26locale%3Den_US%26logger_id%3Df5c7639525a344%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df370977e7a58614%2526domain%253Dwww.netflix.com%2526origin%253Dhttps%25253A%25252F%25252Fwww.netflix.com%25252Fff10f31a6dcc08%2526relation%253Dopener%2526frame%253Dfe496088c0265c%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26sdk%3Djoey%26version%3Dv2.9%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df370977e7a58614%26domain%3Dwww.netflix.com%26origin%3Dhttps%253A%252F%252Fwww.netflix.com%252Fff10f31a6dcc08%26relation%3Dopener%26frame%3Dfe496088c0265c%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0")})
;