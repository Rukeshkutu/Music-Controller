Music-Controller
Follow the steps below to set up the project on your local machine.

Setup Instructions
1. Install Required Python Modules
To ensure all necessary dependencies for the Django backend are installed, run the following command in your terminal:
pip install -r requirements.txt
This will install all the Python packages listed in the requirements.txt file.

2. Start the Django Web Server
The Django web server is responsible for handling backend operations. To start it, follow these steps:

Navigate to the desired tutorial folder. Replace x with the number of the tutorial you're working on:

bash
Copy code
cd "Tutorial x"
Run the Django development server using:

bash
Copy code
python manage.py runserver
This command will start the backend server, and it will be accessible at http://127.0.0.1:8000/ in your web browser.

3. Install Node.js
The project requires Node.js to manage and compile the frontend. Ensure Node.js is installed on your system. You can download it from Node.js Official Website.

4. Install Node Modules
To set up the frontend dependencies for React, follow these steps:

Navigate to the frontend folder:

cd frontend
Install all required packages by running:
npm install
This command will download and configure all the necessary JavaScript dependencies listed in the package.json file.

5. Compile the Frontend
After setting up the Node.js dependencies, you need to compile the frontend React code. This can be done in two modes:

Production Mode
For a production-ready build, run:

npm run build
This will create an optimized version of the frontend in the build/ folder.

Development Mode
For development purposes, use the following command:

npm run dev
This will start a development server with hot-reloading enabled, 
allowing you to see changes immediately as you update the code.

With these steps completed, your full-stack web application should be up and running!
