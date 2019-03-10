//       --- HOME WORK 1.1 ----
/*
let  coordyArray=[{x:12, y:13}, {x:56, y: 45}];

function getPointsCoordy(coordyArray) {
    let str='';
    for (let i=0; i<coordyArray.length; i++){
        str=str+coordyArray[i].x+','+coordyArray[i].y+' ';
    }
    return str.trim();
}
 */


//       --- HOME WORK 1.2a все повторяющиеся в массиве----
/*
let  a=[1,2,3,3,4,4,4,2,5];

function getA1(a) {
    let a1=[];
    for (let i=0; i<a.length; i++){
        let s=0;
        for (let j=0; j<a.length; j++){
            if (a[i]==a[j]) s=s+1;
        }
        if (s==1) a1.push(a[i]);
    }
    return a1;
}
*/

//       --- HOME WORK 1.2b если только подряд повторяющиеся ----
/*
let  a=[1,2,3,3,4,4,4,4,6,5,5];

function getA1(a) {
    let a1=[],
        i=0;
    while (i<a.length){
        if (a[i]!=a[i+1]){
            a1.push(a[i]);
            i++;
        }
        else {
            let k=true;
            while (k==true && i!=a.length){
                i++;
                if (a[i]==a[i+1]){
                    i++;
                }
                else {
                    i++;
                    k=false;
                }

            }
        }
    }
    return a1;
}
*/

//       --- HOME WORK 3 ----
let  str='asdasd \n123dsdf\nGssdfsdfsdf';

function makeHTML(str){
    str1='';
    let a=str.split('\n');
    str1='<h1>'+a[0]+'</h1>';

    for (let i=1;i<a.length;i++){
         str1=str1+'<p>'+a[i]+'</p>';
    }

    return str1;
}

alert(makeHTML(str));