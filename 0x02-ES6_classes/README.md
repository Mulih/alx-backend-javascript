To tackle the series of tasks involving ES6 classes, we'll create several JavaScript classes based on the requirements provided. Each task requires implementing specific classes with constructors, getters, setters, methods, and sometimes static methods or inheritance.

Here’s a breakdown of each task with a brief overview of what needs to be implemented:

Task 0: ClassRoom
Class Name: ClassRoom
Attributes: maxStudentsSize (Number)
Methods: None specified
File: 0-classroom.js
Task 1: Initialize Rooms
Function Name: initializeRooms
Objective: Create and return an array of ClassRoom objects with predefined sizes.
File: 1-make_classrooms.js
Task 2: HolbertonCourse
Class Name: HolbertonCourse
Attributes: name (String), length (Number), students (Array of Strings)
Methods: Getter and Setter for each attribute. Validation for types.
File: 2-hbtn_course.js
Task 3: Currency
Class Name: Currency
Attributes: code (String), name (String)
Methods: Getter and Setter for each attribute, displayFullCurrency method to display in format "name (code)".
File: 3-currency.js
Task 4: Pricing
Class Name: Pricing
Attributes: amount (Number), currency (Instance of Currency)
Methods: Getter and Setter for each attribute, displayFullPrice method to display in format "amount currency_name (currency_code)", convertPrice static method.
Files: 4-pricing.js, importing Currency from 3-currency.js
Task 5: Building
Class Name: Building
Attributes: sqft (Number)
Methods: Getter for sqft, enforce abstract method evacuationWarningMessage.
File: 5-building.js
Task 6: SkyHighBuilding (Inheritance)
Class Name: SkyHighBuilding (extends Building)
Attributes: floors (Number)
Methods: Getter for floors, override evacuationWarningMessage method to specify floor count.
File: 6-sky_high.js, importing Building
Task 7: Airport
Class Name: Airport
Attributes: name (String), code (String)
Methods: Getter for each attribute, toString method to return default string description.
File: 7-airport.js
Task 8: HolbertonClass (Primitive Casting)
Class Name: HolbertonClass
Attributes: size (Number), location (String)
Methods: Casting to Number returns size, casting to String returns location.
File: 8-hbtn_class.js
Task 9: Hoisting
Classes: HolbertonClass, StudentHolberton
Objective: Correct the code for proper instantiation and exports.
File: 9-hoisting.js
Task 10: Car (Symbols in ES6)
Class Name: Car
Attributes: brand (String), motor (String), color (String)
Methods: cloneCar method to create a new instance of the class.
File: 10-car.js
Each class or function should be implemented in its respective JavaScript file as indicated. Ensure to handle validations, type checks, and error handling as specified in each task
