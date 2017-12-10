
const myData = require("./fileData");
const mytextMetric = require("./textMetrics");
let fileExists = require('file-exists');
let chapterDataObject = []; 

let input="Hello, my FRIENDS! This is a great day to say hello.\n\n\tHello! 2 3 4 23";

let simplifytext=mytextMetric.simplify(input);
console.log(simplifytext);
let obj=mytextMetric.createMetrics(simplifytext);
console.log(obj);


function checkFilePresence(path){
    try{
        if(fileExists(path))
            return true;
        else
            return false; 
    }catch (err){
        return false;
    }
}

let readFileCh1 = myData.getFileAsJSON('Chapter1.result.json');
readFileCh1.then((myData) =>  { 
    console.log(myData);
} , (error) => {
    let chapterData = myData.getFileAsString("chapter1.txt");
    chapterData.then((chapter1data) => {
        console.log("Reading CHAPTER1.txt\n");
        //console.log(mytextMetric.createMetrics(chapter1data));
        let simplifytext = mytextMetric.simplify(chapter1data);
        myData.saveStringToFile("chapter1.debug.txt", simplifytext);
		console.log("Chapter 1 Reading DONE\n");
		console.log("Please see the result in Chapter1.result.json\n");
		return simplifytext;
    }).then((chapter1data) => {
        //console.log(myData);
        let object = mytextMetric.createMetrics(chapter1data);
        myData.saveJSONToFile("Chapter1.result.json", object);
    })
})

let readFileCh2 = myData.getFileAsJSON('Chapter2.result.json');
readFileCh2.then((myData) =>  { 
    console.log(myData);
} , (error) => { 
    let chapterData1 = myData.getFileAsString("chapter2.txt");
    chapterData1.then((chapter2data) => {
        console.log("Reading CHAPTER2.txt\n");
        let simplifytext = mytextMetric.simplify(chapter2data);
        myData.saveStringToFile("chapter2.debug.txt", simplifytext);
        console.log("Chapter 2 Reading DONE\n");
		console.log("Please see the result in Chapter2.result.json\n");
		return simplifytext;
    }).then((chapter2data) => {
        //console.log(myData);
        let object = mytextMetric.createMetrics(chapter2data);
        myData.saveJSONToFile("Chapter2.result.json", object);
    })
})

let readFileCh3 = myData.getFileAsJSON('Chapter3.result.json');
readFileCh3.then((myData) =>  { 
    console.log(myData);
}, (error) => { 
    let chapterData2 = myData.getFileAsString("chapter3.txt");
    chapterData2.then((chapter3data) => {
        console.log("Reading CHAPTER3.txt\n");
        let simplifytext = mytextMetric.simplify(chapter3data);
        myData.saveStringToFile("chapter3.debug.txt", simplifytext);
        console.log("Chapter 3 Reading DONE\n");
		console.log("Please see the result in Chapter3.result.json\n");
		return simplifytext;
    }).then((chapter3data) => {
        let object = mytextMetric.createMetrics(chapter3data);
        myData.saveJSONToFile("Chapter3.result.json", object);
    })
})




