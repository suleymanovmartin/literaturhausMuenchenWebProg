
## 1. Ziel und Projektübersicht

- [ ] Kundenspezifische Website für Bücher erstellen
    
- [ ] Grundlage: Gespräch mit Herrn Rupprecht vom 30.04.2026
    
- [ ] Gesamtes Buchsortiment online präsentieren
    
- [ ] Online-Reservierung von Büchern ermöglichen
    
- [ ] Website soll einfach und übersichtlich nutzbar sein
    
- [ ] Aufmerksamkeit für Bücher und das Unternehmen erhöhen
    
- [ ] Zielgruppe: neugierige Kund*innen, die in die Bücherwelt eintauchen möchten
    
- [ ] Unique Selling Point einbauen, der die Website von anderen abhebt
    
- [ ] Admin soll Datenstamm selbstständig pflegen können
    
- [ ] Website soll effizientes und angenehmes Arbeiten ermöglichen
    

## 2. Funktionale Anforderungen

### Startseite

- [ ] Zwei neueste Bucherscheinungen anzeigen
    
- [ ] Neue Erscheinungen auffällig im Mittelpunkt platzieren
    
- [ ] Darstellung soll Kund*innen zum Reservieren/Kaufen anregen
    
- [ ] Informationen über die Firma anzeigen
    
- [ ] Kontaktmöglichkeit bereitstellen
    
- [ ] Unterseiten von der Startseite aus erreichbar machen
    

### Buchinformationen

- [ ] ISBN anzeigen
    
- [ ] Titel anzeigen
    
- [ ] Autor anzeigen
    
- [ ] Genre anzeigen
    
- [ ] Cover anzeigen
    
- [ ] Kurzbeschreibung anzeigen
    
- [ ] Preis anzeigen
    
- [ ] Anzahl der Bücher auf Lager anzeigen
    
- [ ] Nice to have: Rückseite des Buches anzeigen
    
- [ ] Nice to have: Buchrücken anzeigen
    

### Unterseiten und allgemeine Funktionen

- [x] Log-in-Bereich erstellen
    
- [x] Registrierung ermöglichen
    
- [ ] Anmeldung ermöglichen
    
- [ ] Suchleiste einbauen
    
- [ ] Filterfunktion einbauen, z. B. nach Genre
    
- [ ] Reservierungsbereich erstellen
    

### Reservierungsprozess

- [ ] Bücher sollen reserviert werden können
    
- [ ] Für Reservierung ist der Name erforderlich
    
- [ ] Nutzer*innen können beliebig viele Bücher reservieren
    
- [ ] Reservierung gilt für eine Woche
    
    
- [ ] Reservierte Bücher sollen angezeigt werden
    
- [ ] Abholtermin soll angezeigt werden
    
- [ ] Abholfiliale soll angezeigt werden
    
- [x] Kein Onlinekauf notwendig
    
- [ ] Reservierung ohne Kaufprozess ermöglichen
    

### Admin-Funktionen

- [x] Admin-Bereich erstellen
    
- [x] Admin kann Datenstamm selbstständig pflegen
    
- [x] Admin kann Buchinformationen hinzufügen
    
- [x] Admin kann Buchinformationen bearbeiten
    
- [x] Admin kann Buchinformationen löschen
    
- [ ] Admin kann Lagerbestände verwalten
    
- [x] Admin kann Reservierungen einsehen
    
- [x] Admin kann Reservierungen abschließen
    
- [x] Admin kann Buchungen und Stornierungen extern bearbeiten
    
- [ ] System unterstützt Erstellung und Verwaltung von Reservierungen
    

## 3. Nichtfunktionale Anforderungen

### Benutzerfreundlichkeit

- [ ] Website soll einfach bedienbar sein
    
- [ ] Funktionen sollen effizient nutzbar sein
    
- [ ] Bücher sollen schnell auffindbar sein
    
- [ ] Reservierung soll einfach durchführbar sein
    
- [ ] Admin soll Inhalte ohne große technische Vorkenntnisse pflegen können
    

### Datenschutz und Datensparsamkeit

- [ ] Keine Zahlungsdaten erforderlich
    
- [ ] Keine IBAN erforderlich
    
- [ ] Keine Straße oder vollständige Adresse erforderlich
    
- [ ] Für Reservierung nur Name erforderlich
    
- [ ] Datenschutzrechtliche Hinweise bereitstellen
    

### Rechtliche Anforderungen

- [ ] Impressum einbauen
    
- [ ] Datenschutzhinweise einbauen
    
- [ ] Umgang mit Cookies berücksichtigen
    
- [ ] Cookies sollen zustandslos behandelt werden
    

### CMS und Inhaltsverwaltung

- [x] Admin kann Buchinformationen hochladen
    
- [x] Admin kann zusätzliche Buchdaten selbstständig konfigurieren
    
- [x] Änderungen an Buchdaten sollen einfach möglich sein
    
- [x] Reservierungen sollen verwaltbar sein
    
- [x] Stornierungen sollen verwaltbar sein (Rückgängig machen ist nur nice to have)
    

## 4. Design-Anforderungen

### Logo

- [ ] Logo oben auf der Website platzieren
    
- [ ] Logo als Schriftzug des Hauses verwenden
    
- [ ] Kein zusätzliches Logo-Design erstellen (KI Logo, Literaturhaus München Namen als Logo potentiell, Wort Bild Marke)
    

### Farben

- [ ] Primärfarbe: Bordeauxrot #8B1E3F
    
- [ ] Sekundärfarbe: sandiges Gelb #E8DCC4
    
- [ ] Detailfarbe: Grün #2F4F4F
    
- [ ] Detailfarbe für kleine Gestaltungselemente verwenden
    

### Gestaltung

- [ ] Design soll übersichtlich sein
    
- [ ] Design soll ansprechend wirken
    
- [ ] Neue Bucherscheinungen visuell hervorheben
    
- [ ] Gestaltung soll zum Thema Bücher/Buchhandlung passen
    
- [ ] Keine konkrete Referenzwebsite vorhanden
    

## 5. Zielgruppe

- [ ] Neugierige Kund*innen ansprechen
    
- [ ] Zugriff auf das Sortiment ermöglichen
    
- [ ] Reservierung ohne Onlinekauf ermöglichen
    
- [ ] Website soll zum Stöbern und Entdecken einladen
    

## 6. Geklärte Details und Systemanforderungen

### System- und Funktionsdetails

- [ ] Berücksichtigen: Es gibt nur eine einzige Filiale
    
- [x] Admin-Rollen einrichten: Es wird im System nur eine einzige Admin-Rolle geben
    
- [ ] Nutzerdaten speichern: Zur Registrierung werden Name, Adresse (inklusive Postleitzahl) sowie die E-Mail-Adresse der Nutzer*innen gespeichert
    
- [ ] Reservierungsmanagement umsetzen: Administratoren können die Reservierungen einsehen und den Status manuell auf "Bestätigt" setzen
    
- [ ] Kategorienverwaltung umsetzen: Der Admin kann im Katalog Kategorien hinzufügen oder entfernen und die Genres verändern
    
- [ ] Passwörter und Sicherheit: Passwörter verschlüsselt speichern
    
- [ ] Cookies: Sicherstellen, dass keine rohen IDs in Cookies abgelegt werden (bei Nutzerdaten)
    
- [ ] Cookies: Implementierungsart für Cookies im Team abstimmen und festlegen (bei Nutzerdaten)
    
- [ ] Bestandsaktualisierung: Technische Umsetzung zur Aktualisierung des Lagerbestands im Team entscheiden
    

### Darstellung und Design (UI/UX)

- [ ] Buchansicht gestalten: Für die Darstellung der Buchseiten (Cover, Rückseite und Buchrücken) ein Bild-Karussell nutzen
    
- [ ] Responsive Design (Nice to have): Optimierung für mobile Endgeräte (Smartphone und Tablet) umsetzen, ggf. mithilfe von Bootstrap
    

### Inhalte (Content und Rechtliches)

- [ ] Rechtstexte einpflegen: Impressum sowie Datenschutzerklärung durch KI generieren lassen
    
- [ ] Kataloginhalte einpflegen: KI-generierte Dummy-Daten als Platzhalter für Bücher verwenden
    

### Prüfungs- und Präsentationsorganisation

- [ ] Präsentation vorbereiten: Gesamtpräsentation auf etwa 12 bis 15 Minuten auslegen
    
- [ ] Inhalte strukturieren: Aufgabenverteilung, Anforderungsermittlung, KI-Einsatz und eine Live-Demo einbauen
    
- [ ] Fragerunde vorbereiten: Auf 5 Minuten Fragen an jede Person einzeln einstellen
    
- [ ] Bewertung berücksichtigen: Individuelle Fragerunde bringt 15 der insgesamt 30 Punkte ein