
# React Timer Challenge

Il React Timer Challenge è un'applicazione sviluppata da Federico Airoldi, progettata come esercitazione per esplorare e capire in profondità l'uso dei Refs in React, inclusi `useRef`, `forwardRef`, `useImperativeHandle`, e l'integrazione con `createPortal`. L'applicazione consiste in una serie di quattro timer con durate diverse. L'obiettivo è avviare un timer e fermarlo il più vicino possibile al tempo target. Se il timer supera il tempo stabilito, l'utente perde e viene mostrato un modale di sconfitta.

## Funzionalità

- **Quattro Timer**: Sfide con quattro livelli di difficoltà basati su diversi intervalli di tempo.
- **Gestione degli Eventi**: Utilizzo di `useRef` per accedere agli elementi DOM e gestire gli eventi di start e stop dei timer.
- **Feedback Visivo**: Implementazione di `forwardRef` e `useImperativeHandle` per controllare il modale di feedback.
- **Modale di Risultato**: Uso di `createPortal` per rendere il modale di risultato al di fuori della gerarchia del DOM principale, mantenendo una gestione corretta degli eventi e dello stato.

## Tecnologie Utilizzate

- React (Hooks: `useRef`, `useEffect`, `useState`)
- Tailwind CSS per lo styling
- `createPortal` per il rendering modale

## Installazione

Per eseguire il React Timer Challenge localmente, segui questi passi:

1. Clona il repository:
   ```bash
   git clone https://example.com
   ```
2. Installa le dipendenze:
   ```bash
   cd react-timer-challenge
   npm install
   ```
3. Avvia l'applicazione:
   ```bash
   npm start
   ```

L'applicazione sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## Struttura del Progetto

- `Player.jsx`: Componente principale che gestisce l'input dell'utente e la visualizzazione dei timer.
- `TimerChallenge.jsx`: Componente timer che implementa la logica di conteggio e sfida.
- `ResultModal.jsx`: Componente modale che mostra il risultato della sfida utilizzando `forwardRef` e `createPortal`.

## Obiettivi Didattici

Questo progetto serve come esercitazione pratica per comprendere:

- La gestione dei riferimenti agli elementi DOM in React tramite `useRef`.
- Il passaggio dei Refs a componenti figli utilizzando `forwardRef`.
- L'implementazione di metodi componenti personalizzati con `useImperativeHandle`.
- Il rendering di componenti fuori dalla gerarchia DOM principale mediante `createPortal`.
