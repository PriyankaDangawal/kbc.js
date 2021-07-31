let readlineSync = require("readline-sync");
console.log(".....................welcome in kbc 🙏....................");
console.log();
console.log("......lets start play game..all the best.👍......");
console.log();
function que_list(){
    var question_list=[
        "1.how many continents are there?"
        ,"2.what is the capital of india?"
        ,"3.in campus which course we are learning?"
        ,"4.who is the CEO of Navgurukul?"
        ,"5.who is our prime minister?"
        
    ];
    return question_list;
}var que = que_list();

function opt_list(){
    var options_list=[
        ["1.four","2.nine","3.seven","4.eight"]
        ,["1.mumbai","2.delhi","3.simla","4.bhopal"]
        ,["1.software enjeneering","2.graphic design","3.mbbs","4.tourism"]
        ,["1.Abhishek Gupta","2.Rishabh","3.Anuradha","4.Swati"]
        ,["1.indra gandhi","2.narandra modi","3.rahul gandhi","4.akhilesh yadw"]
        ];
        return options_list;
}var ope=opt_list();

function answer_list(){
    var ans_list=[3,2,1,1,2];
    return ans_list;
}var answer=answer_list();

function lifeline(){
    var options_list1=[["nine","seven"],["delhi","simla"],["software enjeneering","mbbs"],["Abhishek Gupta","Rishabh"],["akhilesh yadaw","narendra modi"]];
    return options_list1;
}var life=lifeline();

function answer_list1(){
    var ans_list=[2,1,1,1,2];
    return ans_list;
}var answer1=answer_list1();
var sum=0;
var count=1;
for (var i=0; i<que.length; i++){
    console.log(que[i]);
    for (var j=0; j<ope[i].length; j++){
        console.log(ope[i][j]);
    }if (count<=1){
        var lifeline2=readlineSync.question("Do you want to 50 50 lifeline \n 1.yes 2.no ")
        if (lifeline2==1){
            var index3=1;
            for (var k=0; k<life[i].length; k++){
                console.log(index3,life[i][k]);
                index3++;
            }
            var num=readlineSync.questionInt("Enter the answer: ");
            if (num==answer1[i]){
                sum=sum+2000;
                console.log("your answer is right:");
                console.log("you win this: ",sum)
            }else{
                console.log("your answer is wrong")
                console.log("game over",sum)
                break;
            }count++;
            
        }else{
            var num=readlineSync.questionInt("Enter your answer: ");
            if (num==answer[i]){
                sum=sum+2000;
                console.log("right answer:");
                console.log("you win this: ",sum);

            }else{
                console.log("your answer is wrong:");
                console.log("game over: ",sum);
                break;

            }
        }
    }else{
        console.log("you already use lifeline:");
        var num=readlineSync.questionInt("enter answer: ");
        if (num==answer[i]){
            sum=sum+2000;
            console.log("right answer you win: ",sum);
        }else{
            console.log("your answer is wrong: ",sum);
            break;
        }
    }
}

