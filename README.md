# SecureAuth — Secure Web Application

A Python Flask web application built as a cybersecurity internship project, demonstrating secure user authentication, password hashing, SQL injection prevention, and session management best practices.

---

## Project Description

SecureAuth is a full-stack web application that implements a secure user registration and login system. It showcases core web application security principles including parameterized database queries, strong password hashing, and hardened session cookies — all common requirements in real-world secure software development.

---

## Features

- **User Registration** — Create an account with a unique username and email address
- **Secure Login** — Sign in using either a username or email
- **User Dashboard** — Protected page displaying account info and an overview of active security controls
- **Logout** — Immediately invalidates and clears the session
- **Password Strength Indicator** — Real-time visual feedback while setting a password
- **Toggle Password Visibility** — Show/hide password fields on forms
- **Flash Messages** — Clear success and error feedback on all actions

---

## Security Features

| Feature | Implementation |
|---|---|
| **Password Hashing** | PBKDF2-SHA256 with 600,000 iterations via `werkzeug.security` |
| **SQL Injection Prevention** | Parameterized queries throughout — no string concatenation |
| **Session Authentication** | Server-side signed sessions (Flask secret key) |
| **Secure Cookie Flags** | `HttpOnly` and `SameSite=Lax` on session cookies |
| **Access Control** | `@login_required` decorator enforces authentication on protected routes |
| **Server-side Input Validation** | All form inputs validated and sanitized before processing |
| **Security Headers** | `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin` |
| **Unique Constraint Enforcement** | Database-level uniqueness on username and email prevents duplicates |
| **Session Invalidation on Logout** | `session.clear()` wipes all session data immediately |

---

## Technologies Used

- **Backend:** Python 3.11, Flask
- **Database:** SQLite 3 (via Python's built-in `sqlite3` module)
- **Password Security:** Werkzeug (`werkzeug.security`)
- **Environment Variables:** `python-dotenv`
- **Frontend:** HTML5, CSS3 (custom dark-themed UI), Vanilla JavaScript
- **No ORM** — raw parameterized SQL to demonstrate injection-safe query patterns directly

---

## Project Structure

```
flask-app/
├── app.py                  # Main Flask application (routes, auth logic, DB)
├── .env                    # Environment variables (SECRET_KEY)
├── users.db                # SQLite database (auto-created on first run)
├── templates/
│   ├── base.html           # Shared layout with navbar, flash messages
│   ├── register.html       # Registration form
│   ├── login.html          # Login form
│   └── dashboard.html      # Protected user dashboard
└── static/
    ├── css/
    │   └── style.css       # Dark-themed responsive stylesheet
    └── js/
        └── main.js         # Password toggle, strength meter, alert dismiss
```

---

## How to Run the Project

### Prerequisites

- Python 3.11 or higher
- `pip` package manager

### 1. Install dependencies

```bash
pip install flask werkzeug flask-wtf python-dotenv
```

### 2. Set a secret key

Edit `flask-app/.env`:

```
SECRET_KEY=replace-this-with-a-long-random-string
```

To generate a strong key:

```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### 3. Run the application

```bash
cd flask-app
python app.py
```

The app will start at `http://localhost:5000`. The SQLite database (`users.db`) is created automatically on the first run.

### 4. Use the application

| URL | Description |
|---|---|
| `/register` | Create a new account |
| `/login` | Sign in to your account |
| `/dashboard` | View account info and security summary (login required) |
| `/logout` | End your session |

---

## Security Notes for Production

- Replace the development Flask server with a production WSGI server such as **Gunicorn** or **uWSGI**
- Set `SESSION_COOKIE_SECURE = True` when running over HTTPS
- Store `SECRET_KEY` in a proper secrets manager — never commit it to version control
- Consider adding rate limiting (e.g. `Flask-Limiter`) to prevent brute-force login attacks
- Use a production-grade database (PostgreSQL, MySQL) for multi-user deployments

---

*Built as a cybersecurity internship project focused on secure web application development.*
