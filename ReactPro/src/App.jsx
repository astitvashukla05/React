import NewProject from "./Components/NewProject/NewProject";
import SideBar from "./Components/SideBar/SideBar";
import NoProjectSelected from "./Components/NoProjectSelected/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject/SelectedProject"; // ✅ Fixed import
import { useState } from "react";

function App() {
  const [selectProjectId, setSelectedProjectId] = useState(undefined);
  const [addProject, setAddNewProject] = useState([]);

  function selectProject(id) {
    setSelectedProjectId(id);
  }

  function intitializeProject() {
    setSelectedProjectId(null);
  }

  function handleCancel() {
    setSelectedProjectId(undefined);
  }

  function saveProject(title, desc, date) {
    setAddNewProject((prev) => [
      ...prev,
      {
        title,
        desc,
        date,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setSelectedProjectId(undefined);
  }

  function handleDel(id) {
    setAddNewProject((prev) => prev.filter((project) => project.id !== id));
    setSelectedProjectId(undefined);
  }

  let content;

  if (selectProjectId === undefined) {
    content = <NoProjectSelected onClick={intitializeProject} />;
  } else if (selectProjectId === null) {
    content = <NewProject onAdd={saveProject} onCancel={handleCancel} />;
  } else {
    const projectSelected = addProject.find(
      (project) => project.id === selectProjectId
    );
    content = (
      <SelectedProject
        project={projectSelected}
        onDel={() => handleDel(projectSelected.id)}
      />
    );
  }

  return (
    <main
      className="
        min-h-screen bg-[url('https://thumbs.dreamstime.com/b/bright-airy-workspace-showcases-laptop-tidy-white-desk-accompanied-minimal-decor-warm-natural-light-ideal-372636986.jpg')]
        bg-cover bg-center bg-fixed
        backdrop-blur-md px-4 py-8 flex flex-col md:flex-row gap-8 text-white
      "
    >
      <SideBar
        onClick={intitializeProject}
        currProject={addProject}
        onSelect={selectProject}
      />

      <div className="bg-white/10 text-white backdrop-blur-lg rounded-2xl p-6 shadow-xl transition-all w-full max-w-4xl">
        {content}
      </div>
    </main>
  );
}

export default App;
