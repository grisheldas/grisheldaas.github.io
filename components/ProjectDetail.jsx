import ProjectImageCarousel from "./ProjectImageCarousel";
import ProjectDetailText from "./ProjectDetailText";
import VideoLoader from "./VideoLoader";
import ProjectTools from "./ProjectTools";

function ProjectDetail() {
  return (
    <div className="mx-6 pt-20">
      <ProjectImageCarousel />
      <ProjectDetailText />
      <VideoLoader />
      <ProjectTools />
    </div>
  );
}

export default ProjectDetail;
