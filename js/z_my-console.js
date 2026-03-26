(function() {
    var buffer = [], container, isReady = false;
    var origLog = console.log;

    console.log = function(...args) {
        origLog.apply(console, args);
        var msg = args.map(a => { 
            try { return typeof a === 'object' ? JSON.stringify(a) : String(a); } 
            catch(e) { return "[Obj]"; } 
        }).join(' ');
        if (isReady) { append(msg); } else { buffer.push(msg); }
    };

    function append(msg) {
        if (!container) return;
        var div = document.createElement('div');
        div.textContent = "> " + msg;
        div.style.borderBottom = "1px solid #333";
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    window.addEventListener('DOMContentLoaded', function() {
        container = document.createElement('div');
        container.style.cssText = "position:fixed;bottom:0;left:0;width:100%;height:150px;background:rgba(0,0,0,0.8);color:#0f0;overflow-y:auto;z-index:9999;font:10px/1.2 monospace;pointer-events:none;padding:5px;";
        document.body.appendChild(container);
        isReady = true;
        buffer.forEach(append);
    });
})();