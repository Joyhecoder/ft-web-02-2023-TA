import db_for_app

#*add a record to db table
# db_for_app.add_one("Cici", "Zou", "cc@me.com")

#*add many records
data_list = [
    ("Tommi", "Green", "tommi@me.com"),
    ("Truth", "BBQ", "bbq@me.com")
]
db_for_app.add_many(data_list)

#*delete a record
#? Method 1:
# db_for_app.delete_one(5)
#? Method 2:
# db_for_app.delete_one('5')

#*show all the records
db_for_app.show_all()