# Group Log 

## Group Members

* Olivia Chilvers
* ochilvers@chapman.edu

* Kaitlyn Vetica 
* vetica@chapman.edu

# How We Divided Work 

Olivia's Contributions: 
* Created [design2.md](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design2.md)
* Added "generate code" segments for [index.html](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design-blocks/index.html)/[custom_blocks.js](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design-blocks/custom_blocks.js) 
* Created and maintained [Github Pages site](https://odchilvers.github.io/chilvers-vetica-group-project-CPSC354/)

Kaitlyn's Contributions: 
* Created [design.md](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design.md)
* Created initial [index.html](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design.md) and corresponding files
* Researched Prolog and attended OH (10/3/23)

Group Contributions: 
* Brainstormed idea for project + description 
* Accumulated references 

# Prolog Details + Database Constraints 
Prolog offers a database for us to utilize in our project in order to query courses and course information to generate the four-year plan. Each Course has attributes that can be filed into tables into a database for querying and answering. With this, the Courses will have certain constraints when adding them to a semester for the four-year plan. 
Here is the brainstorm of constraints that we will take into account when creating the database and corresponding code for processing our database of Courses: 
* Prerequisites - Each (not every) Course might have a prerequisite to add prior to adding the current Course. 
* Taken/Not Taken - If a Course has already been taken, it cannot be taken again. 
* Semester Availability - Offered Spring/Fall/Both?
* Credit Constraints - Maximum number of credits per semester is 18. Cannot exceed this. 
* Difficulty Score Requirement - Avg difficulty score for semester must be within a range of 1.5-2.0 (difficulty scores are on a scale from 1-3).

Overall, Courses can be set as tuples in the database, such as the following: 
<code> course(Code, ClassName, Credits, SemesterOffered, Prerequisite, DifficultyScore) <code>

