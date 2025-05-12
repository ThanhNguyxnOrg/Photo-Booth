// Camera handling
class Camera {
    constructor() {
        this.video = document.getElementById('video');
        this.errorMessage = document.getElementById('error-message');
        this.captureBtn = document.getElementById('capture-btn');
        this.countdown = document.getElementById('countdown');
    }

    async initialize() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            this.video.srcObject = stream;
            this.errorMessage.style.display = "none";
        } catch (error) {
            console.error("Error accessing camera:", error);
            this.errorMessage.style.display = "block";
            this.errorMessage.textContent = "Unable to access camera. Please allow camera permissions.";
            this.captureBtn.disabled = true;
        }
    }

    startCountdown(callback) {
        this.captureBtn.disabled = true;
        let timeLeft = 3;
        this.countdown.style.display = "flex";
        this.countdown.textContent = timeLeft;

        const countdownInterval = setInterval(() => {
            timeLeft--;
            this.countdown.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                this.countdown.style.display = "none";
                clearInterval(countdownInterval);
                callback();
                this.captureBtn.disabled = false;
            }
        }, 1000);
    }

    stopCamera() {
        if (this.video.srcObject) {
            const tracks = this.video.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            this.video.srcObject = null;
        }
    }    capturePhoto() {
        if (!this.video.srcObject) {
            console.error("No camera stream available");
            return null;
        }

        // Check if video is ready and has valid dimensions
        if (!this.video.videoWidth || !this.video.videoHeight) {
            console.error("Video stream not ready");
            this.errorMessage.textContent = "Camera stream not ready. Please wait a moment.";
            this.errorMessage.style.display = "block";
            return null;
        }

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Set canvas dimensions to match video dimensions
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;

        try {
            // Draw the current frame from video to canvas
            context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
            
            // Convert to image data
            const imageData = canvas.toDataURL("image/png");
            
            // Validate the image data
            if (!imageData || imageData === "data:," || imageData.length < 1000) {
                throw new Error("Failed to capture valid image");
            }

            // Hide any previous error messages
            this.errorMessage.style.display = "none";
            return imageData;
        } catch (error) {
            console.error("Error capturing photo:", error);
            this.errorMessage.textContent = "Failed to capture photo. Please try again.";
            this.errorMessage.style.display = "block";
            return null;
        }
    }
}
