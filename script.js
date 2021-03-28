function insert(num){
	document.form.textview.value = document.form.textview.value + num;
}

function equal(){
	var exp = document.form.textview.value;

	if(exp){
		document.form.textview.value = eval(exp);
	}
	
}

// function to clear the input field
function c(){
	document.form.textview.value = '';
}

// function to cancel a number
function back(){
	var exp = document.form.textview.value;
	document.form.textview.value = exp.substring(0, exp.length - 1);
}