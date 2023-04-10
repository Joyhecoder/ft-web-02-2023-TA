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
# c.execute("SELECT * FROM customers")

#! query the db table with a primary key, where clause and like wildcard
# c.execute("SELECT rowid, * FROM customers WHERE email LIKE '%codemy.com' ")
# print(c.fetchone())              #?fetch the first item in the table
# print(c.fetchmany(3))            #?fetch however many
# print(c.fetchall())              #?fetch all

# items = c.fetchall()

#! query each element in a row


# print("NAME" + "\t\t  EMAIL")
# print("-----" + "\t\t  -----")
# for item in items:
#     print(item[0] + " " + item[1] + " \t " + item[2])


# for item in items:
#     print(item)


#* update records
c.execute("""UPDATE customers SET first_name = 'John'
          WHERE rowid = 1
          
          """)

c.execute("SELECT rowid, * FROM customers")
items = c.fetchall()
for item in items:
    print(item)


#* commit our command 
connection.commit()

#*close our connection
connection.close()