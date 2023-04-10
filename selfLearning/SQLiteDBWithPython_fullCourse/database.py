import sqlite3

#* initialize db and name it customer.db
connection = sqlite3.connect("customer.db")

#* cursor tells the db what you want to do, it allows communication with db
c = connection.cursor()

#* create a table with dot strings
# c.execute("""CREATE TABLE customers (
#     first_name text,
#     last_name text,
#     email text
# )""")

#?Datatypes: NULL, INTEGER (whole numbers), REAL (decimals), TEXT, BLOB ()



#* insert single record into the table
# c.execute("INSERT INTO customers VALUES ('Tim', 'Elder', 'tim@codemy.com')")


#* insert multiple records into the table
many_customers = [('Wes', 'Brown', 'wes@me.com'),
                  ('Steph', 'Smith', 'steph@me.com'),
                  ('Dan', 'Pas', 'dan@me.com')]

# c.executemany("INSERT INTO customers VALUES (?,?,?)", many_customers)


#*query the db
c.execute("SELECT * FROM customers")
# print(c.fetchone())              #?fetch the first item in the table
# print(c.fetchmany(3))            #?fetch however many
# print(c.fetchall())              #?fetch all


#* commit our command 
connection.commit()

#*close our connection
connection.close()