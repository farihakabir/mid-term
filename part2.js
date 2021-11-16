function process() {

    var name = document.getElementById("nameBox").value ;
    var age = document.getElementById("ageBox").value ;
    var yearlysalaryBox = document.getElementById("yearlysalaryBox").value ;

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");

    var totalmonthly = (yearlysalaryBox* .20) + (yearlysalaryBox * .30) + (yearlysalaryBox * .40);

   
    



    var msg = "hellow  " + name + "  please check your salary: " + yearlysalaryBox + "  your age: " + age;

    
    document.getElementById("nameBox").value = '' ; 
    document.getElementById("ageBox").value = '' ; 
     document.getElementById("yearlysalaryBox").value = '' ;
     
     p1.innerText = msg ;
}