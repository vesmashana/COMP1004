
const commonPasswords = [
	"123456",
	"123456789",
	"qwerty",
	"password",
	"111111",
	"12345678",
	"abc123",
	"1234567",
	"password1",
	"12345",
	"1234567890",
	"123123",
	"000000",
	"iloveyou",
	"1234",
	"1q2w3e4r5t",
	"qwertyuiop",
	"123",
	"monkey",
	"dragon",
	"123456a",
	"654321",
	"123321",
	"666666",
	"1qaz2wsx",
	"myspace1",
	"121212",
	"homelesspa",
	"123qwe",
	"a123456",
	"123abc",
	"1q2w3e4r",
	"qwe123",
	"7777777",
	"qwerty123",
	"target123",
	"tinkle",
	"987654321",
	"qwerty1",
	"222222",
	"zxcvbnm",
	"1g2w3e4r",
	"gwerty",
	"zag12wsx",
	"gwerty123",
	"555555",
	"fuckyou",
	"112233",
	"asdfghjkl",
	"1q2w3e",
	"123123123",
	"qazwsx",
	"computer",
	"princess",
	"12345a",
	"ashley",
	"159753",
	"michael",
	"football",
	"sunshine",
	"1234qwer",
	"iloveyou1",
	"aaaaaa",
	"fuckyou1",
	"789456123",
	"daniel",
	"777777",
	"princess1",
	"123654",
	"11111",
	"asdfgh",
	"999999",
	"11111111",
	"passer2009",
	"888888",
	"love",
	"abcd1234",
	"shadow",
	"football1",
	"love123",
	"superman",
	"jordan23",
	"jessica",
	"monkey1",
	"12qwaszx",
	"a12345",
	"baseball",
	"123456789a",
	"killer",
	"asdf",
	"samsung",
	"master",
	"azerty",
	"charlie",
	"asd123",
	"soccer",
	"FQRG7CS493",
	"88888888",
	"jordan",
	"michael1",
	"jesus1",
	"linkedin",
	"babygirl1",
	"789456",
	"blink182",
	"thomas",
	"qwer1234",
	"333333",
	"liverpool",
	"michelle",
	"nicole",
	"qwert",
	"j38ifUbn",
	"131313",
	"asdasd",
	"0",
	"987654",
	"lovely",
	"q1w2e3r4",
	"0123456789",
	"gfhjkm",
	"andrew",
	"hello1",
	"joshua",
	"Status",
	"justin",
	"anthony",
	"angel1",
	"iloveyou2",
	"1111111",
	"zxcvbn",
	"hello",
	"1111",
	"jennifer",
	"hunter",
	"naruto",
	"bitch1",
	"welcome",
	"159357",
	"101010",
	"tigger",
	"147258369",
	"babygirl",
	"jessica1",
	"parola",
	"5201314",
	"robert",
	"fuckyou2",
	"696969",
	"102030",
	"0987654321",
	"loveme",
	"123456q",
	"apple",
	"pokemon",
	"mother",
	"money1",
	"secret",
	"anthony1",
	"purple",
	"q1w2e3r4t5y6",
	"baseball1",
	"qazwsxedc",
	"1111111111",
	"abc",
	"buster",
	"matthew",
	"andrea",
	"soccer1",
	"basketball",
	"hannah",
	"freedom",
	"golfer",
	"chelsea",
	"passw0rd",
	"george",
	"trustno1",
	"friends",
	"william",
	"iloveu",
	"amanda",
	"number1",
	"chocolate",
	"qwerty12",
	"summer",
	"flower",
	"charlie1",
	"maggie",
	"pakistan",
	"samantha",
	"asdf1234",
	"letmein",
	"asshole1",
	"superman1",
	"marina",
	"147258",
	"batman",
	"fuk19600",
	"butterfly",
	"010203",
	"qweqwe",
	"29rsavoy",
	"forever",
	"1",
	"mustang",
	"sunshine1",
	"ashley1",
	"internet",
	"london",
	"666",
	"harley",
	"alexander",
	"xbox360",
	"00000000",
	"12341234",
	"q1w2e3",
	"pepper",
	"family",
	"loveyou",
	"50cent",
	"joseph",
	"whatever",
	"!",
	"jasmine",
	"orange",
	"user",
	"junior",
	"cookie",
	"martin",
	"qweasdzxc",
	"212121",
	"1qazxsw2",
	"password12",
	"google",
	"password2",
	"111222",
	"lol123",
	"hello123",
	"jordan1",
	"shadow1",
	"patrick",
	"3rJs1la7qE",
	"ginger",
	"nicole1",
	"mylove",
	"arsenal",
	"12344321",
	"abcdef",
	"love12",
	"232323",
	"VQsaBLPzLa",
	"taylor",
	"myspace",
	"brandon",
	"angel",
	"12345q",
	"brandon1",
	"chris1",
	"diamond",
	"snoopy",
	"asshole",
	"qweasd",
	"starwars",
	"matrix",
	"mickey",
	"school",
	"jonathan",
	"melissa",
	"eminem",
	"1234561",
	"cjmasterinf",
	"lovers",
	"1234567891",
	"nikita",
	"richard",
	"1342",
	"yellow",
	"12345qwert",
	"oliver",
	"q1w2e3r4t5",
	"cheese",
	"a123456789",
	"christian",
	"290966",
	"wall.e",
	"12345678910",
	"12413",
	"sophie",
	"tudelft",
	"DIOSESFIEL",
	"dpbk1234",
	"PE#5GZ29PTZMSE",
	"bailey",
	"U38fa39",
	"mercedes",
	"victoria",
	"147852",
	"asdasd5",
	"matthew1",
	"abcdefg",
	"peanut",
	"456789",
	"red123",
	"happy1",
	"sandra",
	"benjamin",
	"dragon1",
	"444444",
	"123654789",
	"$HEX",
	"elizabeth",
	"prince",
	"amanda1",
	"angels",
	"angela",
	"qqqqqq",
	"samuel",
	"banana",
	"barcelona",
	"ghbdtn",
	"computer1",
	"michelle1",
	"william1",
	"hockey",
	"monster",
	"carlos",
	"justin1",
	"antonio",
	"qwertyu",
	"nathan",
	"55555",
	"123789",
	"0000",
	"killer1",
	"11223344",
	"chicken",
	"lucky1",
	"gabriel",
	"welcome1",
	"zaq12wsx",
	"jasmine1",
	"silver",
	"hunter1",
	"bubbles",
	"hottie1",
	"purple1",
	"andrew1",
	"daniel1",
	"liverpool1",
	"1qaz2wsx3edc",
	"rainbow",
	"morgan",
	"natasha",
	"fuckoff",
	"jackson",
	"austin",
	"vanessa",
	"mommy1",
	"madison",
	"adidas",
	"xxxxxx",
	"252525",
	"america",
	"james1",
	"metallica",
	"slipknot",
	"chicken1",
	"87654321",
	"jesus",
	"NULL",
	"0000000000",
	"alexis",
	"!ab#cd$",
	"spiderman",
	"steven",
	"ferrari",
	"lauren",
	"456123",
	"robert1",
	"147852369",
	"qwaszx",
	"buddy1",
	"butterfly1",
	"!~!1",
	"tinkerbell",
	"bandit",
	"danielle",
	"0123456",
	"nicholas",
	"hannah1",
	"qwerty12345",
	"1234554321",
	"asdfasdf",
	"pokemon1",
	"nirvana",
	"destiny",
	"scooter",
	"cookie1",
	"123qweasd",
	"loveme1",
	"chelsea1",
	"chocolate1",
	"1234567a",
	"juventus",
	"rachel",
	"111222tianya",
	"qazxsw",
	"zzzzzz",
	"monica",
	"stella",
	"america1",
	"999999999",
	"jennifer1",
	"freedom1",
	"taylor1",
	"741852963",
	"yamaha",
	"victor",
	"00000",
	"qwertyui",
	"a1b2c3",
	"ronaldo",
	"1password",
	"smokey",
	"david1",
	"money",
	"daddy1",
	"cocacola",
	"a838hfiD",
	"1234abcd",
	"joshua1",
	"123asd",
	"buster1",
	"myspace123",
	"booboo",
	"madison1",
	"samantha1",
	"heather",
	"7654321",
	"elizabeth1",
	"poop",
	"tigger1",
	"family1",
	"mustang1",
	"142536",
	"november",
	"jasper",
	"lovely1",
	"diamond1",
	"success",
	"edward",
	"music1",
	"valentina",
	"harley1",
	"sweety",
	"tennis",
	"zxc123",
	"friend",
	"qaz123",
	"whatever1",
	"thomas1",
	"nothing",
	"N0=Acc3ss",
	"super123",
	"casper",
	"Password",
	"chester",
	"Exigent",
	"password123",
	"cheese1",
	"spongebob1",
	"mynoob",
	"hahaha",
	"hellokitty",
	"098765",
	"alexandra"];
let initChosen;
let rVal = 0;
let guess = 0;
let currentScenario = 0;
let analysisComplete;
let newButton;
let sectionCompleted = 0;
let seconds = 0;
function removeListeners(id) {
	const button = document.getElementById(id);
	newButton = button.cloneNode(true);
	button.parentNode.replaceChild(newButton, button);
}


function refresh() {
	document.querySelectorAll("body > *").forEach(element => { /*Selector made to exclude the grid itself because it doesn't have an ID*/
		if (!element.classList.contains('hide')) {
			element.classList.add('hide');
		}
	});
}
function show(...ids) {
	ids.forEach(id => {
		const element = document.getElementById(id);
		element.classList.remove('hide');
	});
}

function moveElement(elementId, row, column) {
	const element = document.getElementById(elementId)
	element.style.gridRow = row;
	element.style.gridColumn = column;
	
}

function determineBruteforceStrength(password) {
	
	let length = password.length;
	seconds = 2.3 * (10 ** -10) * (93 ** length) + 2.3 * (10 ** -10) * (93 ** (length + 1));
	seconds = seconds / 2;
	let result = "It would take a hacker ";
	if (seconds > 31536000) {
		result += "more than a year to crack your password";
		seconds = -1; /*block execution of remaining if commands for unnecessary detail.*/
	}
	if (seconds > 2592000) {
		let months = seconds / 2592000;
		months = Math.round(months);
		result += months;
		if (months > 1) {
			result += " months, "
		}
		else {result+= " month, "}
		seconds = seconds % 2592000;
	}
	if (seconds > 604800) {
		let weeks = seconds / 604800;
		weeks = Math.round(weeks);
		result += weeks;
		if (weeks > 1) {
			result += " weeks, "
		}
		else { result += " week, " }
		seconds = seconds % 604800;
	}
	if (seconds > 86400) {
		let days = seconds / 86400;
		days = Math.round(days);
		result += days;
		if (days > 1) {
			result += " days, "
		}
		else { result += " day, " }
		seconds = seconds % 604800;
	}
	if (seconds > 3600) {
		let hours = seconds / 3600;
		hours = Math.round(hours);
		result += hours;
		if (hours > 1) {
			result += " hours, "
		}
		else { result += " hour, " }
		seconds = seconds % 3600;
	}
	if (seconds > 60) {
		let minutes = seconds / 60;
		minutes = Math.round(minutes);
		result += minutes;
		seconds = seconds % 60;
		if (minutes > 1) {
			result += " minutes, "
		}
		else { result += " minute, " }
		if (seconds >= 1) {
			seconds = Math.round(seconds);
			result += "and " + seconds + " seconds";
			seconds = -1;
		}
	}
	if (seconds <= 1 && seconds >= 0) {
		result += "less than a second to crack your password.";
	}
	else {result+= " to crack your password." }
	document.getElementById("3").textContent = result;
	document.getElementById("subheading1").textContent = "Are you looking to improve your password safety?";
	document.getElementById("5").textContent = "• Extend the length of your password";
	document.getElementById("6").textContent = "• Include the following characters: ~, {, }, `";
	document.getElementById("simButton3").value = "Why?";
	document.getElementById("simButton4").value = "Why?";
	moveElement("simButton3", 7, 5);
	moveElement("simButton4", 8, 5);
	show("3", "5", "6", "simButton3", "simButton4", "subheading1");
	document.getElementById("simButton3").addEventListener("click", function (event) {
		alert("A higher password length increases the number of possible combinations. The bruteforcer therefore has to test more combinations, resulting in a longer time taken.");
	});
	document.getElementById("simButton4").addEventListener("click", function (event) {
		alert("I've evaluated these characters to be the most likely to occur towards the end of a dataset. They are rarely used in passwords, meaning they will not be prioritised. They also occur towards the end of the ASCII alphabet.");
	});

}


function vulnerabilityToDictionaryAttack(arr, password) {
	let advice = "";
	let result = "";
	if (commonPasswords.includes(password)) {
		result = "Your password was found in the database. This makes you very vulnerable to dictionary attacks. Regardless of length, your password could be cracked within seconds.";
		advice = "Consider avoiding real words. This can be done by omitting vowels, or substituting letters with numbers.";
	} else {
		result = "Your password was not found in the database!";
	}
	document.getElementById("7").textContent = result;
	document.getElementById("8").textContent = advice;
	document.getElementById("next").value = "Next";
	document.getElementById("subheading2").textContent = "Do you wish to proceed to the quiz section?";
	moveElement("next", 9, 10);

	show("7", "8");
	if (sectionCompleted == 1) {
		document.getElementById("next").classList.add("hide");
	}
	else {
		show("subheading2");
	}

	document.getElementById("next").addEventListener("click", function () {
		removeListeners("next");
		interactable();
	});
}

function passwordStrength() {
	refresh();
	document.getElementById("header").textContent = "How strong is your password?";
	document.getElementById("1").textContent = "How long would it take for your password to be cracked?";
	document.getElementById("2").textContent = "Am I vulnerable to a dictionary attack?";
	document.getElementById("next").value = "Enter";
	show("userPswd", "header", "1", "2", "next");
	let password = "";
	document.getElementById("next").addEventListener("click", function () {
		removeListeners("next");
		let password = document.getElementById("userPswd").value;
		determineBruteforceStrength(password);
		vulnerabilityToDictionaryAttack(commonPasswords, password);
	});

}

function stuck(qs) {
	removeListeners("stuck");
	show("stuck");
	document.getElementById("stuck").addEventListener("click", function () {
		console.log("stuck");
		if (qs == 2) {
			show("Q1", "Q2");
		}
		else if (qs == 3) {
			show("Q1", "Q2", "Q3")
		}
		else if (qs == 4) {
			show("Q1", "Q2", "Q3", "Q4");
		}
		alert("You still need to click the fields you did not find in order to progress.");
	});
}

function analyseText(text) {
	refresh();
	document.getElementById("header").textContent = text;
	document.getElementById("next").disabled = true;
	const element = document.getElementById("next");
	element.style.gridColumn = 9;
	element.style.gridRow = 9;
	stuck(4);
	show("header", "textScam", "next", "redflags");
	document.getElementById("textAddress").addEventListener("click", function () {
		console.log("success");
		removeListeners("textAddress");
		show("Q1");
		analysisComplete(4);
	});
	document.getElementById("webAddress").addEventListener("click", function () {
		console.log("success");
		show("Q2");
		removeListeners("webAddress");
		analysisComplete(4);
	});
	document.getElementById("instructions").addEventListener("click", function () {
		console.log("success");
		show("Q3");
		removeListeners("instructions");
		analysisComplete(4);
	});
	document.getElementById("customer").addEventListener("click", function () {
		console.log("success");
		show("Q4");
		removeListeners("customer");
		analysisComplete(4);
	});

}
function scenario1() {
	refresh();
	document.getElementById("next").value = "Next";
	currentScenario++;
	document.getElementById("header").style.backgroundColor = "grey";
	document.getElementById("header").textContent = "You are waiting on a package and you get this text.";
	document.getElementById("Q1").textContent = "1. The sender's email address linked is long and does not relate to EVRI";
	document.getElementById("Q2").textContent = "2. The link features many random letters and is very long";
	document.getElementById("Q3").textContent = "3. Don't assume that if you don't know anything about computers, you cannot analyse the contents of a message. Logically, it would not make sense to provide such complex instructions instead of directing the user to go to the evri website themselves.";
	document.getElementById("Q4").textContent = "4. If a company you have provided your details to attempts to contact you, they will know your name.";
	let button = document.getElementById("simButton1");
	button.style.gridColumn = '3 / span 7';
	button.style.gridRow = '3 / span 3'; 
	button.value = "Ignore text"
	button.style.fontSize = "xx-large";
	button = document.getElementById("simButton2");
	button.style.gridColumn = '3 / span 7';
	button.style.gridRow = '6 / span 3'; 
	button.value = "Proceed to website"
	button.style.fontSize = "xx-large";
	show("header", "textScam", "simButton1", "simButton2");
	document.getElementById("simButton1").addEventListener("click", function () {
		console.log("option 1 success");
		let text = "Correct choice. Now, click on the areas that indicate that this is a fraudulent text."
		analyseText(text);
	});
	document.getElementById("simButton2").addEventListener("click", function () {
		console.log("option 2 success");
		let text = "Incorrect choice! You may have had your IP address logged. Worse, if you chose to attempt login, your account details would've been stolen. Now, click on the areas that indicate that this is a fraudulent text."
		analyseText(text);
	});
}

function analyseEmail(text) {
	refresh();
	document.getElementById("stuck").addEventListener("click", function(){ });
	stuck(4);
	console.log("analyse email called");
	document.getElementById("header").textContent = text;
	document.getElementById("next").disabled = true;
	show("header", "email", "next", "greenflags", "nh");
	document.getElementById("emailAddress").addEventListener("click", function () {
		console.log("success");
		show("Q1");
		removeListeners("emailAddress");
		analysisComplete(4);
	});
	document.getElementById("name").addEventListener("click", function () {
		console.log("success");
		show("Q2");
		removeListeners("name");
		analysisComplete(4);
	});
	document.getElementById("mbi").addEventListener("click", function () {
		console.log("success");
		show("Q3");
		removeListeners("mbi");
		analysisComplete(4);
	});
	document.getElementById("link").addEventListener("click", function () {
		console.log("success");
		show("Q4");
		removeListeners("link");
		analysisComplete(4);
	});
}
function scenario2() {
	console.log("scenario 2 initiated");
	removeListeners("simButton1");
	removeListeners("simButton2");
	let element = document.getElementById("Q1");
	element.style.gridColumn = "7 / span 4";
	element.textContent = "1. Short email address with HSBC as the domain name.";
	element = document.getElementById("Q2");
	element.textContent = "2. Uses your personal name.";
	element.style.gridColumn = "7 / span 4";
	element = document.getElementById("Q3");
	element.textContent = "3. Tells you to use your mobile banking app. You already know you can trust it, and a scammer wouldn't gain anything by having you complete the process via the app.";
	element.style.gridColumn = "7 / span 4";
	element = document.getElementById("Q4");
	element.textContent = "4. A short link.";
	element.style.gridColumn = "7 / span 4";
	refresh();
	document.getElementById("header").textContent = "You would like to view your bank statements. You open this email.";
	currentScenario++;
	let button = document.getElementById("simButton1");
	button.style.gridColumn = '7 / span 3';
	button.style.gridRow = '3 / span 3';
	button.value = "Follow sign-in link";
	button.style.fontSize = "xx-large";
	button = document.getElementById("simButton2");
	button.style.gridColumn = '7 / span 3';
	button.style.gridRow = '6 / span 3';
	button.value = "Delete email";
	button.style.fontSize = "xx-large";
	show("header", "email", "simButton1", "simButton2", "nh");
	document.getElementById("simButton1").addEventListener("click", function () {
		console.log("option 1 success");
		document.getElementById("header").textContent = "Correct choice! Press login if you wish to proceed. If you have any doubts and wish to abort the process, press next";
		refresh();
		show("HSBCLogin", "header", "next");
		document.getElementById("login").addEventListener("click", function () {
			let text = "Correct choice. Now, click on the areas which indicate that this is a legitimate email. ";
			analyseEmail(text);
		});
		document.getElementById("next").addEventListener("click", function () {
			removeListeners("next");
			let text = "Wrong! The site was legitimate. However, nothing bad happened. Now, click on the areas which indicate that this is a legitimate email.";
			analyseEmail(text);
		});
	});
	document.getElementById("simButton2").addEventListener("click", function () {
		console.log("option 2 success");
		let text = "Wrong choice! You just deleted important information. Click on the areas which indicate that this is a legitimate email.";
		analyseEmail(text);
	});
}

function analyseAd(text) {
	currentScenario++;
	let element = document.getElementById("ad");
	element.remove();
	element = document.getElementById("Q1");
	element.style.gridColumn = "8 / span 2";
	element.textContent = "1. Poor spelling. A proper company would typically have enough resources to maintain good english.";
	element = document.getElementById("Q2");
	element.style.gridColumn = "8 / span 2";
	element.textContent = "2. Usage of AARVEL instead of MARVEL means that they are using a workaround to avoid breaking the law - if they weren't, they'd be free to use the real name.";
	element = document.getElementById("Q3");
	element.style.gridColumn = "8 / span 2";
	element.textContent = "3. Remember how you got this ad from a dodgy streaming website? Because the sites are illegal, the advertisements will not be regulated in accordance to the law.";
	removeListeners("next");
	removeListeners("shopnow");
	refresh();
	console.log("analyse ad called");
	document.getElementById("header").textContent = text;
	document.getElementById("next").disabled = true;
	show("header", "advertisement", "next");
	stuck(3);
	document.getElementById("sturies").addEventListener("click", function () {
		console.log("success");
		removeListeners("sturies");
		show("Q1");
		analysisComplete(3);
	});
	document.getElementById("aarvel").addEventListener("click", function () {
		console.log("success");
		show("Q2");
		removeListeners("aarvel");
		analysisComplete(3);
	});
	document.getElementById("url").addEventListener("click", function () {
		console.log("success");
		show("Q3");
		removeListeners("url");
		analysisComplete(3);
	});
}

function forward() {
	sectionCompleted++;
	if (sectionCompleted == 1) {
		const button = document.getElementById("next");
		button.style = "grid-column: 7; grid-row: 2";
		button.value = "Enter";
		const header = document.getElementById("header");
		header.style = "background-color: rgb(125, 142, 255)";
		if (seconds == 0) {
			passwordStrength();
		}
		else {
			refresh();
			document.getElementById("header").textContent = "Thank you for using my website:)";
			show("header");
		}
	}
}
function analyseShop() {
	currentScenario++;
	let element = document.getElementById("Q1");
	element.style.gridColumn = "6 / span 4";
	element.textContent = "1. A skill people will have to learn with recent advancements in technology is being able to tell whether an image is AI generated. Here, you can see a common indicator - spider man has three fingers. AI models struggle with small details, leading to mistakes like these.";
	element = document.getElementById("Q2");
	element.style.gridColumn = "6 / span 4";
	element.textContent = "2. The URL says http. Usually a url will contain https, where the s stands for secure. This means that the website is unsecure and could be exposing you to threats.";
	console.log("analyse shop called successfully");
	refresh();
	document.getElementById("header").textContent = "Now, click on the areas that suggest that this shop is fraudulent.";
	document.getElementById("next").disabled = true;
	show("header", "shop", "next");
	stuck(2);
	document.getElementById("threefingers").addEventListener("click", function () {
		console.log("success");
		show("Q1");
		removeListeners("threefingers");
		analysisComplete(2);
	});
	document.getElementById("nonsecure").addEventListener("click", function () {
		console.log("success");
		show("Q2");
		removeListeners("nonsecure");
		analysisComplete(2);
	});
}
function scenario3() {
	console.log("scenario 3 initiated");
	refresh();
	document.getElementById("header").textContent = "You are watching a pirated movie on a streaming website and you get this ad. You have been looking to buy a spiderman figurine for your friend. Click x to close, click on the ad to visit the shop. Disclaimer: both pictures belonging to this scenario are AI-generated";
	show("header", "advertisement");
	document.getElementById("x").addEventListener("click", function () {
		removeListeners("x");
		console.log("success");
		let text = "Correct choice. Click on any areas that indicate that this is ad not trustworthy";
		document.getElementById("x").addEventListener("click", function () { });
		document.getElementById("shopnow").addEventListener("click", function () { });
		analyseAd(text);
	});
	document.getElementById("ad").addEventListener("click", function () {
		removeListeners("ad");
		let text = "This is the shop page. Proceed with the orange button if you would like to buy this figure. Proceed with the next button if you are having second thoughts. Please bear in mind that this photo is AI-generated, the language used should be english.";
		refresh();
		document.getElementById("header").textContent = text;
		show("header", "shop", "next");
		document.getElementById("next").addEventListener("click", function () {
			let text = "Correct choice. Click on any areas that indicate that this ad is not trustworthy";
			analyseAd(text);
		});
		document.getElementById("shopnow").addEventListener("click", function () {
			let text = "You fell for a scam website! Either you paid for nothing, or your card details have been stolen! Click on any areas that indicate that this is ad not trustworthy";
			analyseAd(text);
		});


	});

}


analysisComplete = function(fields) {
	guess++;
	if (guess == fields) {
		var nxtbutton = document.getElementById("next");
		document.getElementById("next").disabled = false;
		show("next");
		document.getElementById("next").addEventListener("click", function () {
			removeListeners("next");
			rVal = 1;
			guess = 0;
			console.log("reached control for scenarios.");
			console.log(currentScenario);
			if (rVal == 1) {
				if (currentScenario == 1) {
					scenario2();
				}
				else if (currentScenario == 2) {
					scenario3();
				}
				else if (currentScenario == 3) {
					console.log("reached condition for shop analysis.");
					analyseShop();
				}
				else if (currentScenario == 4) {
					forward();
				}
			}
		});
	}
}
function interactable() {
	console.log("successfully called interactable");
	document.getElementById("header").textContent = "Enter your name. This is not part of the quiz, and will only be used to make a more immersive experience.";
	refresh();
	show("enterName", "submitButton", "header");
	document.getElementById("submitButton").addEventListener("click", function () {
		let userName = document.getElementById("enterName").value;
		document.getElementById("nh").textContent = userName;
		refresh();
		scenario1();
	});
}

initChosen = function () {
	console.log("initiated initchosen");
	document.getElementById("button1").addEventListener("click", function () {
		passwordStrength();
	});
	document.getElementById("button2").addEventListener("click", function () {
		interactable();
	});
	console.log(sectionCompleted);
}

initChosen();

