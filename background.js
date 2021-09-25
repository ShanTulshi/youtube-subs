const YOUTUBE_SUBSCRIPTIONS_PAGE = "https://www.youtube.com/feed/subscriptions";

const onYoutubeHomepage = (urlstring) => {
    const url = new URL(urlstring);
    if(url.hostname.match(/^(www\.)?youtube\.com$/)) {
        if(url.pathname.replaceAll("/", "") === "") {
            return true;
        }
    }
    return false;
}

chrome.webNavigation["onBeforeNavigate"].addListener(({ tabId, url }) => {
    if(onYoutubeHomepage(url)) {
        chrome.tabs.update(tabId, {
            url: YOUTUBE_SUBSCRIPTIONS_PAGE
        });
    }
})