// 1004BruteForcer.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string>

int compare(std::string guess, std::string password);
double hours;
double minutes;
char charSet[94] = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9','!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/',':', ';', '<', '=', '>', '?', '@','[', '\\', ']', '^', '_', '`','{', '|', '}', '~'};
void bruteForcer(std::string guess, std::string password, int count, int guesslength, clock_t start) {
    count++;
    for (int i = 0; i < 94; i++) {
        char c = charSet[i];
        std::cout << guess << std::endl;
        guess[count] = c;
        int check = compare(guess, password);
        if (check == 1) {
            std::cout << "Password found: " << guess << std::endl;
            clock_t time = clock() - start;
            int elapsedTime = time / CLOCKS_PER_SEC;
            std::cout << "Total seconds (for data collection): " << std::endl;
            if (elapsedTime > 3600) {
                hours = elapsedTime / 3600;
                elapsedTime = elapsedTime % 3600;
            }
            if (elapsedTime > 60) {
                minutes = elapsedTime / 60;
                elapsedTime = elapsedTime % 60;
            }
            std::cout << " Time taken: " << std::endl;
            std::cout << "Hours: " << hours << std::endl;
            std::cout << "Minutes: " << minutes << std::endl;
            std::cout << "Seconds: " << elapsedTime << std::endl;
            exit(0);
        }
        if ((count + 1) < guesslength) {
            bruteForcer(guess, password, count, guesslength, start);
        }
  
    }
}

int compare(std::string guess, std::string password) {//returns 1 if same, returns 0 if not. The code could be made more efficient by running the check only if
    //the guess and password are the same length, but I did not do this because a real world hacker would not be able to do this as they do not yet know your password
    int guesslength = guess.length();
    int passwordlength = password.length();
    int limit;
    if (passwordlength >= guesslength) {
        limit = passwordlength;
    }
    else { limit = guesslength; }
    for (int i = 0; i < limit; i++) {
        char g = guess[i];
        char p = password[i];
        if (p != g) {
            return 0;
        }
    }
    if (guesslength == passwordlength) {
        return 1;
    }
    else { return 0; }
}

std::string initialiseGuess(int guesslength) {//Because I chose to access string elements and replace them rather than using pop back and push back, the 'guess' string needs to be reinitialised with a new size every time
    //the bruteforcer has tried all combinations of a length
    std::string guess;
    for (int i = 0; i < guesslength; i++) {
        guess.push_back('*');
    }
    return guess;
}


int main()
{
    std::cout << "Enter your password." << std::endl;
    std::string password;
    std::cin >> password;
    std::string guess;
    int count = -1;
    clock_t start = clock();
    for (int guesslength = 4; guesslength < 17; guesslength++) {
        guess = initialiseGuess(guesslength);
        bruteForcer(guess, password, count, guesslength, start);
    }
}
