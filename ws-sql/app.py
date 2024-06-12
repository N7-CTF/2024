from flask import Flask, render_template, request, redirect
from flask_login import LoginManager, login_user, UserMixin, login_required, logout_user
from flask_socketio import SocketIO, emit
import sqlite3

app = Flask(__name__)
app.secret_key = "DE586BDF244C5282C4CB93A7AE8CD"

DATABASE = "db.sqlite"

login_manager = LoginManager()
login_manager.init_app(app)

socketio = SocketIO(app)


class User(UserMixin):
    def __init__(self, id, username):
        self.id = id
        self.username = username


@login_manager.user_loader
def load_user(user_id):
    if user_id != "admin":
        return None

    return User(user_id, "admin")


@app.context_processor
def inject_debug_state():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute("SELECT value FROM settings WHERE key='debug'")
    debug = cursor.fetchone()[0] == "true"
    cursor.close()

    return {"is_debug_mode": debug}


@app.before_request
def hook():
    debug = request.args.get("debug")
    print(debug)
    if debug is not None:
        debug = "true" if debug == "1" else "false"

        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute(f"UPDATE settings SET value=? WHERE key='debug'", (debug,))
        conn.commit()
        cursor.close()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/login")
def login():
    username = request.args.get("username")
    password = request.args.get("password")

    if username is None and password is None:  # Normal login page GET
        return render_template("login.html")

    if username == "admin" and password == "admin":  # Form submission handling
        login_user(User("admin", "admin"))
        return redirect("/ktn9386ck61o0cr35fsv3vrk8fpvm9ca")

    # Invalid credentials
    return render_template("login.html", error="Invalid credentials")


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect("/")


@login_manager.unauthorized_handler
def unauthorized():
    return redirect("/login")


@app.route("/ktn9386ck61o0cr35fsv3vrk8fpvm9ca")  # Fake admin route
@login_required
def admin():
    return render_template("admin.html")


@socketio.on("message")
def handle_ws(message):
    # Handle base cases
    if message.lower() == "ping":
        emit("response", "Pong")
        return

    if message == "exit":
        emit("response", "Goodbye!")
        return

    # Handle database commands
    parts = message.split(":")
    if len(parts) == 2:
        command, table = parts

        if table == "flag":
            emit("response", "Ooops! Access denied")
            return

        if command == "getData":
            try:
                conn = sqlite3.connect(DATABASE)
                cursor = conn.cursor()
                cursor.execute(f"SELECT * FROM {table}")
                rows = cursor.fetchall()
                emit("response", rows)
            except Exception as e:
                emit("response", "An error occurred")
            finally:
                cursor.close()
                conn.close()

            return

    # Otherwise, invalid command
    emit("response", "Invalid command")
    return
