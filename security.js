// Security Configuration
const SECURITY_CONFIG = {
    // Disable right-click context menu
    disableRightClick: false,
    // Disable text selection
    disableTextSelection: true,
    // Disable developer tools shortcuts
    disableDevTools: false, // Disabled for iOS compatibility
    // Enable source code protection
    protectSourceCode: false // Disabled for iOS compatibility
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
    
    // Advanced code protection
    (function() {
        // Obfuscate function names
        const _0x4f8a = ['log', 'warn', 'error', 'info', 'debug'];
        const _0x2b1c = ['clear', 'table', 'trace', 'group', 'groupEnd'];
        
        // Disable console completely
        _0x4f8a.forEach(method => {
            console[method] = function() { return false; };
        });
        
        _0x2b1c.forEach(method => {
            console[method] = function() { return false; };
        });
        
        // Disable view source
        document.addEventListener('keydown', function(e) {
            // Disable Ctrl+Shift+U (view source)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 85) {
                e.preventDefault();
                return false;
            }
            
            // Disable Ctrl+Shift+C (inspect element)
            if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
                e.preventDefault();
                return false;
            }
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
        
        // Disable cut
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable save as
        window.addEventListener('beforeunload', function(e) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        });
        
        // Disable print
        window.addEventListener('beforeprint', function(e) {
            e.preventDefault();
            return false;
        });
        
        // Disable print dialog
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.keyCode === 80) { // Ctrl+P
                e.preventDefault();
                return false;
            }
        });
        
        // Anti-debugging techniques
        let _0x1a2b = 0;
        setInterval(function() {
            if (new Date() - _0x1a2b > 100) {
                debugger;
            }
            _0x1a2b = new Date();
        }, 100);
        
        // Disable F5 refresh
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 116) { // F5
                e.preventDefault();
                return false;
            }
        });
        
        // Disable Ctrl+R
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.keyCode === 82) {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable Ctrl+F5
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.keyCode === 116) {
                e.preventDefault();
                return false;
            }
        });
        
        // Disable Ctrl+Shift+R
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.keyCode === 82) {
                e.preventDefault();
                return false;
            }
        });
        
    })();
    
})();

