var fs = require('fs');

var textMetrics = exports = module.exports;

textMetrics.simplify = (text)=> {
    if (!text) {
        throw "Invalid input.";
     }
        
    text = text.toLowerCase();
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`'"?~()]/gi,"");
    text = text.replace("[", "");
    text = text.replace(/[\[\]']+/gi,'');
    text = text.replace(/[\n\r\t]+/gi, ' ');
    text = text.replace(/(\r\n|\n|\r)/gi, " ");
    return text;
},

textMetrics.createMetrics = (text) => {
	
	if(typeof(text) !== 'string' || text == null || text === undefined || !text)
	{
		throw "The text should not be null and empty";
	}
	
	var result = {};
	let simplifytext=textMetrics.simplify(text);
	var numOfLetters = simplifytext.replace(/[^A-Z0-9]/gi, "").length;
	result["totalLetters"] = numOfLetters;
	//console.log("Number of letters..:"+numOfLetters);
	var words = simplifytext.split(/\s+/);
	var numOfWords = words.length;
	result["totalWords"] = numOfWords;
	//console.log("Number of Words..:"+numOfWords);
	var wordsSpl = [];
	var wordOccur = {};
	var numofUniqueWords = 0;
	var numofLongWords = 0;
	words.forEach((item) => {
		wordsSpl.push(item.replace(/[^A-Z0-9]/gi, ""));
	});
	
	wordsSpl.forEach((item) => {
		var available = false;
		for (var key in wordOccur) {
			if(item.toLowerCase() == key)
			{
				wordOccur[key] = wordOccur[key]+1;
				available = true;
			}
			//console.log("key " + key + " has value " + myArray[key]);
		}
		if(!available)
		{
			wordOccur[item.toLowerCase()] = 1;
		}
	});
	
	
	for(var key in wordOccur)
	{
		//console.log(key + ":" + wordOccur[key]);
		numofUniqueWords++;
		if(key.length > 5)
		{
			numofLongWords = numofLongWords+wordOccur[key];
		}
	}
	//console.log("Number of unique words " + numofUniqueWords);
	result["uniqueWords"] = numofUniqueWords;
	//console.log("Number of long words "+ numofLongWords);
	result["longWords"] = numofLongWords;
	var avgWordLen = (numOfLetters/numOfWords);
	//console.log("Average word length "+ avgWordLen);
	result["averageWordLength"] = avgWordLen;
	var textCopy = simplifytext;
	var sentences = textCopy.split(/[.|?|!]+/g);
	//console.log('array length before: '+sentences.length);
	for(var count = 0;count<sentences.length;count++)
	{
		if(sentences[count].length>0)
		{
			sentences[count] = textCopy.substring(textCopy.search(sentences[count]),textCopy.search(sentences[count])+sentences[count].length+1).trimLeft();
			textCopy = textCopy.replace(sentences[count],'');
			//console.log(sentences[count]); to print separate sentences
		}
		else{
			sentences.splice(count,1);
		}
	}
	result["wordOccurrences"] = wordOccur;
	
	return result;
	
};

