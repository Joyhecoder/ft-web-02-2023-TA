import sqlite3
connection = sqlite3.connect("healthcare.db")
c = connection.cursor()

#* create appointments table
# c.execute("""CREATE TABLE appointments (
#     appt_id integer,
#     pat_id integer,
#     date text,
#     type text
#     )""")
appointment_list = [
    (3478, 204, "3-17-2022", "planned"),
    (3479, 201, "3-17-2022", "planned"),
    (3480, 202, "3-17-2022", "emergency"),
    (3481, 205, "3-17-2022", "emergency"),
    (3482, 'NULL', "3-18-2022", "planned"),
]
# c.executemany("INSERT INTO appointments VALUES (?, ?, ?, ?)", appointment_list)

# c.execute("SELECT * FROM appointments")
# items = c.fetchall()
# print(items)


#* create patients table
# c.execute("""CREATE TABLE patients (
#     pat_id integer,
#     name text,
#     city text,
#     state text
#     )""")

patient_list = [
    (201, "Filia Smith", "Milwaukee", "Wisconsin"),
    (202, "Geoffry Wearing", "Madison", "Wisconsin"),
    (203, "Ofilia Paxrton", "Madison", "Wisconsin"),
    (204, "Edgardo Otson", "Milwaukee", "Wisconsin"),
    (205, "Devan Gilvear", "Milwaukee", "Wisconsin")
    
]
# c.executemany("INSERT INTO patients VALUES (?, ?, ?, ?)", patient_list)

# c.execute("SELECT rowid, * FROM patients")
# items = c.fetchall()
# print(items)


#! inner join
c.execute("""SELECT appointments.appt_id, patients.name, patients.city FROM
          appointments
          INNER JOIN
          patients
          ON
          appointments.pat_id = patients.pat_id""")
inner_join_items = c.fetchall()
print(inner_join_items)

connection.commit()
connection.close()