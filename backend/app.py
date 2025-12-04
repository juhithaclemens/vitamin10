from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Believe you can and you're halfway there.",
    "Every moment is a fresh beginning.",
    "Turn your wounds into wisdom.",
    "What we think, we become.",
    "The best time for new beginnings is now."
]

@app.route("/quote")
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(debug=True)
