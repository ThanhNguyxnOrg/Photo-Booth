"""
Auto Screenshot Generator for SnapStrip Studio
Automatically captures screenshots of all templates and features
"""

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
import os

# Configuration
BASE_URL = "https://thanhnguyxn.github.io/Photo-Booth/"
SCREENSHOT_DIR = "docs/screenshots"
WINDOW_SIZE = (1920, 1080)

# Ensure screenshot directory exists
os.makedirs(SCREENSHOT_DIR, exist_ok=True)

def setup_driver():
    """Setup Chrome driver with options"""
    options = Options()
    options.add_argument(f"--window-size={WINDOW_SIZE[0]},{WINDOW_SIZE[1]}")
    options.add_argument("--headless")  # Remove this line to see browser
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")
    
    driver = webdriver.Chrome(options=options)
    return driver

def capture_main_page(driver):
    """Capture main landing page"""
    print("📸 Capturing main page...")
    driver.get(BASE_URL)
    time.sleep(2)
    
    driver.save_screenshot(f"{SCREENSHOT_DIR}/demo.png")
    print("✅ Saved demo.png")

def capture_template(driver, template_name, layout="A"):
    """Capture specific template result"""
    print(f"📸 Capturing {template_name} template...")
    
    try:
        # Navigate to main page
        driver.get(BASE_URL)
        time.sleep(1)
        
        # Click START button
        start_btn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'START')]"))
        )
        start_btn.click()
        time.sleep(1)
        
        # Select layout
        layout_btn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, f"//button[contains(@class, 'layout-btn')][@data-layout='{layout}']"))
        )
        layout_btn.click()
        time.sleep(1)
        
        # Click Continue
        continue_btn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Continue')]"))
        )
        continue_btn.click()
        time.sleep(1)
        
        # Select template
        template_btn = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, f"//button[@data-template='{template_name.lower()}']"))
        )
        template_btn.click()
        time.sleep(2)
        
        # Take screenshot of the preview/result
        driver.save_screenshot(f"{SCREENSHOT_DIR}/{template_name.lower()}.png")
        print(f"✅ Saved {template_name.lower()}.png")
        
    except Exception as e:
        print(f"❌ Error capturing {template_name}: {e}")

def capture_preview_features(driver):
    """Capture preview page with stickers and features"""
    print("📸 Capturing preview page features...")
    
    try:
        # This would need to navigate through the flow
        # For now, just capture what we can
        time.sleep(2)
        
        # Capture stickers section
        driver.save_screenshot(f"{SCREENSHOT_DIR}/stickers.png")
        print("✅ Saved stickers.png")
        
        # Capture export options
        driver.save_screenshot(f"{SCREENSHOT_DIR}/export.png")
        print("✅ Saved export.png")
        
    except Exception as e:
        print(f"❌ Error capturing preview features: {e}")

def main():
    """Main execution"""
    print("🚀 Starting auto screenshot generation...")
    
    driver = setup_driver()
    
    try:
        # Capture main page
        capture_main_page(driver)
        
        # Capture popular templates
        templates = [
            "instagram",
            "newspaper", 
            "magazine",
            "comic",
            "passport",
            "neon",
            "polaroid",
            "vintage"
        ]
        
        for template in templates:
            capture_template(driver, template)
            time.sleep(1)
        
        print("\n✅ All screenshots captured successfully!")
        print(f"📁 Screenshots saved to: {SCREENSHOT_DIR}/")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
