#query to combine college_enrollment_export and graduation_export 

import sqlite3

#* initialize db and name it onegoal.db
connection = sqlite3.connect("onegoal.db")

#* cursor allows communication with db
cursor = connection.cursor()


# #* create database table by using "create table", name of the db, (the columns in the db table)
# cursor.execute("""CREATE TABLE college_enrollment_export (
#     fellow_id integer, 
#     college_id integer, 
#     fall_term_enrollment_status boolean,
#     year_enrolled integer
#     )""")
# cursor.execute("""CREATE TABLE graduation_export (
#     fellow_id integer, 
#     have_graduated boolean, 
#     graduated_college integer,
#     graduated_year integer
#     )""")
# cursor.execute("""CREATE TABLE dim_college (
#     college_id integer, 
#     college_name text
#     )""")
# cursor.execute("""CREATE TABLE dim_fellow (
#     fellow_id integer, 
#     name text,
#     seamless boolean,
#     cohort_year integer
#     )""")

# college_enrollment_list = [
#     (101, 11, False, 2014),
#     (102, 12, False, 2014),
#     (103, 13, True, 2015),
#     (104, 14, True, 2018),
#     (105, 14, False, 2015)
# ]
# graduation_list = [
#     (101, True, 1, 2020),
#     (102, True, 2, 2018),
#     (103, False, 3, None),
#     (104, False, 4, None),
#     (105, True, 4, 2021)
# ]
# college_list = [
#     (11, "University of Houston"),
#     (12, "University of Chicago"),
#     (13, "University of Idaho"),
#     (14, "University of Texas")
# ]
# fellow_list = [
#     (101, "John Doe", True, 2014),
#     (102, "Skylar Henderson", True, 2014),
#     (103, "Kelvin Chen", False, 2014),
#     (104, "Jordan Jefferson", False, 2014),
#     (105, "Katie Johnson", True, 2015)
# ]


# #*insert data into each db table
# cursor.executemany("INSERT INTO college_enrollment_export VALUES (?, ?, ?, ?)", college_enrollment_list)
# cursor.executemany("INSERT INTO graduation_export VALUES (?, ?, ?, ?)", graduation_list)
# cursor.executemany("INSERT INTO dim_college VALUES (?, ?)", college_list)
# cursor.executemany("INSERT INTO dim_fellow VALUES (?, ?, ?, ?)", fellow_list)



# #* select all rows from each table
# cursor.execute("SELECT * FROM college_enrollment_export")
# college_rows = cursor.fetchall()

# # Get the column names of the my_table table
# cursor.execute("PRAGMA table_info(college_enrollment_export)")
# columns_name = [col[1] for col in cursor.fetchall()]

# print(columns_name)
# for row in college_rows:
#     print(row)


#!join the two tables - college_enrollment_export and graduation_export
join_query = """SELECT college_enrollment_export.fellow_id, college_enrollment_export.college_id AS initial_enrolled_college_id, college_enrollment_export.year_enrolled, graduation_export.have_graduated, graduation_export.graduated_college, graduation_export.graduated_year
               FROM 
               college_enrollment_export
               LEFT JOIN
               graduation_export
               ON
               college_enrollment_export.fellow_id = graduation_export.fellow_id"""
               
cursor.execute(join_query)

#!store the result in a new table named joined_table
create_table_query = "CREATE TABLE joined_table AS SELECT * FROM ({})".format(join_query)
cursor.execute(create_table_query)

#!join the seamless column from dim_fellow with the newly created joined_table
cursor.execute("""SELECT joined_table.*, dim_fellow.seamless 
               FROM 
               joined_table 
               JOIN 
               dim_fellow
               ON
               joined_table.fellow_id = dim_fellow.fellow_id
               WHERE 
               dim_fellow.cohort_year = 2014""" )
#!assign the data into the variable college_enrollment_export_join_graduation_export_joined_seamless
college_enrollment_export_join_graduation_export_joined_seamless = cursor.fetchall()


#* Get the column names of the resulting table and print all the exiting data in the result table
columns = [col[0] for col in cursor.description]

print(columns)

#* loop through the new table and print out each row
for item in college_enrollment_export_join_graduation_export_joined_seamless:
    print(item)

#? 6-year completion rate for seamless enrollers
seamless_denominator = 0
seamless_numerator = 0
for item in college_enrollment_export_join_graduation_export_joined_seamless:
    #*check to see if a student is a seamless enroller
    if item[6] == 1:
        seamless_denominator += 1
        #* check to see if the student received a degree within 6 years of HS graduation
        if item[5] - 2014 <= 6:
             seamless_numerator += 1

#? 6-year completion rate for high school graduates
hs_grad_denominator = 0
hs_grad_numerator = 0
for item in college_enrollment_export_join_graduation_export_joined_seamless:
    hs_grad_denominator += 1
    
    #* check to see if the student received a degree,
    #* if yes, check to see if the student received it within 6 years of HS graduation
    if item[5] != None:
        if item[5] - 2014 <= 6:
            hs_grad_numerator += 1


#!create the final completion rate calculations table:
cursor.execute("""CREATE TABLE completion_rate_calculations (
    metric text,
    numerator integer,
    denominator integer)""")
final_data_list = [
    ("6-Year Completion Rate for Seamless enrollers", seamless_numerator, seamless_denominator),
    ("6-Year Completion Rate for High School Graduates", hs_grad_numerator, hs_grad_denominator)
]

#! insert data into the final completion rate calculations table:
cursor.executemany("INSERT INTO completion_rate_calculations VALUES (?, ?, ?)", final_data_list)

for row in cursor.execute("SELECT * FROM completion_rate_calculations"):
    print(row)


#commit our command and close the connection
connection.commit()
connection.close()
