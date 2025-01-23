const users = ["akhil", "sanyu paul", "pranav", "muzahid", "rajiummar"];
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}
users.push("charan sai");
console.log(users);
users.pop();
console.log(users);
users.unshift("akhil");
console.log(users);
users.shift();
console.log(users);
let x = users.join("");
console.log(x, typeof x);

