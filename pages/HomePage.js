const { expect } = require("@playwright/test");

exports.Home=
class Home {

    constructor(page){
        this.page=page;
        this.homeBtn='.home-link';
        
    }


    async goToHome(){

        //Returning to Home Screen 
        await this.page.click(this.homeBtn);
    }


}