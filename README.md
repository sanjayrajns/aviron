Setup Instructions
1️⃣ Backend Setup (FastAPI + ML) 

cd backend
python -m venv venv
venv\Scripts\activate    # For Windows, or use source venv/bin/activate for Mac/Linux
pip install -r requirements.txt
uvicorn main:app --reload

ML Model located in:

backend/ml_model.py

2️⃣ Frontend Setup (Next.js)

cd frontend
npm install
npm run dev


 API Overview
POST /enrich-design

Accepts uploaded .txt files with design prompts

Returns enriched technical suggestions


curl -X POST -F "file=@design.txt" http://127.0.0.1:8000/enrich-design


Now accepting model accepting text files please change the files according to your inputs
