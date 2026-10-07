# Next.js sissejuhatus

Väike Next.js App Routeri projekt, mis koosneb kahest leheküljest, kliendipoolsest loendurist ja API-lõpppunktist.

## Kohalikult käivitamine

    npm install
    npm run dev

## Mida ma õppisin

1. **Mida pakub Next.js lisaks Reactile?**
   Next.js lisab failipõhise marsruutimise, serveripoolse renderdamise ja serverikomponendid, sisseehitatud API-marsruudid ning tootmiskeskkonna seadistuse, mistõttu muutub React täisfunktsionaalseks raamistikuks.

2. **Miks loendur vajab `‚use client‘`?**
   See kasutab `useState` ja `onClick`, mis töötavad ainult brauseris, seega tuleb see märgistada kliendikomponendina; kõik muu jääb vaikimisi serverisse.

3. **Kus käivitatakse kood failis `app/api/message/route.js`?**
   See käivitatakse serveris (Node.js), mitte kasutaja brauseris.

4. **Kuidas sarnaneb see lõpppunkt Expressi marsruudiga?**
   Nagu Expressis `app.get(‚/api/message‘, ...)`, töötleb see URL-is GET-päringut ja saadab tagasi JSON-vastuse, kuid URL pärineb kaustateest, mitte koodist.

5. **Miks peavad salajased andmed jääma serverisse?**
   Kõike, mis brauserisse saadetakse, saab igaüks DevToolsis lugeda, seega peavad API-võtmed ja andmebaasi kasutajatunnused jääma serverikoodi, kus kasutajad neid näha ei saa.

Translated with DeepL.com (free version)