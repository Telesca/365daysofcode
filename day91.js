var kafka = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.  He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.  The bedding was hardly able to cover it and seemed ready to slide off any moment.  His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.";


var single_words = kafka.split(" ");


var list = function(data) { 
	var i, 
		word_counter = {},
		clean_word;  
	for (i = 0; i < data.length; i++) { 
		clean_word = data[i].toLowerCase();

		// Testing if word from data is in word_counter yet	
		if (word_counter.hasOwnProperty(clean_word)) {
			word_counter[clean_word] += 1
		} else { 
			//Add the new word to the object
			word_counter[clean_word] = 1;
		}
	}
	return word_counter;
};


example = list(single_words); 
console.log(example);
