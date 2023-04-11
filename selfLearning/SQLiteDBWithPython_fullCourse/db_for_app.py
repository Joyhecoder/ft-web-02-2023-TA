import sqlite3

connection = sqlite3.connect("customer2.db")
c = connection.cursor()

#*create a table
c.execute("""CREATE TABLE customers (
    first_name text,
    last_name text,
    email text
)""")




# def show_all():


connection.commit()
connection.close()
    