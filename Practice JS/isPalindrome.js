function isPalindrome (str){
    let initialArray = str.split('');
    let reversedArray = initialArray.reverse();
        if (reversedArray.join('') === str){
            return true;
        } else {
            return false;
        }
}