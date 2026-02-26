Reszponzív Feladatkezelő Alkalmazás

Ez egy egyszerű, reszponzív feladatkezelő (Todo) alkalmazás, amely HTML5, CSS3 és JavaScript technológiákkal készült. Az alkalmazás lehetővé teszi feladatok listázását, hozzáadását, keresését, állapotuk módosítását és törlését.
Funkciók

    Feladatok megjelenítése: Az alkalmazás betölti az első 20 feladatot a JSONPlaceholder API-ról.

    Új feladat hozzáadása: Lehetőség van új feladat létrehozására POST kéréssel.

    Keresés a feladatok között: Valós idejű szűrés a feladatok szövege alapján.

    Feladat állapotának módosítása:

        Zöld pipa ikonnal befejezetté lehet jelölni a feladatot

        Piros X ikonnal vissza lehet állítani nem befejezett állapotba

    Feladat törlése: Egyedi feladat törlése a kártyán lévő gombbal.

    Összes feladat törlése: Egyszerre az összes feladat eltávolítása.

    Téma váltás: Világos és sötét téma közötti váltás.

    Reszponzív menü: Mobilos nézetben hamburger menü jelenik meg.

    Reszponzív design: Különböző képernyőméretekhez igazodó megjelenés.

Technológiai részletek
Frontend

    HTML5: Strukturális felépítés

    CSS3: Stílusok, reszponzív design (media query-k)

    JavaScript (ES6+): Dinamikus működés, API hívások

API

Az alkalmazás a JSONPlaceholder nyilvános teszt API-t használja:

    GET /todos - Feladatok lekérése

    POST /todos - Új feladat létrehozása

Használati útmutató
Feladatok kezelése

    Feladatok megtekintése: Betöltés után automatikusan megjelennek a feladatkártyák.

    Új feladat: Írd be a szöveget az "Új feladat" mezőbe, majd kattints a "Hozzáadás" gombra.

    Keresés: Írj a keresőmezőbe, és kattints a "Keresés" gombra.

    Állapot módosítás: Kattints a kártyán lévő pipára (✔️) vagy X-re (❌).

    Törlés: Kattints a "Törlés" gombra a kártyán, vagy használd az "Összes törlése" gombot.

Téma váltás

    Kattints a villanykörte ikonra a világos témához

    Kattints a házikó ikonra a sötét témához

Navigáció mobilon

    600px alatti képernyőn a menü ikonra kattintva jelenik meg/navigáció.

Reszponzív töréspontok

    Alapértelmezett: Asztali nézet

    900px alatt: Nagyobb betűméret, több padding, soros elrendezés a kártyákon

    600px alatt: Mobil nézet, hamburger menü megjelenése

    1200px felett: Központosított tartalom maximális szélességgel

