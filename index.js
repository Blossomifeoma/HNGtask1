const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Function to check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Function to check if a number is an Armstrong number
const isArmstrong = (num) => {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
};

// Function to check if a number is a perfect number
const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

// Function to get the sum of digits
const getDigitSum = (num) => {
    return num.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
};

// Function to get fun fact from Numbers API
const getFunFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        return response.data;
    } catch (error) {
        return "No fun fact available.";
    }
};

// API Endpoint
app.get("/api/classify-number", async (req, res) => {
    let { number } = req.query;

    // Validate input
    if (!number || isNaN(number)) {
        return res.status(400).json({
            number,
            error: true,
        });
    }

    number = parseInt(number);
    const prime = isPrime(number);
    const armstrong = isArmstrong(number);
    const perfect = isPerfect(number);
    const digitSum = getDigitSum(number);
    const funFact = await getFunFact(number);

    // Determine properties field
    let properties = [];
    if (armstrong) properties.push("armstrong");
    properties.push(number % 2 === 0 ? "even" : "odd");

    // Response
    res.json({
        number,
        is_prime: prime,
        is_perfect: perfect,
        properties,
        digit_sum: digitSum,
        fun_fact: funFact,
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
