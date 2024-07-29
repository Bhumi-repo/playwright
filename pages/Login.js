const {  expect } = require('@playwright/test');
exports.Login=
class Login {

    constructor(page){
        this.page=page;
    }

    async launchUrl(){
       //launching the Url
       await this.page.goto('/');
    
    }
}