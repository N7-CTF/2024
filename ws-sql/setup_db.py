import sqlite3

conn = sqlite3.connect("db.sqlite")
c = conn.cursor()

# Create dummy tables if they don't exist
c.execute(
    """CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)"""
)
c.execute(
    """CREATE TABLE IF NOT EXISTS subscriptions (id INTEGER PRIMARY KEY, user_id INTEGER, plan TEXT)"""
)
c.execute("""CREATE TABLE IF NOT EXISTS flag (flag TEXT)""")

c.execute(
    """CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY, key TEXT, value TEXT)"""
)

# Insert flag if it doesn't exist
c.execute("SELECT * FROM flag")
if c.fetchone() is None:
    c.execute(
        "INSERT INTO flag (flag) VALUES ('N7-CTF{d0_n0t_5t0r3_7h15_1n_7h3_d474b453}')"
    )

# Insert dummy users if they don't exist
c.execute("SELECT * FROM users")
if c.fetchone() is None:
    c.execute(
        "INSERT INTO users (username, password) VALUES ('admin', 'admin'), ('dumpy', 'g33kOx10'), ('1ss', 'B00L1234'), ('nazih', 'naz1h2O1O')"
    )

# Insert dummy subscriptions if they don't exist
c.execute("SELECT * FROM subscriptions")
if c.fetchone() is None:
    c.execute(
        "INSERT INTO subscriptions (user_id, plan) VALUES (2, 'premium'), (3, 'free'), (4, 'premium')"
    )

# Insert dummy settings if they don't exist
c.execute("SELECT * FROM settings")
if c.fetchone() is None:
    c.execute(
        "INSERT INTO settings (key, value) VALUES ('theme', 'light'), ('language', 'en'), ('timezone', 'UTC'), ('debug', 'false')"
    )

conn.commit()
conn.close()
