// Course Name Block
Blockly.Blocks['course_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Course Name");
        this.appendValueInput("COURSE_NAME")
            .setCheck("String");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Represents a course name");
        this.setHelpUrl("");
    }
};

// Credits Block
Blockly.Blocks['credits'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Credits");
        this.appendValueInput("CREDITS")
            .setCheck("Number");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Represents the number of credits for a course");
        this.setHelpUrl("");
    }
};

// Course Code Block
Blockly.Blocks['course_code'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Course Code");
        this.appendValueInput("COURSE_CODE")
            .setCheck("String");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Represents a course code");
        this.setHelpUrl("");
    }
};

// Semester Block
Blockly.Blocks['semester'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Semester");
        this.appendValueInput("SEMESTER")
            .setCheck("String");
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Represents a semester");
        this.setHelpUrl("");
    }
};

// Difficulty Score Block
Blockly.Blocks['difficulty_score'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Difficulty Score");
        this.appendValueInput("DIFFICULTY_SCORE")
            .setCheck("Number");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("Represents a course's difficulty score");
        this.setHelpUrl("");
    }
};
  
  // Course ID Block
  Blockly.Blocks['course_id'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Course ID")
          .appendField(new Blockly.FieldNumber(0), "COURSE_ID");
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Enter the course ID");
      this.setHelpUrl("");
    }
  };

// Add Course Block
Blockly.Blocks['add_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Add Course");
        this.appendValueInput("COURSE_CODE")
            .setCheck("String")
            .appendField("Course Code:");
        this.appendValueInput("COURSE_NAME")
            .setCheck("String")
            .appendField("Name:");
        this.appendValueInput("CREDITS")
            .setCheck("Number")
            .appendField("Credits:");
        this.appendValueInput("SEMESTER")
            .setCheck("String")
            .appendField("Semester:");
        this.appendValueInput("DIFFICULTY_SCORE")
            .setCheck("Number")
            .appendField("Difficulty Score:");
        this.setColour(230);
        this.setTooltip("Add a new course to the database");
        this.setHelpUrl("");
    }
};

// JavaScript Function for Add Course Blockly Block
Blockly.JavaScript['add_course'] = function(block) {
    var value_course_code = Blockly.JavaScript.valueToCode(block, 'COURSE_CODE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_course_name = Blockly.JavaScript.valueToCode(block, 'COURSE_NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var value_credits = Blockly.JavaScript.valueToCode(block, 'CREDITS', Blockly.JavaScript.ORDER_ATOMIC);
    var value_semester = Blockly.JavaScript.valueToCode(block, 'SEMESTER', Blockly.JavaScript.ORDER_ATOMIC);
    var value_difficulty_score = Blockly.JavaScript.valueToCode(block, 'DIFFICULTY_SCORE', Blockly.JavaScript.ORDER_ATOMIC);

    // Generate code to add a course using the provided values
    var code = 'addCourse(' + value_course_code + ', ' + value_course_name + ', ' + value_credits + ', ' + value_semester + ', ' + value_difficulty_score + ');\n';
    return code;
};

  
  
// Find Course Block
Blockly.Blocks['find_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Find Course");
        this.appendValueInput("ARGUMENT")
            .setCheck(null)
            .appendField("where")
            .appendField(new Blockly.FieldTextInput("code"), "CRITERIA")
            .appendField("=");
        this.setColour(230);
        this.setTooltip("Find information about a course");
        this.setHelpUrl("");
    }
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
        this.appendValueInput("ARGUMENT")
            .setCheck(null);
        this.setColour(230);
        this.setTooltip("Delete a course from the database");
        this.setHelpUrl("");
    }
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