<script>
export default {
  // Autres parties de votre composant
    name: 'SignFile',
    methods: {
        onMouseDown(event) {
            this.isDrawing = true;
            const rect = event.target.getBoundingClientRect();
            this.lastX = event.clientX - rect.left;
            this.lastY = event.clientY - rect.top;
        },
        onMouseMove(event) {
            if (!this.isDrawing) return;
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            this.draw(this.lastX, this.lastY, x, y);
            this.lastX = x;
            this.lastY = y;
        },
        onMouseUp() {
            this.isDrawing = false;
        },
        onTouchStart(event) {
            this.isDrawing = true;
            const rect = event.target.getBoundingClientRect();
            const touch = event.touches[0];
            this.lastX = touch.clientX - rect.left;
            this.lastY = touch.clientY - rect.top;
        },
        onTouchMove(event) {
            if (!this.isDrawing) return;
            const rect = event.target.getBoundingClientRect();
            const touch = event.touches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            this.draw(this.lastX, this.lastY, x, y);
            this.lastX = x;
            this.lastY = y;
        },
        onTouchEnd() {
            this.isDrawing = false;
        },
        draw(x1, y1, x2, y2) {
            const ctx = this.$refs.signatureCanvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        },
        clearCanvas() {
            const canvas = this.$refs.signatureCanvas;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}
</script>