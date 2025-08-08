# Veterinary Ambulance

This is a mini full-stack application for Veterinary Ambulance management.

- 🐍 Backend: Django + MySQL  
- ⚛️ Frontend: React + Vite + Material UI

---

## 🛠 Technologies

### Backend
- Python
- Django
- MySQL

### Frontend
- React 19
- Vite
- React Router DOM
- Material UI (MUI)
- Emotion
- ESLint

---

## 🚀 Setup Instructions

### 📦 Backend Setup (`/backend`)

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment**

   - macOS / Linux:
     ```bash
     python -m venv env
     source env/bin/activate
     ```

   - Windows (PowerShell):
     ```powershell
     python -m venv env
     .\env\Scripts\Activate.ps1
     ```

   - Windows (cmd):
     ```cmd
     python -m venv env
     .\env\Scripts\activate.bat
     ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database**

   Update your MySQL database settings in `backend/settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'your_db_name',
           'USER': 'your_username',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```
   Also, you can use the files un the folder `Scripts` to create the schema.

5. **Apply migrations**
   ```bash
   python manage.py migrate
   ```

6. **(Optional) Create a superuser**
   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**
   ```bash
   python manage.py runserver
   ```

> ℹ️ To deactivate the virtual environment: `deactivate`

---

### 💻 Frontend Setup (`/frontend`)

1. **Navigate to frontend folder**
   ```bash
   cd frontend
   ```

2. **Install Node dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

---


## 📁 Important Files

### Backend
- `requirements.txt` — Python dependencies
- `manage.py` — Django management script
- `.gitignore` — excludes `env/` and other sensitive files

### Frontend
- `package.json` — Dependencies and scripts
- `vite.config.js` — Vite configuration (customize port here)
- `.gitignore` — excludes `node_modules/`, builds, etc.

