import sqlite3

# connection = sqlite3.connect("customer2.db")
# c = connection.cursor()

#*create a table
# c.execute("""CREATE TABLE customers (
#     first_name text,
#     last_name text,
#     email text
# )""")
# data_list = [("John", "Doe", "jonhn@me.com"), ("Kevin", "Ng", "kn@me.com"), ("Pacey", "Brett", "pb@gmail.com"), ("Joy", "Ng", "jhn@me.com")]
# c.executemany("INSERT INTO customers VALUES (?,?,?)", data_list)
# print("data added")

# c.execute("SELECT rowid, * FROM customers")
# items = c.fetchall()
# print("18", items)

#*query the db and return all records
def show_all():
    print("inside show_all")
    #connect to db and create a cursor
    connection = sqlite3.connect("customer2.db")
    c = connection.cursor()
    
    #query the db
    c.execute("SELECT rowid, * FROM customers")
    all_items = c.fetchall()
    print("30", all_items)
    
    for item in all_items:
        print(item)
    print("testing")  
    #commit our command and close the connection
    connection.commit()
    connection.close()
    
    
#* add a new record to the table
def add_one(first, last, email):
    #connect to db and create a cursor
    connection = sqlite3.connect("customer2.db")
    c = connection.cursor()
    
    #add a record
    c.execute("INSERT INTO customers VALUES (?,?,?)", (first, last, email))
    
    #commit our command and close the connection
    connection.commit()
    connection.close()
 
 #* add many records
def add_many(list):
    #connect to db and create a cursor
    connection = sqlite3.connect("customer2.db")
    c = connection.cursor()
    
    #add many records
    c.executemany("INSERT INTO customers VALUES (?,?,?)", list)
    
    #commit our command and close the connection
    connection.commit()
    connection.close()
    
#* delete record from table
def delete_one(id):
    #connect to db and create a cursor
    connection = sqlite3.connect("customer2.db")
    c = connection.cursor()
    
    #delete a record
    #? Method 1: pass id as an integer
    # c.execute("DELETE FROM customers WHERE rowid =:c", {"c": id})
    
    #? Method 2: needs to pass id as a string when calling the function
    c.execute("DELETE FROM customers WHERE rowid =(?)", id)
    
    
    #commit our command and close the connection
    connection.commit()
    connection.close()
    
#* Where clause
def email_lookup(email):
    #connect to db and create a cursor
    connection = sqlite3.connect("customer2.db")
    c = connection.cursor()
    
    #find the record first
    #? Method 1:
    # c.execute("SELECT * FROM customers WHERE email = (?)", (email,))
    #? Method 2: 
    c.execute("SELECT * FROM customers WHERE email = :c", {"c": "bbq@me.com"})
    items = c.fetchall()
    for item in items:
        print(item)
    
    
    #commit our command and close the connection
    connection.commit()
    connection.close()