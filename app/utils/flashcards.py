from random import randint
class Term:
    def __init__(self,term,level,parent):
        self.term = term
        self.definitions = []
        self.level = level
        self.parent = parent
    def appendDefinition(self,definition):
        self.definitions.append(definition)

def import_notes():
    with open("./notes.md", "r") as f:
        arrayOfLines = f.read().split("\n")
    return arrayOfLines

def create_cards(lineArray):
    cards = []
    current_terms = []
    for line in lineArray:
        i = 0
        # count the tabs
        while i < len(line) and line[i] == '\t':
            i+=1
        # no tabs = base term found
            # check to see if there are any terms in the currentTerms stack
            # add the base term (index 0) to the cards array and empty the stack
            # create a new term and add it to the empty stack
        current_level = i
        if current_level == 0:
            if current_terms:
                base_term = current_terms[0]
                cards.append(base_term)
                current_terms = []
            term = line
            level = current_level
            parent = None
            new_term = Term(term, level, parent)
            current_terms.append(new_term)
        # tabs = nested term found
            # check to see if there are any terms in the current_terms stack
            # store the index of the last term
            # check against the level of the last term vs the current number
                # to determine what to do
        elif current_terms:
            index_of_last_term = len(current_terms)-1
            last_term = current_terms[index_of_last_term]
            # if the same level as the last term
            if current_level == last_term.level:
                last_terms_parent = last_term.parent
            # if a level greater than the last term's level
            elif current_level > last_term.level:
                parent = last_term
            # if a level lower than the last
            elif current_level < last_term.level:
                # search for the correct parent
                j = index_of_last_term
                while j >= 0 and current_terms[j].level != current_level:
                    j-=1
                parent = current_terms[j].parent
            term = line
            level = current_level
            new_term = Term(term, level, parent)
            parent.appendDefinition(new_term)
            current_terms.append(new_term)
    return cards

def review_cards(cards):
    definitions = []
    def recur_Terms(node):
        definitions.append(node.term)
        if len(node.definitions):
            for possible_term in node.definitions:
                recur_Terms(possible_term)
        return

    for i in range(len(cards)):
        recur_Terms(cards[i])

    # string_definitions = "".join(definitions)
    return definitions

if __name__ == "__main__":
    lineArray = import_notes()
    cards = create_cards(lineArray)
    review_cards(cards)
