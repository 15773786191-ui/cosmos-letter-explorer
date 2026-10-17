# Sources and asset credits

Planet explanations link to NASA Science facts for each body. Solar explanations link to NASA Sun Facts. Regional Earth articles carry individual source links.

Planet textures: Solar System Scope / INOVE, https://www.solarsystemscope.com/textures/, CC BY 4.0 https://creativecommons.org/licenses/by/4.0/. Texture maps are based on NASA data, with enhanced colours and some unmapped areas filled by the publisher. Downloaded 2K maps are display illustrations, not raw scientific measurements. Local filenames map to Mercury, Venus Atmosphere, Mars, Jupiter, Saturn, Uranus, Neptune and Moon. Saturn rings are drawn as schematic geometry.

Earth overview: NASA Blue Marble, https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/land_ocean_ice_2048.png.

Three.js r160: MIT, source and license retained in stellar/vendor/three.module.js.
CesiumJS 1.145.0: Apache 2.0, license retained in vendor/cesium/LICENSE.md. Esri World Imagery and WorldElevation3D remain external services with on-screen attribution.

Narration: pre-generated synthetic Chinese narration; written scripts saved in audio-planets/script.json and audio-depth/script.json. Audio playback requires a user gesture on browsers that block autoplay.

Map hierarchy: Natural Earth 10m Admin 1 states/provinces and populated places, public domain. Region polygons are simplified reference boundaries; city entries are reference points, not municipal boundaries. Country bundles load locally as needed. Hunan and Changsha editorial content links to Hunan government and Department of Culture and Tourism sources in the knowledge panel.

Mars spatial exploration (default Mars entry; `preview=mars` opens it directly):

- `mars-assets/jezero-orbit.jpg`: NASA/JPL-Caltech/MSSS/JHU-APL, PIA23239, MRO CTX and CRISM combined image. Colors are combined instrument information, not natural visible colors. Source: https://science.nasa.gov/resource/jezero-crater-mars-2020s-landing-site/
- `mars-assets/kodiak.jpg`: NASA/JPL-Caltech/ASU/MSSS, PIA24802, enhanced-color Mastcam-Z image, 2021-04-18. Source: https://science.nasa.gov/photojournal/perseverance-captures-image-of-kodiak/
- Water and particle canvas is an authored qualitative teaching model, not measured Martian flow, a fluid solver, or a reconstruction of Jezero. Observation rectangle/lines are teaching aids, not measured geological boundaries.

- Global Mars is an illustrated spherical texture, not a terrain mesh. Jezero links to a discrete orbital image and a discrete rover image; these layers do not provide continuous worldwide high-resolution terrain. Other markers are approximate regional reference positions. Jezero landing coordinates reference https://doi.org/10.1126/sciadv.abo4856.

Detailed street-level places: OpenStreetMap contributors, ODbL https://www.openstreetmap.org/copyright. Requests use the public VK Maps Overpass endpoint (https://maps.mail.ru/osm/tools/overpass/api/interpreter); loaded records include links to original OSM objects. Coverage and freshness vary; building anchors are not entrances or surveyed parcel boundaries. Existing four curated Changsha anchors have independent Hunan government references in `earth-places.js`.
Galaxy scale notes link to NASA Space Place, NASA Galaxies and NASA Solar System Facts. Camera zoom is illustrative rather than a physical galaxy-to-planet distance conversion. Planet topics switch with model zoom; satellites and interior processes are explanatory topics, not an actual surface-zoom reconstruction.

Map cleanup: nearby screen markers are grouped without inferring building boundaries. Public POI requests may time out; no commercial key has been configured. `checks/map-clean.cjs` and `checks/scale-and-places.cjs` use deterministic test records only to verify interaction, not live coverage.

Viewport coverage: country labels appear at continental viewing heights; region and city bundles are loaded for countries intersecting the visible rectangle, including across borders. The solar-system action zooms the schematic overview without entering Earth. Cached local engine and geographic files are reused within cache version v8; external satellite and terrain availability is unchanged.

Neptune lab: physical diameter comparison uses approximate equatorial diameters Neptune 49,528 km and Earth 12,756 km; the shared accelerated clock uses Neptune ~16 hours and Earth ~23.934 hours for a sidereal turn. Sources: https://science.nasa.gov/neptune/neptune-facts/ and https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html . Cloud tracers are qualitative teaching marks, not measured velocities or contemporaneous weather. Distance diagram uses ~1 AU and ~30 AU; point diameters are symbolic. Planet skin remains an illustrative Solar System Scope texture rather than a calibrated natural-color or live observation.

Neptune surface observation v12:
- neptune-assets/full-disk.jpg: NASA/JPL, Voyager 2, PIA00046. Full-disk sequence acquired 1989-08-16/17; enhanced processing sacrifices color fidelity. https://science.nasa.gov/photojournal/neptune-full-disk/
- neptune-assets/dark-spot.jpg: NASA/JPL, Voyager 2, PIA00052. Acquired ~45 hours before closest approach, distance ~2.8 million km; smallest visible structure ~50 km, clear/green-filter composite. https://science.nasa.gov/photojournal/neptune-great-dark-spot-in-high-resolution/
- Transition first dissolves the illustrative globe into a historical full-disk photo, zooms its Great Dark Spot area, then blends into a different observation of the same feature. Image alignment is editorial, not a georeferenced globe texture, photogrammetric reconstruction, or continuous flight footage. Drag/zoom remains within the historical image. The Great Dark Spot disappeared after these observations; this is not current weather.


## Solar-system motion (2026-10-06)
Mean orbital and sidereal rotation periods: NASA NSSDC individual planetary fact sheets, https://nssdc.gsfc.nasa.gov/planetary/factsheet/.
The homepage uses one accelerated simulated clock, circular coplanar orbits, illustrative initial phases, and compressed orbital spacing. It is not a live ephemeris or a true-scale distance/diameter model. The overview clock stops during close-up exploration; close-up educational animations use their own controls.

Earth natural view v20: earth-natural.jpg is NASA Blue Marble Next Generation June 2004 with land topography (no ocean bathymetric relief), original 5400x2700 JPEG: https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-topography/june/world.topo.200406.3x5400x2700.jpg . earth-clouds.jpg is the unmodified historical NASA Blue Marble cloud composite: https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57747/cloud_combined_2048.jpg . Cloud luminance is used as material alpha on an illustrative 10 km shell; this is not live weather or a co-temporal photograph. Clouds and the natural view blend out between camera heights of 6000 km and 2000 km. earth-seabed.jpg uses the separate NASA topography and bathymetry product: https://assets.science.nasa.gov/content/dam/science/esd/eo/images/bmng/bmng-topography-bathymetry/june/world.topo.bathy.200406.3x5400x2700.jpg . It is available via the explicitly labelled ocean-floor mode. Satellite/terrain services and POI coverage limitations are unchanged.

Earth continuity v21: the homepage/approach sphere and Cesium overview share earth-natural.jpg and earth-clouds.jpg, with the same cloud opacity curve. Re-entering Earth resets the optional seabed view to natural appearance. The satellite layer begins loading before its reveal; opacity advances toward the distance target only while the visible globe tile queue is settled. This reduces patchwise color changes during asynchronous tile loading but does not guarantee external imagery availability or identical seasonal colors in the separate satellite dataset.


Appearance consistency v22 (2026-10-06): homepage and close-up share the same neutral, camera-relative teaching illumination shader. Each palette uses an independent shader-program key, including untinted Earth comparisons. Neptune and Uranus use pale blue-green appearance estimates, informed by https://www.ox.ac.uk/news/2024-01-05-new-images-reveal-what-neptune-and-uranus-really-look-0 ; these palettes preserve texture luminance but are not calibrated true-color photographs. Venus uses a subdued cream cloud palette, also an appearance estimate. Sun visible-light white disk and procedural granulation are teaching schematics: https://spaceplace.nasa.gov/coloring-pages/en/Sun.pdf .
All Earth comparison models use the same NASA earth-natural.jpg surface asset as the homepage; comparison thumbnails omit the cloud shell. Saturn close-up uses its original attributed planet bitmap without repeated swirls.jpg detail; local cloud detail must be inspected through the linked actual observations. General terrain/weather topics are explicitly marked as theme entries and have no geographic leader lines.
Per-world interior diagrams now distinguish rocky cores, the Moon's small core, hydrogen-rich giant interiors, high-pressure ice-giant materials and solar energy-transfer zones. Layer radii and colors are qualitative, not measured thicknesses; sharp illustrated boundaries do not represent all physical gradients. References remain each world's NASA facts link. Shared program compilation and entry/zoom/layer/return interactions are exercised by checks/visual-science.cjs on desktop and mobile.


Continuity v23 (2026-10-06): embedded exploration scenes load invisibly before the camera flight. A same-origin handshake transfers the incoming texture phase and returns the destination model orientation and screen projection. The parent flight matches position and projected globe radius before a 450 ms dissolve; exploration controls fade in once the incoming scene is ready. Return sends the current globe projection to the parent before restoring the galaxy view. This aligns the renderers for a teaching transition, not a physically scaled flight across space. Sun uses the same visible-light white procedural material throughout; warm central galaxy particles fade during approach. Homepage and planetary information cards share a compact title/close row and a final note/source row. Earth source details are placed at the end of the place card and expand above their footer.

Homepage context continuity: a manually selected knowledge topic stays selected as camera scale or angle changes; its topic entry remains available across the galaxy/solar-system context. The card body scrolls independently when needed, preserving the footer source.
