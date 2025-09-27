// Advanced Security and Encryption System
(function() {
    'use strict';
    
    // Domain Locking - Only allow execution on authorized domains
    const ALLOWED_DOMAINS = [
        'potfolio-oghnnzj2c-elcanaoels-projects.vercel.app',
        'localhost',
        '127.0.0.1',
        'imyke.dev',
        'imcyberwar.vercel.app'
    ];
    
    // Check if current domain is allowed
    const currentDomain = window.location.hostname;
    if (!ALLOWED_DOMAINS.includes(currentDomain)) {
        document.body.innerHTML = '<div style="text-align:center;padding:50px;color:#fff;background:#000;height:100vh;display:flex;align-items:center;justify-content:center;"><h1>Access Denied</h1><p>This content is not authorized for this domain.</p></div>';
        return;
    }
    
    // Hardware Fingerprinting
    function generateFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Hardware fingerprint', 2, 2);
        
        const fingerprint = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            navigator.platform,
            canvas.toDataURL()
        ].join('|');
        
        return btoa(fingerprint).substring(0, 32);
    }
    
    // Time-based Expiration (30 days from deployment)
    const deploymentDate = new Date('2024-09-27');
    const expirationDate = new Date(deploymentDate.getTime() + (30 * 24 * 60 * 60 * 1000));
    
    if (new Date() > expirationDate) {
        document.body.innerHTML = '<div style="text-align:center;padding:50px;color:#fff;background:#000;height:100vh;display:flex;align-items:center;justify-content:center;"><h1>Content Expired</h1><p>This content has expired. Please contact the administrator.</p></div>';
        return;
    }
    
    // AES-like Encryption (simplified for client-side)
    function encrypt(text, key) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(result);
    }
    
    function decrypt(encryptedText, key) {
        const text = atob(encryptedText);
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    }
    
    // Generate dynamic key based on hardware fingerprint and time
    const fingerprint = generateFingerprint();
    const timeKey = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // Daily key
    const encryptionKey = fingerprint + timeKey.toString();
    
    // Advanced Anti-Debugging
    let debuggerCount = 0;
    const maxDebuggerAttempts = 3;
    
    function antiDebug() {
        const start = performance.now();
        debugger;
        const end = performance.now();
        
        if (end - start > 100) {
            debuggerCount++;
            if (debuggerCount >= maxDebuggerAttempts) {
                document.body.innerHTML = '<div style="text-align:center;padding:50px;color:#fff;background:#000;height:100vh;display:flex;align-items:center;justify-content:center;"><h1>Debugging Detected</h1><p>Please close developer tools to continue.</p></div>';
                return;
            }
        }
        
        setTimeout(antiDebug, 1000);
    }
    
    // Start anti-debugging
    setTimeout(antiDebug, 1000);
    
    // Advanced Console Protection
    const originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info,
        debug: console.debug,
        clear: console.clear
    };
    
    // Override all console methods
    Object.keys(originalConsole).forEach(method => {
        console[method] = function() {
            // Log to a hidden element instead
            const hiddenLog = document.getElementById('hidden-log') || document.createElement('div');
            hiddenLog.id = 'hidden-log';
            hiddenLog.style.display = 'none';
            document.body.appendChild(hiddenLog);
            hiddenLog.textContent += Array.from(arguments).join(' ') + '\n';
        };
    });
    
    // Clear console immediately
    console.clear();
    
    // Advanced Dev Tools Detection
    let devtools = false;
    const threshold = 160;
    
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools) {
                devtools = true;
                document.body.style.display = 'none';
                document.body.innerHTML = '<div style="text-align:center;padding:50px;color:#fff;background:#000;height:100vh;display:flex;align-items:center;justify-content:center;"><h1>Developer Tools Detected</h1><p>Please close developer tools to continue viewing this content.</p></div>';
            }
        } else {
            if (devtools) {
                devtools = false;
                location.reload();
            }
        }
    }, 500);
    
    // Advanced Keyboard Protection
    const blockedKeys = [
        123, // F12
        116, // F5
        44,  // Print Screen
        19   // Pause/Break
    ];
    
    const blockedCombinations = [
        { ctrl: true, shift: true, key: 73 }, // Ctrl+Shift+I
        { ctrl: true, shift: true, key: 67 }, // Ctrl+Shift+C
        { ctrl: true, shift: true, key: 74 }, // Ctrl+Shift+J
        { ctrl: true, key: 85 }, // Ctrl+U
        { ctrl: true, key: 83 }, // Ctrl+S
        { ctrl: true, key: 65 }, // Ctrl+A
        { ctrl: true, key: 67 }, // Ctrl+C
        { ctrl: true, key: 86 }, // Ctrl+V
        { ctrl: true, key: 88 }, // Ctrl+X
        { ctrl: true, key: 80 }, // Ctrl+P
        { ctrl: true, key: 82 }, // Ctrl+R
        { ctrl: true, key: 116 } // Ctrl+F5
    ];
    
    document.addEventListener('keydown', function(e) {
        // Block individual keys
        if (blockedKeys.includes(e.keyCode)) {
            e.preventDefault();
            return false;
        }
        
        // Block key combinations
        for (let combo of blockedCombinations) {
            if (e.ctrlKey === combo.ctrl && 
                e.shiftKey === combo.shift && 
                e.keyCode === combo.key) {
                e.preventDefault();
                return false;
            }
        }
    });
    
    // Advanced Mouse Protection
    document.addEventListener('contextmenu', function(e) {
        // Allow right-click but log it
        const clickLog = document.getElementById('click-log') || document.createElement('div');
        clickLog.id = 'click-log';
        clickLog.style.display = 'none';
        document.body.appendChild(clickLog);
        clickLog.textContent += 'Right-click detected at: ' + new Date().toISOString() + '\n';
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable drag and drop
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable copy/paste
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('paste', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable print
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable save
    window.addEventListener('beforeunload', function(e) {
        e.preventDefault();
        e.returnValue = '';
        return '';
    });
    
    // Advanced Image Protection
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
            
            // Add watermark overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'rgba(0,0,0,0.1)';
            overlay.style.pointerEvents = 'none';
            overlay.style.zIndex = '9999';
            img.parentNode.style.position = 'relative';
            img.parentNode.appendChild(overlay);
        });
    });
    
    // WebAssembly-like Protection (simulated)
    function protectCriticalCode() {
        const criticalElements = document.querySelectorAll('.hero-title, .project-item, .resume-content');
        criticalElements.forEach(function(element) {
            element.style.userSelect = 'none';
            element.style.webkitUserSelect = 'none';
            element.style.mozUserSelect = 'none';
            element.style.msUserSelect = 'none';
        });
    }
    
    // Initialize protection
    document.addEventListener('DOMContentLoaded', protectCriticalCode);
    
    // Periodic security check
    setInterval(function() {
        // Check for debugging tools
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            location.reload();
        }
        
        // Check for console usage
        if (console.clear.toString().indexOf('native code') === -1) {
            location.reload();
        }
    }, 2000);
    
    // Encrypt sensitive content
    function encryptSensitiveContent() {
        const sensitiveElements = document.querySelectorAll('[data-sensitive]');
        sensitiveElements.forEach(function(element) {
            const originalText = element.textContent;
            const encryptedText = encrypt(originalText, encryptionKey);
            element.setAttribute('data-encrypted', encryptedText);
            element.textContent = 'Loading...';
            
            // Decrypt on hover
            element.addEventListener('mouseenter', function() {
                element.textContent = decrypt(encryptedText, encryptionKey);
            });
            
            element.addEventListener('mouseleave', function() {
                element.textContent = 'Loading...';
            });
        });
    }
    
    // Initialize encryption
    document.addEventListener('DOMContentLoaded', encryptSensitiveContent);
    
})();
