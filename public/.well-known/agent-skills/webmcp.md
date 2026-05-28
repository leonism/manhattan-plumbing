# WebMCP Browser Tools Skill

This site supports the browser-based WebMCP API to expose active tools directly to AI agents.

## Supported Tools

### 1. `search_articles`
- **Description**: Search news articles, guides, and updates.
- **Arguments**:
  - `query` (string, required): Term or topic to look up.

### 2. `list_services`
- **Description**: Retrieve a list of plumbing services and specialties.
- **Arguments**: None.

### 3. `get_plumbing_quote`
- **Description**: Submit a request for a custom service quote.
- **Arguments**:
  - `name` (string, required): Full name.
  - `email` (string, required): Email address.
  - `service` (string, enum, required): Service category (`emergency`, `drain`, `water-heater`, `remodeling`, `pipe`, `fixture`).
  - `message` (string, required): Issue description.
