## Project: Student Program Evaluation Generator

## Group Members

* Name: Kaitlyn Vetica
* Email: vetica@chapman.edu

* Name: Olivia Chilvers 
* Email: ochilvers@chapman.edu

* Course: CPSC 354-01 Programming Languages

## Index.html
[Link to Program Generator](https://odchilvers.github.io/student-program-evaluation-generator/src/index.html)

# Links to the Videos
* [Overview](https://www.youtube.com/watch?v=BGR30mOYPYA)
* [Technical](https://www.youtube.com/watch?v=LFRfoIHEhdU)

# Motivation

* College students not only have to juggle life and school, but must also create and manage a four year plan and program evaluation to ensure that they graduate on time, which can become extremely confusing. The process of making and keeping up with a four year plan is normally time consuming since it requires the student to compare across the major catalog, courses being offered that term, and pay attention to the classes they have taken and will take. The Student Program Evaluation Generator will help relieve some of this stress by being a user-friendly, transparent and optimized program evaluation; empowering students to navigate their academic journey with confidence and ease.

# Description

* The Student Program Evaluation Generator will make use of a maintained database which contains information for classes based on major course catalogs. It navigates class availability--distinguishing between Spring-Only and Fall-Only offerings--and meticulously validates courses against catalog prerequisites; eliminating the risk of overlooking essential prerequisites. Another feature to help balance the class loads across the four years is a point system created by the advisors. With this, each class will be assigned a number from the scale that factors in time commitment and course complexity to ensure that students are not overworked during a semester. Operating on Blockly and Prolog, the program implements essential functions like FIND and ADD as well as rules for querying from the database of courses in order to generate the four year plan. The result is a personalized program evaluation freeing students from the burden of cross-referencing numerous catalogs and evaluations.
* The current function of the program is as the faculty advisor that would be managing and creating the course catalog. The user is able to add courses to the database and set up the file which processes and creates the rules for the database and corresponding functions. 

# How our project relates to the topics of parsing, interpretation and compilation.

* The Student Program Evaluation Generator intersects with parsing, interpretation, and compilation in several ways. For parsing, the program needs to understand and interpret the data for the courses, catalogs, and program evaluation. A key part is being able to efficiently recognise elements like course numbers, titles, descriptions, and requirements. This is a crucial process for extracting and organising the relevant information from the database. With interpretation, the program is able to execute the code and process the data directly. This allows for it to interpret the course catalog and program evaluation to produce the four year plan. From this, the program can output a coherent plan for the data by making decisions based on the algorithms. Lastly compilation, the program can be optimised for efficiency if there are complex algorithms or operations. This would require transforming high-level instructions into more efficient low-level operations.

# Functionality
[Documentation](https://odchilvers.github.io/student-program-evaluation-generator/docs/)
* Run generated code in terminal with swipl
[Link to swipl download](https://www.swi-prolog.org/download/stable)

# Future Work
* The future of the Student Program Evaluation Generator would be to have the four year plan fully functioning. This would allow the student to see when to take which classes based off of determined rules of the prerequisites and other factors. It would be helpful to include the possibilties of minors, additonal majors, and GE requirements. Having the ability to connect to a program evaluation or database of an university would be a great feature as well.

Olivia's Contributions: 
* Created [design2.md](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design2.md)
* Added "generate code" and "save code" segments for [index.html](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design-blocks/index.html)/[custom_blocks.js](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design-blocks/custom_blocks.js) 
* Created and maintained [Github Pages site](https://odchilvers.github.io/chilvers-vetica-group-project-CPSC354/)
* Produced [Milestone1](https://odchilvers.github.io/chilvers-vetica-group-project-CPSC354/milestone1)
* Produced Technical Video

Kaitlyn's Contributions: 
* Created [design.md](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design.md)
* Created initial [index.html](https://github.com/odchilvers/chilvers-vetica-group-project-CPSC354/blob/main/design.md) and corresponding files
* Researched Prolog and attended OH (10/3/23)
* Produced Overview Video

Group Contributions: 
* Brainstormed idea for project + description 
* Accumulated references 
