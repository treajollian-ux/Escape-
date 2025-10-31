// الملف الرئيسي - تهيئة اللعبة
class GalaxyAttack {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentScreen = 'mainMenu';
        this.gameActive = false;
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.setupEventListeners();
        this.showScreen('mainMenu');
    }
    
    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }
    
    setupEventListeners() {
        // إعداد مستمعي الأحداث هنا
    }
    
    showScreen(screenName) {
        // إظهار وإخفاء الشاشات
        document.querySelectorAll('.screen').forEach(screen => {
            screen.style.display = 'none';
        });
        document.getElementById(screenName).style.display = 'flex';
        this.currentScreen = screenName;
    }
}

// بدء اللعبة عند تحميل الصفحة
window.addEventListener('load', () => {
    window.game = new GalaxyAttack();
});
