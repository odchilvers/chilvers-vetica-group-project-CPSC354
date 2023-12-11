var xmlString = '<xml xmlns="https://developers.google.com/blockly/xml">' +
  '<block type="find_course" id="WF]_.ZA5o/.c-06]XpTl" x="16" y="8"></block>' +
  '<block type="add_course" id="3u}sJS/p@D;(ixT7II}c" x="268" y="13">' +
    '<field name="COURSE_CODE_INPUT">CPSC230</field>' +
    '<field name="COURSE_NAME_INPUT">Python</field>' +
    '<field name="CREDITS_INPUT">3</field>' +
    '<field name="SEMESTER_INPUT">Fall or Spring</field>' +
    '<field name="DIFFICULTY_SCORE_INPUT">1</field>' +
    '<field name="PREREQ_INPUT">None</field>' +
  '</block>' +
  '<block type="add_course" id="*J=ehxy3fKPQ#zjM]ICQ" x="479" y="13">' +
    '<field name="COURSE_CODE_INPUT">CPSC231</field>' +
    '<field name="COURSE_NAME_INPUT">Java</field>' +
    '<field name="CREDITS_INPUT">3</field>' +
    '<field name="SEMESTER_INPUT">Spring</field>' +
    '<field name="DIFFICULTY_SCORE_INPUT">2</field>' +
    '<field name="PREREQ_INPUT">CPSC230</field>' +
  '</block>' +
  '<block type="select_major" id="})a|P)*4_ZG!S_y6UqsQ" x="706" y="14">' +
    '<field name="MAJOR_SELECTION">Computer Science</field>' +
  '</block>' +
  '<block type="update_course" id="(1WjW3Hc:pq.mqPV3@Ig" x="16" y="59"></block>' +
  '<block type="delete_course" id="#.j@um,CN{:x1W{!;JSb" x="16" y="110"></block>' +
  '<block type="calculate_avg_difficulty" id="{Cz]T6-xMG;2x?E1hEy#" x="17" y="212"></block>' +
  '<block type="total_credits" id="%7=rO!Uc`A*guVIQZ*KP" x="277" y="212"></block>' +
'</xml>';

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);
