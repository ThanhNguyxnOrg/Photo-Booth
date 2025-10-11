# SnapStrip Studio - Photo Booth Website

Đây là website **SnapSt5. **Trang FAQ (faq.html)**
   - 10 câu hỏi thường### Option 3: Sử dụng Live Server
1. Cài đặt extension "Live Server" trong VS Code
2. Right-click vào `docs/index.html`
3. Chọn "Open with Live Server"

### Option 4: Sử dụng Python HTTP Server
```bash
cd docs
python -m http.server 8000
```
Sau đó mở browser và truy cập: `http://localhost:8000`Accordion/collapse functionality
   - Smooth animations
   - Link đến trang Contact

6. **Trang Privacy Policy (privacy-policy.html)**dio** - một ứng dụng photo booth trực tuyến miễn phí được xây dựng hoàn toàn bằng HTML, CSS và Tailwind CSS.

## 📁 Cấu trúc thư mục

```
docs/
├── index.html              # Trang chủ
├── layout.html             # Trang chọn layout (2, 3, 4, 6 poses)
├── templates.html          # Trang chọn template/concept ⭐ NEW!
├── camera.html             # Trang photo booth (camera/upload, capture, filters)
├── faq.html                # Trang câu hỏi thường gặp
├── privacy-policy.html     # Trang chính sách bảo mật
└── contact.html            # Trang liên hệ
```
└── contact.html            # Trang liên hệ
```

## 🎨 Tính năng

### ✅ Các trang đã hoàn thành:

1. **Trang chủ (index.html)**
   - Hero section với tiêu đề và mô tả về SnapStrip Studio
   - Photo strip placeholder với 4 frames đầy màu sắc
   - Nút START để bắt đầu trải nghiệm
   - Navigation bar responsive với logo và menu
   - Footer với thông tin bản quyền

2. **Trang Layout (layout.html)**
   - 4 layout options: Layout A (4 poses), B (3 poses), C (2 poses), D (6 poses)
   - Visual representation cho mỗi layout
   - Interactive selection với hover effects
   - Continue button để chuyển đến trang Templates

3. **Trang Templates (templates.html)** ⭐ NEW!
   - **12 Creative Templates** để lựa chọn:
     - 📰 **Newspaper** - Trang báo với heading "THE DAILY SNAP"
     - 📸 **Magazine** - Cover tạp chí thời trang phong cách VOGUE
     - 💥 **Comic Book** - Truyện tranh với hiệu ứng BOOM, POW
     - 📷 **Polaroid** - Instant photo với khung trắng vintage
     - 🛂 **Passport** - ID photo style chính thức
     - 🎬 **Movie Poster** - Poster phim Hollywood
     - ✨ **Vintage** - Retro với border cổ điển
     - ⚡ **Neon** - Hiệu ứng ánh sáng neon điện tử
     - 📌 **Scrapbook** - Sổ tay crafty đầy màu sắc
     - ◻️ **Minimalist** - Tối giản, less is more
     - 📱 **Instagram** - Social media ready
     - **Classic** - Traditional photo booth strip
   - Interactive preview cho mỗi template
   - Smooth transitions và hover effects

4. **Trang Camera/Photo Booth (camera.html)** ⭐ UPDATED!
   - **2 Photo Sources**:
     - 📷 **Use Camera** - Sử dụng webcam/camera của bạn
     - 📤 **Upload Photos** - Tải ảnh có sẵn từ máy tính/điện thoại
   - **WebRTC camera access** - Real-time camera streaming
   - **Multi-file upload** - Upload nhiều ảnh cùng lúc
   - **Countdown timer** - Đếm ngược 3-2-1 trước khi chụp
   - **Auto capture** - Tự động chụp theo số poses đã chọn
   - **6 Filters** - None, B&W, Sepia, Vintage, Cool, Warm
   - **Template rendering** - Apply template đã chọn lên photo strip
   - **Live preview** - Xem trước photo strip
   - **Download** - Tải xuống photo strip dưới dạng JPG với template styling
   - **Share** - Chia sẻ trên social media
   - **Retake** - Chụp/upload lại nếu không hài lòng
   - **Mirror mode** - Hiệu ứng gương cho selfie (chỉ camera mode)

5. **Trang FAQ (faq.html)**
   - 10 câu hỏi thường gặp
   - Accordion/collapse functionality
   - Smooth animations
   - Link đến trang Contact

6. **Trang Privacy Policy (privacy-policy.html)**
   - Chính sách bảo mật đầy đủ
   - Các sections: Data Collection, Usage, Security, GDPR
   - Contact information

7. **Trang Contact (contact.html)**
   - Form liên hệ với Name, Email, Message
   - Related topics grid (10 items)
   - Direct email link
   - Form validation

## 🎯 Công nghệ sử dụng

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Interactive features
- **CSS3** - Custom animations và effects

## 🚀 Cách sử dụng

### Option 1: GitHub Pages (Recommended - LIVE DEMO)
**URL**: `https://thanhnguyn.github.io/Photo-Booth/`

Truy cập trực tiếp từ browser, không cần cài đặt gì!

### Option 2: Mở trực tiếp trong browser (Local)
1. Navigate đến thư mục `docs/`
2. Double-click vào `index.html`
3. Click nút START
4. Chọn layout (2, 3, 4, hoặc 6 poses)
5. Chọn template/concept (Newspaper, Magazine, Comic, etc.)
6. Chọn photo source:
   - **Use Camera**: Cho phép camera access → chọn filter → Start Taking Photos → pose trước camera
   - **Upload Photos**: Chọn ảnh từ máy → tối thiểu bằng số poses đã chọn
7. Download photo strip với template styling đã chọn
8. Share lên social media (optional)

### Option 3: Sử dụng Live Server
1. Cài đặt extension "Live Server" trong VS Code
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

### Option 3: Sử dụng Python HTTP Server
```bash
cd docs/theme
python -m http.server 8000
```
Sau đó mở browser và truy cập: `http://localhost:8000`

## 🎨 Thiết kế & Features

### 🎯 Core Features:
- ✅ **12 Creative Templates** - Newspaper, Magazine, Comic, Polaroid, Passport, Movie, Vintage, Neon, Scrapbook, Minimalist, Instagram, Classic
- ✅ **Dual Photo Source** - Camera hoặc Upload
- ✅ **Full Camera Integration** - WebRTC API
- ✅ **Multi-file Upload** - Upload nhiều ảnh cùng lúc
- ✅ **Auto-Capture** - Countdown & automatic photo capture
- ✅ **6 Photo Filters** - Real-time filter preview (None, B&W, Sepia, Vintage, Cool, Warm)
- ✅ **Template Rendering** - Apply creative concepts to photo strips
- ✅ **Download Photo Strips** - High-quality JPG export với template styling
- ✅ **Share Function** - Web Share API
- ✅ **Retake Option** - Không hài lòng? Chụp/upload lại!
- ✅ **Responsive Design** - Hoạt động trên mọi thiết bị

### Color Scheme:
- **Primary**: Purple gradient (#667eea → #764ba2)
- **Secondary**: Pink gradient (#FF6B9D → #C147E9)
- **Accent**: Teal (#4ECDC4)

### Effects:
- ✨ Glass morphism cho cards
- 🌊 Gradient backgrounds
- 💫 Smooth transitions và hover effects
- 📱 Fully responsive design
- 🎭 Interactive accordion (FAQ)
- 🖱️ Click animations
- 📸 Flash effect khi chụp ảnh
- ⏱️ Countdown animation
- 🎨 Real-time filter preview

### Components:
- Navigation bar (sticky)
- Mobile menu (hamburger)
- Photo strip preview
- Layout selection cards
- Contact form
- FAQ accordion
- Footer

## 📱 Responsive Design

Website được thiết kế responsive cho tất cả các kích thước màn hình:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚙️ Tính năng JavaScript

### 🎥 Camera Features (camera.html):
1. **Photo Source Selection** - Choose between Camera or Upload
2. **WebRTC Camera Access** - Truy cập camera thiết bị (camera mode)
3. **Multi-file Upload** - Upload nhiều ảnh từ máy (upload mode)
4. **Countdown Timer** - Đếm ngược 3-2-1 trước mỗi lần chụp
5. **Auto Capture** - Tự động chụp theo layout đã chọn
6. **Filter System** - 6 filters với preview real-time
7. **Canvas Processing** - Xử lý và composite ảnh với filters
8. **Template Rendering** - Apply 12 creative templates to photo strips
9. **Photo Strip Generator** - Tạo photo strip từ nhiều ảnh với template styling
10. **Download Function** - Export photo strip dưới dạng JPG
11. **Share API** - Chia sẻ qua Web Share API
12. **Mirror Effect** - Selfie mode với hiệu ứng gương (camera mode)

### 🎨 Available Filters:
- **None** - Không filter
- **B&W** - Black & White (grayscale)
- **Sepia** - Vintage sepia tone
- **Vintage** - Retro effect với contrast cao
- **Cool** - Blue/cyan tones
- **Warm** - Orange/pink tones

### 🎭 Available Templates:
1. **📰 Newspaper** - "THE DAILY SNAP" với border đen dày
2. **📸 Magazine** - VOGUE-style cover với pink gradient
3. **💥 Comic Book** - BOOM! POW! với thick borders và bright colors
4. **📷 Polaroid** - Classic instant photo với white frame
5. **🛂 Passport** - Official ID photo style với blue/red gradient
6. **🎬 Movie Poster** - Hollywood poster với gold accents
7. **✨ Vintage** - Retro sepia với double border
8. **⚡ Neon** - Electric neon glow effects
9. **📌 Scrapbook** - Crafty dashed borders và colorful accents
10. **◻️ Minimalist** - Clean white background với thin border
11. **📱 Instagram** - Social media gradient frame
12. **Classic** - Traditional photo booth strip

### 📱 Other Features:
1. **Mobile Menu Toggle** - Hiển thị/ẩn menu trên mobile
2. **Accordion FAQ** - Mở/đóng câu hỏi
3. **Layout Selection** - Chọn layout và enable nút Continue
4. **Template Selection** - Interactive preview và selection cho 12 templates
5. **Form Validation** - Kiểm tra form trước khi submit
6. **Smooth Scrolling** - Navigation mượt mà
7. **File Input Handling** - Upload và preview nhiều ảnh

## 🔧 Customization

### Thay đổi màu sắc:
Edit trong phần `tailwind.config`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#YOUR_COLOR',
                secondary: '#YOUR_COLOR',
                accent: '#YOUR_COLOR',
            }
        }
    }
}
```

### Thay đổi fonts:
Edit trong `fontFamily` section của Tailwind config

## 📝 Notes

- Website sử dụng Tailwind CSS qua CDN (không cần build process)
- **2 Photo Modes**:
  - **Camera Mode**: Cần camera permissions, HTTPS (hoặc localhost), WebRTC support
  - **Upload Mode**: Không cần camera, chỉ cần upload ảnh từ máy
- **HTTPS Required** - WebRTC (camera mode) cần HTTPS (hoặc localhost) để hoạt động
- Tất cả photos được xử lý **locally trong browser** - KHÔNG upload lên server
- Photo strips được tạo bằng HTML5 Canvas API với template rendering
- **12 Creative Templates** - Newspaper, Magazine, Comic, Polaroid, Passport, Movie, Vintage, Neon, Scrapbook, Minimalist, Instagram, Classic
- Form contact chưa kết nối với server (demo only)
- Email liên hệ: thanhnguyentuan2007@gmail.com

## ⚠️ Yêu cầu hệ thống

### Browser Support:
- ✅ Chrome 53+
- ✅ Firefox 36+
- ✅ Safari 11+
- ✅ Edge 12+

### Permissions Required (Camera Mode):
- 📷 **Camera Access** - Bắt buộc cho camera mode
- 🌐 **Internet Connection** - Để load Tailwind CSS CDN

### Upload Mode:
- ✅ Không cần camera permissions
- ✅ Không cần HTTPS
- ✅ Hoạt động offline (sau khi load page lần đầu)
- 📁 Hỗ trợ upload file image (JPG, PNG, etc.)

### Recommended:
- 💻 Desktop/Laptop với webcam
- 📱 Tablet hoặc smartphone với camera trước
- 🌐 Modern browser với WebRTC support

## 🌟 Future Enhancements

- [ ] Thêm nhiều templates sáng tạo hơn
- [ ] Custom template builder
- [ ] Thêm nhiều filters và effects hơn
- [ ] Stickers và text overlay
- [ ] Background removal/replacement
- [ ] Batch editing cho uploaded photos
- [ ] Video recording mode
- [ ] GIF animation export
- [ ] Collage maker
- [ ] Cloud storage integration (optional)
- [ ] Social media direct posting
- [ ] QR code để chia sẻ
- [ ] Print functionality
- [ ] Template marketplace

## 👨‍💻 Author

**SnapStrip Studio** - A modern photo booth web application  
Built with passion for photography and web development

## 📄 License

© 2025 SnapStrip Studio. All Rights Reserved.

---

**Enjoy creating photo strips! 📸✨**
