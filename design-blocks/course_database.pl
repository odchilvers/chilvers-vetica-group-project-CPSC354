
% Define courses and their attributes
:- dynamic course/6.

% Facts (information about individual courses)
% course(code, name, credits, semester, score, prereq)
assert(course(math110, 'Single Variable Calculus I', 3, either, 1, [])).
assert(course(math111, 'Single Variable Calculus II', 3, either, 2, [math110])).
assert(course(math210, 'Multivariable Calculus', 3, fall, 3, [math111])).
assert(course(math215, 'Introduction to Linear Algebra', 3, fall, 1, [math111])).
assert(course(cpsc230, 'Computer Science I', 3, either, 2, [])).
assert(course(cpsc231, 'Computer Science II', 3, either, 2, [cpsc230])).
assert(course(cpsc350, 'Data Structures', 3, either, 3, [cpsc231])).

% Add more course facts...

% Rule to find a course by the code - helper for the FindCourse funct in blockly
find_course(CourseCode, CourseName, Credits, Semester, DifficultyScore, Prerequisites) :- 
    course(CourseCode, CourseName, Credits, Semester, DifficultyScore, Prerequisites).

% Rule to update course attribute - helper for UpdateCourse funct in blockly
% Rule to update a course's attribute
update_course(CourseCode, Attribute, NewValue) :-
    retract(course(CourseCode, CourseName, Credits, Semester, DifficultyScore, Prerequisites)),
    (Attribute = 'name' -> NewCourse = course(CourseCode, NewValue, Credits, Semester, DifficultyScore, Prerequisites);
     Attribute = 'credits' -> NewCourse = course(CourseCode, CourseName, NewValue, Semester, DifficultyScore, Prerequisites);
     Attribute = 'semester' -> NewCourse = course(CourseCode, CourseName, Credits, NewValue, DifficultyScore, Prerequisites);
     Attribute = 'difficulty_score' -> NewCourse = course(CourseCode, CourseName, Credits, Semester, NewValue, Prerequisites);
     Attribute = 'prerequisite' -> NewCourse = course(CourseCode, CourseName, Credits, Semester, DifficultyScore, NewValue)),
    assertz(NewCourse).



% Rules (defining prerequisites)
prerequisite(Course, Prerequisite) :- 
    course(Course, _, _, _, _, Prerequisites),
    member(Prerequisite, Prerequisites).

% Other rules (e.g., calculating credits, etc.)

% Define your four-year plan rules and facts here...

% Define student's major (initially empty since it's user input)
major("").

% Define difficulty scores for courses
difficulty_score(math110, 1).
difficulty_score(math111, 2).
difficulty_score(math210, 3).
difficulty_score(math215, 1).
difficulty_score(cpsc230, 2).
difficulty_score(cpsc231, 2).
difficulty_score(cpsc350, 3).

% Define maximum and minimum credit limits
max_credits(18).
min_credits(12).

% Rule for finding a course that meets prerequisites and difficulty score
eligible_course(SemesterCourses, Course) :-
    course(Course, _, Credits, _, Prerequisites),
    \+ member(Course, SemesterCourses), % Ensure the course is not already in the semester
    satisfies_prerequisites(SemesterCourses, Prerequisites), % Check prerequisites
    satisfies_credit_limits(SemesterCourses, Credits).

% Rule for calculating the average difficulty score of a list of courses
average_difficulty_score([], 0).
average_difficulty_score(SemesterCourses, Avg) :-
    calculate_difficulty_scores(SemesterCourses, Scores),
    sum_list(Scores, Total),
    length(SemesterCourses, Count),
    Avg is Total / Count.

% Rule for calculating the total difficulty scores of a list of courses
calculate_difficulty_scores([], []).
calculate_difficulty_scores([Course | Rest], [Score | Scores]) :-
    difficulty_score(Course, Score),
    calculate_difficulty_scores(Rest, Scores).

% Rule for checking if a list of courses satisfies prerequisites
satisfies_prerequisites(_, []).
satisfies_prerequisites(SemesterCourses, [Prerequisite | Rest]) :-
    member(Prerequisite, SemesterCourses),
    satisfies_prerequisites(SemesterCourses, Rest).

% Rule for checking if adding a course to the semester satisfies credit limits
satisfies_credit_limits(SemesterCourses, Credits) :-
    total_credits(SemesterCourses, TotalCredits),
    min_credits(Min),
    max_credits(Max),
    TotalCredits + Credits >= Min,
    TotalCredits + Credits =< Max.

% Rule for calculating the total credits of a list of courses
total_credits(Courses, Total) :-
    total_credits(Courses, 0, Total).

total_credits([], Total, Total).
total_credits([Course | Rest], Acc, Total) :-
    course(Course, Credits, _, _, _),
    NewAcc is Acc + Credits,
    total_credits(Rest, NewAcc, Total).

% Rule for generating a semester of courses that meet credit and difficulty score criteria
generate_semester([], _, []).
generate_semester(SemesterCourses, DifficultyThreshold, [Course | Rest]) :-
    eligible_course(SemesterCourses, Course),
    average_difficulty_score([Course | SemesterCourses], AvgDifficulty),
    AvgDifficulty =< DifficultyThreshold,
    generate_semester([Course | SemesterCourses], DifficultyThreshold, Rest).

% Rule for generating a four-year plan
generate_four_year_plan(Plan) :-
    generate_year_plan(1, Plan).

% Rule for generating a plan for a specific year
generate_year_plan(4, []).
generate_year_plan(Year, [Semester | Rest]) :-
    Year < 4,
    generate_semester([], 2.0, Semester), % Adjust the difficulty score as needed
    NextYear is Year + 1,
    generate_year_plan(NextYear, Rest).