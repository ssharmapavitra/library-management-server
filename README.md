# Library Management Server

This Node.js server provides APIs for library management. It allows you to manage books, including adding, listing, fetching, updating, and deleting book details.

## API Endpoints

1. **Add a New Book**
   - Endpoint: `/api/books/add`
   - Method: POST
   - Usage:
     - Send a POST request to this endpoint with a JSON body containing book details (e.g., title, author, ISBN).
     - Example Request:
       ```json
       {
           "title": "The Alchemist",
           "author": "Paulo Coelho",
           "summary": "Summary of the Book"
       }
       ```
     - Response: Returns the newly added book's details.

2. **Get List of Books**
   - Endpoint: `/api/books`
   - Method: GET
   - Usage: Send a GET request to this endpoint to retrieve a list of all books in the library.

3. **Get Book Details by ID**
   - Endpoint: `/api/books/:id`
   - Method: GET
   - Usage: Replace `:id` with the book's unique ID to retrieve details of a specific book.

4. **Update Book Details by ID**
   - Endpoint: `/api/books/update/:id`
   - Method: PUT
   - Usage: Replace `:id` with the book's unique ID and send a PUT request with a JSON body containing the updated book details.

5. **Delete a Specific Book by ID**
   - Endpoint: `/api/books/delete/:id`
   - Method: DELETE
   - Usage: Replace `:id` with the book's unique ID to delete a specific book from the library.

## Setup and Run

To set up and run the application, follow these steps:

1. **Clone the Repository:**
```
git clone <repository-url>
cd library-management-server
```

2. **Install Dependencies:**
```shell 
npm install
```

3. **Environment Variables:**
Create a `.env` file in the project root directory and set the necessary environment variables such as database connection details, port, and any other configurations.

4. **Database Setup:**
Set up your database (e.g., MongoDB) and make sure it's running. Update the database connection details in your `.env` file.

5. **Run the Server:**
```shell
npm start
```


The server will start and be accessible at `http://localhost:PORT`, where `PORT` is the port you defined in your environment variables.

## Assumptions and Decisions

During development, the following assumptions and decisions were made:

- This server assumes a MongoDB database for storing book data. Make sure to configure your database accordingly.

- Security measures like authentication and authorization are not implemented in this version. Ensure to add them as per your requirements.

- API responses are in JSON format.

- Error handling is included to handle various scenarios gracefully.

## Deployment to Vercel

You can deploy this Node.js server to Vercel, a platform known for hosting frontend applications. While it primarily serves static sites, you can deploy the server part separately. Follow these steps to deploy your server to Vercel:

1. **Install Vercel CLI:**
   ```shell
   npm install -g vercel
      ```

2. **Login To Vercel**
Run the following command to log in to your Vercel account:

   ```shell
   vercel login
   ```

   This will open a browser window for you to log in.

3. **Create a Vercel Project**
In your terminal, navigate to the root directory of your server project and run the following command to create a Vercel project:

   ```shell 
   vercel init
   ```
   Follow the prompts to configure your project. You may need to link your GitHub repository if it's not already linked.


4. **Configuring the Server Deployment**
You will be asked which directory should be deployed. Since it's a Node.js server, it might be the root directory. Make sure to configure the following settings in the vercel.json or now.json file:

   ```json
   {
   "version": 2,
   "builds": [
      {
         "src": "server.js",  // Replace with your server entry file
         "use": "@now/node"  // Use the Node.js builder
      }
   ],
   "routes": [
      {
         "src": "/(.*)",
         "dest": "/server.js"  // Replace with your server entry file
      }
   ]
   }
   ```

5. **Environment Variables**
You need to configure environment variables on Vercel for your server. You can do this through the Vercel dashboard or by using the Vercel CLI. For example:

   ```shell
   vercel env add SECRET_KEY=your-secret-key
   ```

6. **Deploy the Server**
Once your project is configured, deploy your server by running:

   ```shell
   vercel
   ```
   Vercel will build and deploy your server.

