var dictionary = [
  {
    vocabItem: "nature",
    def: "przyroda",
    rel: ["human nature", "by nature", "a freak of nature", "a nature lover", "the nature conservancy"]
  },

  {
    vocabItem: "in the middle",
    def: "pośrodku",
    rel: ["related words will be added yet"]
  },

  {
    vocabItem: "to be located",
    def: `znajdować się / być w jakimś miejscu
    <br>biuro znajduje się obok dworca
    <br>znajdujesz się wśród przyjaciół
    <br>znajdować się w kłopotach/niebezpieczeństwie
    <br>[znajdować się] pod wpływem czegoś`,
    rel: ["related words will be added yet"]
  },

  {
    vocabItem: "a well",
    def: `studnia
    studnia bez dna`,
    rel: ["related words will be added yet", "nature"]
  },

  {
    vocabItem: "to realise sth",
    def: `zdawać [perf zdać] sobie sprawę z czegoś`,
    rel: ["related words will be added yet"]
  },

  {
    vocabItem: "deep",
    def: "głęboki [w pionie] <br>głęboki rów <br>głęboki woda <br>głęboki garnek <br>głęboki fotel <br>głęboki rana",
    rel: ["soup plate", "depth", "a deep cleavage", "piercing eyes", "a piercing look"]
  },

  {
    vocabItem: "to leave",
    def: "opuszczać <br>nie opuszczę cię",
    rel: ["to leave out", "I lost my nerve", "to lower"]
  },

  {
    vocabItem: "to hang",
    def: "wieszać <br>wieszać coś na czymś",
    rel: ["to hang up","to hang oneself"]
  },

  {
    vocabItem: "a [trouser] pocket",
    def:"kieszeń <br>tylna/wewnętrzna kieszeń",
    rel: ["funds", "means", "I can't afford it.","to know sth like the back of one's hand"]
  },

  {
    vocabItem:"to hang",
    def:"wisieć",
    rel: ["I don't give a damn", "whatever will be, will be", "to be hanged", "to be touch-and-go"]
  },

  {
    vocabItem: " a conversation",
    def:`rozmowa <br>grzecznościowa wymiana f zdań <br>podtrzymywać rozmowę
<br>podsłuchiwać [perf podsłuchać] rozmowę <br>uczynić coś bardziej interesującym`,
    rel: ["related words will be added yet"]
  }

];

  //filling the dictionary with words
  let init = function(){
    for (var i = 0; i < dictionary.length; i++) {
      document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + dictionary[i].vocabItem + "</li>";
    }
  }

  //calling the function when the page loads
  init();

  //displaying a vocabulary item, its definition and related vocabulary items
  let show = function(i){
    document.getElementById('word_text').innerHTML = dictionary[i].vocabItem;
    document.getElementById('definition').innerHTML = dictionary[i].def;

    let list = "";

          for(var j = 0; j < dictionary[i].rel.length; j++) {
              list += "<li>" + dictionary[i].rel[j] + "</li>";
              document.getElementById('related').innerHTML = list;
      }

  }

//showing the ith vocabulary items
show(0);

//searching

let search = function(){
  //inialising the value of the input tag to a variable we can reuse
  let query = document.getElementById('search').value;

  //if the value is empty, do nothing
  if(query == ""){
    return;
  }

  var found = -1; //inialise found to false

  //equating found to the index
  for (var i = 0; i < dictionary.length; i++) {
    if (query == dictionary[i].vocabItem) {
      found = i;
      break;
    }else {
      document.getElementById('word_text').innerHTML = "Word not found. More words will be added yet.";
      document.getElementById('definition').innerHTML = "";
      document.getElementById('related').innerHTML = "";
    }
  }

  //using found's value in show
  if (found >= 0) {
    show(found);
  }
}
