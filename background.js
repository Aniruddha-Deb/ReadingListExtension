document.onload = function() { 
    console.log( "Loaded" );
}

chrome.contextMenus.onClicked.addListener(function( info, tab ) {
    console.log( "Clicked" );
}) 

chrome.runtime.onInstalled.addListener( function() {

    chrome.contextMenus.create( {"title": "Add to Reading List", "id": "arl"} );
    console.log( "added a context menu" );
} );