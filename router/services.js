// Son servicios que no tienen que ver con la interfaz de usuario.
import TASKS from "../data/tasks.json" with {type: "json"};
// por convenio, estas constantes se escriben en MAYÚSCULAS, ya que son importadas de un archivo exterior
export async function getTasksFromBackend() {
    return TASKS;
}
