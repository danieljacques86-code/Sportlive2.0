function playStream(video, url, status) {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
      status.innerText = "AO VIVO";
    });

    hls.on(Hls.Events.ERROR, () => {
      status.innerText = "OFFLINE";
    });
  }
}
