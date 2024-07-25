# Deployment

## Github
Het project wordt automatisch gedeployed door middel van Github Actions wanneer er een merge naar main plaatsvind.

Voor een goede deployement moeten volgende variabelen worden ingesteld in de repository:

| Secret               | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `SERVER_DB_PASSWORD` | Het wachtwoord van de Postgresql database                         |
| `SSH_PRIVATE_KEY`    | Private SSH key van de production server                          |

| Variable             | Description                                                       |
| -------------------- | ----------------------------------------------------------------- |
| `SSH_HOST`           | Hostname van de production server                                 |
| `SSH_USER`           | Username van de production server                                 |

## Manueel
Het project kan ook manueel gedployed worden met:
``` bash
docker compose up -d --build
```
