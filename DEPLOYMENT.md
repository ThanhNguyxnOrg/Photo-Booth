# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Push code lên GitHub

Nếu chưa có repository, tạo mới:

```bash
# Initialize git (nếu chưa có)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: SnapStrip Studio with 12 templates"

# Link to GitHub repo (thay YOUR_USERNAME)
git remote add origin https://github.com/ThanhNguyxn/Photo-Booth.git

# Push to main branch
git push -u origin main
```

Nếu đã có repository:

```bash
# Add changes
git add .

# Commit with message
git commit -m "Add templates and upload features"

# Push
git push origin main
```

## Bước 2: Enable GitHub Pages

1. Truy cập repository trên GitHub: `https://github.com/ThanhNguyxn/Photo-Booth`

2. Click tab **Settings** (⚙️)

3. Trong sidebar bên trái, scroll xuống phần **Code and automation**

4. Click **Pages**

5. Trong phần **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: 
     - Select `main` 
     - Select `/docs` (folder)
   - Click **Save**

6. Đợi 1-2 phút để GitHub build

7. Refresh trang, bạn sẽ thấy:
   ```
   ✅ Your site is live at https://thanhnguyn.github.io/Photo-Booth/
   ```

## Bước 3: Test Website

Truy cập: `https://thanhnguyn.github.io/Photo-Booth/`

### Test checklist:
- ✅ Trang chủ load đúng
- ✅ Navigation hoạt động
- ✅ Layout selection → Templates → Camera
- ✅ Camera mode (cần HTTPS ✅)
- ✅ Upload mode
- ✅ Filters hoạt động
- ✅ Templates render đúng
- ✅ Download photo strips
- ✅ Share functionality

## Bước 4: Custom Domain (Optional)

Nếu bạn có domain riêng (vd: `snapstripstudio.com`):

1. Trong GitHub Pages settings
2. Phần **Custom domain**, nhập domain của bạn
3. Click **Save**
4. Trong DNS settings của domain provider:
   - Add CNAME record pointing to `thanhnguyn.github.io`
5. Đợi DNS propagate (vài phút đến vài giờ)

## 🎉 Xong!

Website của bạn giờ đã live và có thể chia sẻ với bạn bè!

## 📝 Update sau này

Mỗi khi có thay đổi:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Pages sẽ tự động rebuild và deploy (1-2 phút).

## ⚠️ Lưu ý

- **HTTPS**: GitHub Pages tự động có HTTPS → Camera sẽ hoạt động!
- **Free**: Hoàn toàn miễn phí
- **Bandwidth**: Giới hạn 100GB/tháng (đủ dùng cho cá nhân)
- **Build time**: 1-2 phút mỗi lần deploy
- **Cache**: Nếu thay đổi không hiện, Ctrl+Shift+R để hard refresh

## 🔗 Useful Links

- **Live Site**: https://thanhnguyn.github.io/Photo-Booth/
- **Repository**: https://github.com/ThanhNguyxn/Photo-Booth
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

Made with ❤️ by SnapStrip Studio Team
