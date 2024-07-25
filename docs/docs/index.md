# Home

![Deployment status](https://github.com/Laurensdewachter/WINAK/actions/workflows/deploy.yaml/badge.svg)
![Test status](https://github.com/Laurensdewachter/WINAK/actions/workflows/tests.yaml/badge.svg)

## Overview
Dit project bevat alle services die samen de WINAK website vormen. Deze services zijn: de backend server, de frontend client, de Neon en de Tuyaux.
Deze documentatie is voornamelijk bedoeld voor praesidiumleden van WINAK die de website willen onderhouden of updaten.

## Architecture
#### Server
De server is verantwoordelijk voor alle backend-functionaliteit en is de enigste service die rechtstreeks met de database communiceert.

Het gebruikt het [Django Rest Framework](https://www.django-rest-framework.org/){target=_blank} voor Python en gebruitk meerdere van haar pre-provided apps. Dependencies worden beheerd met [Poetry](https://python-poetry.org/){target=_blank}.

#### Database
Voor de database wordt [Postgresql](https://www.postgresql.org/){target=_blank} gebruikt. Alle tables worden gemanaged door Django en haar migration tool.

#### Client
De frontend is geschreven in [Typescript](https://www.typescriptlang.org/){target=_blank} en is gebouwd op het [Vite Framework](https://vitejs.dev/){target=_blank} met
[React](https://react.dev/){target=_blank} en [Bootstrap](https://react-bootstrap.netlify.app/){target=_blank}.

#### Tuyaux


#### Neon
