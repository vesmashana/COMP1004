Preface:

Dictionary attack:
1. commonPasswords array is an excerpt of the top 100k passwords from the Have I Been Pwned data set - Troy Hunt (https://haveibeenpwned.com)
2. There is some derogatory language in this database. I filtered out two that I felt were inappropriate, given that my project will not be used for further purposes.
However, it is simply not realistic for me to do this for everything. 
3. Some characters in the dataset had to be converted from their original to Unicode. This is because I couldn't guarantee it wouldn't cause problems unamended.
4. I would have liked to make it into a seperate javascript or json file to demonstrate a data level but accessing them within the browser got blocked for security reasons

Bruteforcer:
1. The formula used is based off of data from my own written password cracker. Two prototypes & final result can be found on github. All time values generated were done using the first character of the set
only for the password
2. Logic for the formula was as follows:
-identified an exponential trend in password length vs time taken
-logical conclusion was that the exponential was probably characterset^length -> 93^n
-full equation should be: x * 93^n, where x is the time taken for a single character to be tested and checked within the guess
-divided my achieved times by 93^n and found that they averaged to 2.3 * 10^-10 with slight deviations from this number only
-thus: 2.3 * 10^-10 * x * 93^n
-Obvious constraint: bruteforcer only assigns a time value by length 
-It was not possible to assign realistic attributes for how character choice impacts the time taken, because many bruteforcers will exist in the world, all deviating from each other's character sets
-> ie '~' may be the beginning of someone else's character set whereas it's the end of mine, cracking passwords is also illegal :p so there is not readily available data to make an inference as to what
is most common
-Decided the final formula would be an average - statistically the best choice. 
-As a password '!!!' (first character in my set) will have only a tiny variation from '~~' (last character in charset) in time taken, I did not feel the need to collect more data using the last character
-result is calculated by using the formula, adding the formula again with exponential n+1, and dividing by two to calculate an average.
