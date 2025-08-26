export default function AboutPage() {
  return (
    <>
      <h1>About This Website</h1>
      <p>Name: Sarvesh Kumar</p>
      <p>Student Number: 22133836</p>
      <h2>How to use this website</h2>
      <video
        width="600"
        controls
        aria-label="Video tutorial on how to use this website"
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>
        Use the tabs on the homepage to switch between different activities. You
        can copy the generated code and save it as an HTML file to open in a
        browser.
      </p>
    </>
  );
}
