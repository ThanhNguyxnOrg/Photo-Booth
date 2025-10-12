// ============================================
// Internationalization (i18n) System
// ============================================

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.templates': 'Templates',
        'nav.customize': 'Customize',
        'nav.camera': 'Camera',
        'nav.preview': 'Preview',
        'nav.layout': 'Layout',
        'nav.faq': 'FAQ',
        'nav.star': 'Star on GitHub',
        
        // Common
        'common.language': 'Language',
        'common.english': 'English',
        'common.vietnamese': 'Tiếng Việt',
        'common.next': 'Next',
        'common.back': 'Back',
        'common.continue': 'Continue',
        'common.cancel': 'Cancel',
        'common.done': 'Done',
        'common.save': 'Save',
        'common.download': 'Download',
        'common.share': 'Share',
        'common.retake': 'Retake',
        'common.reset': 'Reset',
        
        // Index Page
        'index.title': 'SnapStrip Studio | Free Online Photo Booth',
        'index.hero.title': 'Create Your Perfect Photo Booth Strip',
        'index.hero.subtitle': 'Professional photo booth effects right in your browser - No installation needed!',
        'index.hero.cta': 'Start Creating',
        'index.features.title': 'Why Choose SnapStrip Studio?',
        'index.feature1.title': 'Free & No Registration',
        'index.feature1.desc': 'Create stunning photo booth strips without any cost or signup',
        'index.feature2.title': 'Works Offline',
        'index.feature2.desc': 'Install as a PWA and use anywhere, even without internet',
        'index.feature3.title': 'Private & Secure',
        'index.feature3.desc': 'All photos are processed locally in your browser',
        'index.feature4.title': '13 Unique Templates',
        'index.feature4.desc': 'From classic to modern, Instagram to vintage styles',
        'index.feature5.title': 'Multiple Layouts',
        'index.feature5.desc': 'Single shot or multi-pose strips (2, 3, 4, or 6 photos)',
        'index.feature6.title': 'Instant Download',
        'index.feature6.desc': 'Save high-quality images to your device instantly',
        
        // Templates Page
        'templates.title': 'Choose Your Template',
        'templates.subtitle': 'Select a template style for your photo booth strip',
        'templates.instagram': 'Instagram',
        'templates.instagram.desc': 'Social media style post',
        'templates.macbook': 'MacBook',
        'templates.macbook.desc': 'Laptop screen style',
        'templates.newspaper': 'Newspaper',
        'templates.newspaper.desc': 'Classic news article',
        'templates.magazine': 'Magazine',
        'templates.magazine.desc': 'Fashion magazine cover',
        'templates.movie': 'Movie Poster',
        'templates.movie.desc': 'Hollywood blockbuster',
        'templates.passport': 'Passport',
        'templates.passport.desc': 'Official ID style',
        'templates.vintage': 'Vintage',
        'templates.vintage.desc': 'Retro memories',
        'templates.comic': 'Comic Book',
        'templates.comic.desc': 'POW! Action style',
        'templates.polaroid': 'Polaroid',
        'templates.polaroid.desc': 'Instant camera style',
        'templates.neon': 'Neon',
        'templates.neon.desc': 'Electric vibes',
        'templates.scrapbook': 'Scrapbook',
        'templates.scrapbook.desc': 'Crafty & fun',
        'templates.minimalist': 'Minimalist',
        'templates.minimalist.desc': 'Less is more',
        'templates.classic': 'Classic',
        'templates.classic.desc': 'Traditional photo booth',
        'templates.selectMessage': 'Please select a template to continue',
        
        // Layout Page
        'layout.title': 'Choose Layout',
        'layout.subtitle': 'Select how many photos you want in your strip',
        'layout.single': 'Single',
        'layout.single.desc': '1 photo',
        'layout.layoutA': 'Layout A',
        'layout.layoutA.desc': '2 photos',
        'layout.layoutB': 'Layout B',
        'layout.layoutB.desc': '3 photos',
        'layout.layoutC': 'Layout C',
        'layout.layoutC.desc': '4 photos',
        'layout.layoutD': 'Layout D',
        'layout.layoutD.desc': '6 photos',
        'layout.selectMessage': 'Please select a layout to continue',
        
        // Customize Page
        'customize.title': 'Customize Your Template',
        'customize.subtitle': 'Add your personal touch',
        'customize.preview': 'Preview',
        'customize.preview.note': '(Preview is illustrative - actual photos will show in camera)',
        'customize.username': '📱 Username / Name',
        'customize.username.placeholder': '@yourname',
        'customize.headline': '📰 Headline / Title',
        'customize.headline.placeholder': 'Your headline here',
        'customize.subtitleLabel': '✍️ Subtitle / Description',
        'customize.subtitle.placeholder': 'Your subtitle here',
        'customize.date': '📅 Date',
        'customize.message': '💭 Message / Quote',
        'customize.message.placeholder': 'Your message here',
        'customize.location': '🌍 Country / Location',
        'customize.location.placeholder': 'Your location',
        'customize.startCamera': 'Start Camera 📸',
        'customize.saveNote': 'Your customization will be saved for this session',
        'customize.livePreview': 'Live Preview',
        'customize.previewDesc': 'Preview shows how your text will appear on photos',
        'customize.actualTemplate': '✨ Actual template will have richer details and higher resolution',
        'customize.textSizeLabel': '📏 Text Size Adjustment',
        'customize.small': 'Small',
        'customize.large': 'Large',
        'customize.textSizeDesc': 'Adjust text size while preserving template style',
        
        // Camera Page
        'camera.title': 'Take Your Photos',
        'camera.preparing': 'Preparing camera...',
        'camera.loading': 'Loading...',
        'camera.countdown': 'Get ready!',
        'camera.capture': 'Capture Photo',
        'camera.next': 'Next Photo',
        'camera.finish': 'Finish & Preview',
        'camera.photo': 'Photo',
        'camera.of': 'of',
        'camera.switchCamera': 'Switch Camera',
        'camera.error': 'Camera Error',
        'camera.error.access': 'Unable to access camera. Please grant camera permissions.',
        'camera.captureSettings': '📸 Capture Settings',
        'camera.captureMode': 'Capture Mode',
        'camera.modeAuto': 'Auto',
        'camera.modeManual': 'Manual',
        'camera.timerLabel': 'Time between photos:',
        'camera.autoModeDesc': '⚡ Auto mode: Photos will be taken automatically every 3 seconds',
        'camera.startTaking': 'Start Taking Photos',
        'camera.takePhoto': 'Take Photo',
        'camera.continuePreview': '✨ Continue to Preview & Edit',
        'camera.retakeAll': '🔄 Retake All',
        'camera.filters': 'Filters:',
        'camera.filter.none': 'None',
        'camera.filter.bw': 'B&W',
        'camera.filter.sepia': 'Sepia',
        'camera.filter.vintage': 'Vintage',
        'camera.filter.cool': 'Cool',
        'camera.filter.warm': 'Warm',
        'camera.chooseSource': 'Choose Photo Source',
        'camera.howToAdd': 'How would you like to add your photos?',
        'camera.useCamera': 'Use Camera',
        'camera.uploadPhotos': 'Upload Photos',
        'camera.yourPhotoStrip': 'Your Photo Strip',
        'camera.brandName': 'SnapStrip Studio',
        
        // Preview Page
        'preview.title': 'Your Photo Strip',
        'preview.subtitle': 'Download or retake your photos',
        'preview.download': 'Download Photo Strip',
        'preview.retake': 'Retake Photos',
        'preview.newStrip': 'Create New Strip',
        'preview.share': 'Share',
        'preview.downloadOptions': '📥 Download Options',
        'preview.downloadImage': '📷 Download Image',
        'preview.createGif': '🎬 Create Animated GIF',
        'preview.shareQR': '📱 Share via QR Code',
        'preview.showControls': 'Show Controls',
        'preview.shareTitle': '📱 Share Your Photo',
        'preview.linkExpires': 'Link expires in about 1 hour',
        'preview.scanInstructions': '📸 Scan with your phone camera to download',
        'preview.creatingGif': '🎬 Creating GIF...',
        'preview.pleaseWait': 'Please wait...',
        'preview.copyLink': '📋 Copy Link',
        'preview.cantScanQR': 'For devices that can\'t scan QR codes',
        'preview.qrFailed': '❌ Failed to create temporary link',
        'preview.useDownload': 'Please use the "Download Image" button instead',
        
        // Contact Page
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch',
        'contact.emailTitle': 'Email Me',
        'contact.emailDesc': 'Send me a direct email for general inquiries',
        'contact.openEmail': '📧 Open Email',
        'contact.bugTitle': 'Report a Bug',
        'contact.bugDesc': 'Found a bug? Report it on GitHub Issues',
        'contact.openIssue': '🐛 Report Issue',
        'contact.opensNewTab': 'Opens in new tab',
        'contact.responseTime': 'Response Time: I usually respond within 24-48 hours',
        'contact.bugReportInfo': 'For bug reports, please include: Browser version, steps to reproduce, and screenshots if possible',
        'contact.heading': 'Get in Touch',
        'contact.description': 'Have questions, suggestions, or feedback? We\'d love to hear from you! Fill out the form below and we\'ll get back to you as soon as possible.',
        'contact.name': 'Name',
        'contact.name.placeholder': 'Your name',
        'contact.email': 'Email',
        'contact.email.placeholder': 'your.email@example.com',
        'contact.message': 'Message',
        'contact.message.placeholder': 'Tell us what you think...',
        'contact.send': 'Send Message',
        
        // FAQ Page
        'faq.title': 'Frequently Asked Questions',
        'faq.heading': 'Frequently Asked Questions',
        'faq.q1': 'What is SnapStrip Studio?',
        'faq.a1': 'SnapStrip Studio is a free online photo booth application that allows you to create fun photo strips from the comfort of your home. Simply use your webcam to take pictures with various filters and frames, then download or share your photo strips.',
        'faq.q2': 'Is it really free to use?',
        'faq.a2': 'Yes! SnapStrip Studio is completely free to use. There are no hidden fees or subscription costs. You can take as many photos as you like and download them without any limitations. If you enjoy the service, we appreciate donations to help keep the service running.',
        'faq.q3': 'What equipment do I need?',
        'faq.a3': 'All you need is a device with a webcam (computer, laptop, or tablet) and an internet connection. Make sure to grant camera permissions when prompted by your browser.',
        'faq.q4': 'How do I take photos?',
        'faq.a4': 'Click the START button on the homepage, select your preferred layout (2, 3, 4, or 6 poses), allow camera access when prompted, and then follow the on-screen countdown to take your photos. The camera will automatically capture images at timed intervals.',
        'faq.q5': 'Can I add filters or frames to my photos?',
        'faq.a5': 'Yes! SnapStrip Studio offers various filters and frames that you can apply to your photos. Choose from different styles before or after taking your pictures to create unique photo strips.',
        'faq.q6': 'How do I download my photo strips?',
        'faq.a6': 'After taking your photos, you\'ll see a preview of your photo strip. Simply click the download button to save the image to your device. The photo strip will be downloaded as a high-quality image file.',
        'faq.q7': 'Are my photos stored on your servers?',
        'faq.a7': 'No! Your privacy is important to us. All photos are processed locally in your browser and are never uploaded to our servers. Your photos remain completely private and are only saved if you choose to download them.',
        'faq.q8': 'Can I use this on mobile devices?',
        'faq.a8': 'Yes, SnapStrip Studio works on mobile devices with cameras. For the best experience, we recommend using it on a tablet or computer with a webcam, but smartphones work great too!',
        'faq.q9': 'What browsers are supported?',
        'faq.a9': 'SnapStrip Studio works best on modern browsers including Google Chrome, Firefox, Safari, and Microsoft Edge. Make sure your browser is up to date for the best experience.',
        'faq.q10': 'I\'m having issues with camera access. What should I do?',
        'faq.a10': 'Make sure you\'ve granted camera permissions in your browser settings. Check that no other application is using your camera. If the problem persists, try refreshing the page or using a different browser. You can also contact us for further assistance.',
        'faq.stillQuestions': 'Still have questions?',
        'faq.contactUs': 'Feel free to',
        'faq.contactLink': 'contact us',
        'faq.contactEnd': 'and we\'ll be happy to help!',
        
        // Privacy Policy Page
        'privacy.title': 'Privacy Policy',
        'privacy.heading': 'Privacy Policy',
        'privacy.infoCollect': 'Information We Collect',
        'privacy.photoAccess': 'Photos and Camera Access:',
        'privacy.photoAccessDesc': 'When you use our photo booth service, you grant us temporary access to your device\'s camera. However, all photos are processed entirely in your browser and are never uploaded to our servers or stored anywhere unless you explicitly choose to download them.',
        'privacy.usageData': 'Usage Data:',
        'privacy.usageDataDesc': 'We may collect non-personal information about how you interact with our website, such as pages visited, features used, and general usage statistics through analytics services.',
        'privacy.cookies': 'Cookies:',
        'privacy.cookiesDesc': 'We use cookies and similar tracking technologies to improve your experience, remember your preferences, and analyze site traffic.',
        'privacy.howWeUse': 'How We Use Your Information',
        'privacy.howWeUseIntro': 'We use the information we collect to:',
        'privacy.usage1': 'Provide and maintain our photo booth service',
        'privacy.usage2': 'Improve and optimize our website functionality',
        'privacy.usage3': 'Analyze usage patterns to enhance user experience',
        'privacy.usage4': 'Communicate with you about updates, features, or support',
        'privacy.usage5': 'Detect and prevent technical issues or security threats',
        'privacy.storage': 'Data Storage and Security',
        'privacy.photosPrivate': 'Your Photos Are Private:',
        'privacy.photosPrivateDesc': 'We want to emphasize that your photos are never uploaded to our servers. All photo processing happens locally in your browser using JavaScript. Your images remain on your device and are only saved if you choose to download them.',
        'privacy.security': 'We implement appropriate security measures to protect any data we do collect (such as usage statistics) from unauthorized access, alteration, or destruction.',
        'privacy.thirdParty': 'Third-Party Services',
        'privacy.thirdPartyDesc': 'We may use third-party services for analytics, advertising, or other purposes. These services may collect information about your use of our website. We recommend reviewing the privacy policies of these third-party services:',
        'privacy.service1': 'Google Analytics - for website traffic analysis',
        'privacy.service2': 'Google AdSense - for displaying advertisements',
        'privacy.service3': 'PayPal - for processing donations',
        
        // Footer
        'footer.tagline': 'SnapStrip Studio - Create Amazing Photo Strips',
        'footer.made': 'Made with ❤️ by developers who love photography',
        'footer.copyright': '© 2025 SnapStrip Studio. All Rights Reserved.',
        'footer.noSignup': 'No signup required • 100% Free • Works on any device'
    },
    
    vi: {
        // Navigation
        'nav.home': 'Trang Chủ',
        'nav.templates': 'Mẫu',
        'nav.customize': 'Tùy Chỉnh',
        'nav.camera': 'Chụp Ảnh',
        'nav.preview': 'Xem Trước',
        'nav.layout': 'Bố Cục',
        'nav.faq': 'Câu Hỏi Thường Gặp',
        'nav.star': 'Gắn Sao trên GitHub',
        
        // Common
        'common.language': 'Ngôn Ngữ',
        'common.english': 'English',
        'common.vietnamese': 'Tiếng Việt',
        'common.next': 'Tiếp Theo',
        'common.back': 'Quay Lại',
        'common.continue': 'Tiếp Tục',
        'common.cancel': 'Hủy',
        'common.done': 'Xong',
        'common.save': 'Lưu',
        'common.download': 'Tải Xuống',
        'common.share': 'Chia Sẻ',
        'common.retake': 'Chụp Lại',
        'common.reset': 'Đặt Lại',
        
        // Index Page
        'index.title': 'SnapStrip Studio | Photo Booth Trực Tuyến Miễn Phí',
        'index.hero.title': 'Tạo Ảnh Photo Booth Hoàn Hảo',
        'index.hero.subtitle': 'Hiệu ứng photo booth chuyên nghiệp ngay trên trình duyệt - Không cần cài đặt!',
        'index.hero.cta': 'Bắt Đầu Tạo',
        'index.features.title': 'Tại Sao Chọn SnapStrip Studio?',
        'index.feature1.title': 'Miễn Phí & Không Cần Đăng Ký',
        'index.feature1.desc': 'Tạo ảnh photo booth tuyệt đẹp miễn phí, không cần đăng ký',
        'index.feature2.title': 'Hoạt Động Offline',
        'index.feature2.desc': 'Cài đặt như PWA và sử dụng mọi nơi, ngay cả khi không có internet',
        'index.feature3.title': 'Riêng Tư & Bảo Mật',
        'index.feature3.desc': 'Tất cả ảnh được xử lý cục bộ trên trình duyệt của bạn',
        'index.feature4.title': '13 Mẫu Độc Đáo',
        'index.feature4.desc': 'Từ cổ điển đến hiện đại, Instagram đến phong cách vintage',
        'index.feature5.title': 'Nhiều Bố Cục',
        'index.feature5.desc': 'Ảnh đơn hoặc nhiều ảnh (2, 3, 4, hoặc 6 ảnh)',
        'index.feature6.title': 'Tải Xuống Ngay',
        'index.feature6.desc': 'Lưu ảnh chất lượng cao xuống thiết bị ngay lập tức',
        
        // Templates Page
        'templates.title': 'Chọn Mẫu',
        'templates.subtitle': 'Chọn phong cách mẫu cho ảnh photo booth của bạn',
        'templates.instagram': 'Instagram',
        'templates.instagram.desc': 'Kiểu bài đăng mạng xã hội',
        'templates.macbook': 'MacBook',
        'templates.macbook.desc': 'Kiểu màn hình laptop',
        'templates.newspaper': 'Báo',
        'templates.newspaper.desc': 'Bài báo cổ điển',
        'templates.magazine': 'Tạp Chí',
        'templates.magazine.desc': 'Bìa tạp chí thời trang',
        'templates.movie': 'Áp Phích Phim',
        'templates.movie.desc': 'Phong cách phim bom tấn',
        'templates.passport': 'Hộ Chiếu',
        'templates.passport.desc': 'Kiểu giấy tờ tùy thân',
        'templates.vintage': 'Cổ Điển',
        'templates.vintage.desc': 'Ký ức hoài cổ',
        'templates.comic': 'Truyện Tranh',
        'templates.comic.desc': 'Phong cách hành động POW!',
        'templates.polaroid': 'Polaroid',
        'templates.polaroid.desc': 'Kiểu máy ảnh lấy ngay',
        'templates.neon': 'Neon',
        'templates.neon.desc': 'Phong cách điện tử',
        'templates.scrapbook': 'Sổ Lưu Niệm',
        'templates.scrapbook.desc': 'Thủ công & vui nhộn',
        'templates.minimalist': 'Tối Giản',
        'templates.minimalist.desc': 'Càng ít càng tốt',
        'templates.classic': 'Truyền Thống',
        'templates.classic.desc': 'Photo booth truyền thống',
        'templates.selectMessage': 'Vui lòng chọn một mẫu để tiếp tục',
        
        // Layout Page
        'layout.title': 'Chọn Bố Cục',
        'layout.subtitle': 'Chọn số lượng ảnh bạn muốn trong ảnh',
        'layout.single': 'Đơn',
        'layout.single.desc': '1 ảnh',
        'layout.layoutA': 'Bố Cục A',
        'layout.layoutA.desc': '2 ảnh',
        'layout.layoutB': 'Bố Cục B',
        'layout.layoutB.desc': '3 ảnh',
        'layout.layoutC': 'Bố Cục C',
        'layout.layoutC.desc': '4 ảnh',
        'layout.layoutD': 'Bố Cục D',
        'layout.layoutD.desc': '6 ảnh',
        'layout.selectMessage': 'Vui lòng chọn một bố cục để tiếp tục',
        
        // Customize Page
        'customize.title': 'Tùy Chỉnh Mẫu',
        'customize.subtitle': 'Thêm dấu ấn cá nhân',
        'customize.preview': 'Xem Trước',
        'customize.preview.note': '(Xem trước chỉ minh họa - ảnh thật sẽ hiển thị khi chụp)',
        'customize.username': '📱 Tên Người Dùng / Tên',
        'customize.username.placeholder': '@tencuaban',
        'customize.headline': '📰 Tiêu Đề Chính',
        'customize.headline.placeholder': 'Tiêu đề của bạn',
        'customize.subtitleLabel': '✍️ Phụ Đề / Mô Tả',
        'customize.subtitle.placeholder': 'Phụ đề của bạn',
        'customize.date': '📅 Ngày Tháng',
        'customize.message': '💭 Tin Nhắn / Trích Dẫn',
        'customize.message.placeholder': 'Tin nhắn của bạn',
        'customize.location': '🌍 Quốc Gia / Địa Điểm',
        'customize.location.placeholder': 'Vị trí của bạn',
        'customize.startCamera': 'Bắt Đầu Chụp 📸',
        'customize.saveNote': 'Tùy chỉnh của bạn sẽ được lưu cho phiên này',
        'customize.livePreview': 'Xem Trước Trực Tiếp',
        'customize.previewDesc': 'Xem trước cách văn bản của bạn sẽ xuất hiện trên ảnh',
        'customize.actualTemplate': '✨ Mẫu thực tế sẽ có nhiều chi tiết hơn và độ phân giải cao hơn',
        'customize.textSizeLabel': '📏 Điều Chỉnh Kích Thước Chữ',
        'customize.small': 'Nhỏ',
        'customize.large': 'Lớn',
        'customize.textSizeDesc': 'Điều chỉnh kích thước chữ trong khi vẫn giữ nguyên phong cách mẫu',
        
        // Camera Page
        'camera.title': 'Chụp Ảnh',
        'camera.preparing': 'Đang chuẩn bị camera...',
        'camera.loading': 'Đang tải...',
        'camera.countdown': 'Sẵn sàng!',
        'camera.capture': 'Chụp Ảnh',
        'camera.next': 'Ảnh Tiếp Theo',
        'camera.finish': 'Hoàn Tất & Xem',
        'camera.photo': 'Ảnh',
        'camera.of': 'của',
        'camera.switchCamera': 'Đổi Camera',
        'camera.error': 'Lỗi Camera',
        'camera.error.access': 'Không thể truy cập camera. Vui lòng cấp quyền camera.',
        'camera.captureSettings': '📸 Cài Đặt Chụp',
        'camera.captureMode': 'Chế Độ Chụp',
        'camera.modeAuto': 'Tự Động',
        'camera.modeManual': 'Thủ Công',
        'camera.timerLabel': 'Thời gian giữa các ảnh:',
        'camera.autoModeDesc': '⚡ Chế độ tự động: Ảnh sẽ được chụp tự động sau mỗi 3 giây',
        'camera.startTaking': 'Bắt Đầu Chụp Ảnh',
        'camera.takePhoto': 'Chụp Ảnh',
        'camera.continuePreview': '✨ Tiếp Tục Xem Trước & Chỉnh Sửa',
        'camera.retakeAll': '🔄 Chụp Lại Tất Cả',
        'camera.filters': 'Bộ Lọc:',
        'camera.filter.none': 'Không',
        'camera.filter.bw': 'Đen Trắng',
        'camera.filter.sepia': 'Nâu Cổ',
        'camera.filter.vintage': 'Cổ Điển',
        'camera.filter.cool': 'Lạnh',
        'camera.filter.warm': 'Ấm',
        'camera.chooseSource': 'Chọn Nguồn Ảnh',
        'camera.howToAdd': 'Bạn muốn thêm ảnh như thế nào?',
        'camera.useCamera': 'Dùng Camera',
        'camera.uploadPhotos': 'Tải Ảnh Lên',
        'camera.yourPhotoStrip': 'Dải Ảnh Của Bạn',
        'camera.brandName': 'SnapStrip Studio',
        
        // Preview Page
        'preview.title': 'Ảnh Của Bạn',
        'preview.subtitle': 'Tải xuống hoặc chụp lại ảnh',
        'preview.download': 'Tải Xuống Ảnh',
        'preview.retake': 'Chụp Lại',
        'preview.newStrip': 'Tạo Ảnh Mới',
        'preview.share': 'Chia Sẻ',
        'preview.downloadOptions': '📥 Tùy Chọn Tải Xuống',
        'preview.downloadImage': '📷 Tải Xuống Ảnh',
        'preview.createGif': '🎬 Tạo GIF Động',
        'preview.shareQR': '📱 Chia Sẻ qua Mã QR',
        'preview.showControls': 'Hiện Điều Khiển',
        'preview.shareTitle': '📱 Chia Sẻ Ảnh Của Bạn',
        'preview.linkExpires': 'Liên kết hết hạn sau khoảng 1 giờ',
        'preview.scanInstructions': '📸 Quét bằng camera điện thoại để tải xuống',
        'preview.creatingGif': '🎬 Đang Tạo GIF...',
        'preview.pleaseWait': 'Vui lòng chờ...',
        'preview.copyLink': '📋 Sao Chép Liên Kết',
        'preview.cantScanQR': 'Dành cho thiết bị không thể quét mã QR',
        'preview.qrFailed': '❌ Không thể tạo liên kết tạm thời',
        'preview.useDownload': 'Vui lòng sử dụng nút "Tải Xuống Ảnh" thay thế',
        
        // Contact Page
        'contact.title': 'Liên Hệ',
        'contact.subtitle': 'Liên lạc với chúng tôi',
        'contact.emailTitle': 'Gửi Email',
        'contact.emailDesc': 'Gửi email trực tiếp cho các câu hỏi chung',
        'contact.openEmail': '📧 Mở Email',
        'contact.bugTitle': 'Báo Cáo Lỗi',
        'contact.bugDesc': 'Tìm thấy lỗi? Báo cáo trên GitHub Issues',
        'contact.openIssue': '🐛 Báo Cáo Lỗi',
        'contact.opensNewTab': 'Mở trong tab mới',
        'contact.responseTime': 'Thời gian phản hồi: Thường trong vòng 24-48 giờ',
        'contact.bugReportInfo': 'Khi báo cáo lỗi, vui lòng cung cấp: Phiên bản trình duyệt, các bước tái hiện lỗi và ảnh chụp màn hình nếu có thể',
        'contact.heading': 'Liên Hệ Với Chúng Tôi',
        'contact.description': 'Có câu hỏi, gợi ý hoặc phản hồi? Chúng tôi rất muốn nghe từ bạn! Điền vào biểu mẫu bên dưới và chúng tôi sẽ phản hồi bạn sớm nhất có thể.',
        'contact.name': 'Tên',
        'contact.name.placeholder': 'Tên của bạn',
        'contact.email': 'Email',
        'contact.email.placeholder': 'email.cua.ban@example.com',
        'contact.message': 'Tin Nhắn',
        'contact.message.placeholder': 'Cho chúng tôi biết suy nghĩ của bạn...',
        'contact.send': 'Gửi Tin Nhắn',
        
        // FAQ Page
        'faq.title': 'Câu Hỏi Thường Gặp',
        'faq.heading': 'Câu Hỏi Thường Gặp',
        'faq.q1': 'SnapStrip Studio là gì?',
        'faq.a1': 'SnapStrip Studio là ứng dụng photo booth trực tuyến miễn phí cho phép bạn tạo các ảnh photo booth thú vị ngay tại nhà. Chỉ cần sử dụng webcam để chụp ảnh với nhiều bộ lọc và khung ảnh khác nhau, sau đó tải xuống hoặc chia sẻ ảnh của bạn.',
        'faq.q2': 'Có thực sự miễn phí không?',
        'faq.a2': 'Có! SnapStrip Studio hoàn toàn miễn phí. Không có phí ẩn hay chi phí đăng ký. Bạn có thể chụp bao nhiêu ảnh tùy thích và tải xuống mà không có giới hạn. Nếu bạn thích dịch vụ này, chúng tôi rất trân trọng các khoản đóng góp để giúp duy trì dịch vụ.',
        'faq.q3': 'Tôi cần thiết bị gì?',
        'faq.a3': 'Tất cả những gì bạn cần là một thiết bị có webcam (máy tính, laptop hoặc tablet) và kết nối internet. Hãy nhớ cấp quyền truy cập camera khi trình duyệt yêu cầu.',
        'faq.q4': 'Làm thế nào để chụp ảnh?',
        'faq.a4': 'Nhấp vào nút BẮT ĐẦU trên trang chủ, chọn bố cục bạn muốn (2, 3, 4, hoặc 6 ảnh), cho phép truy cập camera khi được yêu cầu, sau đó làm theo đếm ngược trên màn hình để chụp ảnh. Camera sẽ tự động chụp ảnh theo khoảng thời gian định sẵn.',
        'faq.q5': 'Tôi có thể thêm bộ lọc hoặc khung ảnh không?',
        'faq.a5': 'Có! SnapStrip Studio cung cấp nhiều bộ lọc và khung ảnh khác nhau mà bạn có thể áp dụng cho ảnh của mình. Chọn từ các phong cách khác nhau trước hoặc sau khi chụp ảnh để tạo ra các ảnh photo booth độc đáo.',
        'faq.q6': 'Làm thế nào để tải xuống ảnh?',
        'faq.a6': 'Sau khi chụp ảnh, bạn sẽ thấy bản xem trước ảnh của mình. Chỉ cần nhấp vào nút tải xuống để lưu ảnh vào thiết bị của bạn. Ảnh sẽ được tải xuống dưới dạng file ảnh chất lượng cao.',
        'faq.q7': 'Ảnh của tôi có được lưu trên máy chủ không?',
        'faq.a7': 'Không! Quyền riêng tư của bạn rất quan trọng đối với chúng tôi. Tất cả ảnh được xử lý cục bộ trên trình duyệt của bạn và không bao giờ được tải lên máy chủ của chúng tôi. Ảnh của bạn hoàn toàn riêng tư và chỉ được lưu nếu bạn chọn tải xuống.',
        'faq.q8': 'Tôi có thể sử dụng trên thiết bị di động không?',
        'faq.a8': 'Có, SnapStrip Studio hoạt động trên các thiết bị di động có camera. Để có trải nghiệm tốt nhất, chúng tôi khuyên bạn nên sử dụng trên tablet hoặc máy tính có webcam, nhưng điện thoại thông minh cũng hoạt động rất tốt!',
        'faq.q9': 'Những trình duyệt nào được hỗ trợ?',
        'faq.a9': 'SnapStrip Studio hoạt động tốt nhất trên các trình duyệt hiện đại bao gồm Google Chrome, Firefox, Safari và Microsoft Edge. Hãy đảm bảo trình duyệt của bạn được cập nhật để có trải nghiệm tốt nhất.',
        'faq.q10': 'Tôi gặp vấn đề với camera. Tôi nên làm gì?',
        'faq.a10': 'Hãy đảm bảo bạn đã cấp quyền camera trong cài đặt trình duyệt. Kiểm tra xem không có ứng dụng nào khác đang sử dụng camera của bạn. Nếu vấn đề vẫn tiếp diễn, hãy thử làm mới trang hoặc sử dụng trình duyệt khác. Bạn cũng có thể liên hệ với chúng tôi để được hỗ trợ thêm.',
        'faq.stillQuestions': 'Vẫn còn thắc mắc?',
        'faq.contactUs': 'Hãy',
        'faq.contactLink': 'liên hệ với chúng tôi',
        'faq.contactEnd': 'và chúng tôi sẽ vui lòng hỗ trợ bạn!',
        
        // Privacy Policy Page
        'privacy.title': 'Chính Sách Bảo Mật',
        'privacy.heading': 'Chính Sách Bảo Mật',
        
        // Footer
        'footer.tagline': 'SnapStrip Studio - Tạo Ảnh Photo Booth Tuyệt Vời',
        'footer.made': 'Được làm với ❤️ bởi các lập trình viên yêu nhiếp ảnh',
        'footer.copyright': '© 2025 SnapStrip Studio. Bảo lưu mọi quyền.',
        'footer.noSignup': 'Không cần đăng ký • 100% Miễn phí • Hoạt động trên mọi thiết bị',

        // Privacy Policy Page
        'privacy.title': 'Chính Sách Quyền Riêng Tư',
        'privacy.heading': 'Chính Sách Quyền Riêng Tư',
        'privacy.infoCollect': 'Thông Tin Chúng Tôi Thu Thập',
        'privacy.photoAccess': 'Ảnh và Quyền Truy Cập Camera:',
        'privacy.photoAccessDesc': 'Khi bạn sử dụng dịch vụ photo booth của chúng tôi, bạn cấp cho chúng tôi quyền truy cập tạm thời vào camera của thiết bị. Tuy nhiên, tất cả các ảnh được xử lý hoàn toàn trong trình duyệt của bạn và không bao giờ được tải lên máy chủ của chúng tôi hoặc lưu trữ ở bất kỳ đâu trừ khi bạn chọn tải xuống.',
        'privacy.usageData': 'Dữ Liệu Sử Dụng:',
        'privacy.usageDataDesc': 'Chúng tôi có thể thu thập thông tin không cá nhân về cách bạn tương tác với trang web của chúng tôi, chẳng hạn như các trang đã truy cập, tính năng đã sử dụng và thống kê sử dụng chung thông qua dịch vụ phân tích.',
        'privacy.cookies': 'Cookie:',
        'privacy.cookiesDesc': 'Chúng tôi sử dụng cookie và các công nghệ theo dõi tương tự để cải thiện trải nghiệm của bạn, ghi nhớ tùy chọn của bạn và phân tích lưu lượng truy cập trang web.',
        'privacy.howWeUse': 'Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn',
        'privacy.howWeUseIntro': 'Chúng tôi sử dụng thông tin thu thập được để:',
        'privacy.usage1': 'Cung cấp và duy trì dịch vụ photo booth của chúng tôi',
        'privacy.usage2': 'Cải thiện và tối ưu hóa chức năng trang web',
        'privacy.usage3': 'Phân tích mẫu sử dụng để nâng cao trải nghiệm người dùng',
        'privacy.usage4': 'Liên lạc với bạn về cập nhật, tính năng hoặc hỗ trợ',
        'privacy.usage5': 'Phát hiện và ngăn chặn các vấn đề kỹ thuật hoặc đe dọa bảo mật',
        'privacy.storage': 'Lưu Trữ và Bảo Mật Dữ Liệu',
        'privacy.photosPrivate': 'Ảnh Của Bạn Được Bảo Mật:',
        'privacy.photosPrivateDesc': 'Chúng tôi muốn nhấn mạnh rằng ảnh của bạn không bao giờ được tải lên máy chủ của chúng tôi. Tất cả việc xử lý ảnh diễn ra cục bộ trong trình duyệt của bạn bằng JavaScript. Ảnh của bạn vẫn ở trên thiết bị của bạn và chỉ được lưu nếu bạn chọn tải xuống.',
        'privacy.security': 'Chúng tôi thực hiện các biện pháp bảo mật thích hợp để bảo vệ bất kỳ dữ liệu nào chúng tôi thu thập (như thống kê sử dụng) khỏi truy cập, thay đổi hoặc phá hủy trái phép.',
        'privacy.thirdParty': 'Dịch Vụ Bên Thứ Ba',
        'privacy.thirdPartyDesc': 'Chúng tôi có thể sử dụng các dịch vụ bên thứ ba cho phân tích, quảng cáo hoặc các mục đích khác. Các dịch vụ này có thể thu thập thông tin về việc bạn sử dụng trang web của chúng tôi. Chúng tôi khuyến nghị xem xét chính sách quyền riêng tư của các dịch vụ bên thứ ba này:',
        'privacy.service1': 'Google Analytics - để phân tích lưu lượng truy cập trang web',
        'privacy.service2': 'Google AdSense - để hiển thị quảng cáo',
        'privacy.service3': 'PayPal - để xử lý quyên góp'
    }
};
// Current language (default: English)
let currentLanguage = localStorage.getItem('language') || 'en';

// Get translation for a key
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updatePageText();
        updateLanguageSelector();
    }
}

// Update all text on page
function updatePageText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Handle placeholder translations separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        element.placeholder = translation;
    });
    
    // Update page title if exists
    const titleKey = document.body.getAttribute('data-page-title');
    if (titleKey) {
        document.title = t(titleKey);
    }
}

// Update language selector UI
function updateLanguageSelector() {
    const selectors = [
        'language-selector',
        'language-selector-mobile',
        'language-selector-mobile-inline'
    ];
    
    selectors.forEach(id => {
        const selector = document.getElementById(id);
        if (selector) {
            selector.value = currentLanguage;
        }
    });
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePageText();
    updateLanguageSelector();
    
    // Add language selector change listeners for all selectors
    const selectors = [
        'language-selector',
        'language-selector-mobile',
        'language-selector-mobile-inline'
    ];
    
    selectors.forEach(id => {
        const selector = document.getElementById(id);
        if (selector) {
            selector.addEventListener('change', (e) => {
                setLanguage(e.target.value);
            });
        }
    });
});
