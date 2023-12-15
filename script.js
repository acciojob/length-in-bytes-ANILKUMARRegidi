const byteSize = (str) => {
  const textBlob = new Blob([str], {type:'text/plain'});
	let s = textBlob.size;
	return s;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
