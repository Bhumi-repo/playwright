
 import { Login } from '../../pages/Login';
 import { Home } from '../../pages/HomePage';
 import { checkBox } from '../../pages/checkBox';
 import { MouseAction  } from '../../pages/MouseAction';
 import {KeyboardAction} from '../../pages/keyboardAction';
 import { Alert } from '../../pages/Alert';
 import {dataReader} from '../../FrameworkDataReader/dataReader';
import { Frames } from '../../pages/Frames';
 const { test, chromium } = require('@playwright/test');


//common excelpath
 const excelPath='C:/Users/bhumikak/Documents/playwrightdemo/ExcelData/DemoTest.xlsx';


//Grouping  the test case
test.describe('Playwright end to end testing concept', ()=>{


// Execute below code before every test case
  test.beforeEach('Launch the application',async ({page})=>{

    //Lauching the Url from Login (POM)
    const launch=new Login(page);
    await launch.launchUrl();

  });

  //Execute below code after every test case
  test.afterEach('Return to Home page', async ({page})=>{

    //Going to Home page from Home (POM)
    const homePage= new Home(page);
    await homePage.goToHome();
  });


  //test case for Alert
  test('Alert demo',async({page})=>{
    
    const alertpage= new Alert(page);
    const data = await dataReader(excelPath, 'Alert','User1');
  
    const dialogText = data.dialogText ;

    //accept alert dialog use case
    await alertpage.alertTest(dialogText);

  });


//test case for Frame and radio button
  test('Frame and Radio demo',async({page})=>{
    
    const framePage= new Frames(page);
    const data = await dataReader(excelPath, 'Frame','User1');

    //filling form in frame with radio button ,dropdown,inputbox
    await framePage.frameFormFilling(data);

  });


  //test case for checkbox
  test('checkBox demo',async ({page})=>{
    const checkBoxPage=new checkBox(page);
    const data = await dataReader(excelPath, 'checkBox','User1');

    //multiplecheckbox use case
   await checkBoxPage.multipleCheckbox(data);

  });


  //test case for keyboard action  
  test('keyboard action',async({page})=>{
    const keyboardPage = new KeyboardAction(page);
    const data = await dataReader(excelPath, 'KeyboardAction','User1');
   await keyboardPage.keyboardActionMethod(data);

  });


  //test case for Mouse action  
  test('Mouse action',async({page})=>{

    const mouseActionPage= new MouseAction(page);
    const data = await dataReader(excelPath, 'MouseAction','User1');

    //double click mouse action use case
     await mouseActionPage.doubleClick();

     //drag and drop mouse action use case
     await mouseActionPage.dragAndDrop(data);

  });




})