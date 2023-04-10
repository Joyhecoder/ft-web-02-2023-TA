import sqlite3 

#* initalize db and name it gta.db
connection = sqlite3.connect("gta.db")

#* cursor allows communication with db
cursor = connection.cursor()

#* create database table by using "create table", name of the db, (the columns in the db table)
cursor.execute("create table gta (release_year integer, release_name text, city text)")

release_list = [
    (1997, "Grand Theft Auto", "state of New Guernsey"),
    (1999, "Grand Theft Auto 2", "Anywhere, USA"),
    (2001, "Grand Theft Auto III", "Liberty City"),
    (2002, "Grand Theft Auto: Vice City", "Vice City"),
    (2004, "Grand Theft Auto: San Andreas", "state of San Andreas"),
    (2008, "Grand Theft Auto IV", "Liberty City"),
    (2013, "Grand Theft Auto V", "Los Santos")
]  

#*insert data into db, (?,?,?) are the placeholders representing release_year, release_name and city respectively  
#?cursor.excutemany("insert into ...", data)

cursor.executemany("insert into gta values (?, ?, ?)", release_list)


#*print database rows
for row in cursor.execute("select * from gta"):
    print(row)

print("********************************")

#* print specific rows
cursor.execute("select * from gta where city=:c", {"c": "Liberty City"})
gta_search = cursor.fetchall()
print(gta_search)


#* create an additional db table
cursor.execute("create table cities (gta_city text, real_city text)")
cities_list = [
    ("Liberty City", "New York"),
    ("Los Santos", "Los Angeles")
]
cursor.executemany("insert into cities values (?,?)", cities_list)

print("********************************")

#* select specific to print
cursor.execute("select * from cities where gta_city=:c", {"c": "Liberty City"})
cities_search = cursor.fetchall()
print("cities search:", cities_search)

cursor.execute("select * from cities where gta_city=:x", {"x": "Los Santos"})
cities2_search = cursor.fetchall()
print("cities search 2:", cities2_search)



#* manipulate db data
print("********************************")
for i in gta_search:
    # ["New York" if value=="Liberty City" else value for value in i]
    print("i: ", i)
    adjusted = [cities_search[0][1] if value==cities_search[0][0] else value for value in i]
    print(adjusted)


connection.close()