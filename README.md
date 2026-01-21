# Random-password-generator
Choosing a password for a new account can be very tough and boring 🥱.
We either put a similar password as one of our other accounts or we just go with the flow and make something different... which we end up forgetting within the next hour 😅.
I've got a better alternative than to click 'forgot password'.

## INTRODUCING.... RANDOM PASSWORD GENERATOR!!!! 🎉🎉🎉

This code is amazing for those moments when we are simply confused about our password. It's not just another simple password generator, its more complex, as in it has more meaning to it.

Here are some **Salient features**:
1. The password generation works on multiple levels: Want a password with just words? you got that. Let's take it up a notch, password with numbers? alphanumeric? you got that too. password with special characters? Say no more. Everything from simple **Laptop passwords** to **Email account passwords** to even **Phone pin number-style passwrods**. Everything is possible.
2. A __Different__ way of password generation: No fancy schmancy LLMs for generating 100s of passwords and having us to choose, no silly "strong" passwords which make are just alpha numerals arranged in random order. This system randomly selects one book from Gutenberg corpus of nltk and then from that, it randomply selects words which are concatenated for forming the password.
3. Randomness overload: We've got random corpus, random words, random number of words, random numbers themselves (in case of "alphanum" and "pin" password mode), random special characters (in case of "mix" password mode).

How to use??
1. Download or clone the repository using 
```git clone <REPO_LINK>``` command in your terminal/command prompt
2. Next open the .py file and run it as per your passwrod requirements.
3. Change the "type" variable in function call for **generate_password** to generate a password of your liking. 
supported types are:
* alpha: for only words.
* alphanum: for words and numbers i.e. alphanumeric.
* mix: for a mix of special charecters, alphabets and numbers.
* pin: for mobile phone pins.

Excited to use??? 😆😆
I know you are, what are you waiting for?? Go generate those passwords!!
