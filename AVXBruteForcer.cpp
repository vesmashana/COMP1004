#include <iostream>
#include <string>
#include <immintrin.h>
int compare();
void convertGuess();
void bruteForcer();
int avxPassword[16];
int avxGuess[16];
int passwordlength;
int guesslength;
int count;
int check;
clock_t start;
std::string password;
std::string guess = "****************";
//note that it is called avx2 because it was my second attempt 
void AVX2() {
    int i;
    count++;
    for (i = 33; i < 126; i += 8) {
        //Basic structure is as follows: AVX technologies are used to load 8 values of i simultaneously and extract each value into the array
        //8 decision blocks for each
        //Function call + checks handled per generation of new guess, so 8 times within one iteration of this loop
        __m256i A;
        A = _mm256_setr_epi32(i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7);//load relevant values of i into a register
        int value = _mm256_extract_epi32(A, 0);//extract relevant value 
        avxGuess[count] = value;//add to array
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
                
            }
        }
        value = _mm256_extract_epi32(A, 1);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        value = _mm256_extract_epi32(A, 2);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        value = _mm256_extract_epi32(A, 3);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        value = _mm256_extract_epi32(A, 4);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        value = _mm256_extract_epi32(A, 5);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        value = _mm256_extract_epi32(A, 6);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: " << guess;
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        value = _mm256_extract_epi32(A, 7);
        avxGuess[count] = value;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
    }
    for (; i < 126; i++) {
        avxGuess[count] = i;
        if (count < guesslength - 1) {
            AVX2();
        }
        else {
            check = compare();
            if (check == 1) {
                std::cout << "Your password is: ";
                convertGuess();
                clock_t time = clock() - start;
                double elapsedTime = static_cast<double>(time) / CLOCKS_PER_SEC;
                std::cout << "Total seconds (for data collection): " << elapsedTime << std::endl;
                exit(0);
            }
        }
        AVX2();
    }
    count--;
}

void convertGuess() {//convert ASCII values to the string it is supposed to represent. Purely for printing the end result, though it was also used in debug statements
    for (int i = 0; i <= guesslength; i++) {
        char g = static_cast<char>(avxGuess[i]);
        guess[i] = g;
    }
    std::cout << guess << std::endl;

}

void loadPassword(std::string password) {//load user input into an array, with integers representing the characters. For AVX I chose to use the ASCII library.
    passwordlength = password.length();
    for (int i = 0; i < password.length(); i++) {
        char g = password[i];
        int ascii_value = int(g);
        avxPassword[i] = ascii_value;
    }
}

int compare() {//returns 1 if same, returns 0 if not.
    //Check terminates at password length. This should never be problematic because my code will have checked all combinations of all valid sizes before the guess can exceed password length. 
    //Remaining elements of the array are initialised (as to not have to use templates) but do not count until the bruteforcer has filled in its fields
    for (int i = 0; i < passwordlength; i++) {
        int g = avxGuess[i];
        int p = password[i];
        if (p != g) {//For efficiency, terminates as soon as there is a mismatch
            return 0;
        }
    }
    return 1;//if the function reaches this return statement before the other one, all characters must be the same
}



int main()
{
    std::cout << "Enter your password." << std::endl;
    std::cin >> password;
    loadPassword(password);
    count = -1;
    start = clock();
    for (guesslength = 4; guesslength < 12; guesslength++) {
        AVX2();
    }

    
    
}
