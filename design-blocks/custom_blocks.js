// Add Course Block
Blockly.Blocks['add_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Add Course");
        this.setColour(230);
        this.setTooltip("Add a new course to the database");
        this.setHelpUrl("");
    }
};

// Find Course Block
Blockly.Blocks['find_course'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Find Course");
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
        this.setColour(230);
        this.setTooltip("Generate a four-year plan");
        this.setHelpUrl("");
    }

    
};

// Generate Code Block
Blockly.Blocks['generate-code'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Generate Code");
        this.setColour(230);
        this.setTooltip("Generate code");
        this.setHelpUrl("");
    }

    
};
