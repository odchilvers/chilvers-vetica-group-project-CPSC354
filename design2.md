
# Design 2 for Student Program Evaluation Generator 

## Blockly Code

### FIND

#### Execution
The FIND Blockly code will be executed by taking in a course code as an input. This will then search for that course code in the database and return the attribute of course.

#### Output
```dsl
FIND (CPSC350)
Output ---------------------
code = "CPSC350"
name = "Data Structures"
credits = 3
semester = "Fall or Spring"
difficultyScore = 2.5
```

### ADD

#### Execution
The ADD Blockly code will be executed by taking in a course code, course name, number of course credits, sentence of semesters offered, and a number for difficult score. The ADD blockly code will then create this course as a course type inside the database with all of the given attributes.

#### Output
```dsl
ADD (CPSC350, Data Structures, 3, Fall or Spring, 2.5)
Output -----------------------------------------------------------------
Added CPSC350 with attributes: Data Structures, 3, Fall or Spring, 2.5
```

### DELETE

#### Execution
The DELETE Blockly code will be executed by taking in a course code and then search the database to delete the course entitiy with that code from the database. 

#### Output
```dsl
DELETE (CPSC350)
Output -----------
CPSC350 has been deleted
```

### UPDATE

#### Execution
The UPDATE Blockly code will be executed by taking in a course code and then which attribute(s) are being updated and what the updated information will be. This will then search for that existing course and rewrite the specific attributes with the new updated attributes.

#### Output
```dsl
UPDATE (CPSC350, credits: 3, semester: Fall Only)
Output -------------------------------------------
CPSC350 has been updated with credits: 3, semester: Fall Only
```

### CHECK_PREREQUISITE

#### Execution
The CHECK_PREREQUISITE Blockly code will be executed by taking in a course code and will search the existing catalog to check if it has been taken. This is required to ensure that a user can take a class if only the CHECK_PREREQUISITE returns true.

#### Output
```dsl
CHECK_PREREQUISITE (CPSC350)
Output --------------------------------
CPSC350: True
```

### CHECK_IF_TAKEN

#### Execution
The CHECK_IF_TAKEN Blockly code will be executed by taking in a course code and will search the existing catalog to check if the class has already been taken. This is required to ensure that the user does not repeat classes.

#### Output
```dsl
CHECK_IF_TAKEN (CPSC350)
Output --------------------------------
CPSC350: False
```

### GENERATE

#### Execution
The GENERATE Blockly code will be executed by taking in a major and program evaluation year. This will then use all of the previously mentioned functions and produce a four year plan for the user to look at.

#### Output
```dsl
GENERATE (Computer Science, 2020-2021)
Output --------------------------------
semester1: CPSC230, MATH210, GE, LANGUAGE
semester2: CPSC 231, MATH 211, GE, LANGUAGE
...
```

Show a use case for a recursive Blockly program, illustrating that Blockly allows the user to build infinitley many complex programs from a small number of building blocks.

## Use Case For a Recursive Blockly Program
A use case for a recursive Blockly program could be a situation in which a student is wondering what their four year plan would look like depending on their major. In addition, the student could populate multiple versions of the four year plan based off of the same major catalog. With using the same building blocks, the student is able to form them in different ways to serve multiple functions. This opens up even more possibilities where the student can even set a maximum average difficulty for their four year plan to ensure that they are not overworked. With the benefits of a recursive blockly program being versatile, the student can produce hypothetically endless mutations of their four year plan to find what they think is best for their lifestyle. 

## Data Necessary and Interaction
As described in design.md, the data that is needed for the program is Course, Plan, and Catalog. With this basic types, they each contain attributes that the functions described in design.md access of manipulate to generate the four year plan. The main ways that the blockbased programming language interacts with the data is searching, updating/rewriting, deleting, and adding. The majority of the functions require searching through the data for certain attributes and will perform the necessary task. From this, the data will be manipulated in ways that include updating the attribute, deleting the attribute, or adding new attributes.

### Database Outline
The outline for the database would consist of tables that hold attributes for Course and Catalog (by year).

#### Course
| Code      | Name                            | Credits   | Semester        | Difficulty Score  | Prerequisites |
| --------- | ------------------------------- | --------- | --------------- | ----------------- | ------------- |
| CPSC350   | Data Structures and Algorithms  | 3         | Fall or Spring  | 2.5               | CPSC 231      |
| CPSC354   | Programming Languages           | 3         | Fall or Spring  | 2.5               | CPSC 350      |

#### Catalog (by year)
| Years       | Course  |
| ----------- | ------- |
| 2020-2021   | CPSC350 |
| 2020-2021   | MATH210 |
| 2020-2021   | CPSC354 |
| 2020-2021   | ENGR101 |
| 2020-2021   | ...     |
| 2021-2022   | CPSC350 |
| 2021-2022   | MATH215 |
| 2021-2022   | CPSC380 |
| 2021-2022   | ENGR101 |
| 2021-2022   | ...     |
