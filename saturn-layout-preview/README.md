# Saturn continuous exploration preview
The formal galaxy-preview application has not been edited. Standalone preview at /saturn-layout-preview/.

The same Three.js sphere and camera are retained throughout wheel, pinch and slider zoom. Zoom is exponential and eased, not a switch to a photograph. Drag rotates the observation model, with reduced movement at close range. Taps raycast the planet/rings/interior layers/moons and open a compact contextual card. All selected-object knowledge is displayed immediately in a scrollable compact card.

The preview now retains a single spatial scene. No bottom category buttons remain. On-scene labels identify Saturn, its rings and two satellite models. Taps smoothly approach the selected object and show its knowledge; scroll/pinch/slider then control approach. North pole can be revealed by dragging the same planet. Related explanations expose an optional continuous cutaway slider and a common-time Earth/Saturn comparison in the same scene.

Scientific boundaries:
- Saturn base texture: Solar System Scope CC BY 4.0, https://www.solarsystemscope.com/textures/.
- Close-range cloud flow/detail is an illustrative shader with a mirrored, warped PIA21888 texture, not spatially registered real imagery or live weather. It is visibly labelled. The sphere zoom stops above the model cloud tops. This is not a journey into measured real terrain.
- Real observation is available separately: PIA21888, Cassini natural-color composite, Aug.31 2017, about 6 km/pixel, NASA/JPL-Caltech/Space Science Institute. https://www.nasa.gov/image-article/dreamy-swirls-saturn/ . Historic photo, not georeferenced onto the model, resolution limited.
- Ring stripes are connected annuli and schematic gap; no individual particle orbit simulation.
- North pole outline, interior colors/boundaries, satellite surfaces/plumes are explicitly schematic. Moon size/position is not to scale. The interior disc depicts material state categories, not exact boundaries or measured layer radii.
- Earth/Saturn equatorial diameter ratio is approximated 1:9. Rotation comparison uses 24 and 10.7 hours. No orbit is presented in the time comparison. Other rotation is accelerated decorative motion.
- Knowledge references link to NASA facts, Titan, Enceladus, Cassini and the observation caption. No live satellite count asserted.

## Spatial discovery revision v4
- Removed all related-topic buttons from the information card; no category navigation was added.
- Scale-aware anchored labels for the ring, Cassini Division, schematic particles and orbit motion. Selecting a detail leaves depth unchanged. Ring focus follows the same local point while dragging the planet.
- Particle points emerge continuously as ring opacity fades. At closer range their circular orbital angular speeds vary as r^(-3/2); time is accelerated. Particle size, spacing and occupancy are illustrative, with no collision, perturbation or true-position reconstruction. The population does not represent all actual ring particles.
- Selected Cassini Division gets a scene-aligned translucent highlight; labels retain plain names and only the selected location is highlighted. Guidance and connection text explain the relationship to the previous ring observation.
- The information card keeps its chosen topic while zoom changes. No automatic replacement of the current explanation.
- My Discoveries retains short connected conclusions grouped by subject, and restores the saved depth, orientation and focus in the same scene. Records persist in localStorage on this browser; they do not measure learning or sync to other devices.
- Playwright check.cjs passed at 1440x960 and touch-enabled 390x844: ring/detail visibility, no click zoom, contextual links removed, particles, discovery restoration and persistence, wheel and pinch, stable explanation, real-photo access, no page/console/asset errors. Screenshots visually inspected for overview, ring gap, particles, orbit motion and discovery recall.

User refinement: removed all checkmarks and visited styling from scene labels and recall entries. Discovery persistence remains; it does not display a completion mark.

## Click approach revision v6
User clarified that clicks should work like map selection: display the selected object's knowledge and smoothly focus/approach it, then allow manual zoom. Spatial labels and mesh taps now share chooseTopic(). Each topic uses an appropriate minimum zoom; ring details choose their own local focus anchors. Depth, centre and actual camera distance are separately eased. Existing closer views are generally preserved; interior overview uses a shallower view to expose its cross-section. Manual wheel, pinch or slider replaces the zoom target and no scripted tour resumes.
Off-screen visible detail markers clamp to screen edges with a direction arrow, allowing the next region to be selected without a category menu. Discovery recall restores recorded zoom/angle/anchor through the same continuous camera. Checks cover desktop/touch mobile ring details, knowledge continuity, saved recall, gestures, real photo, and moon approach followed by manual takeover. No formal galaxy-preview changes.

## Spatial refinement v7 (current behavior)
- Earth comparison markers anchor to the actual Earth model, placed clear of the rings.
- Removed My Discoveries, persisted recall, and More Detail controls. All brief and detailed paragraphs display directly; the compact mobile card scrolls at a maximum height of 31vh. No related-topic menu or completion marks.
- Manually zooming fully out resets the focus smoothly to Saturn and restores its clickable entry, even after ring or moon focus.
- Desktop and touch-mobile Playwright checks cover comparison placement, immediate full knowledge, common-time rotation, manual full zoom-out after ring/moon, restored Saturn click, card height and scrolling, and zero page/console/asset errors.

## Focus and pan revision v8
- Opening a compact card preserves the scene pixel scale rather than refitting the planet into the reduced mobile scene. The projection crops the available view without shrinking the model.
- Cloud clicks focus the selected on-scene point and approach without decreasing zoom. Internal schematic preserves zoom and opens its cross-section directly.
- Single-finger/mouse drag defaults to horizontal and vertical camera pan. The visible drag-mode control switches to model rotation; ring pan offsets remain separate from the moving local ring anchor.
- Desktop labels avoid the information card. Reset restores the overview and centered focus.

## Marker and full-scene revision v10
- Replaced vertical pseudo-element stems with SVG connectors and actual world-anchor endpoints. Ring anchors choose a visible, unoccluded point on the corresponding ring radius. Markers outside the view or behind Saturn are hidden rather than pointing at unrelated visible objects.
- Removed reserved blank space under the canvas; it extends to the viewport bottom. Knowledge remains in its compact floating card. Mobile projection shifts the composition above the card without shrinking the model.

## Knowledge rewrite v11
- Rewrote all 18 entries using direct descriptions, causal explanations and concrete comparisons appropriate for age 10. Removed recurring negative contrast constructions from teaching copy.
- Added connected explanations of ring reflection/thickness/orbits, Cassini Division inner-edge resonance, cloud composition/winds, pressure/material states, mission evidence, Titan methane cycle, and Enceladus ocean/plumes/E ring.
- Model presentation notes use a separate subdued paragraph rather than interrupting the explanation. Short paragraph leads are emphasized without new navigation or expansion controls.
- Reference material verified against NASA Saturn facts, Cassini ring and hexagon science, Titan/Enceladus facts, NASA ring-orbit educational material and the Cassini fact sheet; each card retains its source link.
- Desktop and mobile rendering checked; compact card retains scrolling, markers and selection verified with check-markers.cjs.
