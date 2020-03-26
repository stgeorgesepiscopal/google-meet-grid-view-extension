function injectScript(file_path, tag='html', type='script', text='') {
    
    var node = document.getElementsByTagName(tag)[0];
    var tag_type = type == 'link' ? 'link' : 'script';
    var script = document.createElement(tag_type);
    if(type == 'script') {
    script.setAttribute('type', 'text/javascript');
    }
    else if ( type == 'module' ) {
    script.setAttribute('type', 'module');
    }
    else {
        script.setAttribute('rel', 'stylesheet');
        script.setAttribute('media', 'screen');
        
    }
    if (text == '') {
        script.setAttribute(tag_type == 'script' ? 'src': 'href', file_path);
    }
    else {
        script.innerHTML = text;
    }
    node.appendChild(script);
}

injectScript(chrome.runtime.getURL('js/google-meet-grid-view/grid.js'));