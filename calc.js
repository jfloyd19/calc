$(document).ready(function() { // do this when the document is loaded
	$("#main").show(); // show the element with ID "element"
	$("#Shortcut_Table").hide(); // hide the element with ID "otherElement"
});


$("#Calculator").click(function() { // when "button_id" is clicked
	$("#main").show(); // show element
  $("#Shortcut_Table").hide();
});

$("#table_tab").click(function() { // when "button_id" is clicked
	$("#Shortcut_Table").show(); // show element
  $("#main").hide();
});
