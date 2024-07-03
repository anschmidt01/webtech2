# Deine eigene Bibliothek

## Dokumentation
***
Die genaue Dokumentation mit Erklärungen der Erfolgskriterien kann hier angeschaut werden.
![Doku](WEBTECH 2 Dokumenation.pdf)

### Inhaltsverzeichnis
1. [Allgemeine Informationen](#allgemeine-information)
2. [Information zur Anwendung](#information-zur-anwendung)
3. [Technologien](#technologien)
4. [Installation](#installation)


#### Allgemeine Information
***
Diese Idee kam ursprünglich meiner Mutter, weil wir zu viele Bücher zuhause haben, und keine Übersicht darüber, ob sie gelesen wurden oder nicht. 
Man kann Bücher hinzufügen, sie anzeigen lassen und löschen.


#### Information zur Anwendung
***
##### Home:

Begrüßungsseite, wenn man die Anwendung öffnet.

![Begrüßung](Welcome.png)

##### Ein Buch hinzufügen

Der Nutzer ist möglich ein Buch seiner Wahl inklusive Titel, Kurzbeschreibung, Genre und Status hinzuzufügen. 
Die id wird automatisch zugewiesen.

![Hinzufügen](Buchhinzufügen.png)

##### Tabelle
***
In der Tabelle kann man alle eingetragenen Bücher in der Datenbank sehen. 

![Tabelle](Übersicht.png)

 

#### Löschen
Durch das Bootstrap Trash Icon kann ein Eintrag gelöscht werden. Dieses Fenster zur Bestätigung des Löschvorgangs öffnet sich dann. 

![Löschen](löschen.png)


#### Technologien
*** 
Eine Übersicht der verwendeten Technologien:
#### Entwicklungsumgebung:
- Visual Studio Code
- Bootstrap
#### Datenbank: 
- MySQL
#### Backend:
- Node.js
#### Frontend:
- Angular

#### Installation
***
Leider hat das Deployment zeitlich nicht funktioniert. 

1. Das Repository muss geklont werden.
--> git clone https://github.com/anschmidt01/webtech2.git

2. Die buecher.sql muss lokal in die Datenbank eingefügt werden.

3. Backend muss gestartet werden
--> node server.js 

4. Frontend muss gestartet werden
--> ng serve

(Eventuell muss npm i eingegeben werden.)
