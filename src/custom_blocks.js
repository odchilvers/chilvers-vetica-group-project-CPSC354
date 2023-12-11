// Add Course Block
Blockly.Blocks['add_course'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Add Course");
        this.appendDummyInput()
            .appendField("Course Code:")
            .appendField(new Blockly.FieldTextInput("default"), "COURSE_CODE_INPUT");
        this.appendDummyInput()
            .appendField("Name:")
            .appendField(new Blockly.FieldTextInput("default"), "COURSE_NAME_INPUT");
        this.appendDummyInput()
            .appendField("Credits:")
            .appendField(new Blockly.FieldNumber(0, 0, 3), "CREDITS_INPUT");
        // Modify the "Semester" input to use a dropdown
        this.appendDummyInput()
            .appendField("Semester:")
            .appendField(new Blockly.FieldDropdown([["Fall", "Fall"], ["Spring", "Spring"], ["Fall or Spring", "Fall or Spring"]]), "SEMESTER_INPUT");
        this.appendDummyInput()
            .appendField("Difficulty Score:")
            .appendField(new Blockly.FieldNumber(0, 0, 3), "DIFFICULTY_SCORE_INPUT");
        this.appendDummyInput()
            .appendField("Prerequisite Course:")
            .appendField(new Blockly.FieldTextInput("None"), "PREREQ_INPUT")
        this.setColour('#A165F1');
        this.setTooltip("Add a new course to the database");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Add Course Blockly Block
Blockly.JavaScript['add_course'] = function (block) {
    var value_course_code = block.getFieldValue('COURSE_CODE_INPUT');
    var value_course_name = block.getFieldValue('COURSE_NAME_INPUT');
    var value_credits = block.getFieldValue('CREDITS_INPUT');
    var value_semester = block.getFieldValue('SEMESTER_INPUT');
    var value_difficulty_score = block.getFieldValue('DIFFICULTY_SCORE_INPUT');
    var value_prerequisite = block.getFieldValue('PREREQ_INPUT');

    // Generate Prolog code to represent the course
    var prologCode = 'course(' +
        value_course_code + ', ' +
        "'" + value_course_name + "'" + ', ' +
        value_credits + ', ' +
        "'" + value_semester + "'" + ', ' + // Enclose value_semester in single quotes
        value_difficulty_score + ', ';

    // Check if value_prerequisite is "None" and handle accordingly
    if (value_prerequisite !== 'None') {
        prologCode += "[" + value_prerequisite + "]";
    } else {
        prologCode += "[]";
    }

    prologCode += ").";

    return prologCode;
};

// Find Course Block (standalone)
Blockly.Blocks['find_course'] = {
    init: function () {
        this.setColour('#30A3E5');
        this.setPreviousStatement(false); // Disable connection from the top
        this.setNextStatement(false);     // Disable connection from the bottom
        this.appendDummyInput()
            .appendField("Set up Find Course");
        this.setTooltip("Find information about a course");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Find Course Blockly Block
Blockly.JavaScript['find_course'] = function (block) {
    // Generate code to find a course using the provided values
    // var code = 'findCourse("' + value_course_code + '");\n';
    var code = `find_course(Code, Course) :-
    course(Code, Name, Credits, Semester, Difficulty, Prerequisites),
    Course = course(Code, Name, Credits, Semester, Difficulty, Prerequisites).`;

    return code;
};

// Update Course Block (standalone)
Blockly.Blocks['update_course'] = {
    init: function () {
        this.setColour('#30A3E5');
        this.setOutput(false);
        this.appendDummyInput()
            .appendField("Set Up Update Course");
        this.setTooltip("Update course information");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Update Course Blockly Block
Blockly.JavaScript['update_course'] = function (block) {
    // Generate code to update a course using the provided criteria and data
    var code = `update_course(CourseCode, Attribute, NewValue) :-
    retract(course(CourseCode, CourseName, Credits, Semester, DifficultyScore, Prerequisites)),
    (Attribute = 'name' -> NewCourse = course(CourseCode, NewValue, Credits, Semester, DifficultyScore, Prerequisites);
     Attribute = 'credits' -> NewCourse = course(CourseCode, CourseName, NewValue, Semester, DifficultyScore, Prerequisites);
     Attribute = 'semester' -> NewCourse = course(CourseCode, CourseName, Credits, NewValue, DifficultyScore, Prerequisites);
     Attribute = 'difficulty_score' -> NewCourse = course(CourseCode, CourseName, Credits, Semester, NewValue, Prerequisites);
     Attribute = 'prerequisite' -> NewCourse = course(CourseCode, CourseName, Credits, Semester, DifficultyScore, NewValue)),
    assertz(NewCourse).`;
    return code;
};

// Delete Course Block (standalone)
Blockly.Blocks['delete_course'] = {
    init: function () {
        this.setColour('#30A3E5');
        this.setOutput(false);
        this.appendDummyInput()
            .appendField("Set Up Delete Course");
        this.setTooltip("Delete course information");
        this.setHelpUrl("");
    }
};


// JavaScript Function for delete Course Blockly Block
Blockly.JavaScript['delete_course'] = function (block) {
    var find_course_block = Blockly.JavaScript.statementToCode(block, 'FIND_COURSE');
    // Generate code to delete a course using the provided course code
    // var code = 'deleteCourse(' + find_course_block + ');\n';
    var code = ` delete_course(Code) :-
    (retract(course(Code, _, _, _, _, _)) ->
        write('Course '), write(Code), write(' deleted.'), nl;
        write('Course '), write(Code), write(' not found.'), nl
    ).`;
    return code;
};

// Find Course Block (standalone)
Blockly.Blocks['calculate_avg_difficulty'] = {
    init: function () {
        this.setColour('#DB69E2');
        this.setPreviousStatement(false); // Disable connection from the top
        this.setNextStatement(false);     // Disable connection from the bottom
        this.appendDummyInput()
            .appendField("Calculate Average Difficulty Score");
        this.setTooltip("Determine that average of difficulty score across the semester");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Find Course Blockly Block
Blockly.JavaScript['calculate_avg_difficulty'] = function (block) {
    // Generate code to find a course using the provided values
    // var code = 'findCourse("' + value_course_code + '");\n';
    var code = `average_difficulty_score(Average) :-
        findall(Difficulty, course(_, _, _, _, Difficulty, _), DifficultyList),
        sum_list(DifficultyList, TotalDifficulty),
        length(DifficultyList, NumCourses),
        Average is TotalDifficulty / NumCourses.`;

    return code;
};

// Find Course Block (standalone)
Blockly.Blocks['total_credits'] = {
    init: function () {
        this.setColour('#DB69E2');
        this.setPreviousStatement(false); // Disable connection from the top
        this.setNextStatement(false);     // Disable connection from the bottom
        this.appendDummyInput()
            .appendField("Total Credits");
        this.setTooltip("Determine the total credits across the semester");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Find Course Blockly Block
Blockly.JavaScript['total_credits'] = function (block) {
    // Generate code to find a course using the provided values
    // var code = 'findCourse("' + value_course_code + '");\n';
    var code = `total_credits(TotalCredits) :-
    findall(Credits, course(_, _, Credits, _, _, _), CreditsList),
    sum_list(CreditsList, TotalCredits).`;

    return code;
};

Blockly.Blocks['select_major'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Select Major:")
            .appendField(new Blockly.FieldDropdown([
                // Fowler Majors
                ["Computer Science", "Computer Science"],
                ["Data Science", "Data Science"],
                ["Software Engineering", "Software Engineering"],
                ["Computer Engineering", "Computer Engineering"],
                ["Electrical Engineering", "Electrical Engineering"],
                // Schmid Majors
                ["Biochemistry and Molecular Biology", "Biochemistry and Molecular Biology"],
                ["Biological Sciences", "Biological Sciences"],
                ["Chemistry", "Chemistry"],
                ["Environmental Science and Policy", "Environmental Science and Policy"],
                ["Mathematics and Civil Engineering, Joint Program, Chapman University/University of California, Irvine", "Mathematics and Civil Engineering, Joint Program, Chapman University/University of California, Irvine"],
                ["Mathematics", "Mathematics"],
                ["Physcs", "Physics"],
                ["Philosophy", "Philosophy"]
            ]), "MAJOR_SELECTION");
        this.setOutput(false);
        this.setColour('#A165F1');
        this.setTooltip("Select a major from the dropdown.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['select_major'] = function (block) {
    var selectedMajor = block.getFieldValue('MAJOR_SELECTION');
    var code = `student_major('${selectedMajor}').`;
    return code;
};

Blockly.Blocks['select_minor'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Select Minor:")
            .appendField(new Blockly.FieldDropdown([
                // Fowler Minors
                ["Analytics", "Analytics"],
                ["Computer Engineering", "Computer Engineering"],
                ["Computer Science", "Computer Science"],
                ["Electrical Engineering", "Electrical Engineering"],
                ["Game Development Programming", "Game Development Programming"],
                ["Information Security and Policy", "Information Security and Policy"]
                // Schmid Minors
                ["Biophysics", "Biophysics"],
                ["Chemistry", "Chemistry"],
                ["Computational Science", "Computational Science"],
                ["Environmental Science", "Environmental Science"],
                ["Mathematics", "Mathematics"],
                ["Nutrition", "Nutrition"],
                ["Organismal Biology", "Organismal Biology"],
                ["Philosophy", "Philosophy"],
                ["Physics", "Physics"]
            ]), "MINOR_SELECTION");
        this.setOutput(false);
        this.setColour('#A165F1');
        this.setTooltip("Select a minor from the dropdown.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['select_minor'] = function (block) {
    var selectedMinor = block.getFieldValue('MINOR_SELECTION');
    var code = `student_minor('${selectedMinor}').`;
    return code;
};
