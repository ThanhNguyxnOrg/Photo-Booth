# Auto Screenshot Script

Automatically captures screenshots of SnapStrip Studio templates.

## Prerequisites

1. **Python 3.8+**
2. **Chrome Browser** (latest version)
3. **ChromeDriver** (will be auto-installed)

## Installation

```bash
# Install dependencies
pip install -r requirements.txt
```

## Usage

```bash
# Run the screenshot script
python auto_screenshot.py
```

The script will:
1. Open Chrome in headless mode
2. Navigate through the website
3. Capture screenshots of all templates
4. Save to `docs/screenshots/` folder

## Generated Screenshots

- `demo.png` - Main landing page
- `instagram.png` - Instagram template
- `newspaper.png` - Newspaper template
- `magazine.png` - Magazine template
- `comic.png` - Comic template
- `passport.png` - Passport template
- `neon.png` - Neon template
- `polaroid.png` - Polaroid template
- `vintage.png` - Vintage template
- `stickers.png` - Preview with stickers
- `export.png` - Export options

## Configuration

Edit `auto_screenshot.py` to customize:
- `WINDOW_SIZE` - Browser window resolution
- `templates` list - Which templates to capture
- Remove `--headless` to see browser in action

## Troubleshooting

**Chrome not found:**
```bash
# Install Chrome or update path in script
```

**Permission denied:**
```bash
# Run as administrator or check folder permissions
```

**Screenshots too small:**
```bash
# Increase WINDOW_SIZE in script
WINDOW_SIZE = (2560, 1440)  # 2K resolution
```
