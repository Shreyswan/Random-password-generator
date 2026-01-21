import nltk
try:
    nltk.download("gutenberg")

except:
    pass

from nltk.corpus import gutenberg
import random
import string

def get_random_words():
    files = gutenberg.fileids()
    chosen_file = random.choice(files)
    punctuation_set = set(string.punctuation)
    rand_words = gutenberg.words(chosen_file)
    cleaned_tokens = [token for token in rand_words if token not in punctuation_set]

    return cleaned_tokens

def generate_password(rand_words: list, type: str = "alpha", digits: str = 6):
    password = ""
    if type.lower() == "alpha":
        for _ in range(random.randint(2, 5)):
            password += random.choice(rand_words) + "-"
        
        return password[:-1]

    elif type.lower() == "alphanum":
        for _ in range(random.randrange(2, 4)):
            password += random.choice(rand_words)
            password += str(random.randint(1, 100)) + "-"
        
        return password[:-1]

    elif type.lower() == "mix":
        spe_char = list(string.punctuation)
        for _ in range(random.randrange(2, 4)):
            password += random.choice(rand_words)
            password += random.choice(spe_char)
            password += str(random.randint(1, 100)) + "-"
        
        return password[:-1]

    elif type.lower() == "pin":
        for _ in range(digits):
            password += str(random.randint(1, 9))
        
        return password
    
    else:
        print("INFO: Oops! Invalid type")
        pass

def main():
    rand_words = get_random_words()
    password = generate_password(rand_words=rand_words, type="mix")
    print(password)

if __name__ == '__main__':
    main()