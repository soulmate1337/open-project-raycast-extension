OpenProject Raycast Extension
Eine Raycast Extension zur Verwaltung deiner OpenProject Tickets direkt aus Raycast heraus.

Features
Ticket erstellen: Erstelle neue Tickets mit allen wichtigen Feldern
Ticket suchen: Durchsuche deine Tickets nach Titel
Projekt-Integration: Arbeite mit allen deinen OpenProject Projekten
Benutzer-Zuweisung: Weise Tickets direkt Teammitgliedern zu
Prioritäten: Setze Prioritäten für deine Tickets
Installation
Klone dieses Repository oder erstelle die Dateien manuell
Installiere die Dependencies:
bash
npm install
Konfiguriere deine OpenProject Verbindung in den Raycast Preferences:
OpenProject URL: Die URL deiner OpenProject Instanz (z.B. https://community.openproject.org)
API Key: Dein OpenProject API Schlüssel
API Key erstellen
Logge dich in deine OpenProject Instanz ein
Gehe zu Mein Konto → Zugriffstokens
Klicke auf + Zugriffstokens
Gib einen Namen ein (z.B. "Raycast Extension")
Kopiere den generierten API Key
Füge ihn in den Raycast Preferences ein
Befehle
Create Ticket
Erstelle ein neues Ticket mit folgenden Optionen:

Subject: Titel des Tickets (erforderlich)
Description: Beschreibung (optional)
Project: Projekt auswählen (erforderlich)
Type: Ticket-Typ (Bug, Feature, Task, etc.)
Assignee: Zugewiesene Person (optional)
Priority: Priorität (optional)
Search Tickets
Durchsuche deine Tickets:

Eingabe im Suchfeld startet automatisch die Suche
Zeigt Ticket-ID, Titel, Projekt und Status
Direkter Link zum Ticket in OpenProject
Kopiere Ticket-URL oder -ID in die Zwischenablage
Entwicklung
bash
# Development Server starten
npm run dev

# Extension builden
npm run build

# Linting
npm run lint
npm run fix-lint
Projektstruktur
src/
├── api.ts              # OpenProject API Client
├── create-ticket.tsx   # Ticket erstellen Command
└── search-tickets.tsx  # Ticket suchen Command
Anforderungen
Node.js 18+
Raycast 1.62.0+
OpenProject Instanz mit API Zugang
Troubleshooting
Verbindungsfehler
Überprüfe deine OpenProject URL (ohne trailing slash)
Stelle sicher, dass dein API Key korrekt ist
Teste die Verbindung in einem Browser: https://your-instance.openproject.org/api/v3/
Keine Projekte/Typen sichtbar
Überprüfe deine Berechtigungen in OpenProject
Stelle sicher, dass du mindestens "View work packages" Rechte hast
Performance
Die Suche verwendet Debouncing (500ms Verzögerung)
Große Instanzen können längere Ladezeiten haben
Lizenz
MIT License

