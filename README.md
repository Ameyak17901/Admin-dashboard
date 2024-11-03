# Admin Dashboard

Admin Dashboard to keep track of number of signups and users on the portal.

## Instructions:


- Clone ```git clone <repo.git>```

- To set up Frontend:
   - Install the dependencies:
     ```
     npm install
     ```
   - To start the frontend:
     ```
     npm run dev
     ```
- To set up backend:
   - Create virtual environment:
     ```
     python -m venv <path>
     ```
   - Activate the environment:
     
     For Mac: 
     ```
     source venv\bin\activate
     ```
     For Windows:
     ```
     venv\Scripts\activate.bat
     ```
   - Install the dependencies:
     ```
     pip install -r requirements.txt
     ```
   - To start the backend: (In watch mode)
     ```
     uvicorn main:app --reload
     ```          
