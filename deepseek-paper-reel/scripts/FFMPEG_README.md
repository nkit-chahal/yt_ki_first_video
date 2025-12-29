# FFmpeg Automation for DeepSeek Reel

## 📋 Prerequisites

1. **FFmpeg installed** and in PATH
   ```bash
   # Test if installed:
   ffmpeg -version
   ```
   If not installed, download from: https://ffmpeg.org/download.html

2. **Node.js packages:**
   ```bash
   npm install puppeteer
   ```

3. **Dev server running:**
   ```bash
   npm run dev
   ```
   (Should be accessible at `http://localhost:5175`)

---

## 🚀 How to Use

### Step 1: Install Dependencies
```bash
cd C:\Users\Pc\Desktop\prerna\deepseek-paper-reel
npm install puppeteer
```

### Step 2: Start Dev Server (in separate terminal)
```bash
npm run dev
```

### Step 3: Run the Recording Script
```bash
node scripts/record-ffmpeg.js
```

---

## 🎬 What It Does

1. ✅ Launches Puppeteer browser (visible)
2. ✅ Opens your reel at `localhost:5175`
3. ✅ Positions window at specific coordinates
4. ✅ Starts FFmpeg screen capture at that exact position
5. ✅ Clicks the Play button
6. ✅ Records for 70 seconds
7. ✅ Stops FFmpeg gracefully
8. ✅ Saves video to `out/deepseek-reel-ffmpeg.mp4`

---

## 📊 Comparison: Remotion vs FFmpeg

| Feature | Remotion | FFmpeg Automation |
|---------|----------|-------------------|
| **Setup** | Medium (install deps) | Easy (just FFmpeg) |
| **Quality** | Perfect (renders components) | Screen recording (lossy) |
| **Speed** | ~2 minutes | Real-time (70s) |
| **Reliability** | 100% | 95% (depends on screen) |
| **Reproducibility** | Perfect | Good (window position matters) |
| **SFX Support** | Yes (integrated) | Yes (records browser audio) |

---

## 🐛 Troubleshooting

### Issue: "ffmpeg not found"
**Fix:** 
1. Download FFmpeg: https://www.gyan.dev/ffmpeg/builds/
2. Extract to `C:\ffmpeg`
3. Add to PATH: `C:\ffmpeg\bin`
4. Restart terminal

### Issue: Browser window not positioned correctly
**Fix:** Edit `record-ffmpeg.js`:
```javascript
args: [
  '--window-position=100,100', // Change these coordinates
]
```

### Issue: Recording captures wrong area
**Fix:** The script auto-detects window position. If it fails, manually set:
```javascript
const bounds = {
  left: 100,
  top: 100,
  width: 1080,
  height: 1920
};
```

---

## 💡 Pro Tips

### For Better Quality
Add these FFmpeg args:
```javascript
'-preset', 'slow',        // Better compression
'-crf', '18',            // Higher quality (18-23 range)
```

### For Faster Recording
```javascript
'-preset', 'ultrafast',  // Speed over quality
'-crf', '28',           // Lower quality, smaller file
```

### To Include System Audio (Windows)
```javascript
'-f', 'dshow',
'-i', 'audio="Stereo Mix"',  // Enable in Sound settings
```

---

## 🎯 When to Use Which Method

**Use Remotion when:**
- Creating template for weekly series
- Need perfect quality/reproducibility
- Batch rendering multiple videos
- Automating for CI/CD

**Use FFmpeg when:**
- Quick one-off recording
- Already have dev server running
- Want to see it play in real-time
- Testing before final render
