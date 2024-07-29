const { expect } = require("@playwright/test");

exports.KeyboardAction=
class KeyboardAction{
    constructor (page){
        this.page=page;
        this.inputField="#Wikipedia1_wikipedia-search-input";
        this.results="#wikipedia-search-result-link";
    }


    async keyboardActionMethod(data){
        //keyboard Type action
        await this.page.type(this.inputField,data.SearchText);

        // Keyboard Tab action
        await this.page.keyboard.down('Tab');
        await this.page.keyboard.up('Tab');

        // Keyboard Enter action
        await this.page.keyboard.down('Enter');
        await this.page.keyboard.up('Enter');

        //checking the Result of Search 
        await expect(await this.page.locator(this.results)).toHaveCount(5);

    }
}