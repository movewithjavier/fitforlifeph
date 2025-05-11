from PIL import Image, ImageDraw, ImageFont
import os

def create_logo():
    # Create a new image with a transparent background
    width = 240
    height = 60
    image = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    
    # Colors
    blue = '#3B82F6'  # A nice modern blue
    orange = '#F59E0B'  # Accent color for the dot
    
    # Add text
    try:
        font = ImageFont.truetype("Arial Bold.ttf", 32)
    except:
        try:
            font = ImageFont.truetype("Arial.ttf", 32)
        except:
            font = ImageFont.load_default()
    
    # Draw "FitFor" in blue
    text1 = "FitFor"
    text2 = "Life"
    text3 = ".ph"
    
    # Calculate text sizes
    text1_bbox = draw.textbbox((0, 0), text1, font=font)
    text1_width = text1_bbox[2] - text1_bbox[0]
    text1_height = text1_bbox[3] - text1_bbox[1]
    
    text2_bbox = draw.textbbox((0, 0), text2, font=font)
    text2_width = text2_bbox[2] - text2_bbox[0]
    
    text3_bbox = draw.textbbox((0, 0), text3, font=font)
    text3_width = text3_bbox[2] - text3_bbox[0]
    
    # Calculate positions
    x1 = 10
    y = (height - text1_height) / 2
    
    # Draw each part
    draw.text((x1, y), text1, font=font, fill=blue)
    draw.text((x1 + text1_width, y), text2, font=font, fill=blue)
    
    # Draw .ph in a smaller size
    small_font = None
    try:
        small_font = ImageFont.truetype("Arial.ttf", 24)
    except:
        small_font = font
        
    draw.text((x1 + text1_width + text2_width + 2, y + 8), text3, font=small_font, fill=orange)
    
    # Add a dot accent
    dot_radius = 4
    dot_x = x1 + text1_width + text2_width + text3_width + 15
    dot_y = y + text1_height/2
    draw.ellipse([dot_x - dot_radius, dot_y - dot_radius, 
                  dot_x + dot_radius, dot_y + dot_radius], 
                 fill=orange)
    
    # Save the image
    os.makedirs('assets/images/logo', exist_ok=True)
    image.save('assets/images/logo/logo.png', 'PNG')

def create_favicon():
    # Create a new image with a transparent background
    size = 32
    image = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    
    # Colors
    blue = '#3B82F6'  # Modern blue
    orange = '#F59E0B'  # Accent color
    
    # Draw a circle
    margin = 2
    draw.ellipse([margin, margin, size-margin, size-margin], fill=blue)
    
    # Add text
    try:
        font = ImageFont.truetype("Arial Bold.ttf", 18)
    except:
        try:
            font = ImageFont.truetype("Arial.ttf", 18)
        except:
            font = ImageFont.load_default()
    
    text = "F"
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (size - text_width) / 2
    y = (size - text_height) / 2 - 1
    
    # Draw text in white
    draw.text((x, y), text, font=font, fill='white')
    
    # Add a small orange dot
    dot_radius = 2
    draw.ellipse([size-8, size-8, size-4, size-4], fill=orange)
    
    # Save the image
    os.makedirs('assets/images/favicon', exist_ok=True)
    image.save('assets/images/favicon/favicon.png', 'PNG')

if __name__ == '__main__':
    create_logo()
    create_favicon()
    print("Logo and favicon generated successfully!") 