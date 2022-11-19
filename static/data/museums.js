const museums = [
  {
    "name": "Alpines Museum",
    "link": "https://de.wikipedia.org/wiki/Alpines_Museum_(M%C3%BCnchen)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Alpines_Museum_%28M%C3%BCnchen%29_in_2013.jpg/480px-Alpines_Museum_%28M%C3%BCnchen%29_in_2013.jpg",
    "description": "Geschichte des <a href=\"https://de.wikipedia.org/wiki/Alpinismus\" class=\"mw-redirect\" title=\"Alpinismus\">Alpinismus</a>; dargestellt mit Gem&auml;lden, Zeichnungen, Dokumenten, Fotos und Ausr&uuml;stungsgegenst&auml;nden",
    "type": "museum",
    "lat": "48.135197222222",
    "lng": "11.589022222222"
  },
  {
    "name": "Alte Pinakothek",
    "link": "https://de.wikipedia.org/wiki/Alte_Pinakothek",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Alte_Pinakothek.JPG/480px-Alte_Pinakothek.JPG",
    "description": "Gem&auml;lde von Ende des 14. bis zur Mitte des 18. Jahrhunderts; Teil der <a href=\"https://de.wikipedia.org/wiki/Bayerische_Staatsgem%C3%A4ldesammlungen\" title=\"Bayerische Staatsgem&auml;ldesammlungen\">Bayerischen Staatsgem&auml;ldesammlungen</a>",
    "type": "museum",
    "lat": "48.148333333333",
    "lng": "11.57"
  },
  {
    "name": "Arch&auml;ologische Staatssammlung",
    "link": "https://de.wikipedia.org/wiki/Arch%C3%A4ologische_Staatssammlung",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/MUC_Arch%C3%A4ologischeStaatssammlungSchrift_2013-05.JPG/480px-MUC_Arch%C3%A4ologischeStaatssammlungSchrift_2013-05.JPG",
    "description": "Vor- und Fr&uuml;hgeschichte Mitteleuropas; dargestellt anhand von Grabungsfunden wie Alltagsgegenst&auml;nden, Figuren und Grabbeigaben",
    "type": "museum",
    "lat": "48.143888888889",
    "lng": "11.591111111111"
  },
  {
    "name": "Architekturmuseum der Technischen Universit&auml;t M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Architekturmuseum_der_Technischen_Universit%C3%A4t_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/de/thumb/0/05/Architekturmuseum_der_Technischen_Universit%C3%A4t_M%C3%BCnchen_-_Logo.jpg/480px-Architekturmuseum_der_Technischen_Universit%C3%A4t_M%C3%BCnchen_-_Logo.jpg",
    "description": "Zeichnungen, Fotografien und Modelle mit <a href=\"https://de.wikipedia.org/wiki/Architektur\" title=\"Architektur\">Architekturbezug</a>; Schwerpunkt ist die deutsche Architektur des 19. und 20. Jahrhunderts.",
    "type": "museum",
    "lat": "48.146944444444",
    "lng": "11.572222222222"
  },
  {
    "name": "Archive Artist Publications",
    "link": "https://de.wikipedia.org/wiki/Archive_Artist_Publications",
    "description": "K&uuml;nstlerb&uuml;cher, K&uuml;nstlerzeitschriften, Zines, Multiples, Ephemera; Schwerpunkt ist die Kunst ab den 80er Jahren bis heute.",
    "type": "museum",
    "lat": "48.14982",
    "lng": "11.57599"
  },
  {
    "name": "Artothek der Stadt M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Artothek_(M%C3%BCnchen)",
    "description": "Ein kontinuierliches Ausstellungsprogramm im Bildersaal zeigt die Werke vorwiegend M&uuml;nchner K&uuml;nstler. Im <a href=\"https://de.wikipedia.org/wiki/Artothek\" title=\"Artothek\">Verleih</a> k&ouml;nnen gegen eine g&uuml;nstige Geb&uuml;hr Kunstwerke f&uuml;r Privatwohnungen und B&uuml;ros ausgeliehen werden.",
    "type": "museum",
    "lat": "48.13542",
    "lng": "11.57375"
  },
  {
    "name": "Bayerisches Nationalmuseum",
    "link": "https://de.wikipedia.org/wiki/Bayerisches_Nationalmuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bayerisches_Nationalmuseum_Pano.jpg/480px-Bayerisches_Nationalmuseum_Pano.jpg",
    "description": "Bedeutende Sammlung von Skulpturen und Gem&auml;lden vom Mittelalter bis zum Jugendstil; regionales (Kunst-)Handwerk",
    "type": "museum",
    "lat": "48.143158333333",
    "lng": "11.591033333333"
  },
  {
    "name": "Bier- und Oktoberfestmuseum",
    "link": "https://de.wikipedia.org/wiki/Bier-_und_Oktoberfestmuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/M%C3%BCnchen_-_Bier-_und_Oktoberfestmuseum.JPG/480px-M%C3%BCnchen_-_Bier-_und_Oktoberfestmuseum.JPG",
    "description": "<a href=\"https://de.wikipedia.org/wiki/Geschichte_des_Bieres\" title=\"Geschichte des Bieres\">Geschichte des Bieres</a> sowie des <a href=\"https://de.wikipedia.org/wiki/Oktoberfest\" title=\"Oktoberfest\">Oktoberfestes</a>",
    "type": "museum",
    "lat": "48.135277777778",
    "lng": "11.580277777778"
  },
  {
    "name": "BMW Group Classic",
    "link": "https://de.wikipedia.org/wiki/BMW_Group_Classic",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_Group_Classic.jpg/480px-BMW_Group_Classic.jpg",
    "description": "Klassische Automobile und Motorr&auml;der der Marken BMW, MINI und Rolls-Royce",
    "type": "museum",
    "lat": "48.18631",
    "lng": "11.55049"
  },
  {
    "name": "BMW-Museum",
    "link": "https://de.wikipedia.org/wiki/BMW-Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/4_Cilindros%2C_M%C3%BAnich%2C_Alemania%2C_2013-02-11%2C_DD_06.JPG/480px-4_Cilindros%2C_M%C3%BAnich%2C_Alemania%2C_2013-02-11%2C_DD_06.JPG",
    "description": "Geschichte des Unternehmens sowie Entwicklung seiner Produkte",
    "type": "museum",
    "lat": "48.176511",
    "lng": "11.559147"
  },
  {
    "name": "BMW Welt",
    "link": "https://de.wikipedia.org/wiki/BMW_Welt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/M%C3%BCnchen_-_BMW-Welt.jpg/480px-M%C3%BCnchen_-_BMW-Welt.jpg",
    "description": "Kombinierte Ausstellungs-, Auslieferungs-, Erlebnis-, Museums- und Eventst&auml;tte",
    "type": "museum",
    "lat": "48.176944444444",
    "lng": "11.556666666667"
  },
  {
    "name": "Borstei-Museum",
    "link": "https://de.wikipedia.org/wiki/Borstei#Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Bernhard_Borst_Senator_hc.jpg/480px-Bernhard_Borst_Senator_hc.jpg",
    "description": "Geschichte der <a href=\"https://de.wikipedia.org/wiki/Borstei\" title=\"Borstei\">Borstei</a> und Wirken des Borsteigr&uuml;nders <a href=\"https://de.wikipedia.org/wiki/Bernhard_Borst\" title=\"Bernhard Borst\">Bernhard Borst</a> und seiner Frau Erna Borst",
    "type": "museum",
    "lat": "48.17066",
    "lng": "11.53774"
  },
  {
    "name": "Das Kartoffelmuseum",
    "link": "https://de.wikipedia.org/wiki/Das_Kartoffelmuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kartoffelmuseum_Muenchen-1.jpg/480px-Kartoffelmuseum_Muenchen-1.jpg",
    "description": "<a href=\"https://de.wikipedia.org/wiki/Kulturgeschichte_der_Kartoffel\" title=\"Kulturgeschichte der Kartoffel\">Geschichte der Kartoffel</a> und des Unternehmens <a href=\"https://de.wikipedia.org/wiki/Pfanni\" title=\"Pfanni\">Pfanni</a>; Kunstwerke rund um das Thema <a href=\"https://de.wikipedia.org/wiki/Kartoffel\" title=\"Kartoffel\">Kartoffel</a>",
    "type": "museum",
    "lat": "48.125555555556",
    "lng": "11.605805555556"
  },
  {
    "name": "Deutsches Jagd- und Fischereimuseum",
    "link": "https://de.wikipedia.org/wiki/Deutsches_Jagd-_und_Fischereimuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Deutsches_Jagd-_und_Fischereimuseum-1.jpg/480px-Deutsches_Jagd-_und_Fischereimuseum-1.jpg",
    "description": "Geschichte der Jagd und der Fischerei (mit dem Schwerpunkt S&uuml;&szlig;wasser) von der Steinzeit bis zur Gegenwart; gezeigt anhand von pr&auml;parierten Tieren, Waffen, Werkzeugen und k&uuml;nstlerischen Darstellungen",
    "type": "museum",
    "lat": "48.138427777778",
    "lng": "11.571086111111"
  },
  {
    "name": "Deutsches Museum",
    "link": "https://de.wikipedia.org/wiki/Deutsches_Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Museumsinsel_M%C3%BCnchen.jpg/480px-Museumsinsel_M%C3%BCnchen.jpg",
    "description": "Offizieller Name: <i>Deutsches Museum von Meisterwerken der Naturwissenschaft und Technik</i>; gr&ouml;&szlig;tes naturwissenschaftlich-technisches Museum der Welt, das mit Originalobjekten, Modellen und Simulationen die Funktionsweise und Geschichte technischer Entwicklungen pr&auml;sentiert.",
    "type": "museum",
    "lat": "48.1301",
    "lng": "11.5838"
  },
  {
    "name": "Deutsches Theatermuseum",
    "link": "https://de.wikipedia.org/wiki/Deutsches_Theatermuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/M%C3%BCnchen_Theatermuseum_%28Schild%29.JPG/480px-M%C3%BCnchen_Theatermuseum_%28Schild%29.JPG",
    "description": "<a href=\"https://de.wikipedia.org/wiki/Geschichte_des_Theaters\" title=\"Geschichte des Theaters\">Geschichte des Theaters</a>; u.&nbsp;a. mit Graphiken, Fotografien, B&uuml;hnenbildmodellen, Kost&uuml;mentw&uuml;rfen, Requisiten und Programmheften",
    "type": "museum",
    "lat": "48.143611111111",
    "lng": "11.580277777778"
  },
  {
    "name": "Erinnerungsort Olympia-Attentat",
    "link": "https://de.wikipedia.org/wiki/Erinnerungsort_Olympia-Attentat",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Munich_1972_Massacre_Memorial.jpg/480px-Munich_1972_Massacre_Memorial.jpg",
    "description": "Stellt die Opfer und das Geschehen der <a href=\"https://de.wikipedia.org/wiki/M%C3%BCnchner_Olympia-Attentat\" title=\"M&uuml;nchner Olympia-Attentat\">Geiselnahme von M&uuml;nchen</a> am 5. September 1972 w&auml;hrend der Olympischen Sommerspiele in M&uuml;nchen dar.",
    "type": "museum",
    "lat": "48.177894722222",
    "lng": "11.549790277778"
  },
  {
    "name": "Erwin von Kreibig-Museum",
    "link": "https://de.wikipedia.org/wiki/Erwin_von_Kreibig-Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Erwin_von_Kreibig-Museum.JPG/480px-Erwin_von_Kreibig-Museum.JPG",
    "description": "Werke von <a href=\"https://de.wikipedia.org/wiki/Erwin_von_Kreibig\" title=\"Erwin von Kreibig\">Erwin von Kreibig</a>, einem Maler, Zeichner und Grafiker, der in der ersten H&auml;lfte des 20. Jahrhunderts in M&uuml;nchen lebte",
    "type": "museum",
    "lat": "48.157941666667",
    "lng": "11.509216666667"
  },
  {
    "name": "Feuerwehrmuseum M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Feuerwehrmuseum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/StV_M%C3%BCnchen-KVR-Brandirektion_und_FW1.JPG/480px-StV_M%C3%BCnchen-KVR-Brandirektion_und_FW1.JPG",
    "description": "Geschichte und Technik der Brandbek&auml;mpfung mit Schwerpunkt auf die <a href=\"https://de.wikipedia.org/wiki/Feuerwehr_M%C3%BCnchen\" title=\"Feuerwehr M&uuml;nchen\">M&uuml;nchner Feuerwehren</a>",
    "type": "museum",
    "lat": "48.132777777778",
    "lng": "11.569444444444"
  },
  {
    "name": "Filmmuseum M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Filmmuseum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/M%C3%BCnchen_Stadtmuseum_Kino_Jakobsplatz.jpg/480px-M%C3%BCnchen_Stadtmuseum_Kino_Jakobsplatz.jpg",
    "description": "Geschichte des Films mit Schwerpunkt M&uuml;nchen; Im zugeh&ouml;rigen Kino werden t&auml;glich Retrospektiven, Filmreihen und Stummfilme mit Live-Musik gezeigt.",
    "type": "museum",
    "lat": "48.1351",
    "lng": "11.57305"
  },
  {
    "name": "GedenkSt&auml;tte Wei&szlig;e Rose",
    "link": "https://de.wikipedia.org/wiki/DenkSt%C3%A4tte_Wei%C3%9Fe_Rose",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Scholl-Denkmal%2C_M%C3%BCnchen.jpg/480px-Scholl-Denkmal%2C_M%C3%BCnchen.jpg",
    "description": "Dauerausstellung zum Widerstand der <a href=\"https://de.wikipedia.org/wiki/Wei%C3%9Fe_Rose\" title=\"Wei&szlig;e Rose\">Wei&szlig;en Rose</a> gegen den Nationalsozialismus, zudem j&auml;hrlich wechselnde Sonderausstellungen zu den einzelnen Mitgliedern und Sympathisanten der Gruppe.",
    "type": "museum",
    "lat": "48.150908333333",
    "lng": "11.580319444444"
  },
  {
    "name": "Geologisches Museum M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Geologisches_Museum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Luisenstrasse37.jpg/480px-Luisenstrasse37.jpg",
    "description": "Teil der <a href=\"https://de.wikipedia.org/wiki/Bayerische_Staatssammlung_f%C3%BCr_Pal%C3%A4ontologie_und_Geologie\" title=\"Bayerische Staatssammlung f&uuml;r Pal&auml;ontologie und Geologie\">Staatssammlung f&uuml;r Pal&auml;ontologie und Geologie</a>; u.&nbsp;a. mit Dauerausstellungen zur <a href=\"https://de.wikipedia.org/wiki/Entstehung_der_Erde\" title=\"Entstehung der Erde\">Entstehung</a> und zum <a href=\"https://de.wikipedia.org/wiki/Innerer_Aufbau_der_Erde\" title=\"Innerer Aufbau der Erde\">Aufbau der Erde</a> sowie zur Entstehung von <a href=\"https://de.wikipedia.org/wiki/Bodensch%C3%A4tze\" class=\"mw-redirect\" title=\"Bodensch&auml;tze\">Bodensch&auml;tzen</a>",
    "type": "museum",
    "lat": "48.147222222222",
    "lng": "11.564722222222"
  },
  {
    "name": "Glyptothek",
    "link": "https://de.wikipedia.org/wiki/Glyptothek_(M%C3%BCnchen)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/M%C3%BCnchen_Glyptothek.jpg/480px-M%C3%BCnchen_Glyptothek.jpg",
    "description": "Antike griechische und r&ouml;mische Bildhauerkunst von 560 vor bis 400 nach unserer Zeitrechnung; Ausgestellt sind zahlreiche Originale sowie Kopien klassischer Meisterwerke.",
    "type": "museum",
    "lat": "48.146292374",
    "lng": "11.5656374198"
  },
  {
    "name": "Haidhausen-Museum",
    "link": "https://de.wikipedia.org/wiki/Haidhausen-Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kirchenstr._24_Haidhausen-Museum_Muenchen-1.jpg/480px-Kirchenstr._24_Haidhausen-Museum_Muenchen-1.jpg",
    "description": "Geschichte des 1854 eingemeindeten M&uuml;nchner Stadtteils <a href=\"https://de.wikipedia.org/wiki/Haidhausen\" title=\"Haidhausen\">Haidhausen</a>",
    "type": "museum",
    "lat": "48.133738888889",
    "lng": "11.601416666667"
  },
  {
    "name": "J&uuml;disches Museum M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/J%C3%BCdisches_Museum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/M%C3%BCnchen_J%C3%BCdisches_Zentrum_und_J%C3%BCdisches_Museum.jpg/480px-M%C3%BCnchen_J%C3%BCdisches_Zentrum_und_J%C3%BCdisches_Museum.jpg",
    "description": "Geschichte und Kultur der j&uuml;dischen Bewohner M&uuml;nchens",
    "type": "museum",
    "lat": "48.134329",
    "lng": "11.572211"
  },
  {
    "name": "Kinder- und Jugendmuseum M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Kinder-_und_Jugendmuseum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Logo_Kinder-_und_Jugendmuseum.svg/480px-Logo_Kinder-_und_Jugendmuseum.svg.png",
    "description": "Interaktive Wechselausstellungen f&uuml;r Kinder zu Kunst, Kultur, Geschichte und Natur",
    "type": "museum",
    "lat": "48.141463",
    "lng": "11.558068"
  },
  {
    "name": "Kunstsammlung des Herzoglichen Georgianums",
    "link": "https://de.wikipedia.org/wiki/Kunstsammlung_des_Herzoglichen_Georgianums",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Georgianum.JPG/480px-Georgianum.JPG",
    "description": "Insbesondere kirchliche Kunst wie Gem&auml;lde und liturgische Ger&auml;te von der Romanik bis ins 19. Jahrhundert; Zudem Skulpturen der Sp&auml;tgotik mit Schwerpunkt <a href=\"https://de.wikipedia.org/wiki/Allg%C3%A4u\" title=\"Allg&auml;u\">Allg&auml;u</a>.",
    "type": "museum",
    "lat": "48.149911111111",
    "lng": "11.581708333333"
  },
  {
    "name": "LeseMuseen der Internationalen Jugendbibliothek",
    "link": "https://de.wikipedia.org/wiki/Internationale_Jugendbibliothek#Literaturmuseen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Blutenburg2.jpg/480px-Blutenburg2.jpg",
    "description": "Vier Museen &uuml;ber die Autoren <a href=\"https://de.wikipedia.org/wiki/Michael_Ende\" title=\"Michael Ende\">Michael Ende</a>, <a href=\"https://de.wikipedia.org/wiki/James_Kr%C3%BCss\" title=\"James Kr&uuml;ss\">James Kr&uuml;ss</a> und <a href=\"https://de.wikipedia.org/wiki/Erich_K%C3%A4stner\" title=\"Erich K&auml;stner\">Erich K&auml;stner</a> sowie die Illustratorin <a href=\"https://de.wikipedia.org/wiki/Binette_Schroeder\" title=\"Binette Schroeder\">Binette Schroeder</a>; u.&nbsp;a. mit pers&ouml;nlichen Gegenst&auml;nden aus den Nachl&auml;ssen der dargestellten Personen",
    "type": "museum",
    "lat": "48.163169444444",
    "lng": "11.457194444444"
  },
  {
    "name": "Marstallmuseum Nymphenburg",
    "link": "https://de.wikipedia.org/wiki/Marstallmuseum_Nymphenburg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Marstallmuseum_Nymphenburg-1.jpg/480px-Marstallmuseum_Nymphenburg-1.jpg",
    "description": "Historische Prunkwagen und -schlitten sowie zugeh&ouml;rige Ausr&uuml;stung wie bspw. <a href=\"https://de.wikipedia.org/wiki/Geschirr_(Zugtier)\" title=\"Geschirr (Zugtier)\">Pferdegeschirre</a>",
    "type": "museum",
    "lat": "48.155833333333",
    "lng": "11.505555555556"
  },
  {
    "name": "M&uuml;nchner Kaiserburg",
    "link": "https://de.wikipedia.org/wiki/M%C3%BCnchner_Kaiserburg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/M%C3%BCnchen_-_Alter_Hof_-_Landesstelle_f%C3%BCr_die_nichtstaatlichen_Museen_in_Bayern_-_Au%C3%9Fenansicht.jpg/480px-M%C3%BCnchen_-_Alter_Hof_-_Landesstelle_f%C3%BCr_die_nichtstaatlichen_Museen_in_Bayern_-_Au%C3%9Fenansicht.jpg",
    "description": "Dauerausstellung im Untergeschoss zur Stadtgeschichte M&uuml;nchens mit einem freigelegten Teil der Burgmauer",
    "type": "museum",
    "lat": "48.13804",
    "lng": "11.57821"
  },
  {
    "name": "Museum Brandhorst",
    "link": "https://de.wikipedia.org/wiki/Museum_Brandhorst",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Museum_Brandhorst_Muenchen_2008-12-28-2.jpg/480px-Museum_Brandhorst_Muenchen_2008-12-28-2.jpg",
    "description": "Werke von Mitte des 20. Jahrhunderts bis zur Gegenwart; U.a. zahlreiche Arbeiten von <a href=\"https://de.wikipedia.org/wiki/Cy_Twombly\" title=\"Cy Twombly\">Cy Twombly</a> und <a href=\"https://de.wikipedia.org/wiki/Andy_Warhol\" title=\"Andy Warhol\">Andy Warhol</a>; Teil der <a href=\"https://de.wikipedia.org/wiki/Bayerische_Staatsgem%C3%A4ldesammlungen\" title=\"Bayerische Staatsgem&auml;ldesammlungen\">Bayerischen Staatsgem&auml;ldesammlungen</a>",
    "type": "museum",
    "lat": "48.148057",
    "lng": "11.574225"
  },
  {
    "name": "Museum F&uuml;nf Kontinente",
    "link": "https://de.wikipedia.org/wiki/Museum_F%C3%BCnf_Kontinente",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Voelkerkundemuseum.jpg/480px-Voelkerkundemuseum.jpg",
    "description": "Au&szlig;ereurop&auml;ische Kunst; die Schwerpunkte des Best&auml;nde liegen in Asien, West- und Zentralafrika, Mittel- und S&uuml;damerika sowie Ozeanien.",
    "type": "museum",
    "lat": "48.137597222222",
    "lng": "11.585697222222"
  },
  {
    "name": "Museum f&uuml;r Abg&uuml;sse Klassischer Bildwerke",
    "link": "https://de.wikipedia.org/wiki/Museum_f%C3%BCr_Abg%C3%BCsse_Klassischer_Bildwerke",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Meiserstra%C3%9Fe_10.jpg/480px-Meiserstra%C3%9Fe_10.jpg",
    "description": "Originalgetreue Abg&uuml;sse von griechischen und r&ouml;mischen Skulpturen vom 7. Jahrhundert vor bis zum 5. Jahrhundert nach unserer Zeitrechnung.",
    "type": "museum",
    "lat": "48.144444444444",
    "lng": "11.566666666667"
  },
  {
    "name": "Museum f&uuml;r Moderne Kunst M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Museum_f%C3%BCr_Moderne_Kunst_M%C3%BCnchen",
    "description": "<a href=\"https://de.wikipedia.org/wiki/Virtuell\" class=\"mw-redirect\" title=\"Virtuell\">Virtuelles</a> <a href=\"https://de.wikipedia.org/wiki/Imagination\" title=\"Imagination\">imagin&auml;res</a> Museum (Urspr&uuml;nglich ein Kunstprojekt)",
    "type": "museum",
    "lat": "",
    "lng": ""
  },
  {
    "name": "Museum Mensch und Natur",
    "link": "https://de.wikipedia.org/wiki/Museum_Mensch_und_Natur",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/M%C3%BCnchen_-_Museum_Mensch_und_Natur_%28Schild%29.JPG/480px-M%C3%BCnchen_-_Museum_Mensch_und_Natur_%28Schild%29.JPG",
    "description": "Entstehung des Sonnensystems sowie die Geschichte der Erde und des Lebens; dargestellt durch Originalobjekte, Nachbildungen, Modelle und audiovisuelle Programme.",
    "type": "museum",
    "lat": "48.158611111111",
    "lng": "11.503611111111"
  },
  {
    "name": "Museum of Urban and Contemporary Art",
    "link": "https://de.wikipedia.org/wiki/Museum_of_Urban_and_Contemporary_Art",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Museum_of_Urban_and_Contemporary_Art_Muenchen-1.jpg/480px-Museum_of_Urban_and_Contemporary_Art_Muenchen-1.jpg",
    "description": "Museum f&uuml;r Urban Art und Street Art",
    "type": "museum",
    "lat": "48.13669",
    "lng": "11.569929722222"
  },
  {
    "name": "Museum Peter Gehring",
    "link": "https://de.wikipedia.org/wiki/Museum_Peter_Gehring",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Im_Eichgeh%C3%B6lz15_M%C3%BCnchen.jpg/480px-Im_Eichgeh%C3%B6lz15_M%C3%BCnchen.jpg",
    "description": "Kunst- und Architekturmuseum mit Skulpturengarten, erbaut von <a href=\"https://de.wikipedia.org/wiki/Gustav_Gsaenger\" title=\"Gustav Gsaenger\">Gustav Gsaenger</a>, Gartengestaltung von Alfred Reich, Ausstellung der Werke Peter Gehrings",
    "type": "museum",
    "lat": "48.1741",
    "lng": "11.48985"
  },
  {
    "name": "Museum Mineralogia M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Museum_Mineralogia_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/M%C3%BCnchen_Museum_Reich_der_Kristalle_%28Plakat%29.JPG/480px-M%C3%BCnchen_Museum_Reich_der_Kristalle_%28Plakat%29.JPG",
    "description": "Teil der Mineralogischen Staatssammlung; Ausgestellt werden Mineralien, Edelsteine, Edelmetalle und Meteoriten; In Wechselausstellungen werden zudem Kunstwerke rund um das Themengebiet Mineralogie pr&auml;sentiert.",
    "type": "museum",
    "lat": "48.147777777778",
    "lng": "11.572777777778"
  },
  {
    "name": "Museum Villa Stuck",
    "link": "https://de.wikipedia.org/wiki/Museum_Villa_Stuck",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Villa_Stuck.JPG/480px-Villa_Stuck.JPG",
    "description": "Architektur und Ausstattung des 1897/98 errichteten Geb&auml;udes von <a href=\"https://de.wikipedia.org/wiki/Franz_von_Stuck\" title=\"Franz von Stuck\">Franz von Stuck</a>; gezeigt werden zudem Ausstellungen von K&uuml;nstlern vor allem aus dem 19. Jahrhundert.",
    "type": "museum",
    "lat": "48.140655555556",
    "lng": "11.599644444444"
  },
  {
    "name": "Museum Witt",
    "link": "https://de.wikipedia.org/wiki/Museum_Witt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tengstr._33_Muenchen-1.JPG/480px-Tengstr._33_Muenchen-1.JPG",
    "description": "Die Sammlung enth&auml;lt mit dem Bestand der <a href=\"https://de.wikipedia.org/wiki/Zoologische_Staatssammlung_M%C3%BCnchen\" title=\"Zoologische Staatssammlung M&uuml;nchen\">Zoologischen Staatssammlung M&uuml;nchen</a> ca. 10 Mio. Schmetterlinge und stellt die weltweit umfangreichste Sammlung an „spinnerartigen“ <a href=\"https://de.wikipedia.org/wiki/Nachtfalter\" title=\"Nachtfalter\">Nachtfaltern</a> dar.",
    "type": "museum",
    "lat": "48.159638888889",
    "lng": "11.56885"
  },
  {
    "name": "MVG Museum",
    "link": "https://de.wikipedia.org/wiki/MVG_Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/MVG_Museum_M%C3%BCnchen.JPG/480px-MVG_Museum_M%C3%BCnchen.JPG",
    "description": "Geschichte der &Ouml;ffentlichen Nahverkehrs in M&uuml;nchen, u.&nbsp;a. mit historischen Stra&szlig;enbahnen und Omnibussen",
    "type": "museum",
    "lat": "48.102277777778",
    "lng": "11.602013888889"
  },
  {
    "name": "Neue Pinakothek",
    "link": "https://de.wikipedia.org/wiki/Neue_Pinakothek",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Neuepinakothek.JPG/480px-Neuepinakothek.JPG",
    "description": "Gem&auml;lden und Skulpturen vom sp&auml;ten 18. bis zum fr&uuml;hen 20. Jahrhundert; Teil der Bayerischen Staatsgem&auml;ldesammlungen",
    "type": "museum",
    "lat": "48.149722222222",
    "lng": "11.571111111111"
  },
  {
    "name": "NS-Dokumentationszentrum",
    "link": "https://de.wikipedia.org/wiki/NS-Dokumentationszentrum_(M%C3%BCnchen)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2015-04-12_NS-Dokumentationszentrum_Muenchen-4.jpg/480px-2015-04-12_NS-Dokumentationszentrum_Muenchen-4.jpg",
    "description": "Auseinandersetzung mit der Geschichte und den Folgen des <a href=\"https://de.wikipedia.org/wiki/NS-Regime\" class=\"mw-redirect\" title=\"NS-Regime\">NS-Regimes</a> am historisch-authentischen Ort des ehemaligen <a href=\"https://de.wikipedia.org/wiki/Braunes_Haus\" title=\"Braunes Haus\">Braunen Hauses</a> und der Rolle M&uuml;nchens als „<a href=\"https://de.wikipedia.org/wiki/Hauptstadt_der_Bewegung\" title=\"Hauptstadt der Bewegung\">Hauptstadt der Bewegung</a>“",
    "type": "museum",
    "lat": "48.14533",
    "lng": "11.56771"
  },
  {
    "name": "Pal&auml;ontologisches Museum",
    "link": "https://de.wikipedia.org/wiki/Pal%C3%A4ontologisches_Museum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/M%C3%BCnchen_-_Pal%C3%A4ontologisches_Museum.jpg/480px-M%C3%BCnchen_-_Pal%C3%A4ontologisches_Museum.jpg",
    "description": "Entwicklung von Wirbeltieren und V&ouml;geln, gezeigt anhand von Versteinerungen sowie Skeletten von Dinosauriern, Urelefanten und Urv&ouml;geln; das Museum ist Teil der <a href=\"https://de.wikipedia.org/wiki/Bayerische_Staatssammlung_f%C3%BCr_Pal%C3%A4ontologie_und_Geologie\" title=\"Bayerische Staatssammlung f&uuml;r Pal&auml;ontologie und Geologie\">Bayerischen Staatssammlung f&uuml;r Pal&auml;ontologie und Geologie</a>.",
    "type": "museum",
    "lat": "48.147613888889",
    "lng": "11.563833333333"
  },
  {
    "name": "Residenzmuseum",
    "link": "https://de.wikipedia.org/wiki/Residenzmuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Antiquarium_residence_munich.jpg/480px-Antiquarium_residence_munich.jpg",
    "description": "Das Museum umfasst die &ouml;ffentlich zug&auml;nglichen R&auml;ume des Geb&auml;udekomplexes, der von 1508 bis 1918 Wohn- und Regierungssitz der <a href=\"https://de.wikipedia.org/wiki/Wittelsbach\" title=\"Wittelsbach\">Wittelsbacher</a> – und damit lange ein wesentliches Zentrum der weltlichen Macht in Bayern – war.",
    "type": "museum",
    "lat": "48.140277777778",
    "lng": "11.578333333333"
  },
  {
    "name": "Rockmuseum Munich",
    "link": "https://de.wikipedia.org/wiki/Rockmuseum_Munich",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/M%C3%BCnchen_-_Olympiaturm_1.JPG/480px-M%C3%BCnchen_-_Olympiaturm_1.JPG",
    "description": "Rock- und Popgeschichte; Ausgestellt werden Originalgegenst&auml;nde verschiedener Musiker wie z.&nbsp;B. Kleidungsst&uuml;cke von <a href=\"https://de.wikipedia.org/wiki/Jim_Morrison\" title=\"Jim Morrison\">Jim Morrison</a> oder Gitarren von <a href=\"https://de.wikipedia.org/wiki/Queen_(Band)\" title=\"Queen (Band)\">Queen</a>, <a href=\"https://de.wikipedia.org/wiki/Kiss_(Band)\" title=\"Kiss (Band)\">Kiss</a> und den <a href=\"https://de.wikipedia.org/wiki/Rolling_Stones\" class=\"mw-redirect\" title=\"Rolling Stones\">Rolling Stones</a>.",
    "type": "museum",
    "lat": "48.174444444444",
    "lng": "11.553611111111"
  },
  {
    "name": "Sammlung Bollert",
    "link": "https://de.wikipedia.org/wiki/Bayerisches_Nationalmuseum#Sammlung_Bollert",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Sammlung_Bollert.JPG/480px-Sammlung_Bollert.JPG",
    "description": "Mittelalterliche Skulpturen, im Wesentlichen s&uuml;ddeutsche Bildwerke der Sp&auml;tgotik.",
    "type": "museum",
    "lat": "48.143182",
    "lng": "11.58927"
  },
  {
    "name": "Sammlung Goetz",
    "link": "https://de.wikipedia.org/wiki/Sammlung_Goetz",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Goetz_Collection_Munich_3.jpg/480px-Goetz_Collection_Munich_3.jpg",
    "description": "Sammlung internationaler, zeitgen&ouml;ssischer Kunst; Bestehend aus Zeichnungen, Gem&auml;lden, Grafiken, Fotografien, Video- und Filmarbeiten",
    "type": "museum",
    "lat": "48.166111111111",
    "lng": "11.623055555556"
  },
  {
    "name": "Sammlung Schack",
    "link": "https://de.wikipedia.org/wiki/Sammlung_Schack",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/M%C3%BCnchen_Schack-Galerie.JPG/480px-M%C3%BCnchen_Schack-Galerie.JPG",
    "description": "Werke deutscher Maler des 19. Jahrhunderts und Kopien nach Gem&auml;lden Alter Meister; Teil der <a href=\"https://de.wikipedia.org/wiki/Bayerische_Staatsgem%C3%A4ldesammlungen\" title=\"Bayerische Staatsgem&auml;ldesammlungen\">Bayerischen Staatsgem&auml;ldesammlungen</a>",
    "type": "museum",
    "lat": "48.142286111111",
    "lng": "11.593408333333"
  },
  {
    "name": "Schatzkammer der Residenz",
    "link": "https://de.wikipedia.org/wiki/M%C3%BCnchner_Residenz#Schatzkammer",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Schatzkammer_Residenz_Muenchen_Krone_des_Koenigreichs_Bayern2.jpg/480px-Schatzkammer_Residenz_Muenchen_Krone_des_Koenigreichs_Bayern2.jpg",
    "description": "Goldschmiedekunst seit der Sp&auml;tantike; darunter Orden, Schmuck, Pokale, Tafelgeschirr und Insignien bayerischer Herrscher.",
    "type": "museum",
    "lat": "48.140504",
    "lng": "11.577959"
  },
  {
    "name": "SiemensForum",
    "link": "https://de.wikipedia.org/wiki/SiemensForum_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SiemensForum.jpg/480px-SiemensForum.jpg",
    "description": "Geschichte und bedeutende technische Entwicklungen des Unternehmens (zurzeit geschlossen; Wiederer&ouml;ffnung nach Umzug)",
    "type": "museum",
    "lat": "48.145277777778",
    "lng": "11.575833333333"
  },
  {
    "name": "Spielzeugmuseum",
    "link": "https://de.wikipedia.org/wiki/Altes_Rathaus_(M%C3%BCnchen)#Spielzeugmuseum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Altes_Rathaus_in_M%C3%BCnchen_Ostseite.jpg/480px-Altes_Rathaus_in_M%C3%BCnchen_Ostseite.jpg",
    "description": "<a href=\"https://de.wikipedia.org/wiki/Spielzeug\" title=\"Spielzeug\">Spielzeuge</a>, vorwiegend aus dem fr&uuml;hen 20. Jahrhundert",
    "type": "museum",
    "lat": "48.136666666667",
    "lng": "11.576944444444"
  },
  {
    "name": "Staatliche Antikensammlungen",
    "link": "https://de.wikipedia.org/wiki/Staatliche_Antikensammlungen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Staatliche_Antikensammlungen_in_M%C3%BCnchen.jpg/480px-Staatliche_Antikensammlungen_in_M%C3%BCnchen.jpg",
    "description": "Griechische, r&ouml;mische und etruskische Kunst, u.&nbsp;a. Griechische Vasen von 1400 bis 300 vor unserer Zeitrechnung und Etruskischer Goldschmuck aus dem 5. und 6. Jahrhundert v.&nbsp;u.&nbsp;Z.",
    "type": "museum",
    "lat": "48.145",
    "lng": "11.564722222222"
  },
  {
    "name": "Staatliche M&uuml;nzsammlung M&uuml;nchen",
    "link": "https://de.wikipedia.org/wiki/Staatliche_M%C3%BCnzsammlung_M%C3%BCnchen",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/M%C3%BCnchen_Staatliche_M%C3%BCnzsammlung_I.JPG/480px-M%C3%BCnchen_Staatliche_M%C3%BCnzsammlung_I.JPG",
    "description": "M&uuml;nzen, Geldscheine, Wertpapiere, Medaillen und <a href=\"https://de.wikipedia.org/wiki/Glyptik\" title=\"Glyptik\">geschnittene Steine</a> von der Antike bis zur Gegenwart.",
    "type": "museum",
    "lat": "48.141111111111",
    "lng": "11.578055555556"
  },
  {
    "name": "Staatliches Museum &Auml;gyptischer Kunst",
    "link": "https://de.wikipedia.org/wiki/Staatliches_Museum_%C3%84gyptischer_Kunst",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MUC_SM%C3%84K_2013-06.jpg/480px-MUC_SM%C3%84K_2013-06.jpg",
    "description": "Kunst des <a href=\"https://de.wikipedia.org/wiki/Altes_%C3%84gypten\" title=\"Altes &Auml;gypten\">Alten &Auml;gyptens</a> und benachbarter Kulturen",
    "type": "museum",
    "lat": "48.147004",
    "lng": "11.568317"
  },
  {
    "name": "St&auml;dtische Galerie im Lenbachhaus",
    "link": "https://de.wikipedia.org/wiki/St%C3%A4dtische_Galerie_im_Lenbachhaus",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2008_Lenbachhaus_Eingang.JPG/480px-2008_Lenbachhaus_Eingang.JPG",
    "description": "Werke von in M&uuml;nchen t&auml;tigen K&uuml;nstlern vom 15. bis Anfang des 20. Jahrhunderts; U.a. von Mitgliedern des <a href=\"https://de.wikipedia.org/wiki/Der_Blaue_Reiter\" title=\"Der Blaue Reiter\">Blauen Reiters</a> und von <a href=\"https://de.wikipedia.org/wiki/Franz_von_Lenbach\" title=\"Franz von Lenbach\">Franz von Lenbach</a>. Dazu kommen Wechselausstellungen auch zeitgen&ouml;ssischer K&uuml;nstler.",
    "type": "museum",
    "lat": "48.146944444444",
    "lng": "11.563611111111"
  },
  {
    "name": "Sudetendeutsches Museum",
    "link": "https://de.wikipedia.org/wiki/Sudetendeutsches_Museum",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sudetendeutsches_Museum_Muenchen-2.jpg/480px-Sudetendeutsches_Museum_Muenchen-2.jpg",
    "description": "Kultur und Geschichte der Deutschen in B&ouml;hmen, M&auml;hren und Sudetenschlesien, Vertreibung 1945, Aufnahme der Fl&uuml;chtlinge in Bayern",
    "type": "museum",
    "lat": "48.130159",
    "lng": "11.588898"
  },
  {
    "name": "&Uuml;blackerh&auml;usl-Herbergenmuseum",
    "link": "https://de.wikipedia.org/wiki/%C3%9Cblacker-H%C3%A4usl",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/%C3%9Cblacker-H%C3%A4usl.JPG/480px-%C3%9Cblacker-H%C3%A4usl.JPG",
    "description": "Leben einer Tagel&ouml;hner-Familie in den M&uuml;nchner Vororten im 19. Jahrhundert anhand historisch eingerichteter Wohn- und Schlafr&auml;ume",
    "type": "museum",
    "lat": "48.132233333333",
    "lng": "11.599761111111"
  },
  {
    "name": "Valentin-Karlstadt-Mus&auml;um",
    "link": "https://de.wikipedia.org/wiki/Valentin-Karlstadt-Mus%C3%A4um",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Isartor.jpg/480px-Isartor.jpg",
    "description": "Leben und Wirken des M&uuml;nchner Komikers, Volkss&auml;ngers, Filmproduzenten und Autors <a href=\"https://de.wikipedia.org/wiki/Karl_Valentin\" title=\"Karl Valentin\">Karl Valentin</a> und seiner Partnerin <a href=\"https://de.wikipedia.org/wiki/Liesl_Karlstadt\" title=\"Liesl Karlstadt\">Liesl Karlstadt</a>; u.&nbsp;a. mit pers&ouml;nlichen Gegenst&auml;nden, Originaldokumenten, Fotografien und Filmen der portr&auml;tierten Personen.",
    "type": "museum",
    "lat": "48.135066666667",
    "lng": "11.581994444444"
  },
  {
    "name": "Verkehrszentrum",
    "link": "https://de.wikipedia.org/wiki/Verkehrszentrum_(Deutsches_Museum)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Theresienh%C3%B6he_11.jpg/480px-Theresienh%C3%B6he_11.jpg",
    "description": "Dependance des Deutschen Museums zu Geschichte und Technik von Verkehr und Mobilit&auml;t. Ausgestellt werden Eisenbahnen, Kraftfahrzeuge, Stra&szlig;enbahnen und Fahrr&auml;der.",
    "type": "museum",
    "lat": "48.132888888889",
    "lng": "11.5447"
  }
]