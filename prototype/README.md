# chilvers-vetica-group-project-CPSC354

## Project: Student Program Evaluation Generator

## Group Members

* Name: Kaitlyn Vetica
* Email: vetica@chapman.edu

* Name: Olivia Chilvers 
* Email: ochilvers@chapman.edu

* Course: CPSC 354-01 Programming Languages

# Prototype
[Link to Prototype](https://odchilvers.github.io/chilvers-vetica-group-project-CPSC354/prototype/index.html)

# Reproducible Instructions

## Test Software

* Step 1: Open "Set Up Blocks"
* Step 2: Grab desired blocks from within "Set Up Blocks"
* Step 3: Open "Input Blocks"
* Step 4: Place "Add Course" block
* Step 5: Fill out information
* Step 6: Place "Select Major" block
* Step 7: Fill out information
* Step 8: Repeat Steps 4 & 5 for each course to be added
* Step 9: Open "Action Blocks"
* Step 10: Grab desired blocks from within "Action Blocks"
* Step 11: Click "Generate Code" to view the Prolog code
* Step 12: Click "Save Code" to save the Prolog code
* Step 13: Click "Generate Four-Year Plan" to view all of the courses and credits added

## Recreate Demo
* Step 1: Open "Set Up Blocks"
* Step 2: Grab all blocks from within "Set Up Blocks"
* Step 3: Open "Input Blocks"
* Step 4: Place "Add Course" block
* Step 5: Fill out information
* (cpsc230, Python, 3, Fall or Spring, 1, None)
* (cpsc231, Java, 2, Fall or Spring, 2, cpsc230)
* Step 6: Place "Select Major" block
* Step 7: Fill out information
* Computer Science
* Step 8: Open "Action Blocks"
* Step 9: Grab all blocks from within "Action Blocks"
* Step 10: Click "Generate Code" to view the Prolog code
* Step 11: Click "Save Code" to save the Prolog code
* Step 12: Click "Generate Four-Year Plan" to view all of the courses and credits added
* Step 13: Open terminal or powershell
* Step 14: Locate "generated_code.pl"
* Step 15: Follow commands below

```
consult('generated_code.pl').

total_credits(Total).

average_difficulty_score(Avg).

find_course('cpsc230', Course).

update_course('cpsc231', 'credits', 3).

find_course('cpsc231', Course).

total_credits(Total).

delete_course(cpsc231).

find_course('cpsc231', Course).

total_credits(Total).

average_difficulty_score(Avg).
```

* Expected Results
```
?- consult('generated_code.pl').
true.

?- total_credits(Total).
Total = 5.

?- average_difficulty_score(Avg).
Avg = 1.5.

?- find_course('cpsc230', Course).
Course = course(cpsc230, python, 3, 'Fall or Spring', 1, []).

?- update_course('cpsc231', 'credits', 3).
true.

?- find_course('cpsc231', Course).
Course = course(cpsc231, 'Java', 3, 'Fall or Spring', 2, [cpsc230]).

?- total_credits(Total).
Total = 6.

?- delete_course(cpsc231).
Course cpsc231 deleted.
true.

?- find_course('cpsc231', Course).
false.

?- total_credits(Total).
Total = 3.

?- average_difficulty_score(Avg).
Avg = 1.
```

## Link to Slides
[Link to Slides](https://docs.google.com/presentation/d/19slx6cpNEoo3Og8r5qMhYIA9uPR953ZmXgDGgs5AqWc/edit?usp=sharing)


