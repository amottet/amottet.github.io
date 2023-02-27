function show_bibtex(id) {
    $('.publication_box').each(function (i, obj) {
        if (obj.style.display == 'block' || obj.id == id)
            $('#' + obj.id).slideToggle(600);
    });
}

function compare(t1, t2) {
     d1 = t1.date;
     d2 = t2.date;

     e1 = d1.split('/');
     e2 = d2.split('/');


     if(e1[2] < e2[2])
      return 1;
     else if(e1[2] == e2[2] && e1[1] < e2[1])
      return 1;
      else if(e1[2] == e2[2] && e1[1] == e2[1] && e1[0] < e2[0])
       return 1;
      else if(e1[2] == e2[2] && e1[1] == e2[1] && e1[0] == e2[0])
      return 0;
      else return -1;
  }

  var places = new Array();
  places.push({id: 'newyork',
  label: 'New York',
            mapid: 'NewYork',
              x: 345,
              y: 170});
  places.push({id: 'berkeley',
  label: 'Berkeley',
               mapid: 'Berkeley',
              x: 160,
              y: 180});
  places.push({id: 'kyoto',
  label: 'Kyoto',
               mapid: 'JP',
              x: 1162,
              y: 195});
  places.push({id: 'reykjavik',
  label: 'Reykjavik',
               mapid: 'IS',
              x: 571,
              y: 65});
  places.push({id: 'darmstadt',
  label: 'Darmstadt',
               mapid: 'DE',
              x: 665,
              y: 125});
  places.push({id: 'dagstuhl',
              label: 'Schloss Dagstuhl',
               mapid: 'DE',
              x: 660,
              y: 127});
  places.push({id: 'prague',
  label: 'Prague',
               mapid: 'CZ',
              x: 685,
              y: 127});
  places.push({id: 'dresden',
  label: 'Dresden',
               mapid: 'DE',
              x: 680,
              y: 120});
places.push({id: 'krippen',
  label: 'Krippen',
               mapid: 'DE',
              x: 680,
              y: 120});
  places.push({id: 'leipzig',
  label: 'Leipzig',
               mapid: 'DE',
              x: 675,
              y: 117});
  places.push({id: 'oxford',
  label: 'Oxford',
               mapid: 'GB',
              x: 628,
              y: 115});
  places.push({id: 'bertinoro',
  label: 'Bertinoro',
               mapid: 'IT',
              x: 678,
              y: 155});
places.push({id: 'bayreuth',
            label: 'Bayreuth',
             mapid: 'DE',
            x: 674,
            y: 127});
places.push({id:'vienna',label:'Vienna', mapid: 'AT', x: 690,y:135});
places.push({id:'haifa',label:'Haifa', mapid: 'IL', x: 0,y:0});
places.push({id:'banff',label:'Banff', mapid: 'Banff', x:210, y:110});
places.push({id:'berlin',label:'Berlin', mapid: 'DE', x:680,y:114});
places.push({id:'vancouver',label:'Vancouver', mapid: 'Vancouver', x:0,y:0});
places.push({id:'moscow',label:'Moscow', mapid: 'Moscow', x:0,y:0});
places.push({id:'karolinka',label:'Solá&ncaron;', mapid: 'CZ', x:0,y:0});
places.push({id:'lyon',label:'Lyon',mapid:'FR',x:0,y:0})
places.push({id:'barcelona',label:'Barcelona',mapid:'ES',x:0,y:0});
places.push({id:'voels',label:'Voels am Schlern',mapid:'IT',x:0,y:0});
places.push({id:'oberwolfach',mapid:'DE',x:0,y:0,label: 'Mathematisches Forschungsinstitut Oberwolfach'});
places.push({id:'bordeaux',mapid:'FR',x:0,y:0,label:'Laboratoire Bordelais de Recherche en Informatique'});
places.push({id:'kranjska',mapid:'SI',x:0,y:0,label:'Kranjska Gora'});
places.push({id:'online',mapid:'XX',x:0,y:0,label:'Online'});
places.push({id:'molveno',mapid:'IT',x:0,y:0,label:'Molveno'});
//places.push({id:'krakow',mapid:'PL',x:0,y:0,label:'Krak&oacute;w'});

  var talks = new Array();
talks.push({id:'cl2018',
           title: 'Dichotomies in Constraint Satisfaction: Canonical Functions and Numeric CSPs',
            event: '<a href="https://www.cl2018.uni-bayreuth.de/en/index.html">Colloquium Logicum 2018</a>',
           place: 'bayreuth',
            invited: true,
           date: '16/09/18'});
talks.push({id:'wcmt',
            event: '<a href="https://mipt.ru/english/events/russian-workshop-on-complexity-and-model-theory">Russian Workshop on Complexity and Model Theory</a>',
           place: 'moscow',
           date: '09-11/06/19'});
 talks.push({id:'lics2022',
             event: '<a href="https://lics.siglog.org/lics22/">LICS 2022</a>',
            place: 'haifa',
            date: '02-05/08/22'});
talks.push({id:'lics2019',
           title: 'Topology is relevant',
            event: '<a href="https://lics.siglog.org/lics19/">LICS 2019</a>',
           place: 'vancouver',
           date: '26/06/19'});
  talks.push({id: 'lics16',
              title: 'Reducts of homogeneous structures, and lifting tractability from finite-domain constraint satisfaction',
              event: '<a href="http://lics.rwth-aachen.de/lics16/">LICS 2016</a>',
              place: 'newyork',
              date: '07/07/16'});
  talks.push({id: 'SLC_berkeley',
              title: 'Canonical Functions and Constraint Satisfaction Problems', invited: true,
              event: '<a href="http://simons.berkeley.edu/workshops/logic2016-2">Workshop {Symmetry, Logic, Computation}</a>',
	      slides: 'berkeley.pdf',
              place: 'berkeley',
              date: '09/11/16'});
  talks.push({id: 'lics17',
              title: 'Discrete Temporal Constraint Satisfaction Problems',
              event: '<a href="http://www.cs.swansea.ac.uk/lcc/">Workshop on Logic and Computational Complexity</a>',
              place: 'reykjavik',
            date: '19/06/17'});
  talks.push({id: 'lics18',
              title: 'A universal-algebraic proof of the dichotomy for MMSNP',
              event: '<a href="https://lics.siglog.org/lics18/index.php">LICS 2018</a>',
	      slides:'lics-2018.pdf',
              place: 'oxford',
              date: '11/07/18'});
  talks.push({id: 'dagstuhl18',
              title: 'A universal-algebraic proof of the dichotomy for MMSNP',
              event: '<a href="http://www.dagstuhl.de/en/program/calendar/semhp/?semnr=18231">Dagstuhl Seminar: The constraint satisfaction problem: complexity and approximability</a>',
	      slides:'dagstuhl-2018.pdf',
              invited:true,
              place: 'dagstuhl',
              date: '07/06/18'});
  talks.push({id: 'AAA2018',
              title: 'Cyclic terms, CSP, MMSNP',
              event: '<a href="https://tu-dresden.de/mn/math/algebra/forschung/tagungen/aaaseries/aaa96">Arbeitstagung Allgemeine Algebra</a>',slides:'AAA96.pdf',
              place: 'darmstadt',
              date: '02/06/18'});
  talks.push({id: 'introCSPs',
              title: 'Introduction to Constraint Satisfaction Problems',
              event: '<a href="https://lat.inf.tu-dresden.de/quantla/index.php/study-programme/research-seminar/ws-2017-2018">QuantLA seminar</a>',
              place: 'leipzig',
              date: '07/11/17'});
  talks.push({id: 'workshop17',
              title: 'Towards a proof of the universal-algebraic conjecture for MMSNP',
              event: '<a href="https://lat.inf.tu-dresden.de/quantla/index.php/study-programme/annual-workshops/workshop-2017">QuantLA Workshop</a>', slides:'QuantLA-workshop-2017.pdf',
              place: 'dresden',
              date: '22/09/17'});
  talks.push({id: 'institute_algebra_MMSNP',
              title: 'Towards a proof of the universal-algebraic conjecture for MMSNP',
              event: '<a href="https://tu-dresden.de/mn/math/algebra/veranstaltungen/international-seminar">Seminar of the institute of algebra</a>',
              place: 'dresden',
              date: '01/09/17'});
  talks.push({id:'DFG_darmstadt',
              title: 'Numeric Constraint Satisfaction Problems',
              event: '<a href="http://www.dagstuhl.de/en/program/calendar/evhp/?semnr=17243">11th Joint Workshop of the German Research Training in Computer Science</a>',
              place:'dagstuhl',
            date: '12/06/17'});
  talks.push({id:'kafka17',
              title: 'The universal-algebraic approach to constraint satisfaction for countable saturated structures',
              event: '<a href="http://www.karlin.mff.cuni.cz/~holub/kafka/">KAFKA seminar</a>',
              place:'prague',
            date: '22/03/17'});
  talks.push({id:'phdsinlogic',
              title: 'Reducts of homogeneous structures, and lifting tractability from finite-domain constraint satisfaction',
              event: '<a href="http://www.mathematik.tu-darmstadt.de/fbereiche/logik/phdsinlogic2016/?site=home">PhDs in Logic VIII</a>',slides:'phdsinlogic.pdf',
              place:'darmstadt',
            date: '11/05/16'});
  talks.push({id:'institute_algebra_mashup2',
              title: 'Reducts of finitely bounded homogeneous structures, and lifting tractability from finite-domain constraint satisfaction',
              event: '<a href="https://lat.inf.tu-dresden.de/quantla/index.php/study-programme/research-seminar/research-seminar-ss-2016">QuantLA seminar</a>',
              place:'dresden',
            date: '26/04/16'});
  talks.push({id:'institute_algebra_mashup1',
              title: 'Mashup algebras and constraint satisfaction problems',
              event: '<a href="https://tu-dresden.de/mn/math/algebra/veranstaltungen/international-seminar">Seminar of the institute of algebra</a>',
              place:'dresden',
            date: '04/12/15'});
  talks.push({id:'icalp15',
              title: 'Constraint Satisfaction Problems over the Integers with Successor',
              event: '<a href="http://www.kurims.kyoto-u.ac.jp/icalp2015/">ICALP 2015</a>',slides:'icalp2015.pdf',
              place:'kyoto',
            date: '06/07/15'});
  talks.push({id:'prague_mmsnp',
              title: 'Proof of the universal-algebraic conjecture for MMSNP',slides:'mmsnp.pdf',
              event: 'Joint Dresden-Prague Seminar',
              place:'prague',
            date: '07/02/18'});
  talks.push({id:'workshop16',
              title: 'Reasoning with discrete time',
              event: '<a href="https://lat.inf.tu-dresden.de/quantla/index.php/study-programme/annual-workshops/workshop-2016">QuantLA Workshop</a>',slides:'QuantLA-workshop-2016.pdf',
              place:'krippen',
            date: '19/09/16'});
  talks.push({id:'ratlocc18',
	      event: '<a href="http://wwwusers.di.uniroma1.it/~carlucci/RaTLoCC18/index.html">Ramsey Theory in Logic, Combinatorics and Complexity</a>',
	      place: 'bertinoro',
	      date: '15-20/07/18',
        invited:true})
  talks.push({id:'mcw18',
	      event: '<a href="https://kam.mff.cuni.cz/workshops/mcw/work23.html">Midsummer combinatorial workshop</a>',
	      place: 'prague',
	      date: '30-34/07/18'})
   talks.push({id: 'defense',
		title: 'Dichotomies in Constraint Satisfaction: Canonical Functions and Numeric CSPs',
		event: 'PhD defense', slides:'defense.html',
		place: 'dresden',
		date: '14/08/18'});
    talks.push({id: 'workshop2018',
     title: 'The Containment Problem for Unambiguous Register Automata',
     event: '<a href="https://lat.inf.tu-dresden.de/quantla/index.php/study-programme/annual-workshops/workshop-2018">QuantLA Workshop</a>', slides:'QuantLA-workshop-2018.pdf',
     place: 'dresden',
     date: '31/08/18'});
    talks.push({id: 'vienna2018',
                title: 'The dichotomy for MMSNP',
                event: '<a href="http://www.dmg.tuwien.ac.at/fg1/seminar.html">Seminar of the Algebra Group at TU Wien</a>',
                slides:'vienna.pdf',
               place:'vienna',
               date:'12/10/18'});
    talks.push({id:'banff18',
	      event: '<a href="https://www.birs.ca/events/2018/5-day-workshops/18w5180">Unifying Themes in Ramsey Theory</a>',
	      place: 'banff',
	      date: '18-23/11/18',
           invited: true});
   talks.push({id: 'aaa97',
        title: 'Topology is relevant',
        event: '<a href="http://www.dmg.tuwien.ac.at/fg1/aaa97/aaa97.html">AAA97</a>',
        place: 'vienna',
        date: '02/03/19',
        slides: 'aaa97.html'});

talks.push({id: 'stacs2019',
        event: 'STACS 2019',
        place: 'berlin',
        date: '13-16/03/19'});
talks.push({id: 'quantla-spring-school',
        title: 'Introduction to Constraint Satisfaction Problems',
        event: '<a href="https://lat.inf.tu-dresden.de/quantla/index.php/study-programme/annual-workshops/spring-school-2019">QuantLA Spring School</a>',
        place: 'krippen',
        invited: true,
        date: '27/03/19',
        slides: 'quantla-spring-school.html'});

talks.push({id:'kafka19',
              title: 'Universality of unambiguous finite and register automata',
              event: '<a href="http://www.karlin.mff.cuni.cz/~holub/kafka/">KAFKA seminar</a>',
              place:'prague',
            date: '10/04/19'});
talks.push({id:'ssaos19',
              title: 'Topology is relevant',
              event: '<a href="http://ameql.math.muni.cz/ssaos">Summer School on Algebra and Ordered Sets</a>',
              place:'karolinka',
            slides:'ssaos.pdf',
            date: '03/09/19'});
talks.push({id: 'lip2019',
              title: 'Symmetries in infinite-domain constraint satisfaction',
              event: 'Seminar of the MC2 team at <a href="http://www.ens-lyon.fr/LIP/MC2/">Laboratoire d\'Informatique du Parallélisme</a> of the ENS Lyon',
              place: 'lyon',
              date: '24/10/19'});
talks.push({id: 'cores_kafka2019',
              title: 'Cores of structures with a Ramsey expansion',
              event: 'KAFKA Seminar',
              place: 'prague',
              date: '04/12/19'});
talks.push({id: 'cores_vienna',
              title: 'Cores of structures with a Ramsey expansion',
              event: '<a href="http://www.dmg.tuwien.ac.at/fg1/seminar.html">Seminar of the Algebra Group at TU Wien</a>',
              place: 'vienna',
              date: '13/12/19'});
talks.push({id:'ackermann',
           title: 'Dichotomies in constraint satisfaction: canonical functions and numeric CSPs',
           event: '<a href="https://www.cs.upc.edu/csl2020/index.html">CSL 2020</a>',
            invited: true,
           place:'barcelona',
           date:'15/01/20',
           slides:'ackermann.html'});
talks.push({id:'mcw2020',
           title: 'Cores over Ramsey structures',
           event: '<a href="https://kam.mff.cuni.cz/workshops/mcw/">Midsummer Combinatorial Workshop XXV</a>',
           place:'prague',
           date:'06/08/20'});
talks.push({id:'cwc2020',
           event: '<a href="https://cspworldcongress.wordpress.com/home/">Second World Congress on CSPs</a> (organizer)',
           place:'voels',
           date:'20-26/09/20'});
talks.push({id:'oberwolfach20',
            title: 'Smooth Approximations',
           event: '<a href="https://www.mfo.de/occasion/2101a/www_view">Homogeneous structures: model theory meets universal algebra</a>',
           place:'oberwolfach',
            date:'07/01/21',
          slides:'oberwolfach.pdf',
            video:'mottet-oberwolfach.mp4',
           invited:true});
talks.push({id:'labri1',
           title: 'CSP: theory, tools, and applications (1/2)',
           event:'Seminar of <a href="https://ratio.labri.fr">GdT Ratio</a>',
           place:'bordeaux',
           date:'22/01/21'});
talks.push({id:'CSL21',
           event:'<a href="https://csl2021.fmf.uni-lj.si">Computer Science Logic 2021</a>',
           place:'online',
           date:'25-28/01/21'});
talks.push({id:'labri2',
           title: 'CSP: theory, tools, and applications (2/2)',
           event:'Seminar of <a href="https://ratio.labri.fr">GdT Ratio</a>',
           place:'bordeaux',
           date:'29/01/21'});
talks.push({id:'AAA100',
           event:'<a href="http://aaa.tcs.uj.edu.pl/">Arbeitstagung Allgemeine Algebra 100</a>',
           place:'online',
           date:'05-07/02/21'});
talks.push({id:'lics21',
           event:'LICS 2021',
            title:'Constraint Satisfaction Problems over Finite Structures',
           place:'online',
           date:'29/06/21',
           video:'mottet-lics2021.mp4'});
talks.push({id:'AAA101',
           event:'<a href="https://aaa101.pmf.uns.ac.rs/">Arbeistagung Allgemeine Algebra 101</a>',
           place:'online',
           date:'04-06/06/21'});
talks.push({id:'icalp21',
           event:'ICALP 2021',
        place:'online',
           date:'13-16/07/21'});
talks.push({id:'mcw2021',
           event:'Midsummer Combinatorial Workshop',
           place:'prague',
           date:'26-30/07/21'});
talks.push({id:'cwc21',
           event:'<a href="http://cspworldcongress.wordpress.com">Third CSP World Congress</a> (organizer)',
           place:'kranjska',
           date:'26-32/09/21'});
talks.push({id:'dagstuhl-automata',
           event:'<a href="https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=21452">Unambiguity in Automata Theory</a>',
           place:'dagstuhl',
           invited:true,
           date:'07-12/11/21'});
talks.push({id:'dagstuhl22',
          event:'<a href="https://www.dagstuhl.de/22201">The Constraint Satisfaction Problem: Complexity and Approximability</a>',
          title:'Promise Constraints and Sandwiches',
          place:'dagstuhl',
          date:'20/05/22',
          slides:'dagstuhl22.pdf',
        invited:true});
talks.push({id:'cwc22',
           event:'<a href="http://cwc.csp-seminar.org">Fourth CSP World Congress</a> (organizer)',
           place:'molveno',
           date:'19-23/09/22'});

email = ['yorke', 'reznor','carroll','kundera','lowery','dumas'];

  function makesvg(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  function find_place_name_with_id(id) {
    for(var i= 0 ; i < places.length; i++) {
      if(places[i].id === id) {
        return places[i].label;
      }
    }

  }

function init_talks() {
  talks.sort(compare);
  list_of_talks = $('#list_of_talks');
  if(list_of_talks == undefined)
      return;
  for(var i = 0; i < talks.length; i++){
      var title_text = '';
      const name_of_place = find_place_name_with_id(talks[i].place);
      const name_of_event = talks[i].event;
      if(talks[i].title != undefined) {
          title_text += talks[i].title + '.';
          if(talks[i].slides!= undefined)
              title_text += ' [<a href="talks/'+talks[i].slides+'">Slides</a>]';
          if(talks[i].video != undefined)
              title_text+=' [<a href="talks/'+talks[i].video+'">Video</a>]';
          title_text += '<br />';
      }

      var elem = $('<li>' + talks[i].date + ': '
        + title_text
        + name_of_event + ', '
        + name_of_place
        + '.</li>').attr('id','talk'+i);
      if(talks[i].invited!=undefined)
          elem.addClass('invited');
       elem.appendTo(list_of_talks);
  }
}

function init_map() {
    map = document.getElementById('svg_map2');
    if(map == undefined)
        return;
    for(var i = 0; i < places.length; i++)
    {
      country = map.contentDocument.getElementById(places[i].mapid);
        if(country){
          country.style.fill = '#288585';
          country.onmouseover= function(){display_country(this);};
        }
    }
}

  function init(){
    init_talks();
    init_map();
    //$('.email').html(get_name());

  particlesJS("particles", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":false,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
  }

  function display_country(str)
  {
      // Reset colour of all the places
      for(var i = 0; i < places.length; i++)
      {
          country = document.getElementById('svg_map2').contentDocument.getElementById(places[i].mapid);
          if(country != null)
            country.style.fill = '#288585';
      }

      // Highlights current place
      str.style.fill = '#e13300';

      // Highlights all the events that took place in that location
      id = str.id;
      for(var i = 0; i < talks.length; i++){
          var country = '';
          for(var j = 0; j < places.length; j++)
            {
                if(places[j].id == talks[i].place)
                    country = places[j].mapid;
            }

          if(country == id) {
            $('#talk'+i).css('background-color','#cccccc');
          }
          else {
            $('#talk'+i).css('background-color','white');
          }
      }
  }

function get_name()
{
    l = email.length-1;
    r = Math.random();
    e = Math.floor(r*l);
    return email[e];
}
