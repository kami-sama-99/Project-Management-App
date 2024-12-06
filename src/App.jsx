import { useState } from "react";
import Sidebar from "./components/sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [] // Each project will have its own `tasks` array.
  });
  

  function handleAddTask(task) {
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.map(project => {
          if (project.id === prevState.selectedProjectId) {
            return {
              ...project,
              tasks: [...(project.tasks || []), { id: Math.random(), text: task }]
            };
          }
          return project;
        })
      };
    });
  }
  

  function handleDeleteTask(taskId) {
    setProjectState(prevState => {
      return {
        ...prevState,
        projects: prevState.projects.map(project => {
          if (project.id === prevState.selectedProjectId) {
            return {
              ...project,
              tasks: project.tasks.filter(task => task.id !== taskId)
            };
          }
          return project;
        })
      };
    });
  }
  

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      };
    });
  }  

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId : id
      }
    })
  }

  function handleAddStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId : null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
        tasks: [] // Initialize with an empty tasks array.
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      };
    });
  }  

  function handleCancelAddProject(projectData) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(
    project => project.id === projectState.selectedProjectId
  );
  
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAdd={handleAddStartProject} onCancel={handleCancelAddProject}/>
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject addProject={handleAddProject} onCancel={handleCancelAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAdd={handleAddStartProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
