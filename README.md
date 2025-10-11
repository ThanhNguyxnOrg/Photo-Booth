# SnapStrip Studio - Free Online Photo Booth 📸

## 🎉 [**TRY IT NOW - LIVE DEMO**](https://thanhnguyn.github.io/Photo-Booth/)

**SnapStrip Studio** là ứng dụng photo booth trực tuyến hoàn toàn miễn phí. Tạo photo strips với 12 creative templates chỉ bằng vài click!

---

## ✨ Sử dụng ngay - Không cần cài đặt!

### 🌐 Truy cập trực tiếp tại:
**👉 [https://thanhnguyn.github.io/Photo-Booth/](https://thanhnguyn.github.io/Photo-Booth/)**

### 📱 Hướng dẫn sử dụng (5 bước đơn giản):

1. **Truy cập website** ở link trên
2. **Click START** ở trang chủ
3. **Chọn Layout** - Bạn muốn bao nhiêu poses? (2, 3, 4, hoặc 6 ảnh)
4. **Chọn Template** - 12 concepts sáng tạo để lựa chọn:
   - 📰 Newspaper, 📸 Magazine, 💥 Comic
   - 📷 Polaroid, 🎬 Movie, ⚡ Neon
   - Và nhiều hơn nữa...
5. **Chọn cách tạo ảnh**:
   - **📷 Use Camera** - Chụp trực tiếp từ webcam (cần cho phép camera)
   - **📤 Upload Photos** - Tải ảnh có sẵn từ máy tính/điện thoại

**🎊 Xong! Download photo strip của bạn!**

---

## ⭐ Tính năng nổi bật

- 🎭 **12 Creative Templates** - Newspaper, Magazine, Comic, Polaroid, Passport, Movie, Vintage, Neon, Scrapbook, Minimalist, Instagram, Classic
- 📷 **2 Photo Sources** - Chụp từ camera HOẶC upload ảnh có sẵn
- 🎨 **6 Photo Filters** - None, B&W, Sepia, Vintage, Cool, Warm
- ⏱️ **Auto Countdown** - Đếm ngược 3-2-1 khi chụp
- 📥 **Download & Share** - Tải xuống JPG hoặc chia sẻ ngay lên social media
- 📱 **100% Responsive** - Hoạt động trên máy tính, tablet, điện thoại
- 🔒 **Privacy First** - Mọi xử lý trong browser, KHÔNG upload lên server
- 🌐 **No Installation** - Chạy trực tiếp trên web, không cần download gì

---

## 🎭 12 Creative Templates

| Template | Mô tả | Style |
|----------|-------|-------|
| 📰 **Newspaper** | "THE DAILY SNAP" | Breaking news style |
| 📸 **Magazine** | VOGUE-style cover | Fashion & elegant |
| 💥 **Comic Book** | BOOM! POW! | Superhero vibes |
| 📷 **Polaroid** | Classic instant photo | Vintage white frame |
| 🛂 **Passport** | Official ID photo | Professional |
| 🎬 **Movie Poster** | Hollywood blockbuster | Cinematic |
| ✨ **Vintage** | Retro memories | Sepia & classic |
| ⚡ **Neon** | Electric glow | Futuristic |
| 📌 **Scrapbook** | Crafty & fun | Colorful accents |
| ◻️ **Minimalist** | Less is more | Clean & simple |
| 📱 **Instagram** | Social media ready | Gradient frame |
| **Classic** | Traditional | Standard booth |

---

## 🎨 6 Photo Filters

- **None** - Ảnh gốc không filter
- **B&W** - Black & White (grayscale)
- **Sepia** - Vintage sepia tone
- **Vintage** - Retro effect với contrast cao
- **Cool** - Blue/cyan tones
- **Warm** - Orange/pink tones

Tất cả filters có **real-time preview** trước khi chụp/upload!

---

## 💡 Use Cases - Dùng khi nào?

- 🎉 **Sự kiện/Tiệc** - Tạo photo booth cho party
- 💑 **Wedding** - Photo strips cho khách mời
- 🎓 **Graduation** - Kỷ niệm tốt nghiệp
- 🎂 **Birthday** - Sinh nhật vui vẻ
- 👨‍👩‍👧‍👦 **Family Reunion** - Họp mặt gia đình
- 📸 **Personal Fun** - Chụp ảnh vui với bạn bè
- 🎨 **Creative Projects** - Dự án sáng tạo cá nhân

---

## 📁 Cấu trúc dự án

```
docs/
├── index.html              # Trang chủ
├── layout.html             # Chọn layout (2-6 poses)
├── templates.html          # Chọn template (12 options)
├── camera.html             # Photo booth chính
├── faq.html                # Câu hỏi thường gặp
├── privacy-policy.html     # Chính sách bảo mật
└── contact.html            # Liên hệ
```

---

## 🎯 Công nghệ

- **HTML5** - Semantic markup, Canvas API
- **Tailwind CSS** - Modern styling via CDN
- **Vanilla JavaScript** - No frameworks needed
- **WebRTC API** - Camera access
- **Canvas API** - Image processing
- **Web Share API** - Social sharing

---

## ⚠️ Yêu cầu

### ✅ Browser Support:
- Chrome 53+ ✅
- Firefox 36+ ✅
- Safari 11+ ✅
- Edge 12+ ✅

### 📷 Camera Mode:
- Camera/webcam
- HTTPS connection (GitHub Pages có sẵn ✅)
- Cho phép camera access khi browser hỏi

### 📤 Upload Mode:
- Không cần camera
- Chỉ cần chọn ảnh từ máy
- Hoạt động trên mọi device

---

## 🚀 Development & Deployment

### Local Development:

**Option 1: Direct Open**
```bash
cd docs
# Double click index.html
```

**Option 2: Live Server (VS Code)**
```bash
# Install Live Server extension
# Right-click index.html → Open with Live Server
```

**Option 3: Python HTTP Server**
```bash
cd docs
python -m http.server 8000
# Open http://localhost:8000
```

### Deploy to GitHub Pages:

Xem chi tiết trong [DEPLOYMENT.md](DEPLOYMENT.md)

**Quick steps:**
1. Push code to GitHub
2. Settings → Pages
3. Source: `main` branch, `/docs` folder
4. Save → Wait 2 minutes
5. Access at `https://YOUR-USERNAME.github.io/Photo-Booth/`

---

## 📝 FAQs

**Q: Có mất phí không?**  
A: Hoàn toàn miễn phí! 100% free, no hidden costs.

**Q: Ảnh của tôi có được upload lên server không?**  
A: KHÔNG! Mọi xử lý diễn ra trong browser của bạn. Privacy first!

**Q: Tôi không có webcam, có dùng được không?**  
A: Có! Chọn "Upload Photos" thay vì "Use Camera".

**Q: Hoạt động trên điện thoại không?**  
A: Có! Website responsive, chạy trên mọi thiết bị.

**Q: Có thể in photo strips không?**  
A: Có! Download về dạng JPG và in như bình thường.

**Q: Làm sao để chia sẻ?**  
A: Click nút Share hoặc download về và post lên social media.

---

## 🌟 Future Features

- [ ] Custom template builder
- [ ] More filters & effects
- [ ] Stickers & text overlay
- [ ] Background removal
- [ ] Video recording mode
- [ ] GIF export
- [ ] Collage maker
- [ ] Print directly
- [ ] Template marketplace

---

## 👨‍💻 Author & Contact

**SnapStrip Studio**  
A modern photo booth web application

📧 Email: thanhnguyentuan2007@gmail.com  
🐙 GitHub: [ThanhNguyxn](https://github.com/ThanhNguyxn)  
🌐 Website: [Live Demo](https://thanhnguyn.github.io/Photo-Booth/)

Built with ❤️ for photography lovers

---

## 📄 License

© 2025 SnapStrip Studio. All Rights Reserved.

---

## 🎊 Ready to create amazing photo strips?

### 👉 [**START NOW - CLICK HERE**](https://thanhnguyn.github.io/Photo-Booth/) 👈

**Share this with friends:**
- 📱 Copy link: `https://thanhnguyn.github.io/Photo-Booth/`
- 🌟 Star this repo if you like it!
- 🔗 Share on social media

---

**Made with 📸 passion and ☕ coffee**
