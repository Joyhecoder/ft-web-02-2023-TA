def nerdify(str):
    new_str = ''
    for letter in str:
        new_str += '4' if letter.lower() == 'a' else ('3' if letter.lower() == 'e' else ('1' if letter.lower() == 'i' or letter.lower() == 'l' else letter))
    return new_str
# print(nerdify("Fundamentals"))

def _convert_letter_to_num(letter):
    lower_letter = letter.lower()
    if lower_letter == 'a':
        return '4'
    elif lower_letter == 'e':
        return '3'
    elif lower_letter == 'i' or lower_letter == 'l':
        return '1'
    else:
        return lower_letter
    
def nerdifyy(str):
    new_str = ''
    for letter in str:
        new_str += _convert_letter_to_num(letter)
    capitalized_first_letter = new_str.capitalize()
    return capitalized_first_letter
    
nerdifyy("Fundamentals")
    