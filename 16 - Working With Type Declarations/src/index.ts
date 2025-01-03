import axios from "axios";
import _ from "lodash";

// _.shuffle();
_.sample([122, 123, 143, 123]);

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("WOO!");
//     // console.log(res.data);
//     // const { data } = res;
//     // data.company.catchPhrase;
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });
axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("WOO!");
    // console.log(res.data);
    // const { data } = res;
    // data.company.catchPhrase;
    // printUser(res.data);
    console.log(res);
    res.data.forEach(printUser);
  })
  .catch((e) => {
    console.log("ERROR! ", e);
  });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
