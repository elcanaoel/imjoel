// Security Configuration
const SECURITY_CONFIG = {
    // Disable right-click context menu
    disableRightClick: true,
    // Disable text selection
    disableTextSelection: true,
    // Disable developer tools shortcuts
    disableDevTools: true,
    // Enable source code protection
    protectSourceCode: true
};

// Security Implementation
(function() {
    'use strict';
    
    // Disable right-click
    if (SECURITY_CONFIG.disableRightClick) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    }
    
    // Disable text selection
    if (SECURITY_CONFIG.disableTextSelection) {
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
        
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    }
    
    // Disable common developer tools shortcuts
    if (SECURITY_CONFIG.disableDevTools) {
        document.addEventListener('keydown', function(e) {
            // Disable F12
            if (e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+Shift+I
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+Shift+J
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+U
            if (e.ctrlKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+S
            if (e.ctrlKey && e.keyCode === 83) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+A
            if (e.ctrlKey && e.keyCode === 65) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+C
            if (e.ctrlKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+V
            if (e.ctrlKey && e.keyCode === 86) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+X
            if (e.ctrlKey && e.keyCode === 88) {
                e.preventDefault();
                return false;
            }
        });
    }
    
    // Source code protection
    if (SECURITY_CONFIG.protectSourceCode) {
        // Clear console
        console.clear();
        
        // Override console methods
        console.log = function() {};
        console.warn = function() {};
        console.error = function() {};
        console.info = function() {};
        console.debug = function() {};
        
        // Detect developer tools
        let devtools = {
            open: false,
            orientation: null
        };
        
        const threshold = 160;
        
        setInterval(function() {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    document.body.style.display = 'none';
                    document.body.innerHTML = '<div style="text-align:center;padding:50px;color:#fff;background:#000;height:100vh;display:flex;align-items:center;justify-content:center;"><h1>Access Denied</h1><p>Developer tools detected. Please close developer tools to continue.</p></div>';
                }
            } else {
                if (devtools.open) {
                    devtools.open = false;
                    location.reload();
                }
            }
        }, 500);
    }
    
    // Disable image dragging
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        images.forEach(function(img) {
            img.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
        });
    });
    
    // Disable print screen
    document.addEventListener('keyup', function(e) {
        if (e.keyCode === 44) { // Print Screen key
            e.preventDefault();
            return false;
        }
    });
    
})();
