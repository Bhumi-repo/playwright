const fs = require('fs');
const XLSX = require('xlsx');

var ExcelToJSON = function() {
  this.parseExcel = function(file, sheet,dataSetName) {
    //synchronous way of handling
    return new Promise(function(resolve, reject) {
      try {
        //reading the file from filepath
        var data = fs.readFileSync(file);
  
        var buffer = Buffer.from(data);
        var workbook = XLSX.read(buffer.toString('binary'), { type: 'binary' });
        var result = null;


        workbook.SheetNames.forEach(function(sheetName) {
          //Based on sheet Name pickup that particular sheet
          if (sheetName === sheet) {
          var resultValue = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]); 
          result=resultValue.find(rowData=> rowData.Users === dataSetName)
          }
        });

        if (result) {
          resolve(result);
        } else {
          reject("Sheet not found");
        }
      } catch (error) {
        reject(error);
      }
    });
  };
};


//function read XLSX file
module.exports = {
  dataReader: function(filePath, sheetName,dataSetName) {
    var xl2json = new ExcelToJSON();
    return xl2json.parseExcel(filePath, sheetName,dataSetName);
  }
};

































//  const fs = require('fs');


//  var ExcelToJSON = function() {
//   this.parseExcel = function(file, sheet) {
//     return new Promise(function(resolve, reject) {
//       var reader = fs.readFileSync(file);

//       reader.onload = function(e) {
//         var data = e.target.result;
//         var workbook = XLSX.read(data, { type: 'binary' });
//         var result = null;

//         workbook.SheetNames.forEach(function(sheetName) {
//           if (sheetName === sheet) {
//             result = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//           }
//         });

//         if (result) {
//           resolve(result);
//         } else {
//           reject("Sheet not found");
//         }
//       };

//       reader.onerror = function(ex) {
//         reject(ex);
//       };

//     //  reader.readAsBinaryString(file);
//     });
//   };
// };


// exports.dataReader = function(filePath, sheetName) {
//   var xl2json = new ExcelToJSON();

//   return xl2json.parseExcel(filePath, sheetName);
  
// };




// var ExcelToJSON = function() {

//   this.parseExcel = function(file,sheet) {
//     var reader = fs.readFileSync(file);

//     reader.onload = function(e) {
//       var data = e.target.result;
//       var workbook = XLSX.read(data, {
//         type: 'binary'
//       });
//       workbook.SheetNames.forEach(function(sheetName) {
//         if(sheetName===sheet){
//         // Here is your object
//         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//         console.log(XL_row_object)
//         jQuery( '#xlx_json' ).val( XL_row_object[0]);
//         }
//       })
//     };

//     reader.onerror = function(ex) {
//       console.log(ex);
//     };

//     // reader.readAsBinaryString(file);
//   };
// };


// exports.dataReader = function(filePath, sheetName) {
//     var xl2json = new ExcelToJSON();
    
//     xl2json.parseExcel(filePath, sheetName);
//   };

// function handleFileSelect(evt) {

// var files = evt.target.files; // FileList object
// var xl2json = new ExcelToJSON();
// xl2json.parseExcel(files[0],'Dashboard');
// }











// const fs = require('fs');

// var ExcelToJSON = function() {

//   this.parseExcel = function(file,sheet) {
//     var reader = fs.readFileSync(file);

//     reader.onload = function(e) {
//       var data = e.target.result;
//       var workbook = XLSX.read(data, {
//         type: 'buffer',
//       });
      
     
//       workbook.SheetNames.forEach(function(sheetName) {
//          if(sheetName===sheet){
//         // Here is your object
//         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//         console.log(XL_row_object);
//        jQuery( '#xlx_json' ).val( XL_row_object[0]);
//          }
//       })
//     };
//   };
// };


// exports.dataReader = function(filePath, sheetName) {
//   var xl2json = new ExcelToJSON();
  
//   xl2json.parseExcel(filePath, sheetName);
// };


// // const fs = require('fs');


// // var ExcelToJSON = function() {

// //   this.parseExcel = function(file, sheet) {
// //     var data = fs.readFileSync(file);
// //     var workbook = XLSX.read(data, {
// //       type: 'buffer',
// //     });

// //     workbook.SheetNames.forEach(function(sheetName) {
// //       if (sheetName === sheet) {
// //         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
// //         jQuery('#xlx_json').val(XL_row_object[0]);
// //       }
// //     });
// //   };
// // };

// // exports.dataReader = function(filePath, sheetName) {
// //   var xl2json = new ExcelToJSON();
  
// //   xl2json.parseExcel(filePath, sheetName);
// // };
