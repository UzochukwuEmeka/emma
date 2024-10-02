const ProjectVideo = ({ img }) => {
  return (
    <div>
      {img.youtube ? (
        <iframe
          src={img.vid}
          className="w-full h-64"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ) : (
        <video src={img.vid} className="w-full h-64" controls></video>
      )}
    </div>
  );
};

export default ProjectVideo;
