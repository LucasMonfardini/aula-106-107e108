function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OKUPWuvrU/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir: '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão: '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('bird');
    img1 = document.getElementById('cat');
    img2 = document.getElementById('cow');
    img3 = document.getElementById('dog');

    if(results[0].label == "Passáro")
   {
    img.src = 'bird.gif';
   img1.src = 'cat.jpeg';
   img2.src = 'cow.png';
   img3.src = 'dog.jpeg';
   }
    
  else if(results[0].label == "Gato")
   {
   img.src = 'bird.jpg';
   img1.src = 'cat.gif';
   img2.src = 'cow.png';
   img3.src = 'dog.jpeg';
   }

   else if(results[0].label == "Vaca")
   {
   img.src = 'bird.jpg';
   img1.src = 'cat.jpeg';
   img2.src = 'cow.gif';
   img3.src = 'dog.jpeg';
   }

   else if(results[0].label == "Cachorro")
   {
   img.src = 'bird.jpg';
   img1.src = 'cat.jpeg';
   img2.src = 'cow.gif';
   img3.src = 'dog.gif';
   }
  }
}