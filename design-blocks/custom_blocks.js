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
            .appendField(new Blockly.FieldNumber(0), "CREDITS_INPUT");
        this.appendDummyInput()
            .appendField("Semester:")
            .appendField(new Blockly.FieldTextInput("default"), "SEMESTER_INPUT");
        this.appendDummyInput()
            .appendField("Difficulty Score:")
            .appendField(new Blockly.FieldNumber(0), "DIFFICULTY_SCORE_INPUT");
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

    // Generate code to add a course using the provided values
    var code = 'addCourse("' + value_course_code + '", "' + value_course_name + '", ' + value_credits + ', "' + value_semester + '", ' + value_difficulty_score + ');\n';
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
        this.appendValueInput("ARGUMENT")
            .setCheck(null)
            .appendField("where")
            .appendField(new Blockly.FieldTextInput("code"), "CRITERIA")
            .appendField("with data:");
        this.setColour(230);
        this.setTooltip("Update course information");
        this.setHelpUrl("");
    }
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

// Generate Plan Block
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