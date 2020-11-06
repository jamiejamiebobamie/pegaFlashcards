from flask import Flask, render_template
from app import app
from app.utils.flashcards import import_notes, create_cards, review_cards#,Term

@app.route('/')
def index():
    lineArray = import_notes()
    cards = create_cards(lineArray)
    current_card = review_cards(cards)
    return render_template('base.html', current_card=current_card)
