let file1Counter = 0;
function readFromFile1(resource) {
  console.log("readFromFile1 data not available");
  file1Counter++;
  if(file1Counter ==5) {
    console.log("file1 read successfully from socket");
    const index = resources.indexOf(resource);
    resources.splice(index,1);
  }
}


let file2Counter=0;
function readFromFile2(resource) {
  console.log("readFromFile2 data not available");
  file2Counter++;
  if(file2Counter == 6) {
    console.log("file2 read successfully from socket");
    const index = resources.indexOf(resource);
    resources.splice(index,1);
  }
}

let file3Counter = 0;
function readFromFile3(resource) {
 console.log("readFromFile3 data not available");
 file3Counter++;
 if(file3Counter ==5) {
    console.log("file3 read successfully from socket");
    const index = resources.indexOf(resource);
    resources.splice(index,1);
 }
}

const resources = [readFromFile1,readFromFile2,readFromFile3];

while(resources.length > 0) {
    // console.log("resources array size "+resources.length);
    for(let i=0;i<resources.length;i++) {
        const funcToCall = resources[i];
        funcToCall(resources[i]);
    }
}


// BUSY WAITING TECHNIQUE USING LOOP
// With this simple technique it is possible to handle diff resources 
// in the same thread,but it is still not efficient.
// Loop will consume precious CPU for iterating over resources
// that are unavailable most of the time
