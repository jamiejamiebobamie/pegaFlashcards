from flask import Flask, render_template
from app import app
from app.utils.flashcards import import_notes, create_cards, review_cards

@app.route('/')
def index():
    lineArray = import_notes()
    cards = create_cards(lineArray)
    cards = review_cards(cards)
    return render_template('base.html', cards=cards)
