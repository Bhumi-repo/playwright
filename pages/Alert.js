const { expect } = require("@playwright/test");

exports.Alert=
class Alert{

    constructor(page){
        this.page=page;
        this.alertBtn='(//div[contains(@class,"widget-content")]//button)[2]';
    }

    async alertTest(dialogText){
        
        //focus on dialog window 
            this.page.on('dialog',async dialog=>{
                await expect(dialog.type()).toBe('alert');
                await expect(dialog.message()).toContain(dialogText);
                 await dialog.accept();
    
            })
    
            //trigger the alert window
            await this.page.click(this.alertBtn);
    
       }
}