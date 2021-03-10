# CPNT 262: Dynamic Image Gallery

Created and maintained by Jessica Luu

- [Repository](https://github.com/jluu38/cpnt262-a2/)
- [GitHub Page](https://jluu38.github.io/cpnt262-a2)

## Comments

- Renamed some of the required object properties, but they should all be present
- Direct DOM manipulation was used to output all information (except for `id`)
- Re: some things I might get clocked for:
- `Width` and `height` were tricky since the sizes of my images greatly differ, so opted instead to textually display the original image size in a modal
  - (I initially had the original image dimensions displayed with the image credits but felt they weren't being used as image attributes like the assignment asked for)
  - To compensate, the `if/else statement` in the `forEach()` method (line 153 onwards) uses the `height` property of each object to determine how it appears in the modal *(most evident with the Häxan poster)*
  - Chose 700px for modal because it accommodates the ridiculous proportions of the Girl Shy poster & it shouldn't overflow fullscreen windows on an average screen resolution(?)
- But as a result of the above, images are not responsive while opened in the modal (gallery remains responsive and accessible though)
  - However, there is a second scrollbar for the modal should an image overflow (I know it's bad practice)
- In conclusion, everyone who said my images were nothing but trouble for this assignment were right

## Attributions

- [Header, nav bar, and social icons](https://fontawesome.com/license/free) - Font Awesome
- [Letterboxd social icon](https://letterboxd.com/about/brand/) - Letterboxd
- [Montserrat font](https://fonts.google.com/?query=cuti&sidebar.open=true&selection.family=Cutive|Montserrat:wght@100) - sourced from Google Fonts
- [Aktiv Grotesk Extended font](https://fonts.adobe.com/fonts/aktiv-grotesk) - Adobe Fonts
- [Clamp measurement tool](https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/) - Pedro Rodriguez
- [Gallery modal template](https://codepen.io/RileyB/pen/XQyaXy) - Riley B
- All films + corresponding media (ie posters) are in public domain:
  - copyright information and images (*Girl Shy*) sourced from Duke University's [Center for the Study of he Public Domain](https://web.law.duke.edu/cspd/publicdomainday/2020/)
  - copyright information and images (*Greed* and *Au Secours!*) sourced from [University of Oregon](https://expo.uoregon.edu/spotlight/public-domain-day-2020)
  - remaining images sourced from [Wikipedia](  https://en.wikipedia.org/wiki/Wikipedia:Public_domain_image_resources)
    - [Battleship Potemkin](https://commons.wikimedia.org/wiki/File:Vintage_Potemkin.jpg) *
    - [Carmen](https://upload.wikimedia.org/wikipedia/commons/0/01/Theda_Bara_Carmen_poster.jpg)
    - [The Haunted House](https://commons.wikimedia.org/wiki/File:Haunted_house1921.jpg)
    - [Häxan](https://en.wikipedia.org/wiki/H%C3%A4xan#/media/File:Haxan_sv_poster.jpg) *
    - [He Who Gets Slapped](https://commons.wikimedia.org/wiki/File:He_Who_Gets_Slapped.jpg)
    - [Les Vampires](https://commons.wikimedia.org/wiki/File:Lesvampiresposter.jpg)

\* Note: restored editions of these films are copyrighted, however reissues from the country of origin and vintage artwork remains pubilc domain.
