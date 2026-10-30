# Abernethy Library welcome kiosk: prototype

A clickable concept of the 43″ welcome touchscreens planned for the Level 1 and Level 2 entrances of Davidson College's George Lawrence Abernethy Library. It shows the home screen, room booking, staff directory, events, floor maps and 3D turn-by-turn directions.

This is a design prototype for sharing ideas. It is not the finished kiosk and not an official library website. When the design is settled, it will be published through Choreo.

## What it does

- **Maps:** floor maps traced from the construction drawings. Filter by study rooms, classrooms, key spaces, services or offices, and tap a place to see it.
- **Directions:** pick a place and the screen draws the route in 3D from where you're standing, then lists the turns ("Turn right and walk about 50 feet, past the central stair on your left"). Routes keep to right angles and stay at least 3 feet off walls. To change floors, choose **Elevator** (step-free) or **Stairs** (the central stair).
- **Two kiosks:** switch between the Level 1 and Level 2 kiosk at the top of the page, or add `?kiosk=1` to the link. The 3D map turns to face the way you're facing at each kiosk.
- **Shareable directions:** each route has its own link, such as `#/directions/3-330` for the Reading Room.
- **Tour:** plays a series of routes on its own, the way an idle kiosk might.
- **Auto-reset:** after 60 seconds without a touch, a 15-second countdown returns the kiosk to Home.

## What's real and what's a sample

| Content | Source |
|---|---|
| Floor maps, room names and numbers, routes | Construction-document floor plans |
| Library events | Real programs from the library's LibCal calendar, placed into an opening-week sample |
| CTL and Level 4 events, hours, room availability, the date | Samples to show the layout |
| Kiosk positions and facing, Connections Desk location | Best guesses, to be confirmed by the library |

Doors aren't in the drawings, so a route ends at the nearest open edge of the room. A few spaces look walled in on the drawings and have no route yet; for those, Maps points people to the Connections Desk.

## Run it locally

It's a static site with no build step. From this folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` straight from the disk won't work, because browsers block JavaScript modules on `file://` pages.)

## How it's put together

- `index.html`, `site.css`, `js/app.js`: the page around the kiosk (top bar, scaling, routing between screens, idle reset, tour).
- `js/screens/`: one module per kiosk screen, generated from the design canvas. Each keeps the canvas shape: a class with `renderVals()` and an `htm` template.
- `assets/`: floor plates for the 3D view, floor maps, QR codes, logos and fonts.
- `js/lib/`: [Preact](https://preactjs.com) 10.24.3 (MIT) and [htm](https://github.com/developit/htm) 3.1.1 (Apache-2.0), served from the site itself.
- Fonts: Inter and Libre Caslon Text (SIL Open Font License), served from the site itself.

## Feedback

JD Mills, Technology & Innovation, jdmills@davidson.edu.
