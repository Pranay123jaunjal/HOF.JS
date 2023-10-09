let string="pw skils";
function reversestring(inputstring){
    return inputstring.split("").reverse().join("");

}
function reversewithdealy(inputstring){

    settimeout((function(){
        let reversed=reversestring(inputstring)
        console.log(reversed);
    },2000))
};
reversewithdealy(string);