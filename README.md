# 📊 Number Classification API

This is a **Node.js API** that accepts a number as a query parameter and returns interesting mathematical properties about it, along with a fun fact retrieved from the [Numbers API](http://numbersapi.com/).

This API was built for **HNG12 Stage 1 Backend Task** and deployed to a publicly accessible endpoint.

---

## 🔧 **Features**
✅ Accepts a **number** as a query parameter.  
✅ Returns JSON response with the following details:
   - **Prime check** (`is_prime`)
   - **Perfect number check** (`is_perfect`)
   - **Armstrong number check** (`properties`)
   - **Digit sum** (`digit_sum`)
   - **Mathematical fun fact** from [Numbers API](http://numbersapi.com/)  
✅ Proper **error handling** for invalid inputs.  
✅ **CORS enabled** for cross-origin requests.  
✅ **Fast response time (<500ms)**.  

---

## 📡 **API Documentation**

### **📌 Endpoint**
GET /api/classify-number?number=<number>
### **🔹 Example Request**
```sh
GET https://your-api.onrender.com/api/classify-number?number=371
🔹 Example Response (200 OK)
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
🔹 Error Response (400 Bad Request)
{
    "number": "alphabet",
    "error": true
}
🛠 Setup Instructions (Run Locally)
1️⃣ Clone the Repository
git clone https://github.com/blossomifeoma/HNGTask1.git
cd HNGTask1
2️⃣ Install Dependencies
npm install
3️⃣ Run the API Locally
node index.js
Then, open in your browser or Postman:
http://localhost:3000/api/classify-number?number=371(or any number of your choice)
