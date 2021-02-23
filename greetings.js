

function greetings(the_time) {  
    let answer = "";

    switch (the_time) {
        case the_time > 11:
            answer = "Good Morning"
            break;
        case the_time > 15:
            answer = "Good Afternoon"
            break;
        case the_time < 18:
            answer = "Good Evening"
            break;

        default: "You are Welcome"
            break;
    }

    return answer;

}


const date = new Date()
const hours = date.getHours()

const currentGreeting = greetings()
console.log(currentGreeting);









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
