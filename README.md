# bamazon
i like books, anybody else like books? (node &amp; mysql app)

Hello, 

The following is for anybody interested in how this project works and for those with the unfortunate task of grading it (._. )

----------------------------------------------------------------------------------------------------------------------------------------


This app is a command line interface (CLI) tool used to keep track of information about products housed in a store 'like' "Amazon".  Customers can access the information to buy products, and managers can access it to view inventory, identify products with dwindling supplies, replenish stock, and add new items.

-----------------------------------------------------------------------------------------------------------------------------------------


First, in order to have functionality and persistence of information, we used mysql.  In order to get that set up.  Open a local instance of mysql and refer to the *bamazon.sql* file.  This acts as both a schema and seeds for the initial table/database.  

![Alt text](images/bamazonschema.jpg?raw=true "start")

Copy lines 5 - 50 (or perhaps include an uncommented line 3 if you already have an unneeded bamazonDB in your instance) and execute them in mysql workbench.  

This will populate a table called 'books' (not 'products' like the instructions called for) that allows the rest of my program to operate. *Note: Although the instructions only called for columns for item_id, product_name, department_name, price, and stock_quantity, I also included author, yearPublished, and rating to provide more information to the customer.  

![Alt text](images/table.jpg?raw=true "start")


Once that is set up, go ahead and run 'npm install' in your directory. This should get the mysql and inquirer needed for it.  

Once this is complete you should be ready to see the program in action.  


----------------------------------------------------------------


**Run 'node bamazonCustomer.js'**



So, the first thing my program does is print all the available items and asks the customer if they would like to buy something or leave.  

![Alt text](images/firstoption.jpg?raw=true "start")

I was able to include entry validation for this question, but ran into issues trying to implement it on other questions later on.  (This is an improvement I can make in the future.)

![Alt text](images/validation.jpg?raw=true "start")


If the customer wishes to leave, they will get a parting message and the connection will end.  If, on the other hand, the customer wishes to buy something, they will be prompted to enter which item and how many they would like.  


My program then checks if that quantity of the item is available.  If it is not, it will alert them that the order is not possible to fulfill.  

![Alt text](images/toomany.jpg?raw=true "stuff")


If it is possible, it will return a price and ask them if they would like to buy something else.  

![Alt text](images/itemamount.jpg?raw=true "stuff")

Ideally, it should wait for an answer to this folllowup question, but right now there is a bug that ends the connection and dumps the user out of the program.  

That is the end of what can be done in the bamazonCustomer.js file.  

-----------------------------------------------------------------------------------------------------------------------------------


**To access the manager view, run 'node bamazonManager.js'**


In the manager program, the first thing the user will see is a list of available options.  

![Alt text](images/manager0.jpg?raw=true "manager interface")

If they choose the first option, it will display the table of available items and end the connection. 

![Alt text](images/manager1.jpg?raw=true "manager interface")

If they choose the second option, they will see the inventory items with quantity < 5 and the connection will end.

![Alt text](images/manager2.jpg?raw=true "manager interface")

*Note: If you populated the table and didn't buy much, there is a possibility that there are no low inventory items.  If this is the case, it will log that info.  

![Alt text](images/inventoryalert.jpg?raw=true "manager interface")


If they choose to restock an item, they will be asked for which item and how many to add.  It will then simply console log how many of the item are now available.  *Note: You can also add negative numbers here to reduce inventory in case you don't want to have to open bamazonCustomer.js to accomplish the same thing.  That functionality!

![Alt text](images/manager3.jpg?raw=true "manager interface")

Lastly, if they choose to add an item, they will be prompted to add all the relevant info, and then the program will reprint out the table to help confirm the item has been added and to check the details. 

![Alt text](images/manager4.jpg?raw=true "manager interface")


![Alt text](images/manager5.jpg?raw=true "manager interface")


That is the end of what bamazonManager.js can do. 


------------------------------------------------------------------------


bamazonSupervisor.js is still very much a work in progress.  I won't say much about it except that the schema and seeds for the table `departments` is in the bamazon.sql file.  I hope to return to this section of the assignment at a later date.  

------------------------------------------------------------------------


![Alt text](images/Bamazon.png?raw=true "manager interface")


Enjoy! (the above image was 'borrowed' from the interweb)

