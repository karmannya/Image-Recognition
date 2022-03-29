https://teachablemachine.withgoogle.com/models/HL8M2jRPz/

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
}) ;

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="img1" src = "'+data_uri+'">'

    });
}

console.log('ml5 vesion is ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HL8M2jRPz/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model is loaded')
}


function check() {
    var check1 = document.getElementById("img1");
    classifier.classify(check1,gotResult);

}

function gotResult(error,results) {
    if (error) {
      console.error(error);
     }
     else {
         console.log(results);
         document.getElementById("answerobject").innerHTML = results[0].label;
         document.getElementById("answerpercent").innerHTML = results[0].confidence.toFixed(3);
         
     }
}