// JSON data for VR videos
const vrVideos = {
  1: "<iframe width='560' height='315' src='https://www.youtube.com/embed/aCu9rZvXRLg?si=fiEIV7M0XSO9RR4s&start=25&autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  2: "<iframe width='560' height='315' src='https://www.youtube.com/embed/WXAHh3pe84k?si=9WcGHK8vxWdKzoQf&start=3&autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  3: "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  4: "<iframe width='560' height='315' src='https://www.youtube.com/embed/3JZ_D3ELwOQ?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  5: "<iframe width='560' height='315' src='https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  6: "<iframe width='560' height='315' src='https://www.youtube.com/embed/tAGnKpE4NCI?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
  7: "<iframe width='560' height='315' src='https://www.youtube.com/embed/L_jWHffIx5E?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
};

// Function to handle video selection and autoplay
function loadVideo(videoId) {
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = vrVideos[videoId]; // Embed the video with autoplay
}

// Event listener for video title clicks
document.querySelectorAll(".video-title").forEach((title) => {
  title.addEventListener("click", function () {
    const videoId = this.getAttribute("data-id");
    loadVideo(videoId); // Load and autoplay the selected video
  });
});

// Load the first video by default with autoplay
loadVideo("1");
