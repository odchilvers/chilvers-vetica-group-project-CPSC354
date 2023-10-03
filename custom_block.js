// Add Course Block
Blockly.Blocks['add_course'] = {
    init: function() {
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
        this.appendDummyInput()
            .appendField("Semester:")
            .appendField(new Blockly.FieldTextInput("default"), "SEMESTER_INPUT");
        this.appendDummyInput()
            .appendField("Difficulty Score:")
            .appendField(new Blockly.FieldNumber(0, 0, 3), "DIFFICULTY_SCORE_INPUT");
        this.appendDummyInput()
            .appendField("Prerequisite Course:")
            .appendField(new Blockly.FieldTextInput("default"), "PREREQ_INPUT")
        this.setColour(230);
        this.setTooltip("Add a new course to the database");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Add Course Blockly Block
Blockly.JavaScript['add_course'] = function(block) {
    var value_course_code = block.getFieldValue('COURSE_CODE_INPUT');
    var value_course_name = block.getFieldValue('COURSE_NAME_INPUT');
    var value_credits = block.getFieldValue('CREDITS_INPUT');
    var value_semester = block.getFieldValue('SEMESTER_INPUT');
    var value_difficulty_score = block.getFieldValue('DIFFICULTY_SCORE_INPUT');
    var value_prerequisite = block.getFieldValue('PREREQ_INPUT');

    // Generate code to add a course using the provided values
    var code = 'addCourse("' + value_course_code + '", "' + value_course_name + '", ' + value_credits + ', "' + value_semester + '", ' + value_difficulty_score + ', "' + value_prerequisite + '");\n';
    return code;
};

// Find Course Block
Blockly.Blocks['find_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Find Course");
        this.appendDummyInput()
            .appendField("Course Code:")
            .appendField(new Blockly.FieldTextInput("default"), "COURSE_CODE_INPUT");
        this.setColour(230);
        this.setTooltip("Find information about a course");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Find Course Blockly Block
Blockly.JavaScript['find_course'] = function(block) {
    var value_course_code = block.getFieldValue('COURSE_CODE_INPUT');

    // Generate code to find a course using the provided values
    var code = 'findCourse("' + value_course_code + '");\n';
    return code;
};

// Update Course Block
Blockly.Blocks['update_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Update Course");
        this.appendDummyInput()
            .appendField("Course Code to update:")
            .appendField(new Blockly.FieldTextInput("default"), "UPDATE_CODE")
        this.appendDummyInput()
            .appendField("where")
            .appendField(new Blockly.FieldDropdown([
                ["Course Code", "code"],
                ["Course Name", "name"],
                ["Credits", "credits"],
                ["Semester", "semester"],
                ["Difficulty Score", "difficulty_score"],
                ["Prerequisite", "prerequisite"]
            ]), "CRITERIA");
        this.appendDummyInput()
            .appendField(" = ")
            .appendField(new Blockly.FieldTextInput("default"), "DATA_UPDATE");
        this.setColour(230);
        this.setTooltip("Update course information");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Update Course Blockly Block
Blockly.JavaScript['update_course'] = function(block) {
    var update_code = block.getFieldValue('UPDATE_CODE');
    var criteria = block.getFieldValue('CRITERIA');
    var dataUpdate = block.getFieldValue('DATA_UPDATE');

    // Generate code to update a course using the provided criteria and data
    var code = 'updateCourse("' + update_code + '", "' + criteria + '", "' + dataUpdate + '");\n';
    return code;
};

// Delete Course Block
Blockly.Blocks['delete_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Delete Course");
        this.appendDummyInput()
            .appendField("Course Code:")
            .appendField(new Blockly.FieldTextInput("default"), "COURSE_CODE_INPUT");
        this.setColour(230);
        this.setTooltip("Delete a course from the database");
        this.setHelpUrl("");
    }
};

// JavaScript Function for delete Course Blockly Block
Blockly.JavaScript['delete_course'] = function(block) {
    var value_course_code = block.getFieldValue('COURSE_CODE_INPUT');

    // Generate code to delete a course using the provided values
    var code = 'deleteCourse("' + value_course_code + '");\n';
    return code;
};

// Generate Plan Block
Blockly.Blocks['generate_plan'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Generate Plan");
        this.appendValueInput("ARGUMENT")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("Generate a four-year plan");
        this.setHelpUrl("");
    }
};

// Generate Code Block
Blockly.Blocks['generate_code'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Generate Code");
        this.appendValueInput("ARGUMENT")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("Generate the code");
        this.setHelpUrl("");
    }
};
