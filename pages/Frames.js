const {  expect } = require('@playwright/test');
exports.Frames=
class Frames {

    constructor(page){
        this.page=page;
        
        //Locators
        this.frameLocator='https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169';
        this.nameInput='#RESULT_TextField-0';
        this.gender='label[for="RESULT_RadioButton-1_1"]';
        this.dateIcon='//span[@role="button"]';
        this.year='.ui-datepicker-year';
        this.nextBtn='//span[@class="ui-icon ui-icon-circle-triangle-e"]';
        this.prevBtn='//span[@class="ui-icon ui-icon-circle-triangle-w"]';
        this.month='.ui-datepicker-month';
        this.day='.ui-state-default';
        this.job='#RESULT_RadioButton-3';
        this.submitBtn='#FSsubmit';
        this.message='//div[@class="full_width_space"]';

    }

    async frameFormFilling(data){

        //month map data
        const monthsMap = {
            'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
            'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
        };


        //Locating Frame by URL
       const frameName= await this.page.frame({url:this.frameLocator});


       //filling details for Frame form
       await frameName.locator(this.nameInput).fill(data.name);

       //Radio button check for Gender
       await frameName.locator(this.gender).check();
       await expect(await frameName.locator(this.gender)).toBeChecked();
      await expect(await frameName.locator(this.gender).isChecked()).toBeTruthy();

       await frameName.locator(this.dateIcon).click();


       //dropdown function on Date of Birth
       await frameName.locator(this.year).selectOption(data.Dob.split("-")[2]);
       const monthValue=await frameName.locator(this.month).textContent();

       const targetMonth = monthsMap[data.Dob.split("-")[1]];
       const numClicks = calculateClicks(monthsMap[monthValue], targetMonth);
       
       // Click the next or previous button accordingly
       if (numClicks > 0) {
           for (let i = 0; i < numClicks; i++) {
               await frameName.locator(this.nextBtn).click();
           }
       } else if (numClicks < 0) {
           for (let i = 0; i < Math.abs(numClicks); i++) {
            await frameName.locator(this.prevBtn).click();
           }
       }



       function calculateClicks(currentMonth, targetMonth) {
        return targetMonth - currentMonth;
    }

   const date= data.Dob.split("-")[0];
    await frameName.locator(`//a[normalize-space()="${date}"]`).click();

    await frameName.locator(this.job).selectOption(data.Job);


    //submitting the frame form 
    await frameName.locator(this.submitBtn).click();

    await expect.soft(await frameName.locator(this.message)).toHaveText(data.message);

    }

    
        
}