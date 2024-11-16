# ContactManager_Backend
 How to Run the Backend



What You Need

Before you start, make sure you have these things installed:

- Node.js (version 14.x or higher)
- npm (comes with Node.js)
- MongoDB (can be local or MongoDB Atlas, your choice)
- Postman (optional, for testing API)

# Step 1: Clone the Repo

First, grab the repo by cloning it to your computer:

git clone https://github.com/your-username/project-name.git
cd project-name

# Step 2: Install Dependencies

Next, run the following command to install all the packages that the backend needs:

npm install

This installs everything listed in package.json.





# Step 4: Set Up Environment Variables

Create a .env file in the project root (same place as package.json) and add your MongoDB URL:

MONGODB_URL=mongodb+srv://chatterjeeswastik022:Swastik2004@cluster0.0smcq.mongodb.net/

PORT=5000

Make sure to replace the MongoDB URL with your own (whether it's from Atlas or your local MongoDB).

Step 5: Run the Backend

Now that everything’s set up, you can run the backend by typing:

npm start

Your backend will start running on http://localhost:5000 (or whatever port you've specified).

Step 6: Test the API (Optional)

If you want to make sure everything's working, you can use Postman or any other API testing tool to try out the endpoints:

- GET /api/contacts: Get a list of contacts
- POST /api/create-contact: Create a new contact
- PUT /api/update-contact/:id: Update an existing contact
- DELETE /api/delete-contact/:id: Delete a contact

# Why MongoDB?



1. Flexible Schema: MongoDB is a NoSQL database, so you don’t have to worry about rigid tables and columns. This is super useful when you’re developing something fast and you need flexibility.
   
2. Easy to Scale: MongoDB can scale horizontally, meaning it can grow with your project. As your app gets bigger, MongoDB can handle more data and traffic easily.As it is NoSQL database bot horizonal and vertical
                  scalling is possible

3. Good Community: MongoDB has a huge community, so if I run into any issues, I can find a solution online.




