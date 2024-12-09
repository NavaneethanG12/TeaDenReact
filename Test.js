const baseUrl = 'https://sign.zoho.com/api/v1/signforms';

const params = {
    data: JSON.stringify({
        page_context: {
            row_count: 1,
            sort_column: 'modified_time',
            start_index: 0,
            sort_order: 'DESC'
        }
    }),
    org_id: '695839889'
};

const queryString = new URLSearchParams(params).toString();
const apiUrl = `${baseUrl}?${queryString}`;
console.log(apiUrl);

fetch(apiUrl, {
    method: 'GET'
})
.then(response => response.json())
.then(data => { console.log(data) })


let arr = [ 1, 2, 3, 4, 5 ];
console.log(arr.length);
delete arr[2];
console.log(arr.length);
console.log(arr[2]);
console.log(arr);
// deletion using splice
arr.splice(4, 3);
console.log(arr); // second element deleted completely a
console.log(arr.length); 


let object = new Object()
object.name = "Hello";
object.age = 15;

if (object.age === 15) object.id = 13;

object.id = 15;
console.log(object)

setTimeout(() => {
    console.log("printed after delay");
}, 2000);

class Dummy {

    constructor() {
        if (Dummy.instance) {
            return Dummy.instance;
        }

        Dummy.instance = this;
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        // this.observers.forEach()
    }
}

class Subject {
    constructor() {
      this.observers = [];
    }
    subscribe(observer) {
      this.observers.push(observer);
    }
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
}
  
const subject = new Subject();
subject.subscribe(data => console.log(`Observer 1: ${data}`));
subject.subscribe(data => console.log(`Observer 2: ${data}`));
subject.notify("Hello Observers!");

let dum = new Dummy();
dum.name = "Dummy";
console.log(dum.name);
let dum2 = new Dummy();
console.log(dum2.name);

console.log(dum === dum2);
console.log(Dummy.instance);