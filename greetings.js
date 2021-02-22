function greetings(the_time) {
    switch (the_time) {
        case "8am-11am":
            answer = "Good Morning"
            break;
        case "12pm-4pm":
            answer = "Good Afternoon"
            break;
        case "5pm-11pm":
            answer = "Good Evening"
            break;

        default: "You are Welcome"
            break;
    }
    return answer;

}

const value = greetings("5pm-11pm")


for (let i = 0; i < value.length; i++) {
    const char = value[i];
    console.log(`Letter ${i} is ${char}`);
}









//     if (the_time === 1){
//         return "Good Morning";
//     }
//     else if (the_time === 2){
//         return "Good Afternoon";
//     }
//     else if (the_time === 3){
//         return "Good Evening";
//     }
//     else{
//         return "You are Welcome"
//     }
// }

// const name = greetings(3)

// for (let i = 0; i < name.length; i++) {
//     const char = name[i];
//     console.log(`Letter ${i} is ${char}`);

//}
