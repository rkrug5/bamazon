# bamazon
i like books, anybody else like books? (node &amp; mysql app)

Hello, 

The following is for anybody interested in how this project works and for those with the unfortunate task of grading it (._. )

----------------------------------------------------------------------------------------------------------------------------------------


This app is used to keep track of information about products housed in a store 'like' "Amazon".  

First, in order to have functionality and persistence of information, we used mysql.  In order to get that set up.  Open a local instance of mysql and refer to the bamazon.sql file.  This acts as both a schema and seeds for the initial table/database.  

![Alt text](images/bamazonschema.jpg?raw=true "start")

Copy lines 5 - 50 (or perhaps include an uncommented line 4 if you already have an unneeded bamazonDB in your instance) and execute them in mysql workbench.  




So, the first thing my program does is print all the available items and asks the customer if they would like to buy something or leave.  

![Alt text](images/firstoption.jpg?raw=true "start")

After enetering the item id# and how many of them they would like, it returns their cost and asks the customer what else they would like to do.

![Alt text](images/itemamount.jpg?raw=true "stuff")

In the manager program, the first thing the user will see is a list of available options.  

![Alt text](images/manager0.jpg?raw=true "manager interface")

If they choose the first option, it will display the table of available items.

![Alt text](images/manager1.jpg?raw=true "manager interface")

If they choose the second option, they will see the invenotry items with quantity < 5. 

![Alt text](images/manager2.jpg?raw=true "manager interface")

If they choose to restock an item, they will be asked for which item and how many to add.  It will then simply console log how many ot the item are now available.  

![Alt text](images/manager3.jpg?raw=true "manager interface")

Lastly, if they choose to add an item, they will add all the relevant info, and then the program will reprint out the table to help confirm the item has been added and to check the details. 

![Alt text](images/manager4.jpg?raw=true "manager interface")


![Alt text](images/manager5.jpg?raw=true "manager interface")




