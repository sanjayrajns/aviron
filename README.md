
---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup (FastAPI + ML)

```bash
cd backend
python -m venv venv
venv\Scripts\activate    # For Windows, or use source venv/bin/activate for Mac/Linux
pip install -r requirements.txt
uvicorn main:app --reload


```
```
backend/ml_model.py
```

### Frontend Commands (Next.js project inside frontend/ folder):
```
cd frontend
npm install        # Installs all Node.js (React/Next.js) dependencies
npm run dev        # Starts your Next.js development server (usually on http://localhost:3000)



```

### Model Accepting .txt file changes the model and also api file according to the input
