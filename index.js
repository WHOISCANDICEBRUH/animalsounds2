function startClassification(){
    navigator.mediaDevices.getUserMedia({audi0: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vGahNU867/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}