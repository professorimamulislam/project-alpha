# Author Photo Setup Guide

## 📸 How to Add Your Photo to Blog Posts

All blog post pages now use the same profile photo from your main profile card!

### Image Requirements

**File Name:** `profile-image.jpg` (Same as main profile card)

**Recommended Specifications:**
- **Format:** JPG, PNG, or WebP
- **Size:** 400x400 pixels (minimum)
- **Aspect Ratio:** 1:1 (Square)
- **File Size:** Under 200KB for fast loading
- **Quality:** High resolution, professional photo

### Image Placement

Your photo is already configured! The same photo from your main profile card will appear in all blog posts:
```
d:\Project Alpha\
├── index.html (uses profile-image.jpg)
├── profile-image.jpg  ← Your main profile photo
├── blog-seo-ai-future.html (uses profile-image.jpg)
├── blog-web-security.html (uses profile-image.jpg)
└── ... (all blog posts use the same photo)
```

### Photo Tips

1. **Professional Look:**
   - Clear, well-lit headshot
   - Solid or simple background
   - Professional attire
   - Friendly expression

2. **Composition:**
   - Face should be centered
   - Head and shoulders visible
   - Good contrast with background
   - Sharp focus on face

3. **Technical:**
   - High resolution (at least 400x400px)
   - Square crop
   - Compress to reduce file size
   - Use tools like TinyPNG or ImageOptim

### Image Optimization

Use these free tools to optimize your photo:

- **TinyPNG** (https://tinypng.com/)
- **Squoosh** (https://squoosh.app/)
- **ImageOptim** (Mac only)

### Fallback

If no photo is found, a beautiful gradient icon placeholder will be shown automatically. No broken images!

### Current Implementation

The photo appears in:
- ✅ Blog post 1: The Future of SEO
- ✅ Blog post 2: Building Secure Web Applications
- ✅ Blog post 3: Social Media Security
- ✅ Blog post 4: Digital Transformation in Bangladesh
- ✅ Blog post 5: Conversion Rate Optimization

### CSS Styling

Your photo will be displayed with:
- 120px circular avatar
- 4px white border
- Gradient shadow
- Responsive sizing on mobile
- Professional card design

### Mobile Display

On mobile screens (480px and below):
- Avatar size: 100px
- Proportional scaling
- Maintains circular shape
- Still looks professional

### Testing

To test your photo:
1. Ensure `profile-image.jpg` is in the root folder
2. Open index.html - your photo should appear in the profile card
3. Open any blog post page - same photo appears in author section
4. Test on mobile devices for responsive display

### Benefits

✅ **One Photo, Everywhere:** Update once, appears in all locations
✅ **Consistent Branding:** Same photo across main page and blog posts
✅ **Easy Maintenance:** No need to update multiple files
✅ **Professional Look:** Unified appearance throughout website

### Support

If you have issues:
- Check file name is exactly `profile-image.jpg`
- Verify file is in the root directory
- Ensure image is square (1:1 ratio)
- Try refreshing browser cache (Ctrl+F5)

---

**Your professional photo will make your blog posts more personal and trustworthy!** 📷✨
