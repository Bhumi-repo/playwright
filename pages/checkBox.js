const { expect } = require("allure-playwright");

exports.checkBox=
class checkBox{

    constructor(page){
        this.page =page;
    }

    async multipleCheckbox(data){


      //selecting multiple checkbox
        const checkBoxLocators= [
            `//label[normalize-space()="${data.Checkbox.split(",")[0]}"]`,
            `//label[normalize-space()="${data.Checkbox.split(",")[1]}"]`,
            `//label[normalize-space()="${data.Checkbox.split(",")[2]}"]`
        ];

        for(let checkboxes of checkBoxLocators){
            await this.page.locator(checkboxes).check();
            await expect(await this.page.locator(checkboxes)).toBeChecked();
        }
    }
}