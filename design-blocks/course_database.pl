
% Define courses and their attributes
:- dynamic(course/6).

% Facts (information about individual courses)
% course(code, name, credits, semester, score, prereq)
assert(course(math110, 'Single Variable Calculus I', 3, either, 1, [])).
assert(course(math111, 'Single Variable Calculus II', 3, either, 2, [math110])).
assert(course(math210, 'Multivariable Calculus', 3, fall, 3, [math111])).
assert(course(math215, 'Introduction to Linear Algebra', 3, fall, 1, [math111])).
assert(course(cpsc230, 'Computer Science I', 3, either, 2, [])).
assert(course(cpsc231, 'Computer Science II', 3, either, 2, [cpsc230])).
assert(course(cpsc350, 'Data Structures', 3, either, 3, [cpsc231])).
assert(course(cpsc236, 'Visual Programming', 3, either, 1, [cpsc230])).
assert(course(math250, 'Discrete Mathematics I', 3, either, 3, [])).
assert(course(cpsc330, 'Digital Logic Design I + Lab', 4, spring, 1, [math250])).
assert(course(cpsc351, 'Computer Architecture I', 3, fall, 1, [cpsc330])).
assert(course(cpsc353, 'Data Communications', 3, fall, 2, [cpsc231])).
assert(course(cpsc354, 'Programming Languages', 3, fall, 3, [cpsc350])).
assert(course(cpsc380, 'Operating Systems', 3, either, 3, [cpsc350])).
assert(course(cpsc406, 'Algorithm Analysis', 3, spring, 3, [cpsc350])).
assert(course(cpsc408, 'Database Management', 3, either, 1, [cpsc350])).

% GCI
assert(course(ffc, 'First Year Focus', 3, either, 1, [])).
assert(course(sci150, 'Grand Challenges in Science I', 1, either, 1, [])).
assert(course(sci200, 'Grand Challenges in Science II', 1, either, 1, [sci150])).
assert(course(sci250, 'Grand Challenges in Science III', 1, either, 1, [sci200])).

% Electives - 12 credits
assert(course(elective1, 'Elective 1', 3, either, 1, [])).
assert(course(elective2, 'Elective 2', 3, either, 2, [])).
assert(course(elective3, 'Elective 3', 3, either, 2, [])).
assert(course(elective4, 'Elective 4', 3, either, 1, [])).

% GEs 
assert(course(ge1, 'Artistic Inquiry', 3, either, 1, [])).
assert(course(ge2, 'Quantitative Inquiry', 3, either, 1, [])).
assert(course(ge3, 'Natural Sciences Inquiry', 3, either, 1, [])).
assert(course(ge4, 'Social Inquiry', 3, either, 1, [])).
assert(course(ge5, 'Values and Ethics Inquiry', 3, either, 1, [])).
assert(course(ge6, 'Written Inquiry', 3, either, 1, [])).
assert(course(ge7, 'Global Studies Inquiry 1', 3, either, 1, [])).
assert(course(ge8, 'Global Studies Inquiry 2', 3, either, 1, [])).
assert(course(ge9, 'Citizenship/Community/Serivce Inquiry', 3, either, 1, [])).
assert(course(ge10, 'Language Inquiry', 3, either, 1, [])).

% Minor - 
assert(course(minor1, 'Minor 1', 3, either, 2, [])).
assert(course(minor2, 'Minor 2', 3, either, 2, [])).
assert(course(minor3, 'Minor 3', 3, either, 2, [])).
assert(course(minor4, 'Minor 4', 3, either, 2, [])).
assert(course(minor5, 'Minor 5', 3, either, 2, [])).
assert(course(minor6, 'Minor 6', 3, either, 2, [])).
assert(course(minor7, 'Minor 7', 3, either, 2, [])).
assert(course(minor8, 'Minor 8', 3, either, 2, [])).
assert(course(minor9, 'Minor 9', 3, either, 2, [])).

% Add more course facts...

