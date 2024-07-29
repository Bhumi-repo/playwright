const { expect } = require("allure-playwright");

exports.MouseAction=
class MouseAction {

    constructor(page){
        this.page=page;
        this.copyBtn="(//button)[5]";
        this.textLocator="#field2";
        this.inputValue="#field1";
        this.dragFrom="//div[@id='draggable']";
        this.dragTo="//div[@id='droppable']";
        this.message="//div[@id='droppable']//p";

    }

    async doubleClick(){
        const button= await this.page.locator(this.copyBtn);
        await button.dblclick();

        await expect(await this.page.locator(this.textLocator))
        .toHaveValue(await this.page.locator(this.inputValue).getAttribute('value'));

    }


    async dragAndDrop(data){


       

        const fromItem=await this.page.locator(this.dragFrom);
        const toItem=await this.page.locator(this.dragTo);

         //approach1 for Drag and drop

    //     await fromItem.hover();

    //     await this.page.mouse.down();


    //   await toItem.hover();
    //    await this.page.mouse.up();


    //approach2 for Drag and DRop

       await fromItem.dragTo(toItem);

//Expecting the message after drag and drop
       await expect(await this.page.locator(this.message)).toHaveText(data.dropMessage);



    }
}